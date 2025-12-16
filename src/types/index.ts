export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  gstPercentage: number;
  moq: number;
  stock: number;
  image: string;
  brandId: string;
  categoryId: string;
  sku: string;
  unit: string;
  isActive: boolean;
  createdAt: string;
}

export interface Brand {
  id: string;
  name: string;
  logo?: string;
  description?: string;
  isActive: boolean;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  parentId?: string;
  isActive: boolean;
}

export interface User {
  id: string;
  email: string;
  phone?: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'admin';
  isVerified: boolean;
  createdAt: string;
}

export interface Address {
  id: string;
  userId: string;
  label: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  isDefault: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export type OrderStatus = 
  | 'requested'
  | 'approved'
  | 'rejected'
  | 'payment_pending'
  | 'paid'
  | 'processing'
  | 'completed'
  | 'cancelled';

export interface Order {
  id: string;
  userId: string;
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  gstAmount: number;
  total: number;
  shippingAddressId: string;
  notes?: string;
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  gstAmount: number;
  total: number;
  product?: Product;
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  method: 'upi' | 'card' | 'netbanking' | 'paypal';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId?: string;
  createdAt: string;
}
