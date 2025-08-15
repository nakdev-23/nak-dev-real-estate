# Real Estate Web Application - Customization Guide

## Overview
This document provides instructions for customizing and extending the Real Estate Web Application. The application is built with modularity in mind, making it easy to modify content, styling, and functionality.

## Table of Contents
1. [Changing Content](#changing-content)
2. [Customizing Styling](#customizing-styling)
3. [Adding New Languages](#adding-new-languages)
4. [Replacing Mock Data](#replacing-mock-data)
5. [Adding New Features](#adding-new-features)
6. [Deployment](#deployment)

## Changing Content

### Text Content
All text content is centralized in the translation files:
- English: `lib/locales/en/`
- Thai: `lib/locales/th/`

To modify text:
1. Navigate to the appropriate language folder
2. Edit the JSON files to change the text values
3. The keys correspond to specific UI elements

### Property Data
Property information is stored in `lib/mockData.ts`:
1. Modify the `mockProperties` array to update property details
2. Add new properties by following the existing structure
3. Update images by changing the `image` property URL

### Company Information
Update company details in:
- `app/about/page.tsx` - About page content
- `app/contact/page.tsx` - Contact information
- `app/layout.tsx` - Footer copyright information

## Customizing Styling

### Color Scheme
Colors can be customized in `tailwind.config.ts`:
```javascript
theme: {
  extend: {
    colors: {
      // Add or modify custom colors here
      'primary': '#your-color',
      'secondary': '#your-color',
    }
  }
}
```

### Global Styles
Global styles are defined in `app/globals.css`:
- Update font families
- Modify base styles
- Add custom CSS classes

### Component Styles
Each component uses Tailwind CSS classes:
- Modify classes directly in component files
- Use Tailwind's utility classes for consistent styling
- Add custom CSS in component files when needed

## Adding New Languages

### Steps to Add a New Language:
1. Create a new folder in `lib/locales/` with the language code (e.g., `lib/locales/fr/`)
2. Copy the structure from existing language files
3. Translate all text content
4. Update `lib/LocalizationContext.tsx`:
   ```typescript
   const translations = {
     th: { /* ... */ },
     en: { /* ... */ },
     fr: { /* Add new language here */ }
   };
   ```
5. Update the language switcher in `components/Navbar.tsx` if needed

### Language Configuration
In `lib/LocalizationContext.tsx`, you can:
- Modify `supportedLngs` to add/remove languages
- Change `fallbackLng` to set default language
- Adjust language detection logic

## Replacing Mock Data

### Connecting to a Real API
1. Create a new service file in `lib/` (e.g., `lib/api.ts`)
2. Implement API calls for:
   - Property listings
   - Property details
   - Search functionality
   - Contact forms
3. Replace mock data usage in components:
   ```typescript
   // Before (mock data)
   const properties = mockProperties.filter(/* ... */);
   
   // After (API call)
   const properties = await fetchProperties(/* ... */);
   ```

### Data Models
Update the `Property` interface in `lib/types.ts` to match your data structure:
```typescript
interface Property {
  id: string;
  title: string;
  // Add or modify fields as needed
}
```

### Search Integration
Update search functionality in:
- `lib/searchUtils.ts` - Search logic
- `components/SearchForm.tsx` - Search form fields
- Page components - Search parameter handling

## Adding New Features

### Creating New Pages
1. Create a new folder in `app/` for the page
2. Add a `page.tsx` file with the page content
3. Update navigation in `components/Navbar.tsx` to include the new page

### Adding New Components
1. Create component files in `components/`
2. Import and use components in pages
3. Follow existing component patterns for consistency

### Extending Property Features
To add new property attributes:
1. Update the `Property` interface in `lib/types.ts`
2. Add new fields to mock data in `lib/mockData.ts`
3. Update property display components (`PropertyCard.tsx`, `PropertyDetailClient.tsx`)
4. Add new filter fields to `SearchForm.tsx`
5. Update search logic in `lib/searchUtils.ts`

### Form Extensions
To add new form fields:
1. Update form components with new input elements
2. Add validation logic
3. Update submission handlers
4. Modify TypeScript interfaces for form data

## Deployment

### Vercel Deployment
1. Push code to a GitHub repository
2. Create a new project in Vercel
3. Connect to your GitHub repository
4. Deploy with default settings

### Environment Variables
Create a `.env.local` file for environment-specific configuration:
```env
# API endpoints
NEXT_PUBLIC_API_URL=your-api-url

# Contact information
NEXT_PUBLIC_COMPANY_PHONE=your-phone
NEXT_PUBLIC_COMPANY_EMAIL=your-email
```

### Custom Domain
1. Purchase a domain from your preferred registrar
2. Configure DNS settings in Vercel
3. Add domain to your Vercel project

### Performance Optimization
- Enable Vercel's automatic optimizations
- Use image optimization features
- Implement caching strategies
- Monitor performance with Vercel Analytics

## Maintenance

### Updates
Regularly update dependencies:
```bash
npm outdated
npm update
```

### Testing
- Test on multiple devices and browsers
- Verify language switching functionality
- Check all forms and interactive elements
- Validate search and filtering features

### Backups
- Regularly commit code to version control
- Backup property data
- Document customizations made

## Support

For additional customization requests or technical support, please refer to:
- Documentation in `README.md`
- Code comments throughout the application
- Component and function names for easy navigation

The application is designed to be easily maintainable and extendable. Most customizations can be accomplished by following the patterns already established in the codebase.