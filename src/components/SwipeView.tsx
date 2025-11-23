import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { X, Check, RotateCcw, Heart, ChevronRight } from 'lucide-react';
import { SwipeCard } from './SwipeCard';
import { RecipeCard } from './RecipeCard';
import { recipes } from '../data/mockData';
import type { Recipe } from '../types';

// Helper component for the list item to handle its own image state
const LikedRecipeRow: React.FC<{ recipe: Recipe; onClick: () => void }> = ({ recipe, onClick }) => {
    const [imgError, setImgError] = useState(false);
    const displayImage = imgError
        ? 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80'
        : recipe.image;

    return (
        <button
            onClick={onClick}
            className="w-full bg-white rounded-2xl p-3 flex gap-4 items-center active:scale-95 transition-transform text-left"
        >
            <img
                src={displayImage}
                alt={recipe.title}
                className="w-16 h-16 rounded-xl object-cover"
                onError={() => setImgError(true)}
            />
            <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-sm">{recipe.title}</h3>
                <p className="text-xs text-gray-500">{recipe.time} • {recipe.difficulty}</p>
            </div>
            <ChevronRight className="text-gray-300" size={20} />
        </button>
    );
};

export const SwipeView: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likedRecipes, setLikedRecipes] = useState<Recipe[]>([]);
    const [dislikedRecipes, setDislikedRecipes] = useState<Recipe[]>([]);
    const [viewingRecipe, setViewingRecipe] = useState<Recipe | null>(null);

    const groups = useMemo(() => {
        return Array.from(new Set(recipes.map(r => r.group)));
    }, []);

    const categoryRecipes = useMemo(() => {
        if (!selectedCategory) return [];
        return recipes.filter(r => r.group === selectedCategory);
    }, [selectedCategory]);

    const currentRecipe = categoryRecipes[currentIndex];
    const isFinished = currentIndex >= categoryRecipes.length;

    const handleSwipe = (direction: 'left' | 'right') => {
        if (!currentRecipe) return;

        if (direction === 'right') {
            setLikedRecipes([...likedRecipes, currentRecipe]);
        } else {
            setDislikedRecipes([...dislikedRecipes, currentRecipe]);
        }

        setTimeout(() => {
            setCurrentIndex(prev => prev + 1);
        }, 200);
    };

    const resetFlow = () => {
        setSelectedCategory(null);
        setCurrentIndex(0);
        setLikedRecipes([]);
        setDislikedRecipes([]);
        setViewingRecipe(null);
    };

    // Modal for viewing details
    if (viewingRecipe) {
        return (
            <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 flex flex-col">
                <button
                    onClick={() => setViewingRecipe(null)}
                    className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white"
                >
                    <X size={20} />
                </button>
                <div className="flex-1 mt-8">
                    <RecipeCard recipe={viewingRecipe} initialFlipped={true} hideFlipButton={true} />
                </div>
            </div>
        );
    }

    // 1. Category Selection View
    if (!selectedCategory) {
        return (
            <div className="h-full pt-24 px-6 pb-6 flex flex-col">
                <h2 className="text-3xl font-bold text-white mb-2">Descobrir</h2>
                <p className="text-white/60 mb-8">Escolha uma categoria para começar</p>

                <div className="grid grid-cols-2 gap-4 overflow-y-auto pb-20">
                    {groups.map(group => (
                        <button
                            key={group}
                            onClick={() => setSelectedCategory(group)}
                            className="aspect-square bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/20 transition-all active:scale-95"
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-rose-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                {group.charAt(0)}
                            </div>
                            <span className="text-white font-bold text-sm">{group}</span>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    // 3. Results View
    if (isFinished) {
        return (
            <div className="h-full pt-24 px-6 pb-6 flex flex-col">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-500">
                        <Heart size={32} fill="currentColor" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1">Receitas que gostaste</h2>
                    <p className="text-white/60 text-sm">Guardámos {likedRecipes.length} receitas para ti</p>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 pb-20 no-scrollbar">
                    {likedRecipes.map(recipe => (
                        <LikedRecipeRow
                            key={recipe.id}
                            recipe={recipe}
                            onClick={() => setViewingRecipe(recipe)}
                        />
                    ))}
                    {likedRecipes.length === 0 && (
                        <div className="text-center text-white/40 py-10">
                            <p>Não gostaste de nenhuma receita desta vez.</p>
                        </div>
                    )}
                </div>

                <button
                    onClick={resetFlow}
                    className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg mt-4 flex items-center justify-center gap-2"
                >
                    <RotateCcw size={20} />
                    Começar de novo
                </button>
            </div>
        );
    }

    // 2. Swipe View
    return (
        <div className="h-full pt-20 pb-8 px-4 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-4 left-0 right-0 text-center z-10">
                <span className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                    {selectedCategory}
                </span>
            </div>

            <div className="relative w-full max-w-sm aspect-[3/4] mb-8">
                <AnimatePresence mode='wait'>
                    <SwipeCard
                        key={currentRecipe.id}
                        recipe={currentRecipe}
                        onSwipe={handleSwipe}
                    />
                </AnimatePresence>
            </div>

            <div className="flex items-center gap-6">
                <button
                    onClick={() => handleSwipe('left')}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-rose-500 shadow-xl hover:scale-110 active:scale-95 transition-all"
                >
                    <X size={32} />
                </button>
                <button
                    onClick={() => handleSwipe('right')}
                    className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all"
                >
                    <Check size={32} />
                </button>
            </div>
        </div>
    );
};
