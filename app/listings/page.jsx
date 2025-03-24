// app/listings/page.jsx
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ListingsNavbar from "../components/ListingsNavbar";
import FilterSidebar from "../components/FilterSidebar";
import RoomCard from "../components/RoomCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Mock data for room listings
const listings = [
  {
    id: 1,
    type: "hotel",
    location: "Hotel room in Ueno",
    title: "Superior Family Room",
    guests: 6,
    beds: 4,
    bedrooms: 2,
    baths: 1,
    amenities: ["Kitchen", "Wifi", "Air conditioning"],
    rating: 4.84,
    reviews: 324,
    price: 87,
    totalPrice: 248,
    images: ["/images/room1.jpg"],
  },
  {
    id: 2,
    type: "apartment",
    location: "Apartment unit in Akihabara",
    title: "Rainbow Plantation",
    guests: 3,
    beds: 1,
    bedrooms: 1,
    baths: 1,
    amenities: ["Kitchen", "Wifi", "Air conditioning"],
    rating: 4.77,
    reviews: 636,
    price: 63,
    totalPrice: 252,
    images: ["/images/room2.jpg"],
  },
  {
    id: 3,
    type: "hotel",
    location: "Hotel room in Ginza",
    title: "Junior Suite",
    guests: 3,
    beds: 2,
    bedrooms: 1,
    baths: 1,
    amenities: ["Wifi", "Air conditioning"],
    rating: 4.75,
    reviews: 602,
    price: 36,
    totalPrice: 144,
    images: ["/images/room3.jpg"],
  },
  {
    id: 4,
    type: "hotel",
    location: "Hotel room in Ueno",
    title: "Solitude Pointe",
    guests: 2,
    beds: 2,
    bedrooms: 1,
    baths: 1,
    amenities: ["Kitchen", "Wifi", "Kitchen", "Air conditioning"],
    rating: 4.86,
    reviews: 42,
    price: 97,
    totalPrice: 388,
    images: ["/images/room4.jpg"],
  },
  {
    id: 5,
    type: "apartment",
    location: "Apartment unit in Ota",
    title: "Harley Connection",
    guests: 4,
    beds: 2,
    bedrooms: 1,
    baths: 1,
    amenities: ["Kitchen", "Wifi", "Kitchen", "Air conditioning"],
    rating: 4.84,
    reviews: 324,
    price: 49,
    totalPrice: 196,
    images: ["/images/room5.jpg"],
  }
];

const RoomListingsPage = () => {
  const [filteredListings, setFilteredListings] = useState(listings);
  const [filters, setFilters] = useState({
    propertyTypes: {
      hotel: true,
      guesthouse: false,
      house: false,
      apartment: true
    },
    priceRanges: {
      below50: true,
      from50To99: true,
      from100To200: false,
      above200: false
    }
  });
  const [favorites, setFavorites] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  // Apply filters
  useEffect(() => {
    let results = listings.filter(listing => {
      // Property type filter
      const propertyTypeMatch = 
        (listing.type === "hotel" && filters.propertyTypes.hotel) ||
        (listing.type === "guesthouse" && filters.propertyTypes.guesthouse) ||
        (listing.type === "house" && filters.propertyTypes.house) ||
        (listing.type === "apartment" && filters.propertyTypes.apartment);
      
      // Price range filter
      const priceMatch = 
        (listing.price < 50 && filters.priceRanges.below50) ||
        (listing.price >= 50 && listing.price <= 99 && filters.priceRanges.from50To99) ||
        (listing.price >= 100 && listing.price <= 200 && filters.priceRanges.from100To200) ||
        (listing.price > 200 && filters.priceRanges.above200);
      
      return propertyTypeMatch && priceMatch;
    });
    
    setFilteredListings(results);
  }, [filters]);

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleFilterChange = (category, item, checked) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [item]: checked
      }
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <ListingsNavbar />
      
      {/* Main content */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="mb-4">
          <p className="text-sm text-gray-700">150+ stays in Tokyo, Japan</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <FilterSidebar 
            filters={filters} 
            onFilterChange={handleFilterChange} 
          />

          {/* Listings grid */}
          <div className="md:w-3/4">
            <div className="space-y-6">
              {filteredListings.length > 0 ? (
                filteredListings.map((listing) => (
                  <RoomCard 
                    key={listing.id}
                    listing={listing}
                    onToggleFavorite={toggleFavorite}
                    isFavorite={favorites[listing.id]}
                  />
                ))
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No results found</h3>
                  <p className="text-gray-500">Try adjusting your filters to find more properties</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredListings.length > 0 && (
              <div className="flex justify-center mt-8 space-x-2">
                <button 
                  className="p-2 rounded-full border hover:bg-gray-50 disabled:opacity-50"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                {[1, 2, 3, 4, 5].map(page => (
                  <button
                    key={page}
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                      currentPage === page 
                        ? 'text-white bg-black' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
                
                <span className="w-10 h-10 flex items-center justify-center">...</span>
                
                <button 
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50"
                  onClick={() => setCurrentPage(30)}
                >
                  30
                </button>
                
                <button 
                  className="p-2 rounded-full border hover:bg-gray-50"
                  onClick={() => setCurrentPage(prev => prev + 1)}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RoomListingsPage;