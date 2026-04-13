export interface Wine {
  id: string;
  name: string;
  region: string;
  vintage: string;
  supplier: string;
  supplierPrice: number;
  marketPrice: number;
  score: number;
  stock: number;
  bestValue: boolean;
}

export const mockWines: Wine[] = [
  {
    id: '1',
    name: 'Château Margaux 2015',
    region: 'Bordeaux, France',
    vintage: '2015',
    supplier: 'Elite Imports',
    supplierPrice: 850,
    marketPrice: 1100,
    score: 99,
    stock: 12,
    bestValue: true,
  },
  {
    id: '2',
    name: 'Sassicaia Tenuta San Guido',
    region: 'Tuscany, Italy',
    vintage: '2018',
    supplier: 'Vino Direct',
    supplierPrice: 280,
    marketPrice: 350,
    score: 97,
    stock: 24,
    bestValue: true,
  },
  {
    id: '3',
    name: 'Opus One',
    region: 'Napa Valley, USA',
    vintage: '2019',
    supplier: 'Global Cellars',
    supplierPrice: 320,
    marketPrice: 340,
    score: 98,
    stock: 18,
    bestValue: false,
  },
  {
    id: '4',
    name: 'Domaine de la Romanée-Conti',
    region: 'Burgundy, France',
    vintage: '2017',
    supplier: 'Elite Imports',
    supplierPrice: 12500,
    marketPrice: 15000,
    score: 100,
    stock: 3,
    bestValue: true,
  },
  {
    id: '5',
    name: 'Penfolds Grange',
    region: 'Barossa Valley, Australia',
    vintage: '2016',
    supplier: 'Vino Direct',
    supplierPrice: 650,
    marketPrice: 680,
    score: 96,
    stock: 15,
    bestValue: false,
  },
  {
    id: '6',
    name: 'Vega Sicilia Unico',
    region: 'Ribera del Duero, Spain',
    vintage: '2011',
    supplier: 'Iberian Wines',
    supplierPrice: 420,
    marketPrice: 550,
    score: 98,
    stock: 9,
    bestValue: true,
  },
];
