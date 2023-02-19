export interface Shop {
  joined: number;
  email: string;
  bannerImg: string;
  opening_time: string;
  closing_time: string;
  location: [string, string];
  logo: string;
  name: string;
  social_account: string;
  lowercase_name: string;
  payment_gateway: boolean;
  quote: string;
  phone_number: string;
  rating: number;
  displayname: string;
  status: 'declined' | 'pending' | 'new' | 'approved' | 'popular' | 'top';
  shop_id: string;
  type: string;
  address: string;
  nic: string;
  product_count: number;
  selled_count: number;
  city: string;
  zip: number;
  owner_uid: string;
}
