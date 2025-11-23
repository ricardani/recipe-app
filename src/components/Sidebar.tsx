import React, { useState } from 'react';
import { Menu, X, ChefHat, Flame, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
    currentView: 'home' | 'discover' | 'versus';
    onViewChange: (view: 'home' | 'discover' | 'versus') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavigation = (view: 'home' | 'discover' | 'versus') => {
        onViewChange(view);
        setIsOpen(false);
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={toggleMenu}
                className="fixed top-5 left-4 z-50 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg active:scale-95 transition-all"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 bottom-0 w-64 bg-[#1a1a1a] border-r border-white/10 z-50 p-6 shadow-2xl"
                    >
                        <div className="flex flex-col h-full">
                            <div className="mb-8 mt-16">
                                <h2 className="text-2xl font-bold text-white mb-1">Menu</h2>
                                <p className="text-white/40 text-sm">Navegação</p>
                            </div>

                            <div className="space-y-2 flex-1">
                                <button
                                    onClick={() => handleNavigation('home')}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${currentView === 'home'
                                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <ChefHat size={20} />
                                    <span className="font-medium">Receitas</span>
                                </button>

                                <button
                                    onClick={() => handleNavigation('discover')}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${currentView === 'discover'
                                        ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <Flame size={20} />
                                    <span className="font-medium">Descobrir</span>
                                </button>

                                <button
                                    onClick={() => handleNavigation('versus')}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${currentView === 'versus'
                                        ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20'
                                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <Trophy size={20} />
                                    <span className="font-medium">Versus</span>
                                </button>
                            </div>

                            <div className="pt-6 border-t border-white/10">
                                <p className="text-white/20 text-xs text-center">
                                    Recipe App v1.0
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
