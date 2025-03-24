// app/components/RoomCard.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Heart, Star } from "lucide-react";

const RoomCard = ({ listing, onToggleFavorite, isFavorite }) => {
  const router = useRouter();
  
  // Navigate to room detail page when card is clicked
  const navigateToDetail = () => {
    router.push(`/rooms/${listing.id}`);
  };
  
  // Prevent navigation when favorite button is clicked
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onToggleFavorite(listing.id);
  };

  return (
    <div 
      className="border-b pb-6 cursor-pointer transition-opacity hover:opacity-90"
      onClick={navigateToDetail}
    >
      <div className="flex flex-col md:flex-row">
        {/* Room image */}
        <div className="md:w-1/3 relative h-48 md:h-60 rounded-lg overflow-hidden">
          <Image
            src={listing.images[0] || "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"}
            alt={listing.title}
            fill
            className="object-cover"
          />
          <button 
            className="absolute top-2 right-2 p-2 rounded-full bg-white/70 hover:bg-white transition-colors"
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              className={`h-5 w-5 ${isFavorite ? 'fill-red-500 stroke-red-500' : 'stroke-gray-700'}`} 
            />
          </button>
        </div>

        {/* Room details */}
        <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500">{listing.location}</p>
            <h2 className="text-xl font-bold">{listing.title}</h2>
            
            <div className="mt-2">
              <p className="text-sm text-gray-700">
                {listing.guests} guests • {listing.beds} beds {listing.bedrooms ? `• ${listing.bedrooms} bedroom` : ''} • {listing.baths} {listing.baths === 1 ? 'bath' : 'baths'}
              </p>
              <p className="text-sm text-gray-700">
                {listing.amenities.join(' • ')}
              </p>
            </div>
          </div>
          
          <div className="flex justify-between items-end mt-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-indigo-600 stroke-indigo-600" />
              <span className="ml-1 text-sm font-medium">{listing.rating}</span>
              <span className="ml-1 text-sm text-gray-500">({listing.reviews} reviews)</span>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-gray-500">${listing.totalPrice} total</p>
              <p className="text-lg font-bold">${listing.price}/night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;