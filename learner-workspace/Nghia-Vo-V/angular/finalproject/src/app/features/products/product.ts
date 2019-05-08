export interface IProduct {
  id: number;
  productName: string;
  description?: string;
  category?: string;
  originalPrice?: number;
  promotionPrice?: number;
  starRating?: number;
  imageUrl?: string;
}