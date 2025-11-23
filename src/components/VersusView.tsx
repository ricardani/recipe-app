import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Trophy, RotateCcw, X, ChevronRight, Clock } from 'lucide-react';
import { RecipeCard } from './RecipeCard';
import { recipes } from '../data/mockData';
import type { Recipe } from '../types';

type GameState = 'category-select' | 'playing' | 'podium';
type Round = 'quarter' | 'semi' | 'final' | 'third-place';

interface Match {
    p1: Recipe;
    p2: Recipe;
}
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80';

const VersusCard: React.FC<{ recipe: Recipe; onClick: () => void; delay?: number }> = ({ recipe, onClick, delay = 0 }) => {
    const [imgError, setImgError] = useState(false);

    console.log('Rendering VersusCard for:', recipe?.title);

    if (!recipe) return <div className="text-white">Recipe error</div>;

    return (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            onClick={onClick}
            className="relative w-full flex-1 bg-white rounded-3xl overflow-hidden shadow-xl group active:scale-[0.98] transition-all min-h-[200px]"
        >
            <img
                src={imgError ? FALLBACK_IMAGE : recipe.image}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={recipe.title}
                onError={() => setImgError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                        {recipe.difficulty}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-white flex items-center gap-1">
                        <Clock size={10} /> {recipe.time}
                    </span>
                </div>
                <h3 className="text-2xl font-bold text-white leading-tight mb-1">{recipe.title}</h3>
                <p className="text-white/60 text-xs line-clamp-1">{recipe.ingredients.flatMap(s => s.items).slice(0, 3).join(', ')}...</p>
            </div>

            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <ChevronRight size={24} />
            </div>
        </motion.button>
    );
};

const PodiumCard: React.FC<{
    recipe: Recipe | null;
    label: string;
    icon: string;
    gradient: string;
    textColor: string;
    delay?: number;
    onClick: () => void;
}> = ({ recipe, label, icon, gradient, textColor, delay = 0, onClick }) => {
    const [imgError, setImgError] = useState(false);

    if (!recipe) return null;

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay }}
            className={`bg-gradient-to-br ${gradient} rounded-3xl p-1 shadow-xl cursor-pointer active:scale-95 transition-transform`}
            onClick={onClick}
        >
            <div className="bg-white/90 backdrop-blur rounded-[20px] p-4 flex items-center gap-4">
                <div className="text-4xl">{icon}</div>
                <div className="flex-1">
                    <p className={`text-xs font-bold ${textColor} uppercase tracking-wider`}>{label}</p>
                    <h3 className="font-bold text-gray-900 text-lg">{recipe.title}</h3>
                </div>
                <img
                    src={imgError ? FALLBACK_IMAGE : recipe.image}
                    className="w-16 h-16 rounded-xl object-cover"
                    alt={recipe.title}
                    onError={() => setImgError(true)}
                />
            </div>
        </motion.div>
    );
};

export const VersusView: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>('category-select');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Tournament State
    const [round, setRound] = useState<Round>('quarter');
    const [matches, setMatches] = useState<Match[]>([]);
    const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
    const [winners, setWinners] = useState<Recipe[]>([]);
    const [losers, setLosers] = useState<Recipe[]>([]);

    // Podium State
    const [gold, setGold] = useState<Recipe | null>(null);
    const [silver, setSilver] = useState<Recipe | null>(null);
    const [bronze, setBronze] = useState<Recipe | null>(null);

    // Viewing Details State
    const [viewingRecipe, setViewingRecipe] = useState<Recipe | null>(null);

    const groups = useMemo(() => {
        return Array.from(new Set(recipes.map(r => r.group)));
    }, []);

    const startTournament = (category: string) => {
        const categoryRecipes = recipes.filter(r => r.group === category);
        const shuffled = [...categoryRecipes].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 8);

        if (selected.length < 8) {
            alert(`Not enough recipes in ${category} for a full tournament! Need 8.`);
            return;
        }

        const newMatches: Match[] = [];
        for (let i = 0; i < 8; i += 2) {
            newMatches.push({ p1: selected[i], p2: selected[i + 1] });
        }

        setSelectedCategory(category);
        setMatches(newMatches);
        setRound('quarter');
        setCurrentMatchIndex(0);
        setWinners([]);
        setLosers([]);
        setGameState('playing');
    };

    const handleVoteRefined = (winner: Recipe, loser: Recipe) => {
        const currentWinners = [...winners, winner];

        if (round === 'semi') {
            setLosers(prev => [...prev, loser]);
        }

        if (currentMatchIndex < matches.length - 1) {
            setWinners(currentWinners);
            setCurrentMatchIndex(prev => prev + 1);
        } else {
            if (round === 'quarter') {
                const nextMatches: Match[] = [];
                for (let i = 0; i < 4; i += 2) {
                    nextMatches.push({ p1: currentWinners[i], p2: currentWinners[i + 1] });
                }
                setMatches(nextMatches);
                setRound('semi');
                setCurrentMatchIndex(0);
                setWinners([]);
            } else if (round === 'semi') {
                setMatches([{ p1: currentWinners[0], p2: currentWinners[1] }]);
                setRound('final');
                setCurrentMatchIndex(0);
                setWinners([]);
            } else if (round === 'final') {
                setGold(winner);
                setSilver(loser);
                setMatches([{ p1: losers[0], p2: losers[1] }]);
                setRound('third-place');
                setCurrentMatchIndex(0);
                setWinners([]);
            } else if (round === 'third-place') {
                setBronze(winner);
                setGameState('podium');
            }
        }
    };

    const resetGame = () => {
        setGameState('category-select');
        setSelectedCategory(null);
        setGold(null);
        setSilver(null);
        setBronze(null);
        setWinners([]);
        setLosers([]);
    };

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

    if (gameState === 'category-select') {
        return (
            <div className="h-full pt-24 px-6 pb-6 flex flex-col">
                <h2 className="text-3xl font-bold text-white mb-2">Versus</h2>
                <p className="text-white/60 mb-8">Escolha uma categoria para o torneio</p>

                <div className="grid grid-cols-2 gap-4 overflow-y-auto pb-20">
                    {groups.map(group => (
                        <button
                            key={group}
                            onClick={() => startTournament(group)}
                            className="aspect-square bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/20 transition-all active:scale-95"
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                <Trophy size={24} />
                            </div>
                            <span className="text-white font-bold text-sm">{group}</span>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    if (gameState === 'podium') {
        return (
            <div className="h-full pt-24 px-6 pb-6 flex flex-col items-center">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Vencedores</h2>

                <div className="flex flex-col gap-6 w-full max-w-md mb-8">
                    <PodiumCard
                        recipe={gold}
                        label="1º Lugar"
                        icon="🥇"
                        gradient="from-yellow-100 to-yellow-300"
                        textColor="text-yellow-700"
                        onClick={() => gold && setViewingRecipe(gold)}
                    />

                    <PodiumCard
                        recipe={silver}
                        label="2º Lugar"
                        icon="🥈"
                        gradient="from-gray-200 to-gray-400"
                        textColor="text-gray-600"
                        delay={0.2}
                        onClick={() => silver && setViewingRecipe(silver)}
                    />

                    <PodiumCard
                        recipe={bronze}
                        label="3º Lugar"
                        icon="🥉"
                        gradient="from-orange-200 to-orange-400"
                        textColor="text-orange-700"
                        delay={0.4}
                        onClick={() => bronze && setViewingRecipe(bronze)}
                    />
                </div>

                <p className="text-white/40 text-xs mb-4">Toque num vencedor para ver a receita</p>

                <button
                    onClick={resetGame}
                    className="w-full bg-white/20 text-white font-bold py-4 rounded-2xl shadow-lg mt-auto flex items-center justify-center gap-2 hover:bg-white/30 transition-colors"
                >
                    <RotateCcw size={20} />
                    Novo Torneio
                </button>
            </div>
        );
    }

    const currentMatch = matches[currentMatchIndex];
    if (!currentMatch) return null;

    const roundTitles = {
        'quarter': 'Quartos de Final',
        'semi': 'Meias Finais',
        'final': 'Grande Final',
        'third-place': 'Disputa do 3º Lugar'
    };

    return (
        <div className="h-full pt-20 pb-6 px-4 flex flex-col">
            <div className="text-center mb-4">
                <div className="flex flex-col items-center gap-2">
                    <span className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                        {selectedCategory}
                    </span>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-wider">
                        {roundTitles[round]} • Jogo {currentMatchIndex + 1}
                    </span>
                </div>
                <h2 className="text-2xl font-bold text-white mt-2">Qual preferes?</h2>
            </div>

            <div className="flex-1 flex flex-col gap-4 justify-center pb-4">
                <VersusCard
                    recipe={currentMatch.p1}
                    onClick={() => handleVoteRefined(currentMatch.p1, currentMatch.p2)}
                />

                <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/50 font-bold text-sm uppercase tracking-widest">VS</span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <VersusCard
                    recipe={currentMatch.p2}
                    onClick={() => handleVoteRefined(currentMatch.p2, currentMatch.p1)}
                    delay={0.1}
                />
            </div>
        </div>
    );
};
