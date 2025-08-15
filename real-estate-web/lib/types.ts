export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: "sale" | "rent";
  propertyType: "house" | "apartment" | "condo" | "townhouse";
  bedrooms: number;
  bathrooms: number;
  area: number; // in sq ft
  address: string;
  city: string;
  state: string;
  zipCode: string;
  image: string;
  features: string[];
  isFeatured?: boolean;
}