"use client";

import { useLocalization } from "@/lib/LocalizationContext";

interface ContactAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle: string;
}

export default function ContactAgentModal({ isOpen, onClose, propertyTitle }: ContactAgentModalProps) {
  const { t } = useLocalization();
  
  // Mock agent data - in a real app, this would come from props or API
  const agentData = {
    name: "สมชาย ใจดี",
    phone: "081-234-5678",
    line: "@somchai_realestate"
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t("contactAgent")}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t("property")}:</h4>
            <p className="text-gray-600 dark:text-gray-400">{propertyTitle}</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t("agentName")}:</h4>
              <p className="text-gray-600 dark:text-gray-400">{agentData.name}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t("phone")}:</h4>
              <a 
                href={`tel:${agentData.phone}`} 
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {agentData.phone}
              </a>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">LINE:</h4>
              <a 
                href={`https://line.me/ti/p/${agentData.line}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
              >
                {agentData.line}
              </a>
            </div>
          </div>
          
          <div className="mt-8 flex space-x-3">
            <a 
              href={`tel:${agentData.phone}`} 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition"
            >
              {t("callNow")}
            </a>
            <a 
              href={`https://line.me/ti/p/${agentData.line}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg text-center transition"
            >
              {t("contactOnLine")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}