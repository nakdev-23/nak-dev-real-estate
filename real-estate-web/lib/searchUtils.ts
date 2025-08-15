import { Property } from "@/lib/types";

interface SearchCriteria {
  type?: "sale" | "rent";
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: "house" | "apartment" | "condo" | "townhouse";
  bedrooms?: number;
  bathrooms?: number;
  minArea?: number;
  maxArea?: number;
}

export const searchProperties = (properties: Property[], criteria: SearchCriteria): Property[] => {
  return properties.filter(property => {
    // Type filter
    if (criteria.type && property.type !== criteria.type) {
      return false;
    }

    // Location filter (search in city, state, or address)
    if (criteria.location) {
      const location = criteria.location.toLowerCase();
      if (
        !property.city.toLowerCase().includes(location) &&
        !property.state.toLowerCase().includes(location) &&
        !property.address.toLowerCase().includes(location) &&
        !property.zipCode.includes(location)
      ) {
        return false;
      }
    }

    // Price filters
    if (criteria.minPrice !== undefined && property.price < criteria.minPrice) {
      return false;
    }
    
    if (criteria.maxPrice !== undefined && property.price > criteria.maxPrice) {
      return false;
    }

    // Property type filter
    if (criteria.propertyType && property.propertyType !== criteria.propertyType) {
      return false;
    }

    // Bedrooms filter
    if (criteria.bedrooms !== undefined && property.bedrooms < criteria.bedrooms) {
      return false;
    }

    // Bathrooms filter
    if (criteria.bathrooms !== undefined && property.bathrooms < criteria.bathrooms) {
      return false;
    }

    // Area filters
    if (criteria.minArea !== undefined && property.area < criteria.minArea) {
      return false;
    }
    
    if (criteria.maxArea !== undefined && property.area > criteria.maxArea) {
      return false;
    }

    // If all filters pass, include the property
    return true;
  });
};

export const sortProperties = (properties: Property[], sortBy: string): Property[] => {
  switch (sortBy) {
    case "price-low":
      return [...properties].sort((a, b) => a.price - b.price);
    case "price-high":
      return [...properties].sort((a, b) => b.price - a.price);
    case "area":
      return [...properties].sort((a, b) => b.area - a.area);
    case "bedrooms":
      return [...properties].sort((a, b) => b.bedrooms - a.bedrooms);
    case "newest":
      return [...properties].sort((a, b) => 
        parseInt(b.id) - parseInt(a.id)
      );
    default:
      return properties;
  }
};