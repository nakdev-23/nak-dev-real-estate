"use client";

import { mockProperties } from "@/lib/mockData";
import { useLocalization } from "@/lib/LocalizationContext";
import PropertyCard from "@/components/PropertyCard";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  const { t } = useLocalization();
  const featuredProperties = mockProperties.filter(property => property.isFeatured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("findYourDreamProperty")}</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t("discoverPerfectPlace")}
          </p>
          
          {/* Search Form */}
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
            <SearchForm showAdvancedFilters={true} />
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t("featuredProperties")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>

      {/* Property Types */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t("lookingFor")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">{t("propertiesForSaleTitle")}</h3>
              <p className="mb-6">{t("propertiesForSaleDesc")}</p>
              <a 
                href="/properties/sale" 
                className="inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition"
              >
                {t("browseProperties")}
              </a>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">{t("propertiesForRentTitle")}</h3>
              <p className="mb-6">{t("propertiesForRentDesc")}</p>
              <a 
                href="/properties/rent" 
                className="inline-block bg-white text-green-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition"
              >
                {t("browseProperties")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t("howItWorks")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{t("searchProperties")}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("searchPropertiesDesc")}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{t("scheduleVisit")}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("scheduleVisitDesc")}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{t("makeItYours")}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("makeItYoursDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}