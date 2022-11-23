export interface Product {
  name: string;
  addedDate: number;
  category: string;
  description: string;
  byunit: boolean;
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
