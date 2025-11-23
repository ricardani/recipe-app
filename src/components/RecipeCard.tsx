import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, X } from 'lucide-react';
import type { Recipe } from '../types';

interface RecipeCardProps {
    recipe: Recipe;
    initialFlipped?: boolean;
    hideFlipButton?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, initialFlipped = false, hideFlipButton = false }) => {
    const [isFlipped, setIsFlipped] = useState(initialFlipped);
    const [imgError, setImgError] = useState(false);

    const handleFlip = () => {
        if (!hideFlipButton) {
            setIsFlipped(!isFlipped);
        }
    };

    const displayImage = imgError
        ? 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80' // Generic food fallback
        : recipe.image;

    return (
        <div className="w-full h-full perspective-1000">
            <motion.div
                className="relative w-full h-full transition-all duration-300 preserve-3d rounded-3xl shadow-2xl"
                initial={{ rotateY: initialFlipped ? 180 : 0 }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 400, damping: 30 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* FRONT FACE */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden cursor-pointer text-left rounded-3xl overflow-hidden"
                    onClick={handleFlip}
                >
                    <img
                        src={displayImage}
                        alt={recipe.title}
                        className="w-full h-full object-cover"
                        onError={() => setImgError(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white pb-10">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                {recipe.difficulty}
                            </span>
                            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                <Clock size={12} />
                                <span>{recipe.time}</span>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-2 leading-tight font-sans tracking-tight drop-shadow-md">
                            {recipe.title}
                        </h2>
                        <p className="text-white/90 text-sm font-medium flex items-center gap-2">
                            <Users size={14} />
                            {recipe.servings} Pessoas • {recipe.group}
                        </p>
                        {!hideFlipButton && (
                            <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 animate-pulse">
                                Toque para ver receita
                            </div>
                        )}
                    </div>
                </div>

                {/* BACK FACE */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden bg-white rotate-y-180 text-left rounded-3xl overflow-hidden flex flex-col"
                >
                    {/* Header Image Area - Fixed Height */}
                    <div className="relative h-40 shrink-0">
                        <img
                            src={displayImage}
                            alt={recipe.title}
                            className="w-full h-full object-cover opacity-50"
                            onError={() => setImgError(true)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

                        {/* Close Button - Positioned safely */}
                        {!hideFlipButton && (
                            <button
                                onClick={(e) => { e.stopPropagation(); handleFlip(); }}
                                className="absolute top-4 right-4 bg-black/10 hover:bg-black/20 text-black/60 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md z-20 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        )}

                        <div className="absolute bottom-2 left-6 right-6">
                            <h2 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2">{recipe.title}</h2>
                        </div>
                    </div>

                    {/* Scrollable Content Area */}
                    <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
                        {/* Stats Row */}
                        <div className="flex justify-between bg-gray-50 p-3 rounded-2xl border border-gray-100 mt-2">
                            <div className="text-center flex-1">
                                <Clock className="w-4 h-4 mx-auto mb-1 text-primary" />
                                <p className="text-[10px] font-bold text-gray-400 uppercase">Tempo</p>
                                <p className="font-bold text-sm text-gray-800">{recipe.time}</p>
                            </div>
                            <div className="w-px bg-gray-200" />
                            <div className="text-center flex-1">
                                <ChefHat className="w-4 h-4 mx-auto mb-1 text-primary" />
                                <p className="text-[10px] font-bold text-gray-400 uppercase">Dificuldade</p>
                                <p className="font-bold text-sm text-gray-800">{recipe.difficulty}</p>
                            </div>
                            <div className="w-px bg-gray-200" />
                            <div className="text-center flex-1">
                                <Users className="w-4 h-4 mx-auto mb-1 text-primary" />
                                <p className="text-[10px] font-bold text-gray-400 uppercase">Doses</p>
                                <p className="font-bold text-sm text-gray-800">{recipe.servings}</p>
                            </div>
                        </div>

                        {/* Ingredients */}
                        <div>
                            <h3 className="text-base font-bold mb-3 flex items-center gap-2 text-gray-900">
                                <span className="w-1 h-5 bg-accent rounded-full" />
                                Ingredientes
                            </h3>
                            <div className="space-y-4">
                                {recipe.ingredients.map((section, idx) => (
                                    <div key={idx}>
                                        {section.section && (
                                            <h4 className="font-bold text-[10px] text-gray-500 mb-2 uppercase tracking-wider border-b border-gray-100 pb-1">
                                                {section.section}
                                            </h4>
                                        )}
                                        <ul className="space-y-2">
                                            {section.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700 group">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0 group-hover:bg-primary transition-colors" />
                                                    <span className="leading-relaxed text-xs">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Preparation */}
                        <div>
                            <h3 className="text-base font-bold mb-3 flex items-center gap-2 text-gray-900">
                                <span className="w-1 h-5 bg-primary rounded-full" />
                                Preparação
                            </h3>
                            <div className="space-y-4">
                                {recipe.preparation.map((step, idx) => (
                                    <div key={idx} className="flex gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs font-mono">
                                            {idx + 1}
                                        </span>
                                        <p className="text-xs leading-relaxed text-gray-700 pt-1">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tip */}
                        <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-4 rounded-2xl border border-accent/20 relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 text-accent/20">
                                <ChefHat size={60} />
                            </div>
                            <h3 className="text-amber-600 font-bold mb-1 text-xs uppercase tracking-wider flex items-center gap-2">
                                💡 Dica
                            </h3>
                            <p className="text-xs italic text-gray-800 relative z-10">{recipe.tip}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
