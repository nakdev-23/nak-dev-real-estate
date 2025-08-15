"use client";

import { useState, useEffect } from "react";
import { mockProperties } from "@/lib/mockData";
import { Property } from "@/lib/types";
import { searchProperties, sortProperties } from "@/lib/searchUtils";
import PropertyCard from "@/components/PropertyCard";
import SearchForm from "@/components/SearchForm";
import { useLocalization } from "@/lib/LocalizationContext";

interface PropertiesPageProps {
  searchParams: {
    location?: string;
    minPrice?: string;
    maxPrice?: string;
    propertyType?: string;
    bedrooms?: string;
    bathrooms?: string;
    minArea?: string;
  };
  type: "sale" | "rent";
}

export default function PropertiesPage({ searchParams, type }: PropertiesPageProps) {
  const { t } = useLocalization();
  const [properties, setProperties] = useState<Property[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(true);

  // Extract search parameters
  const location = searchParams.location || "";
  const minPrice = searchParams.minPrice || "";
  const maxPrice = searchParams.maxPrice || "";
  const propertyType = searchParams.propertyType || "";
  const bedrooms = searchParams.bedrooms || "";
  const bathrooms = searchParams.bathrooms || "";
  const minArea = searchParams.minArea || "";

  useEffect(() => {
    // Simulate API call delay
    setLoading(true);
    
    // Start with all properties of the specified type
    let results = mockProperties.filter(property => property.type === type);
    
    // Convert URL parameters to search criteria
    const criteria = {
      location: location || undefined,
      minPrice: minPrice ? parseInt(minPrice) : undefined,
      maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
      propertyType: propertyType as "house" | "apartment" | "condo" | "townhouse" || undefined,
      bedrooms: bedrooms ? parseInt(bedrooms) : undefined,
      bathrooms: bathrooms ? parseInt(bathrooms) : undefined,
      minArea: minArea ? parseInt(minArea) : undefined,
    };
    
    // Apply search filters
    results = searchProperties(results, criteria);
    
    // Apply sorting
    const sorted = sortProperties(results, sortBy);
    
    setProperties(sorted);
    setLoading(false);
  }, [location, minPrice, maxPrice, propertyType, bedrooms, bathrooms, minArea, sortBy, type]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  // Prepare initial data for search form
  const initialSearchData = {
    type,
    location,
    minPrice,
    maxPrice,
    propertyType,
    bedrooms,
    bathrooms,
    minArea
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {type === "sale" ? t("propertiesForSalePage") : t("propertiesForRentPage")}
      </h1>
      
      <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <SearchForm initialData={initialSearchData} showAdvancedFilters={true} />
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          {t("showingProperties", { count: properties.length })}
        </p>
        <div className="flex items-center">
          <span className="mr-2 text-gray-700 dark:text-gray-300">{t("sortBy")}:</span>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="newest">{t("sortNewest")}</option>
            <option value="price-low">{t("sortPriceLowHigh")}</option>
            <option value="price-high">{t("sortPriceHighLow")}</option>
            <option value="area">{t("sortArea")}</option>
            <option value="bedrooms">{t("sortBedrooms")}</option>
          </select>
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.length > 0 ? (
            properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t("noPropertiesFound")}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t("tryAdjustingSearch")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}