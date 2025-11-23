import React, { useState } from 'react';
import { motion, type PanInfo } from 'framer-motion';
import { Clock, Users } from 'lucide-react';
import type { Recipe } from '../types';

interface SwipeCardProps {
    recipe: Recipe;
    onSwipe: (direction: 'left' | 'right') => void;
    style?: React.CSSProperties;
}

export const SwipeCard: React.FC<SwipeCardProps> = ({ recipe, onSwipe, style }) => {
    const [imgError, setImgError] = useState(false);

    const handleDragEnd = (_: any, info: PanInfo) => {
        const threshold = 100;
        if (info.offset.x > threshold) {
            onSwipe('right');
        } else if (info.offset.x < -threshold) {
            onSwipe('left');
        }
    };

    const displayImage = imgError
        ? 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80'
        : recipe.image;

    return (
        <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            whileDrag={{ scale: 1.05, rotate: 0 }}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="absolute inset-0 w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden cursor-grab active:cursor-grabbing"
            style={style}
        >
            <div className="relative h-3/4">
                <img
                    src={displayImage}
                    alt={recipe.title}
                    className="w-full h-full object-cover pointer-events-none"
                    onError={() => setImgError(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {recipe.difficulty}
                        </span>
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">
                            <Clock size={12} />
                            <span>{recipe.time}</span>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold leading-tight drop-shadow-md">
                        {recipe.title}
                    </h2>
                </div>
            </div>

            <div className="h-1/4 p-6 flex flex-col justify-center bg-white">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-500 text-sm font-medium flex items-center gap-2">
                        <Users size={16} />
                        {recipe.servings} Pessoas
                    </p>
                    <span className="text-primary font-bold text-sm">{recipe.group}</span>
                </div>
                <p className="text-gray-400 text-xs line-clamp-2">
                    {recipe.ingredients.flatMap(s => s.items).slice(0, 3).join(', ')}...
                </p>
            </div>
        </motion.div>
    );
};
