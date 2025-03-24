// app/checkout/success/page.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Clock, Star } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const SuccessPage = () => {
  // Booking details state
  const [bookingDetails, setBookingDetails] = useState({
    dates: "July 17 - 21, 2022",
    address: "1234 Higashiasakusa, Taito City, Tokyo, Japan",
    checkInTime: "after 2PM",
    checkOutTime: "11AM",
    amountPaid: "$273",
    reservationCode: "HMNK55PBZK",
    room: {
      title: "Superior Family Room",
      location: "Hotel room in Ueno",
      guests: 6,
      beds: 4,
      baths: 1,
      rating: 4.84,
      reviews: 324,
      image: "/images/room1.jpg"
    }
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="relative w-60 h-40 mx-auto mb-6">
              <Image 
                src="/images/luggage.png" 
                alt="Luggage illustration" 
                fill
                className="object-contain"
                onError={(e) => {
                  // Fallback for missing image
                  e.target.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMTYwIj48cGF0aCBkPSJNOTAgNDBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2ODBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMGg2MGM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwVjUwYzAtNS41MjMtNC40NzctMTAtMTAtMTBIOTBaIiBmaWxsPSIjRkY5ODAwIiBzdHJva2U9IiNEMDgwMDAiLz48cGF0aCBkPSJNMTAwIDUwdjgwIiBzdHJva2U9IiNEMDgwMDAiLz48cGF0aCBkPSJNMTIwIDUwdjgwIiBzdHJva2U9IiNEMDgwMDAiLz48cGF0aCBkPSJNMTQwIDUwdjgwIiBzdHJva2U9IiNEMDgwMDAiLz48cGF0aCBkPSJNOTAgMzVjLTIuNzYxIDAtNSAyLjIzOS01IDV2NWg4MHYtNWMwLTIuNzYxLTIuMjM5LTUtNS01SDkwWiIgZmlsbD0iI0JGNjYwMCIgc3Ryb2tlPSIjRDA4MDAwIi8+PHJlY3QgeD0iNTAiIHk9IjcwIiB3aWR0aD0iMzAiIGhlaWdodD0iNDAiIHJ4PSI1IiBmaWxsPSIjOTk2NkNDIiBzdHJva2U9IiM3NzMzOTkiLz48Y2lyY2xlIGN4PSI1NyIgY3k9Ijc3IiByPSIyIiBmaWxsPSIjRkZGRkZGIi8+PGNpcmNsZSBjeD0iNjUiIGN5PSI4NCIgcj0iMiIgZmlsbD0iI0ZGRkZGRiIvPjxjaXJjbGUgY3g9IjU5IiBjeT0iOTMiIHI9IjIiIGZpbGw9IiNGRkZGRkYiLz48Y2lyY2xlIGN4PSI3MCIgY3k9Ijk4IiByPSIyIiBmaWxsPSIjRkZGRkZGIi8+PHJlY3QgeD0iMTcwIiB5PSI3MCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjQwIiByeD0iNSIgZmlsbD0iI0ZGNjY5OSIgc3Ryb2tlPSIjQ0M0NDc3Ii8+PHJlY3QgeD0iMTc1IiB5PSI3NSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjMiIHJ4PSIxLjUiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0NDNEI3NiIvPjxyZWN0IHg9IjEyMCIgeT0iNzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSI0MCIgcng9IjUiIGZpbGw9IiM2Njk5QUEiIHN0cm9rZT0iIzUwN0E4MCIvPjxjaXJjbGUgY3g9IjE2MiIgY3k9IjE0MCIgcj0iMTAiIGZpbGw9IiNGRkZGRkYiLz48dGV4dCB4PSIxNjIiIHk9IjE0NSIgZm9udC1mYW1pbHk9IlZlcmRhbmEiIGZvbnQtc2l6ZT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPj88L3RleHQ+PHRleHQgeD0iMTcwIiB5PSIxMTUiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiMzMzMzMzMiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41Ij5SZWFkeT88L3RleHQ+PC9zdmc+";
                }}
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">All done, you're going to Tokyo!</h1>
          </div>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">{bookingDetails.dates}</p>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">{bookingDetails.address}</p>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Check-in: {bookingDetails.checkInTime}</p>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Check out: {bookingDetails.checkOutTime}</p>
            </div>
          </div>
          
          <div className="border-t border-b border-gray-200 py-6 space-y-4 mb-10">
            <div className="flex justify-between">
              <span className="font-medium">Amount paid (USD)</span>
              <span className="font-medium">{bookingDetails.amountPaid}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="font-medium">Reservation code</span>
              <span className="font-mono">{bookingDetails.reservationCode}</span>
            </div>
          </div>
          
          {/* Room details card */}
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-10">
            <div className="flex">
              <div className="relative h-32 w-32 md:h-40 md:w-40 flex-shrink-0">
                <Image
                  src={bookingDetails.room.image || "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"}
                  alt={bookingDetails.room.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1">
                <p className="text-sm text-gray-600">{bookingDetails.room.location}</p>
                <h3 className="text-lg font-medium">{bookingDetails.room.title}</h3>
                <p className="text-sm text-gray-700 mt-1">
                  {bookingDetails.room.guests} guests • {bookingDetails.room.beds} beds • {bookingDetails.room.baths} private bath
                </p>
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 fill-indigo-600 stroke-indigo-600" />
                  <span className="text-sm ml-1 font-medium">{bookingDetails.room.rating}</span>
                  <span className="text-sm text-gray-500 ml-1">({bookingDetails.room.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors"
            >
              Return to home
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SuccessPage;