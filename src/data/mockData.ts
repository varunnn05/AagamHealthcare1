import { Brand, Category, Product } from '@/types';

export const brands: Brand[] = [
  {
    id: 'brand-1',
    name: 'DBO',
    description: 'Premium quality vacuum tubes and blood collection systems',
    isActive: true,
  },
  {
    id: 'brand-2',
    name: 'STRUMED',
    description: 'Innovative laboratory consumables and medical supplies',
    isActive: true,
  },
  {
    id: 'brand-3',
    name: 'MedLab Pro',
    description: 'Professional grade laboratory equipment',
    isActive: true,
  },
];

export const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'Vacuum Tubes',
    description: 'Blood collection vacuum tubes in various sizes and additives',
    isActive: true,
  },
  {
    id: 'cat-2',
    name: 'Laboratory Consumables',
    description: 'Essential consumables for daily lab operations',
    isActive: true,
  },
  {
    id: 'cat-3',
    name: 'Safety Equipment',
    description: 'Personal protective equipment for laboratory use',
    isActive: true,
  },
  {
    id: 'cat-4',
    name: 'Sample Collection',
    description: 'Specimen collection containers and accessories',
    isActive: true,
  },
];

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'EDTA Vacuum Tube 3ml',
    description: 'Purple top EDTA vacuum tube for hematology testing. K2 EDTA anticoagulant. Pack of 100 tubes.',
    price: 450,
    gstPercentage: 12,
    moq: 10,
    stock: 500,
    image: 'https://source.unsplash.com/featured/800x800?edta,vacuum,tube',
    brandId: 'brand-1',
    categoryId: 'cat-1',
    sku: 'DBO-EDTA-3ML',
    unit: 'pack',
    isActive: true,
    createdAt: '2024-01-15',
  },
  {
    id: 'prod-2',
    name: 'Serum Separator Tube 5ml',
    description: 'Gold top SST tube with clot activator and gel separator. Ideal for biochemistry tests. Pack of 100.',
    price: 520,
    gstPercentage: 12,
    moq: 10,
    stock: 350,
    image: 'https://source.unsplash.com/featured/800x800?serum,separator,tube',
    brandId: 'brand-1',
    categoryId: 'cat-1',
    sku: 'DBO-SST-5ML',
    unit: 'pack',
    isActive: true,
    createdAt: '2024-01-15',
  },
  {
    id: 'prod-3',
    name: 'Sodium Citrate Tube 2.7ml',
    description: 'Blue top citrate tube for coagulation studies. 3.2% sodium citrate. Pack of 100.',
    price: 480,
    gstPercentage: 12,
    moq: 10,
    stock: 280,
    image: 'https://source.unsplash.com/featured/800x800?sodium,citrate,tube',
    brandId: 'brand-2',
    categoryId: 'cat-1',
    sku: 'STR-CIT-2.7ML',
    unit: 'pack',
    isActive: true,
    createdAt: '2024-01-20',
  },
  {
    id: 'prod-4',
    name: 'Pipette Tips 200μl',
    description: 'Universal fit pipette tips. DNase/RNase free. Autoclavable. Box of 1000 tips.',
    price: 850,
    gstPercentage: 18,
    moq: 5,
    stock: 200,
    image: 'https://source.unsplash.com/featured/800x800?pipette,tips,laboratory',
    brandId: 'brand-2',
    categoryId: 'cat-2',
    sku: 'STR-TIP-200',
    unit: 'box',
    isActive: true,
    createdAt: '2024-02-01',
  },
  {
    id: 'prod-5',
    name: 'Microcentrifuge Tubes 1.5ml',
    description: 'Clear polypropylene microcentrifuge tubes with attached caps. Pack of 500.',
    price: 380,
    gstPercentage: 18,
    moq: 10,
    stock: 420,
    image: 'https://source.unsplash.com/featured/800x800?microcentrifuge,tube,laboratory',
    brandId: 'brand-3',
    categoryId: 'cat-2',
    sku: 'MLP-MCT-1.5',
    unit: 'pack',
    isActive: true,
    createdAt: '2024-02-10',
  },
  {
    id: 'prod-6',
    name: 'Nitrile Examination Gloves',
    description: 'Powder-free nitrile gloves. Medium size. Box of 100 gloves.',
    price: 650,
    gstPercentage: 12,
    moq: 20,
    stock: 600,
    image: 'https://source.unsplash.com/featured/800x800?nitrile,gloves,medical',
    brandId: 'brand-3',
    categoryId: 'cat-3',
    sku: 'MLP-GLV-M',
    unit: 'box',
    isActive: true,
    createdAt: '2024-02-15',
  },
  {
    id: 'prod-7',
    name: 'Urine Collection Container 60ml',
    description: 'Sterile urine collection container with screw cap. Pack of 100.',
    price: 420,
    gstPercentage: 12,
    moq: 10,
    stock: 300,
    image: 'https://source.unsplash.com/featured/800x800?urine,collection,container',
    brandId: 'brand-1',
    categoryId: 'cat-4',
    sku: 'DBO-UCC-60',
    unit: 'pack',
    isActive: true,
    createdAt: '2024-03-01',
  },
  {
    id: 'prod-8',
    name: 'Blood Collection Needle 21G',
    description: 'Safety blood collection needle with multi-sample capability. Box of 100.',
    price: 780,
    gstPercentage: 12,
    moq: 5,
    stock: 150,
    image: 'https://source.unsplash.com/featured/800x800?blood,collection,needle',
    brandId: 'brand-2',
    categoryId: 'cat-1',
    sku: 'STR-NDL-21G',
    unit: 'box',
    isActive: true,
    createdAt: '2024-03-10',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getBrandById = (id: string): Brand | undefined => {
  return brands.find(b => b.id === id);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(c => c.id === id);
};

export const getProductsByBrand = (brandId: string): Product[] => {
  return products.filter(p => p.brandId === brandId);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(p => p.categoryId === categoryId);
};
