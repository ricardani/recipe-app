import React from 'react';
import { Search, ChefHat } from 'lucide-react';

interface FilterBarProps {
    search: string;
    onSearchChange: (val: string) => void;
    group: string;
    onGroupChange: (val: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
    search,
    onSearchChange,
    group,
    onGroupChange,
}) => {
    const groups = ['Todos', 'Carne', 'Peixe', 'Vegetariano', 'Sobremesa', 'Marmitas', 'Acompanhamentos', 'Outros'];

    return (
        <div className="fixed top-0 left-0 right-0 z-40 pt-4 pb-6 px-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none">
            <div className="pointer-events-auto space-y-4 max-w-md mx-auto">
                {/* Header & Search */}
                <div className="flex gap-3">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Procurar receita..."
                            value={search}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full bg-white/10 backdrop-blur-xl text-white placeholder-white/60 pl-10 pr-4 py-2.5 rounded-2xl border border-white/10 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all shadow-lg"
                        />
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                        <ChefHat size={20} />
                    </div>
                </div>

                {/* Horizontal Scroll Filters */}
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar mask-linear-fade">
                    {groups.map((g) => (
                        <button
                            key={g}
                            onClick={() => onGroupChange(g === 'Todos' ? '' : g)}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 border ${(group === g || (g === 'Todos' && !group))
                                ? 'bg-white text-black border-white shadow-lg scale-105'
                                : 'bg-black/30 text-white/90 border-white/10 backdrop-blur-md hover:bg-black/40'
                                }`}
                        >
                            {g}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
