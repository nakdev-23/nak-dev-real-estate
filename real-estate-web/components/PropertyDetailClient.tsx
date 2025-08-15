"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLocalization } from "@/lib/LocalizationContext";
import ContactAgentModal from "@/components/ContactAgentModal";
import ScheduleTourModal from "@/components/ScheduleTourModal";

interface Property {
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

interface PropertyDetailClientProps {
  property: Property;
}

export default function PropertyDetailClient({ property }: PropertyDetailClientProps) {
  const { t, language } = useLocalization();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  
  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("propertyNotFound")}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t("propertyNotFoundDesc")}
          </p>
          <Link 
            href="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            {t("backToListings")}
          </Link>
        </div>
      </div>
    );
  }

  // Format price based on type
  const formattedPrice = property.type === "rent" 
    ? `${property.price.toLocaleString()}${language === "th" ? " บาท/เดือน" : "/month"}` 
    : `${property.price.toLocaleString()}${language === "th" ? " บาท" : ""}`;

  // Translate features
  const translatedFeatures = property.features.map(feature => t(feature.toLowerCase().replace(/\s+/g, "")));

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            &larr; {t("backToListings")}
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Property Image */}
          <div className="relative">
            <Image 
              src={property.image} 
              alt={property.title} 
              width={1200}
              height={600}
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 left-4 bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {property.type === "sale" ? t("forSale") : t("forRent")}
            </div>
            {property.isFeatured && (
              <div className="absolute top-4 right-4 bg-amber-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {t("featured")}
              </div>
            )}
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{property.title}</h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {property.address}, {property.city}, {property.state} {property.zipCode}
                </p>
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-4 md:mt-0">
                {formattedPrice}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-gray-500 dark:text-gray-400 text-sm">{t("bedrooms")}</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">{property.bedrooms}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-gray-500 dark:text-gray-400 text-sm">{t("bathrooms")}</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">{property.bathrooms}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-gray-500 dark:text-gray-400 text-sm">{t("area")}</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">{property.area} {t("sqft")}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-gray-500 dark:text-gray-400 text-sm">{t("type")}</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white capitalize">{t(property.propertyType)}</div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t("description")}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {property.description}
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t("features")}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {translatedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsScheduleModalOpen(true)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition min-w-[200px]"
              >
                {t("scheduleTour")}
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg transition min-w-[200px]"
              >
                {t("contactAgent")}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <ContactAgentModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        propertyTitle={property.title} 
      />
      
      <ScheduleTourModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)} 
        propertyTitle={property.title} 
      />
    </>
  );
}