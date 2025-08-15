"use client";

import { useState } from "react";
import { useLocalization } from "@/lib/LocalizationContext";

export default function Contact() {
  const { t } = useLocalization();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("contactUs")}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {t("haveQuestions")}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg">
                {t("thankYouMessage")}
              </div>
            )}
            
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">{t("name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder={t("yourName")}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">{t("email")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder={t("yourEmail")}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">{t("phone")}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder={t("yourPhone")}
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">{t("subject")}</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">{t("subject")}</option>
                <option value="property-inquiry">{t("propertyInquiry")}</option>
                <option value="schedule-tour">{t("scheduleTourContact")}</option>
                <option value="sell-property">{t("sellMyProperty")}</option>
                <option value="general-question">{t("generalQuestion")}</option>
                <option value="feedback">{t("feedback")}</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">{t("message")}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder={t("howCanWeHelp")}
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : t("send")}
            </button>
          </form>
        </div>
        
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t("getInTouch")}</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("phoneLabel")}</h3>
                  <p className="text-gray-600 dark:text-gray-400">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("emailLabel")}</h3>
                  <p className="text-gray-600 dark:text-gray-400">info@realestatepro.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("office")}</h3>
                  <p className="text-gray-600 dark:text-gray-400">123 Real Estate Blvd<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("businessHours")}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t("mondayToFriday")}<br />
                    {t("saturday")}<br />
                    {t("sunday")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center text-gray-500">
            Office Location Map
          </div>
        </div>
      </div>
    </div>
  );
}