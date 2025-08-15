"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface LocalizationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

// Simple translation function
const translations = {
  th: {
    home: "หน้าหลัก",
    propertiesForSale: "อสังหาริมทรัพย์ขาย",
    propertiesForRent: "อสังหาริมทรัพย์เช่า",
    about: "เกี่ยวกับเรา",
    contact: "ติดต่อเรา",
    search: "ค้นหา",
    reset: "รีเซ็ต",
    propertyType: "ประเภทอสังหาริมทรัพย์",
    location: "สถานที่",
    minPrice: "ราคาน้อยสุด",
    maxPrice: "ราคามากสุด",
    bedrooms: "ห้องนอน",
    bathrooms: "ห้องน้ำ",
    minArea: "พื้นที่ขั้นต่ำ (ตารางฟุต)",
    showAdvancedFilters: "แสดงตัวกรองขั้นสูง",
    hideAdvancedFilters: "ซ่อนตัวกรองขั้นสูง",
    forSale: "ขาย",
    forRent: "เช่า",
    featured: "แนะนำ",
    viewDetails: "ดูรายละเอียด",
    beds: "ห้องนอน",
    baths: "ห้องน้ำ",
    sqft: "ตารางฟุต",
    price: "ราคา",
    address: "ที่อยู่",
    description: "รายละเอียด",
    features: "คุณสมบัติ",
    scheduleTour: "นัดชมบ้าน",
    contactAgent: "ติดต่อตัวแทน",
    name: "ชื่อ",
    email: "อีเมล",
    phone: "โทรศัพท์",
    subject: "หัวข้อ",
    message: "ข้อความ",
    send: "ส่ง",
    phoneLabel: "โทรศัพท์",
    emailLabel: "อีเมล",
    office: "สำนักงาน",
    businessHours: "เวลาทำการ",
    mondayToFriday: "จันทร์-ศุกร์: 9:00 น. - 18:00 น.",
    saturday: "เสาร์: 10:00 น. - 16:00 น.",
    sunday: "อาทิตย์: ปิด",
    backToListings: "กลับไปยังรายการ",
    noPropertiesFound: "ไม่พบอสังหาริมทรัพย์",
    tryAdjustingSearch: "ลองปรับเปลี่ยนเงื่อนไขการค้นหา",
    viewAllProperties: "ดูอสังหาริมทรัพย์ทั้งหมด",
    showingProperties: "แสดง {{count}} อสังหาริมทรัพย์",
    sortNewest: "ใหม่ล่าสุด",
    sortPriceLowHigh: "ราคาน้อยไปมาก",
    sortPriceHighLow: "ราคามากไปน้อย",
    sortArea: "พื้นที่มากไปน้อย",
    sortBedrooms: "จำนวนห้องนอน",
    house: "บ้าน",
    apartment: "อพาร์ตเมนต์",
    condo: "คอนโดมิเนียม",
    townhouse: "ทาวน์เฮ้าส์",
    balcony: "ระเบียง",
    gym: "ยิม",
    pool: "สระว่ายน้ำ",
    parking: "ที่จอดรถ",
    garden: "สวน",
    garage: "โรงรถ",
    fireplace: "เตาผิง",
    renovated: "ปรับปรุงใหม่",
    petFriendly: "สามารถเลี้ยงสัตว์",
    laundry: "เครื่องซักผ้า",
    highSpeedInternet: "อินเทอร์เน็ตความเร็วสูง",
    oceanView: "วิวทะเล",
    concierge: "บริการคอนเซียร์จ",
    wineCellar: "ห้องเก็บไวน์",
    highCeilings: "เพดานสูง",
    exposedBrick: "อิฐเปล่า",
    hardwoodFloors: "พื้นไม้",
    quietNeighborhood: "ย่านเงียบสงบ",
    historic: "มีประวัติศาสตร์",
    patio: "ลานบ้าน",
    naturalLight: "แสงธรรมชาติ",
    findYourDreamProperty: "ค้นหาบ้านในฝันของคุณ",
    discoverPerfectPlace: "ค้นพบสถานที่ที่เหมาะสมที่สุดในการอยู่อาศัย ทำงาน หรือลงทุนด้วยคอลเลกชันอสังหาริมทรัพย์ที่หลากหลายของเรา",
    featuredProperties: "อสังหาริมทรัพย์แนะนำ",
    lookingFor: "คุณกำลังมองหา",
    propertiesForSaleTitle: "อสังหาริมทรัพย์ขาย",
    propertiesForSaleDesc: "ค้นหาบ้านในฝันของคุณเพื่อซื้อด้วยคอลเลกชันอสังหาริมทรัพย์ที่หลากหลายของเรา",
    browseProperties: "เรียกดูอสังหาริมทรัพย์",
    propertiesForRentTitle: "อสังหาริมทรัพย์เช่า",
    propertiesForRentDesc: "ค้นพบอสังหาริมทรัพย์ที่น่าทึ่งที่เหมาะกับไลฟ์สไตล์และงบประมาณของคุณ",
    howItWorks: "วิธีการทำงาน",
    searchProperties: "ค้นหาอสังหาริมทรัพย์",
    searchPropertiesDesc: "ใช้การค้นหาขั้นสูงเพื่อค้นหาอสังหาริมทรัพย์ที่ตรงกับเกณฑ์ของคุณ",
    scheduleVisit: "นัดหมายชมบ้าน",
    scheduleVisitDesc: "ติดต่อตัวแทนของเราเพื่อนัดหมายการชมบ้านตามความสะดวกของคุณ",
    makeItYours: "ทำให้เป็นของคุณ",
    makeItYoursDesc: "ปิดดีลและย้ายเข้าสู่อสังหาริมทรัพย์ใหม่ของคุณ",
    propertiesForSalePage: "อสังหาริมทรัพย์ขาย",
    propertiesForRentPage: "อสังหาริมทรัพย์เช่า",
    sortBy: "เรียงลำดับตาม",
    propertyNotFound: "ไม่พบอสังหาริมทรัพย์",
    propertyNotFoundDesc: "อสังหาริมทรัพย์ที่คุณกำลังมองหาไม่มีอยู่หรือถูกลบไปแล้ว",
    aboutRealEstatePro: "เกี่ยวกับ RealEstatePro",
    weHelpPeople: "เราช่วยให้ผู้คนค้นหาอสังหาริมทรัพย์ในฝันของพวกเขาด้วยรายการที่ครอบคลุมและความรู้เฉพาะทาง",
    ourStory: "เรื่องราวของเรา",
    foundedIn2010: "ก่อตั้งในปี 2010 RealEstatePro ได้เติบโตเพื่อเป็นหนึ่งในแพลตฟอร์มอสังหาริมทรัพย์ชั้นนำในประเทศ ภารกิจของเราคือการทำให้กระบวนการซื้อและเช่าอสังหาริมทรัพย์ง่ายขึ้นโดยการให้รายการที่ครบถ้วน ข้อมูลโดยละเอียด และคำแนะนำจากผู้เชี่ยวชาญ",
    withThousands: "ด้วยอสังหาริมทรัพย์นับพันแห่งทั่วประเทศ เราเชื่อมโยงผู้ซื้อ ผู้เช่า และผู้ขาย เพื่อทำให้การทำธุรกรรมอสังหาริมทรัพย์เป็นไปอย่างราบรื่นและประสบความสำเร็จ",
    ourTeam: "ทีมของตัวแทนที่มีประสบการณ์และผู้เชี่ยวชาญด้านอสังหาริมทรัพย์ของเราทุ่มเทเพื่อช่วยให้คุณค้นหาอสังหาริมทรัพย์ที่สมบูรณ์แบบซึ่งตรงกับความต้องการและงบประมาณของคุณ",
    ourValues: "ค่านิยมของเรา",
    trust: "ความเชื่อถือ",
    trustDesc: "เราสร้างความเชื่อถือผ่านความโปร่งใส ความซื่อสัตย์ และบริการที่น่าเชื่อถือ",
    community: "ชุมชน",
    communityDesc: "เราทุ่มเทเพื่อเสริมสร้างชุมชนผ่านการปฏิบัติด้านอสังหาริมทรัพย์ที่มีความรับผิดชอบ",
    innovation: "นวัตกรรม",
    innovationDesc: "เราเปิดรับเทคโนโลยีเพื่อให้โซลูชันที่ดีกว่าสำหรับลูกค้าของเรา",
    readyToFind: "พร้อมที่จะค้นหาอสังหาริมทรัพย์ในฝันของคุณแล้วหรือยัง?",
    joinThousands: "เข้าร่วมกับลูกค้าที่พอใจนับพันที่พบอสังหาริมทรัพย์ที่สมบูรณ์แบบกับเรา",
    contactUs: "ติดต่อเรา",
    haveQuestions: "มีคำถามเกี่ยวกับอสังหาริมทรัพย์หรือบริการของเรา? ติดต่อทีมของเรา",
    getInTouch: "ติดต่อเรา",
    propertyInquiry: "สอบถามอสังหาริมทรัพย์",
    scheduleTourContact: "นัดหมายชมบ้าน",
    sellMyProperty: "ขายอสังหาริมทรัพย์ของฉัน",
    generalQuestion: "คำถามทั่วไป",
    feedback: "ข้อเสนอแนะ",
    thankYouMessage: "ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็วที่สุด",
    yourName: "ชื่อของคุณ",
    yourEmail: "your.email@example.com",
    yourPhone: "(123) 456-7890",
    howCanWeHelp: "เราจะช่วยคุณได้อย่างไร?",
    agentName: "ชื่อตัวแทน",
    property: "อสังหาริมทรัพย์",
    callNow: "โทรเลย",
    contactOnLine: "ติดต่อผ่าน LINE",
    close: "ปิด",
    date: "วันที่",
    time: "เวลา",
    additionalInfo: "ข้อมูลเพิ่มเติม",
    submitting: "กำลังส่ง...",
    tourScheduled: "นัดชมบ้านเรียบร้อยแล้ว!",
    tourScheduledMessage: "เราได้รับคำขอของคุณแล้ว ตัวแทนจะติดต่อกลับเพื่อยืนยันการนัดหมาย",
    schedule: "นัดหมาย"
  },
  en: {
    home: "Home",
    propertiesForSale: "Properties For Sale",
    propertiesForRent: "Properties For Rent",
    about: "About",
    contact: "Contact",
    search: "Search",
    reset: "Reset",
    propertyType: "Property Type",
    location: "Location",
    minPrice: "Min Price",
    maxPrice: "Max Price",
    bedrooms: "Bedrooms",
    bathrooms: "Bathrooms",
    minArea: "Min Area (sqft)",
    showAdvancedFilters: "Show Advanced Filters",
    hideAdvancedFilters: "Hide Advanced Filters",
    forSale: "For Sale",
    forRent: "For Rent",
    featured: "Featured",
    viewDetails: "View Details",
    beds: "beds",
    baths: "baths",
    sqft: "sqft",
    price: "Price",
    address: "Address",
    description: "Description",
    features: "Features",
    scheduleTour: "Schedule a Tour",
    contactAgent: "Contact Agent",
    name: "Name",
    email: "Email",
    phone: "Phone",
    subject: "Subject",
    message: "Message",
    send: "Send",
    phoneLabel: "Phone",
    emailLabel: "Email",
    office: "Office",
    businessHours: "Business Hours",
    mondayToFriday: "Monday-Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 10:00 AM - 4:00 PM",
    sunday: "Sunday: Closed",
    backToListings: "Back to Listings",
    noPropertiesFound: "No properties found",
    tryAdjustingSearch: "Try adjusting your search criteria",
    viewAllProperties: "View All Properties",
    showingProperties: "Showing {{count}} properties",
    sortNewest: "Newest",
    sortPriceLowHigh: "Price: Low to High",
    sortPriceHighLow: "Price: High to Low",
    sortArea: "Area: Largest First",
    sortBedrooms: "Bedrooms",
    house: "House",
    apartment: "Apartment",
    condo: "Condo",
    townhouse: "Townhouse",
    balcony: "Balcony",
    gym: "Gym",
    pool: "Pool",
    parking: "Parking",
    garden: "Garden",
    garage: "Garage",
    fireplace: "Fireplace",
    renovated: "Renovated",
    petFriendly: "Pet Friendly",
    laundry: "Laundry",
    highSpeedInternet: "High-Speed Internet",
    oceanView: "Ocean View",
    concierge: "Concierge",
    wineCellar: "Wine Cellar",
    highCeilings: "High Ceilings",
    exposedBrick: "Exposed Brick",
    hardwoodFloors: "Hardwood Floors",
    quietNeighborhood: "Quiet Neighborhood",
    historic: "Historic",
    patio: "Patio",
    naturalLight: "Natural Light",
    findYourDreamProperty: "Find Your Dream Property",
    discoverPerfectPlace: "Discover the perfect place to live, work, or invest with our extensive collection of properties.",
    featuredProperties: "Featured Properties",
    lookingFor: "Looking For",
    propertiesForSaleTitle: "Properties For Sale",
    propertiesForSaleDesc: "Find your perfect home to buy with our extensive selection of properties.",
    browseProperties: "Browse Properties",
    propertiesForRentTitle: "Properties For Rent",
    propertiesForRentDesc: "Discover amazing rental properties that fit your lifestyle and budget.",
    howItWorks: "How It Works",
    searchProperties: "Search Properties",
    searchPropertiesDesc: "Use our advanced search to find properties that match your criteria.",
    scheduleVisit: "Schedule a Visit",
    scheduleVisitDesc: "Contact our agents to schedule a viewing at your convenience.",
    makeItYours: "Make It Yours",
    makeItYoursDesc: "Finalize the deal and move into your new property.",
    propertiesForSalePage: "Properties For Sale",
    propertiesForRentPage: "Properties For Rent",
    sortBy: "Sort by",
    propertyNotFound: "Property Not Found",
    propertyNotFoundDesc: "The property you're looking for doesn't exist or has been removed.",
    aboutRealEstatePro: "About RealEstatePro",
    weHelpPeople: "We help people find their perfect property with our extensive listings and expert knowledge.",
    ourStory: "Our Story",
    foundedIn2010: "Founded in 2010, RealEstatePro has grown to become one of the leading real estate platforms in the country. Our mission is to simplify the process of buying and renting properties by providing comprehensive listings, detailed information, and expert guidance.",
    withThousands: "With thousands of properties across the nation, we connect buyers, renters, and sellers to make real estate transactions seamless and successful.",
    ourTeam: "Our team of experienced agents and property experts are dedicated to helping you find the perfect property that meets your needs and budget.",
    ourValues: "Our Values",
    trust: "Trust",
    trustDesc: "We build trust through transparency, integrity, and reliable service.",
    community: "Community",
    communityDesc: "We're committed to strengthening communities through responsible real estate practices.",
    innovation: "Innovation",
    innovationDesc: "We embrace technology to provide better solutions for our clients.",
    readyToFind: "Ready to Find Your Dream Property?",
    joinThousands: "Join thousands of satisfied clients who found their perfect property with us.",
    contactUs: "Contact Us",
    haveQuestions: "Have questions about our properties or services? Get in touch with our team.",
    getInTouch: "Get In Touch",
    propertyInquiry: "Property Inquiry",
    scheduleTourContact: "Schedule a Tour",
    sellMyProperty: "Sell My Property",
    generalQuestion: "General Question",
    feedback: "Feedback",
    thankYouMessage: "Thank you for your message! We'll get back to you soon.",
    yourName: "Your name",
    yourEmail: "your.email@example.com",
    yourPhone: "(123) 456-7890",
    howCanWeHelp: "How can we help you?",
    agentName: "Agent Name",
    property: "Property",
    callNow: "Call Now",
    contactOnLine: "Contact on LINE",
    close: "Close",
    date: "Date",
    time: "Time",
    additionalInfo: "Additional information",
    submitting: "Submitting...",
    tourScheduled: "Tour Scheduled!",
    tourScheduledMessage: "We've received your request. An agent will contact you to confirm the appointment.",
    schedule: "Schedule"
  }
} as const;

type Translations = typeof translations;
type Language = keyof Translations;

export function LocalizationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("th");

  // Load language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "th" || savedLanguage === "en")) {
      setLanguage(savedLanguage as Language);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    if (lang === "th" || lang === "en") {
      setLanguage(lang as Language);
      localStorage.setItem("language", lang);
    }
  };

  const t = (key: string, params?: Record<string, string | number>) => {
    // Handle nested keys like "home:title"
    const keys = key.split(":");
    let translation: unknown = translations[language];
    
    for (const k of keys) {
      if (typeof translation === 'object' && translation !== null && k in translation) {
        translation = (translation as Record<string, unknown>)[k];
      } else {
        return key; // Return original key if translation not found
      }
    }
    
    // Handle parameter substitution
    if (params && typeof translation === 'string') {
      let result = translation;
      for (const [paramKey, paramValue] of Object.entries(params)) {
        result = result.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(paramValue));
      }
      return result;
    }
    
    return typeof translation === 'string' ? translation : key;
  };

  return (
    <LocalizationContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LocalizationContext.Provider>
  );
}

export function useLocalization() {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error("useLocalization must be used within a LocalizationProvider");
  }
  return context;
}