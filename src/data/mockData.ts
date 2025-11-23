import type { Recipe } from '../types';

export const recipes: Recipe[] = [
    {
        id: '1',
        title: 'Bife à Portuguesa',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
        time: '30M',
        servings: '2',
        difficulty: 'MÉDIO',
        group: 'Carne',
        ingredients: [
            {
                section: 'Para o Bife',
                items: [
                    '2 bifes da vazia',
                    '4 dentes de alho',
                    '2 folhas de louro',
                    'Sal e pimenta q.b.',
                    'Azeite e manteiga'
                ]
            },
            {
                section: 'Para o Molho',
                items: [
                    '100ml vinho branco',
                    '1 c.sopa mostarda',
                    'Sumo de meio limão'
                ]
            }
        ],
        preparation: [
            'Temperar os bifes com sal, pimenta e alho laminado.',
            'Aquecer a frigideira com azeite e manteiga.',
            'Fritar os bifes até ao ponto desejado.',
            'Retirar os bifes e reservar.',
            'Na mesma frigideira, juntar o vinho branco e deixar reduzir.',
            'Juntar a mostarda e o sumo de limão.',
            'Voltar a colocar os bifes na frigideira para envolver no molho.'
        ],
        tip: 'Sirva com batatas fritas às rodelas e um ovo estrelado a cavalo!'
    },
    {
        id: '2',
        title: 'Bacalhau com Natas',
        image: 'https://images.unsplash.com/photo-1576777647209-e8733d7b851d?auto=format&fit=crop&w=800&q=80',
        time: '45M',
        servings: '4',
        difficulty: 'FÁCIL',
        group: 'Peixe',
        ingredients: [
            {
                section: null,
                items: [
                    '500g bacalhau desfiado',
                    '500g batata palha',
                    '2 cebolas',
                    '2 dentes de alho',
                    '500ml molho bechamel',
                    '200ml natas',
                    'Queijo ralado q.b.'
                ]
            }
        ],
        preparation: [
            'Refogar a cebola e o alho em azeite.',
            'Juntar o bacalhau e deixar cozinhar.',
            'Envolver as batatas palha.',
            'Juntar o bechamel e as natas.',
            'Colocar num tabuleiro, cobrir com queijo e levar ao forno a gratinar.'
        ],
        tip: 'Adicione um pouco de noz-moscada ao molho bechamel para um toque especial.'
    },
    {
        id: '3',
        title: 'Mousse de Chocolate',
        image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80',
        time: '15M',
        servings: '6',
        difficulty: 'FÁCIL',
        group: 'Sobremesa',
        ingredients: [
            {
                section: null,
                items: [
                    '200g chocolate culinária',
                    '6 ovos',
                    '6 c.sopa açúcar',
                    'Uma pitada de sal'
                ]
            }
        ],
        preparation: [
            'Derreter o chocolate em banho-maria.',
            'Bater as claras em castelo com o sal.',
            'Bater as gemas com o açúcar até obter um creme esbranquiçado.',
            'Envolver o chocolate nas gemas.',
            'Envolver delicadamente as claras no preparado.',
            'Levar ao frigorífico pelo menos 4 horas.'
        ],
        tip: 'Use chocolate com 70% cacau para um sabor mais intenso.'
    },
    {
        id: '4',
        title: 'Caril de Grão',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356f36?auto=format&fit=crop&w=800&q=80',
        time: '25M',
        servings: '4',
        difficulty: 'FÁCIL',
        group: 'Vegetariano',
        ingredients: [
            {
                section: null,
                items: [
                    '400g grão cozido',
                    '400ml leite de coco',
                    '1 cebola',
                    '200g espinafres',
                    '1 c.sopa pó de caril',
                    'Arroz basmati para acompanhar'
                ]
            }
        ],
        preparation: [
            'Refogar a cebola picada em azeite.',
            'Juntar o pó de caril e deixar libertar o aroma.',
            'Adicionar o grão e o leite de coco.',
            'Deixar cozinhar por 10 minutos.',
            'Juntar os espinafres e deixar murchar.',
            'Servir com arroz basmati.'
        ],
        tip: 'Finalize com coentros frescos picados.'
    },
    {
        id: '5',
        title: 'Arroz de Pato',
        image: 'https://images.unsplash.com/photo-1600335247177-615450631eb4?auto=format&fit=crop&w=800&q=80',
        time: '60M',
        servings: '6',
        difficulty: 'DIFÍCIL',
        group: 'Carne',
        ingredients: [
            {
                section: 'Para o Pato',
                items: [
                    '1/2 pato',
                    '1 chouriço',
                    '1 cebola',
                    '1 cenoura'
                ]
            },
            {
                section: 'Para o Arroz',
                items: [
                    '2 chávenas de arroz',
                    '4 chávenas do caldo do pato',
                    '1 cebola picada'
                ]
            }
        ],
        preparation: [
            'Cozer o pato com o chouriço e legumes em água abundante.',
            'Desfiar o pato e cortar o chouriço em rodelas.',
            'Fazer um refogado com a cebola e juntar o arroz.',
            'Juntar o caldo da cozedura e deixar cozinhar.',
            'Num tabuleiro, fazer camadas de arroz e pato.',
            'Decorar com o chouriço e levar ao forno a tostar.'
        ],
        tip: 'Pincele o topo com gema de ovo antes de ir ao forno para ficar bem douradinho.'
    },
    {
        id: '6',
        title: 'Salmão Grelhado',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&w=800&q=80',
        time: '20M',
        servings: '2',
        difficulty: 'FÁCIL',
        group: 'Peixe',
        ingredients: [
            {
                section: null,
                items: [
                    '2 lombos de salmão',
                    'Sumo de limão',
                    'Ervas aromáticas',
                    'Legumes salteados para acompanhar'
                ]
            }
        ],
        preparation: [
            'Temperar o salmão com sal, pimenta e limão.',
            'Grelhar numa chapa bem quente, começando pela pele.',
            'Virar e deixar cozinhar do outro lado.',
            'Servir com legumes salteados.'
        ],
        tip: 'Não deixe cozinhar demais para o peixe não ficar seco.'
    },
    {
        id: '7',
        title: 'Frango Assado no Forno',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80',
        time: '50M',
        servings: '4',
        difficulty: 'MÉDIO',
        group: 'Carne',
        ingredients: [
            {
                section: null,
                items: [
                    '1 frango inteiro',
                    '4 batatas',
                    '1 limão',
                    'Pimentão doce',
                    'Azeite e vinho branco'
                ]
            }
        ],
        preparation: [
            'Colocar o frango num tabuleiro com as batatas cortadas.',
            'Temperar com sal, pimentão doce e azeite.',
            'Regar com vinho branco e sumo de limão.',
            'Levar ao forno a 200ºC até estar dourado.'
        ],
        tip: 'Coloque o limão cortado dentro do frango para dar mais sabor.'
    },
    {
        id: '8',
        title: 'Risotto de Cogumelos',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
        time: '40M',
        servings: '4',
        difficulty: 'MÉDIO',
        group: 'Vegetariano',
        ingredients: [
            {
                section: null,
                items: [
                    '300g arroz arbóreo',
                    '300g cogumelos frescos',
                    '1 cebola',
                    '100ml vinho branco',
                    '1L caldo de legumes',
                    'Queijo parmesão e manteiga'
                ]
            }
        ],
        preparation: [
            'Refogar a cebola e os cogumelos em azeite.',
            'Juntar o arroz e deixar fritar ligeiramente.',
            'Refrescar com vinho branco.',
            'Ir juntando o caldo quente aos poucos, mexendo sempre.',
            'Quando o arroz estiver cozido, desligar o lume.',
            'Envolver a manteiga e o queijo parmesão (mantecatura).'
        ],
        tip: 'Use cogumelos variados para um sabor mais complexo.'
    },
    {
        id: '9',
        title: 'Cheesecake de Morango',
        image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=800&q=80',
        time: '20M',
        servings: '8',
        difficulty: 'MÉDIO',
        group: 'Sobremesa',
        ingredients: [
            {
                section: 'Base',
                items: ['200g bolacha maria', '100g manteiga derretida']
            },
            {
                section: 'Recheio',
                items: ['400g queijo creme', '200ml natas', '100g açúcar']
            }
        ],
        preparation: [
            'Triturar a bolacha e misturar com a manteiga.',
            'Forrar o fundo de uma forma e levar ao frio.',
            'Bater o queijo creme com o açúcar.',
            'Bater as natas em chantilly e envolver no queijo.',
            'Colocar sobre a base e levar ao frigorífico.',
            'Decorar com morangos frescos.'
        ],
        tip: 'Faça de véspera para ficar mais consistente.'
    },
    {
        id: '10',
        title: 'Lasanha de Carne',
        image: 'https://images.unsplash.com/photo-1574868291534-1884f3f99152?auto=format&fit=crop&w=800&q=80',
        time: '60M',
        servings: '6',
        difficulty: 'MÉDIO',
        group: 'Carne',
        ingredients: [
            {
                section: 'Molho de Carne',
                items: ['500g carne picada', '1 cebola', 'Polpa de tomate', 'Vinho branco']
            },
            {
                section: 'Montagem',
                items: ['Placas de lasanha', 'Molho bechamel', 'Queijo ralado']
            }
        ],
        preparation: [
            'Fazer um refogado com a carne picada e o tomate.',
            'Num tabuleiro, alternar camadas de carne, massa e bechamel.',
            'Terminar com bechamel e bastante queijo.',
            'Levar ao forno a gratinar.'
        ],
        tip: 'Use massa fresca para ficar mais suave.'
    },
    {
        id: '11',
        title: 'Dourada no Forno',
        image: 'https://images.unsplash.com/photo-1535025639604-9a804c092faa?auto=format&fit=crop&w=800&q=80',
        time: '40M',
        servings: '2',
        difficulty: 'FÁCIL',
        group: 'Peixe',
        ingredients: [
            {
                section: null,
                items: ['2 douradas escaladas', 'Batatinhas para assar', 'Tomate cherry', 'Azeite e ervas']
            }
        ],
        preparation: [
            'Colocar as douradas e as batatas num tabuleiro.',
            'Juntar o tomate cherry.',
            'Temperar tudo com sal, azeite e ervas.',
            'Assar a 180ºC por cerca de 30-40 minutos.'
        ],
        tip: 'Faça uns golpes no peixe para cozinhar uniformemente.'
    },
    {
        id: '12',
        title: 'Empadão de Atum',
        image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80',
        time: '45M',
        servings: '4',
        difficulty: 'FÁCIL',
        group: 'Marmitas',
        ingredients: [
            {
                section: null,
                items: ['1kg batatas para puré', '3 latas de atum', '2 ovos cozidos', '1 cebola', 'Azeitonas']
            }
        ],
        preparation: [
            'Fazer o puré de batata.',
            'Refogar a cebola e juntar o atum.',
            'Num tabuleiro, colocar metade do puré.',
            'Rechear com o atum e os ovos picados.',
            'Cobrir com o restante puré.',
            'Pincelar com ovo e levar a dourar.'
        ],
        tip: 'Junte um pouco de polpa de tomate ao refogado de atum.'
    },
    {
        id: '13',
        title: 'Francesinha',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
        time: '60M',
        servings: '1',
        difficulty: 'DIFÍCIL',
        group: 'Carne',
        ingredients: [
            { section: 'Sanduíche', items: ['Pão de forma', 'Bife', 'Salsicha fresca', 'Linguiça', 'Fiambre', 'Queijo'] },
            { section: 'Molho', items: ['Cerveja', 'Polpa de tomate', 'Brandy', 'Vinho do Porto', 'Caldo de carne', 'Picante'] }
        ],
        preparation: ['Fazer o molho fervendo todos os ingredientes.', 'Grelhar as carnes.', 'Montar a sanduíche.', 'Cobrir com queijo e levar a gratinar.', 'Regar com o molho quente.'],
        tip: 'O segredo está no molho, deixe apurar bem.'
    },
    {
        id: '14',
        title: 'Rojões à Minhota',
        image: 'https://images.unsplash.com/photo-1606509036552-3268d8c3832e?auto=format&fit=crop&w=800&q=80',
        time: '90M',
        servings: '4',
        difficulty: 'MÉDIO',
        group: 'Carne',
        ingredients: [
            { section: null, items: ['800g carne de porco', 'Vinho verde tinto', 'Banha', 'Cominhos', 'Tripas enfarinhadas', 'Sangue cozido'] }
        ],
        preparation: ['Marinar a carne com vinho e alho.', 'Cozinhar lentamente na banha.', 'Juntar as tripas e o sangue no final.', 'Servir com batatas fritas aos cubos.'],
        tip: 'Use carne com alguma gordura para ficar mais tenra.'
    },
    {
        id: '15',
        title: 'Alheira de Mirandela',
        image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=800&q=80',
        time: '20M',
        servings: '2',
        difficulty: 'FÁCIL',
        group: 'Carne',
        ingredients: [
            { section: null, items: ['2 alheiras', 'Grelos', 'Batatas', 'Ovos'] }
        ],
        preparation: ['Grelhar ou fritar a alheira.', 'Cozer os grelos e as batatas.', 'Estrelar os ovos.'],
        tip: 'Pique a alheira antes de fritar para não rebentar.'
    },
    {
        id: '16',
        title: 'Polvo à Lagareiro',
        image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=800&q=80',
        time: '60M',
        servings: '4',
        difficulty: 'MÉDIO',
        group: 'Peixe',
        ingredients: [
            { section: null, items: ['1 polvo', 'Batatas a murro', 'Alho', 'Azeite abundante', 'Coentros'] }
        ],
        preparation: ['Cozer o polvo.', 'Colocar num tabuleiro com as batatas.', 'Regar com muito azeite e alho.', 'Levar ao forno a corar.'],
        tip: 'Congele o polvo antes de cozer para ficar mais tenro.'
    },
    {
        id: '17',
        title: 'Arroz de Marisco',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
        time: '45M',
        servings: '4',
        difficulty: 'MÉDIO',
        group: 'Peixe',
        ingredients: [
            { section: null, items: ['Arroz carolino', 'Camarão', 'Amêijoa', 'Mexilhão', 'Tomate', 'Coentros'] }
        ],
        preparation: ['Fazer um refogado base.', 'Abrir as amêijoas e mexilhões.', 'Juntar o arroz e o caldo do marisco.', 'Juntar o marisco no final.'],
        tip: 'O arroz deve ficar "malandrinho" (com caldo).'
    },
    {
        id: '18',
        title: 'Sardinhas Assadas',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a3a2720?auto=format&fit=crop&w=800&q=80',
        time: '20M',
        servings: '4',
        difficulty: 'FÁCIL',
        group: 'Peixe',
        ingredients: [
            { section: null, items: ['12 sardinhas', 'Sal grosso', 'Pimentos', 'Broa'] }
        ],
        preparation: ['Temperar as sardinhas com sal.', 'Assar na brasa.', 'Assar os pimentos.'],
        tip: 'Sirva em cima de uma fatia de broa para absorver a gordura.'
    },
    {
        id: '19',
        title: 'Cataplana de Marisco',
        image: 'https://images.unsplash.com/photo-1626804475297-411d863b5285?auto=format&fit=crop&w=800&q=80',
        time: '40M',
        servings: '4',
        difficulty: 'MÉDIO',
        group: 'Peixe',
        ingredients: [
            { section: null, items: ['Mistura de mariscos', 'Cebola', 'Pimento', 'Tomate', 'Vinho branco'] }
        ],
        preparation: ['Fazer camadas de vegetais e marisco na cataplana.', 'Regar com vinho e fechar.', 'Cozinhar em lume brando.'],
        tip: 'Não abra a cataplana durante a cozedura.'
    },
    {
        id: '20',
        title: 'Pastel de Nata',
        image: 'https://images.unsplash.com/photo-1584536286788-78ae2967e14d?auto=format&fit=crop&w=800&q=80',
        time: '60M',
        servings: '12',
        difficulty: 'DIFÍCIL',
        group: 'Sobremesa',
        ingredients: [
            { section: null, items: ['Massa folhada', '500ml leite', '60g farinha', '500g açúcar', '6 gemas'] }
        ],
        preparation: ['Forrar as formas com massa.', 'Fazer o creme levando o leite e açúcar ao lume.', 'Juntar as gemas temperadas.', 'Assar em forno muito quente.'],
        tip: 'Polvilhe com canela e açúcar em pó.'
    },
    {
        id: '21',
        title: 'Leite Creme',
        image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80',
        time: '20M',
        servings: '6',
        difficulty: 'MÉDIO',
        group: 'Sobremesa',
        ingredients: [
            { section: null, items: ['1L leite', '6 gemas', '150g açúcar', 'Casca de limão', 'Farinha maizena'] }
        ],
        preparation: ['Ferver o leite com limão.', 'Misturar gemas, açúcar e maizena.', 'Juntar o leite e levar ao lume a engrossar.', 'Queimar açúcar por cima.'],
        tip: 'Use um maçarico para criar a crosta estaladiça.'
    },
    {
        id: '22',
        title: 'Pão de Ló',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
        time: '45M',
        servings: '8',
        difficulty: 'MÉDIO',
        group: 'Sobremesa',
        ingredients: [
            { section: null, items: ['8 ovos', '250g açúcar', '150g farinha'] }
        ],
        preparation: ['Bater muito bem os ovos com o açúcar (20 min).', 'Envolver a farinha delicadamente.', 'Cozer em forma forrada com papel.'],
        tip: 'Se gostar húmido, coza menos tempo (Pão de Ló de Ovar).'
    },
    {
        id: '23',
        title: 'Arroz Doce',
        image: 'https://images.unsplash.com/photo-1595908129746-25d1543d5c94?auto=format&fit=crop&w=800&q=80',
        time: '40M',
        servings: '6',
        difficulty: 'MÉDIO',
        group: 'Sobremesa',
        ingredients: [
            { section: null, items: ['1 chávena arroz', '1L leite', 'Açúcar', 'Casca limão', 'Pau de canela'] }
        ],
        preparation: ['Cozer o arroz em água.', 'Juntar o leite quente aos poucos.', 'Juntar o açúcar no final.', 'Decorar com canela.'],
        tip: 'Junte uma gema de ovo no final para ficar mais cremoso.'
    },
    {
        id: '24',
        title: 'Bolo de Bolacha',
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80',
        time: '30M',
        servings: '10',
        difficulty: 'FÁCIL',
        group: 'Sobremesa',
        ingredients: [
            { section: null, items: ['Bolacha maria', 'Café forte', '250g manteiga', '250g açúcar em pó', 'Gema de ovo'] }
        ],
        preparation: ['Bater a manteiga com o açúcar e gema.', 'Molhar bolachas em café.', 'Alternar camadas de bolacha e creme.', 'Cobrir com creme.'],
        tip: 'O café deve estar frio para não derreter a bolacha.'
    },
    {
        id: '25',
        title: 'Legumes à Brás',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
        time: '30M',
        servings: '4',
        difficulty: 'FÁCIL',
        group: 'Vegetariano',
        ingredients: [
            { section: null, items: ['Alho francês', 'Cenoura', 'Courgette', 'Batata palha', 'Ovos', 'Salsa'] }
        ],
        preparation: ['Refogar os legumes em azeite.', 'Juntar a batata palha.', 'Envolver os ovos batidos.', 'Polvilhar com salsa.'],
        tip: 'Pode adicionar cogumelos para mais textura.'
    },
    {
        id: '26',
        title: 'Francesinha Vegetariana',
        image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80',
        time: '60M',
        servings: '1',
        difficulty: 'DIFÍCIL',
        group: 'Vegetariano',
        ingredients: [
            { section: null, items: ['Pão', 'Bife de seitan', 'Salsicha de soja', 'Queijo', 'Molho vegetariano'] }
        ],
        preparation: ['Grelhar o seitan e salsichas.', 'Montar a sanduíche.', 'Cobrir com queijo e gratinar.', 'Regar com molho.'],
        tip: 'Use cerveja e molho de soja para dar cor ao molho.'
    },
    {
        id: '27',
        title: 'Caril de Legumes',
        image: 'https://images.unsplash.com/photo-1631296244722-195615d60c8e?auto=format&fit=crop&w=800&q=80',
        time: '30M',
        servings: '4',
        difficulty: 'FÁCIL',
        group: 'Vegetariano',
        ingredients: [
            { section: null, items: ['Abóbora', 'Grão', 'Espinafres', 'Leite de coco', 'Pasta de caril'] }
        ],
        preparation: ['Refogar a pasta de caril.', 'Juntar a abóbora e o leite de coco.', 'Cozinhar até a abóbora estar tenra.', 'Juntar grão e espinafres.'],
        tip: 'Sirva com arroz basmati e pão naan.'
    },
    {
        id: '28',
        title: 'Lasanha de Espinafres',
        image: 'https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=800&q=80',
        time: '50M',
        servings: '6',
        difficulty: 'MÉDIO',
        group: 'Vegetariano',
        ingredients: [
            { section: null, items: ['Massa lasanha', 'Espinafres', 'Ricotta', 'Molho de tomate', 'Queijo mozzarella'] }
        ],
        preparation: ['Saltear os espinafres.', 'Misturar com ricotta.', 'Alternar camadas de massa, recheio e molho.', 'Gratinar.'],
        tip: 'Adicione nozes picadas para crocância.'
    },
    {
        id: '29',
        title: 'Hambúrguer de Feijão',
        image: 'https://images.unsplash.com/photo-1520072959219-c595dc3f3a2a?auto=format&fit=crop&w=800&q=80',
        time: '30M',
        servings: '4',
        difficulty: 'FÁCIL',
        group: 'Vegetariano',
        ingredients: [
            { section: null, items: ['Feijão preto', 'Aveia', 'Cebola', 'Cominhos', 'Pão de hambúrguer'] }
        ],
        preparation: ['Esmagar o feijão.', 'Misturar com aveia e temperos.', 'Moldar hambúrgueres.', 'Grelhar.'],
        tip: 'Deixe a massa repousar no frio antes de moldar.'
    },
    {
        id: '30',
        title: 'Marmita de Frango e Quinoa',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
        time: '25M',
        servings: '2',
        difficulty: 'FÁCIL',
        group: 'Marmitas',
        ingredients: [
            { section: null, items: ['Peito de frango', 'Quinoa', 'Brócolos', 'Tomate cherry'] }
        ],
        preparation: ['Grelhar o frango em cubos.', 'Cozer a quinoa.', 'Cozer os brócolos a vapor.', 'Misturar tudo na marmita.'],
        tip: 'Tempere com limão e azeite na hora de comer.'
    },
    {
        id: '31',
        title: 'Salada de Massa e Atum',
        image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80',
        time: '15M',
        servings: '2',
        difficulty: 'FÁCIL',
        group: 'Marmitas',
        ingredients: [
            { section: null, items: ['Massa fusilli', 'Atum', 'Milho', 'Ervilhas', 'Maionese'] }
        ],
        preparation: ['Cozer a massa.', 'Misturar com os restantes ingredientes.', 'Envolver com um pouco de maionese.'],
        tip: 'Passe a massa por água fria para parar a cozedura.'
    },
    {
        id: '32',
        title: 'Wrap de Frango',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
        time: '10M',
        servings: '1',
        difficulty: 'FÁCIL',
        group: 'Marmitas',
        ingredients: [
            { section: null, items: ['Tortilha', 'Sobras de frango', 'Alface', 'Tomate', 'Iogurte'] }
        ],
        preparation: ['Aquecer a tortilha.', 'Colocar o recheio.', 'Enrolar bem apertado.'],
        tip: 'Embrulhe em papel de alumínio para manter a forma.'
    },
    {
        id: '33',
        title: 'Couscous com Legumes',
        image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=800&q=80',
        time: '15M',
        servings: '2',
        difficulty: 'FÁCIL',
        group: 'Marmitas',
        ingredients: [
            { section: null, items: ['Couscous', 'Pimento', 'Pepino', 'Grão', 'Hortelã'] }
        ],
        preparation: ['Hidratar o couscous com água quente.', 'Cortar legumes em cubos.', 'Misturar tudo.', 'Temperar.'],
        tip: 'Ótimo para dias quentes, não precisa de aquecer.'
    },
    {
        id: '34',
        title: 'Omelete de Forno',
        image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80',
        time: '25M',
        servings: '4',
        difficulty: 'FÁCIL',
        group: 'Marmitas',
        ingredients: [
            { section: null, items: ['6 ovos', 'Espinafres', 'Queijo feta', 'Tomate seco'] }
        ],
        preparation: ['Bater os ovos.', 'Colocar em formas de muffins com os recheios.', 'Assar até solidificar.'],
        tip: 'Faça em quantidade para a semana toda.'
    },
    {
        id: '35',
        title: 'Feijoada à Transmontana',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
        time: '120M',
        servings: '8',
        difficulty: 'DIFÍCIL',
        group: 'Carne',
        ingredients: [
            { section: null, items: ['Feijão vermelho', 'Várias carnes de porco', 'Chouriço', 'Couve', 'Cenoura'] }
        ],
        preparation: ['Cozer as carnes.', 'Cozer o feijão.', 'Fazer um refogado.', 'Juntar tudo e deixar apurar.'],
        tip: 'Fica melhor no dia seguinte.'
    },
    {
        id: '36',
        title: 'Carne de Porco à Alentejana',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
        time: '60M',
        servings: '4',
        difficulty: 'MÉDIO',
        group: 'Carne',
        ingredients: [
            { section: null, items: ['Carne de porco em cubos', 'Amêijoas', 'Batatas cubos', 'Coentros', 'Massa de pimentão'] }
        ],
        preparation: ['Marinar a carne com massa de pimentão.', 'Fritar a carne.', 'Juntar as amêijoas até abrirem.', 'Envolver as batatas fritas.'],
        tip: 'Use coentros frescos em abundância.'
    },
    {
        id: '37',
        title: 'Bolo de Cenoura com Chocolate',
        image: 'https://images.unsplash.com/photo-1598346762291-aee88549193f?auto=format&fit=crop&w=800&q=80',
        time: '45M',
        servings: '10',
        difficulty: 'FÁCIL',
        group: 'Sobremesa',
        ingredients: [
            { section: null, items: ['3 cenouras', '4 ovos', '2 chávenas açúcar', '2 chávenas farinha', '1 chávena óleo'] }
        ],
        preparation: ['Triturar cenoura com óleo e ovos.', 'Juntar açúcar e farinha.', 'Cozer.', 'Cobrir com chocolate derretido.'],
        tip: 'A cobertura fica melhor se usar chocolate de culinária com um pouco de natas.'
    }
];
