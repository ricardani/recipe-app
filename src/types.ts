export interface IngredientSection {
  /** 
   * The title of the subsection (e.g., "Para o molho", "Para panar"). 
   * It is null if the recipe has a simple flat list of ingredients.
   */
  section: string | null;
  /** An array of individual ingredient strings */
  items: string[];
}

export interface Recipe {
  id: string;
  title: string;
  image: string;
  /** e.g., "15M" */
  time: string;
  /** e.g., "4" or "2" */
  servings: string;
  /** e.g., "FÁCIL" */
  difficulty: string;
  /** Group for filtering (formerly mainIngredient) */
  group: 'Carne' | 'Peixe' | 'Vegetariano' | 'Sobremesa' | 'Marmitas' | 'Acompanhamentos' | 'Outros';
  ingredients: IngredientSection[];
  /** Step-by-step instructions */
  preparation: string[];
  /** The "Dica do Pai" section */
  tip: string;
}
