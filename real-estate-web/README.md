# Real Estate Web Application

A modern, responsive real estate web application built with Next.js 15, TypeScript, and Tailwind CSS. This application allows users to search, browse, and view properties for sale and rent with advanced filtering and localization support.

## Features

### 🏠 Property Listings
- **Properties for Sale**: Browse properties available for purchase
- **Properties for Rent**: Browse properties available for rental
- **Property Details**: Detailed view with images, descriptions, and features
- **Featured Properties**: Highlighted properties on the homepage

### 🔍 Advanced Search & Filtering
- **Property Type**: Filter by house, apartment, condo, townhouse
- **Location**: Search by city, state, or address
- **Price Range**: Set minimum and maximum price filters
- **Bedrooms/Bathrooms**: Filter by number of rooms
- **Area**: Filter by property size (square footage)
- **Sorting**: Sort by price, area, bedrooms, or newest

### 🌍 Localization
- **Thai (Default)**: Full Thai language support
- **English**: Full English language support
- **Language Switcher**: Toggle between Thai and English

### 📱 Responsive Design
- **Mobile-Friendly**: Optimized for all device sizes
- **Tablet Support**: Adapts to tablet screens
- **Desktop Experience**: Full desktop experience

### 🎨 UI/UX Features
- **Modern Design**: Clean, professional interface
- **Dark Mode**: Automatic dark/light mode support
- **Interactive Elements**: Hover effects and smooth transitions
- **Modals**: Contact agent and schedule tour modals

### 🚀 Performance
- **Fast Loading**: Optimized with Next.js 15
- **Image Optimization**: Next.js Image component for better performance
- **Static Generation**: Pre-rendered pages for fast delivery

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom built with Tailwind
- **State Management**: React Context API
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd real-estate-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

### Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure

```
real-estate-web/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # About page
│   ├── contact/page.tsx   # Contact page
│   ├── properties/
│   │   ├── sale/page.tsx  # Properties for sale
│   │   └── rent/page.tsx  # Properties for rent
│   ├── property/[id]/     # Property detail pages
│   └── search/page.tsx    # Search results
├── components/            # Reusable components
├── lib/                   # Utilities and helpers
├── public/                # Static assets
└── styles/                # Global styles
```

## Key Components

### PropertyCard
Displays property information in a card format with:
- Property image
- Price (formatted for sale/rent)
- Location details
- Property specs (bedrooms, bathrooms, area)
- Action buttons (View Details, Schedule Tour, Contact Agent)

### SearchForm
Advanced search form with:
- Property type selector
- Location input
- Price range inputs
- Property type filter
- Bedroom/bathroom filters
- Area filter
- Advanced filters toggle

### Modals
- **Contact Agent Modal**: Displays agent contact information (phone, LINE)
- **Schedule Tour Modal**: Form for scheduling property visits

## Localization

The application supports both Thai (default) and English languages. Language can be switched using the toggle in the navigation bar.

### Adding New Languages

1. Create new JSON files in `lib/locales/[language-code]/`
2. Add translations for all existing keys
3. Update the `supportedLngs` array in `lib/i18n.ts`

## Data Management

The application currently uses mock data for demonstration purposes. In a production environment, you would replace this with:
- API calls to a backend service
- Database integration
- Real property data

### Mock Data Structure

Properties include:
- ID
- Title
- Description
- Price
- Type (sale/rent)
- Property type (house, apartment, etc.)
- Bedrooms/bathrooms
- Area (sq ft)
- Address information
- Image URL
- Features list
- Featured flag

## Customization

### Styling
- Colors can be customized in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component-specific styles in Tailwind classes

### Content
- Update property data in `lib/mockData.ts`
- Modify translations in `lib/locales/`
- Adjust text content in page components

### Features
- Add new property filters in `SearchForm`
- Extend property data model in `lib/types.ts`
- Add new pages in the `app/` directory

## Performance Optimization

- Images optimized with Next.js Image component
- Code splitting with dynamic imports
- Static generation for static pages
- Client-side caching for property data

## Browser Support

- Latest Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome for Android)
- IE 11 (with polyfills)

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader compatibility

## Security

- Content Security Policy configuration
- Input validation for forms
- Secure image loading from trusted sources

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the repository or contact the development team.

## Acknowledgments

- Property images from [Unsplash](https://unsplash.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)