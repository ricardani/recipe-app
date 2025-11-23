import { useState, useMemo } from 'react';
import { RecipeCard } from './components/RecipeCard';
import { FilterBar } from './components/FilterBar';
import { Sidebar } from './components/Sidebar';
import { SwipeView } from './components/SwipeView';
import { VersusView } from './components/VersusView';
import { recipes } from './data/mockData';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'discover' | 'versus'>('home');
  const [search, setSearch] = useState('');
  const [group, setGroup] = useState('Todos');

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(search.toLowerCase());
      const matchesGroup = group === 'Todos' || recipe.group === group;
      return matchesSearch && matchesGroup;
    });
  }, [search, group]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-rose-500/30">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 pointer-events-none" />

      <Sidebar
        currentView={currentView}
        onViewChange={setCurrentView}
      />

      {currentView === 'home' ? (
        <>
          <FilterBar
            search={search}
            onSearchChange={setSearch}
            group={group}
            onGroupChange={setGroup}
          />

          <div className="snap-container h-full pt-32 pb-6 px-4 space-y-6 scroll-pt-32">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <div key={recipe.id} className="snap-item w-full flex flex-col" style={{ height: 'calc(100vh - 160px)' }}>
                  <RecipeCard
                    recipe={recipe}
                  />
                </div>
              ))
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-white/50 p-8 text-center">
                <p className="text-lg font-medium mb-2">Nenhuma receita encontrada</p>
                <p className="text-sm">Tente ajustar os filtros de pesquisa</p>
              </div>
            )}
          </div>
        </>
      ) : currentView === 'discover' ? (
        <SwipeView />
      ) : (
        <VersusView />
      )}
    </div>
  );
}

export default App;
