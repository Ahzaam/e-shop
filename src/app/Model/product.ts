export interface Product {
  name: string;
  id: string;
  addedDate: number;
  category: string;
  description: string;
  by_unit: boolean;
  status: 'selling' | 'out_of_stock' | 'stopped';
  discount: number;
  advertise: boolean;
  feature: Array<string>;
  images: Array<string>;
  mainImage: string;
  shopId: string;
  price: number;
  quantity: number;
  selled: number;
  starRating: number;
}
