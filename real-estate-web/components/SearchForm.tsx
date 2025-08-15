"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocalization } from "@/lib/LocalizationContext";

interface SearchCriteria {
  type?: string;
  location?: string;
  minPrice?: string;
  maxPrice?: string;
  propertyType?: string;
  bedrooms?: string;
  bathrooms?: string;
  minArea?: string;
  maxArea?: string;
}

export default function SearchForm({ 
  initialData = {},
  showAdvancedFilters = false
}: { 
  initialData?: Partial<SearchCriteria>;
  showAdvancedFilters?: boolean;
}) {
  const router = useRouter();
  const { t } = useLocalization();
  const [searchData, setSearchData] = useState<SearchCriteria>({
    type: "",
    location: "",
    minPrice: "",
    maxPrice: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    minArea: "",
    maxArea: "",
    ...initialData
  });
  
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build URL with search parameters
    const params = new URLSearchParams();
    
    if (searchData.type) params.set("type", searchData.type);
    if (searchData.location) params.set("location", searchData.location);
    if (searchData.minPrice) params.set("minPrice", searchData.minPrice);
    if (searchData.maxPrice) params.set("maxPrice", searchData.maxPrice);
    if (searchData.propertyType) params.set("propertyType", searchData.propertyType);
    if (searchData.bedrooms) params.set("bedrooms", searchData.bedrooms);
    if (searchData.bathrooms) params.set("bathrooms", searchData.bathrooms);
    if (searchData.minArea) params.set("minArea", searchData.minArea);
    
    // Navigate to search results page with parameters
    router.push(`/search?${params.toString()}`);
  };

  const resetForm = () => {
    setSearchData({
      type: "",
      location: "",
      minPrice: "",
      maxPrice: "",
      propertyType: "",
      bedrooms: "",
      bathrooms: "",
      minArea: "",
      maxArea: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <select
            name="type"
            value={searchData.type}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">{t("propertyType")}</option>
            <option value="sale">{t("forSale")}</option>
            <option value="rent">{t("forRent")}</option>
          </select>
        </div>
        
        <div>
          <input
            type="text"
            name="location"
            placeholder={t("location")}
            value={searchData.location}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        
        <div>
          <input
            type="number"
            name="minPrice"
            placeholder={t("minPrice")}
            value={searchData.minPrice}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        
        <div>
          <input
            type="number"
            name="maxPrice"
            placeholder={t("maxPrice")}
            value={searchData.maxPrice}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        
        <div className="flex space-x-2">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition"
          >
            {t("search")}
          </button>
          {(searchData.location || searchData.minPrice || searchData.maxPrice || 
            searchData.type || searchData.propertyType || searchData.bedrooms || 
            searchData.bathrooms || searchData.minArea || searchData.maxArea) && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-semibold p-3 rounded-lg transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
      
      {showAdvancedFilters && (
        <div className="pt-4">
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            {showAdvanced ? t("hideAdvancedFilters") : t("showAdvancedFilters")}
            <svg 
              className={`w-5 h-5 ml-1 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {showAdvanced && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <select
                  name="propertyType"
                  value={searchData.propertyType}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">{t("propertyType")}</option>
                  <option value="house">{t("house")}</option>
                  <option value="apartment">{t("apartment")}</option>
                  <option value="condo">{t("condo")}</option>
                  <option value="townhouse">{t("townhouse")}</option>
                </select>
              </div>
              
              <div>
                <select
                  name="bedrooms"
                  value={searchData.bedrooms}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">{t("bedrooms")}</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
              
              <div>
                <select
                  name="bathrooms"
                  value={searchData.bathrooms}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">{t("bathrooms")}</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
              
              <div>
                <input
                  type="number"
                  name="minArea"
                  placeholder={t("minArea")}
                  value={searchData.minArea}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </form>
  );
}