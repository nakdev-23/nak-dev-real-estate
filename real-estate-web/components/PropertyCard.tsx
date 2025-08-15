"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLocalization } from "@/lib/LocalizationContext";
import ContactAgentModal from "@/components/ContactAgentModal";
import ScheduleTourModal from "@/components/ScheduleTourModal";

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    address: string;
    city: string;
    state: string;
    price: number;
    type: "sale" | "rent";
    bedrooms: number;
    bathrooms: number;
    area: number;
    image: string;
    isFeatured?: boolean;
    propertyType: "house" | "apartment" | "condo" | "townhouse";
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { t, language } = useLocalization();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  
  // Format price based on type
  const formattedPrice = property.type === "rent" 
    ? `${property.price.toLocaleString()}${language === "th" ? " บาท/เดือน" : "/month"}` 
    : `${property.price.toLocaleString()}${language === "th" ? " บาท" : ""}`;

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative">
          <Image 
            src={property.image} 
            alt={property.title} 
            width={800}
            height={500}
            className="w-full h-56 object-cover"
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
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{property.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {property.address}, {property.city}, {property.state}
          </p>
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formattedPrice}</span>
          </div>
          
          <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{property.bedrooms} {t("beds")}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{property.bathrooms} {t("baths")}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5"></path>
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{property.area} {t("sqft")}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Link 
              href={`/property/${property.id}`} 
              className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              {t("viewDetails")}
            </Link>
            <button
              onClick={() => setIsScheduleModalOpen(true)}
              className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              {t("scheduleTour")}
            </button>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="flex-1 text-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              {t("contactAgent")}
            </button>
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