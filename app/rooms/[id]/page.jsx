// app/rooms/[id]/page.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Share, Heart, Star, Info, ChevronDown } from "lucide-react";

import ListingsNavbar from "@/app/components/ListingsNavbar";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";



// Mock room data - in a real app this would come from an API
const roomData = {
  1: {
    id: 1,
    title: "Superior Family Room",
    location: "Taito City, Tokyo, Japan",
    rating: 4.84,
    reviews: 324,
    guests: 6,
    beds: 4,
    bedrooms: 2,
    baths: 1,
    price: 87,
    discount: 87,
    serviceFee: 12,
    totalPrice: 273,
    hasFreeCancel: true,
    cancelHours: 48,
    description: "Surit ut elit cupidatat do quis incididunt sint mollit culpa consequat occaecat exercitati anim ad sint adipisicing nulla:",
    bullets: [
      "Sit reprehenderit elit incididunt",
      "Aute aliqua anim et duis occaecat"
    ],
    amenities: [
      { name: "Kitchen", icon: "Kitchen" },
      { name: "TV", icon: "TV" },
      { name: "Air conditioning", icon: "AirConditioning" },
      { name: "Wifi", icon: "Wifi" },
      { name: "First aid kit", icon: "FirstAid" },
      { name: "Free drink", icon: "Drink" },
      { name: "Bicycle rental", icon: "Bicycle" },
      { name: "Heating", icon: "Heating" }
    ],
    images: [
      "/images/room1.jpg",
      "/images/room2.jpg",
      "/images/room3.jpg",
      "/images/room4.jpg",
      "/images/room5.jpg",
    ],
    guestReviews: [
      {
        id: 1,
        name: "Selena Kye",
        date: "March 2022",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
        comment: "Veniam mollit et veniam ea officia nisi minim fugiat minim consequat dolor pariatur"
      },
      {
        id: 2,
        name: "Jerry Holland",
        date: "February 2022",
        avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "Amet ex ea duis magna est Lorem id eiusmod nulla in exercitation dolore reprehenderit eiusmod non"
      },
      {
        id: 3,
        name: "Frank Rutherford",
        date: "February 2022",
        avatar: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "Dolor reprehenderit nostrud esse qui aute eu. Exercitation qui sit fugiat ea consequat"
      },
      {
        id: 4,
        name: "Emma Willis",
        date: "January 2022",
        avatar: "https://images.unsplash.com/photo-1642928825702-4595a49823fd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "Do quis culpa nisi veniam mollit dolore sint Lorem duis fugiat Lorem ullamco sit"
      }
    ]
  },
  2: {
    id: 2,
    title: "Rainbow Plantation",
    location: "Akihabara, Tokyo, Japan",
    rating: 4.77,
    reviews: 636,
    guests: 3,
    beds: 1,
    bedrooms: 1,
    baths: 1,
    price: 63,
    discount: 63,
    serviceFee: 9,
    totalPrice: 189,
    hasFreeCancel: true,
    cancelHours: 24,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vel libero ultrices, in dignissim lectus efficitur.",
    bullets: [
      "Modern design with comfortable furnishings",
      "Quiet neighborhood with easy access to transit"
    ],
    amenities: [
      { name: "Kitchen", icon: "Kitchen" },
      { name: "Wifi", icon: "Wifi" },
      { name: "Air conditioning", icon: "AirConditioning" },
      { name: "TV", icon: "TV" },
      { name: "Washer", icon: "Washer" }
    ],
    images: [
        "/images/room2.jpg",
        "/images/room1.jpg",
        "/images/room3.jpg",
        "/images/room4.jpg",
        "/images/room5.jpg"
    ],
    guestReviews: [
      {
        id: 1,
        name: "Takashi Mori",
        date: "April 2022",
        avatar: "/images/avatar5.jpg",
        comment: "Perfect location for exploring Akihabara. Clean and comfortable space with everything we needed."
      },
      {
        id: 2,
        name: "Sarah Johnson",
        date: "March 2022",
        avatar: "/images/avatar6.jpg",
        comment: "Great value for the location. Host was very responsive and helpful with local recommendations."
      }
    ]
  }
};

// Icons
const Icons = {
  Kitchen: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H20V8H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 8H20V20H4V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 12H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  TV: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="7" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="17 2 12 7 7 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  AirConditioning: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 9.5L6 6M14.5 9.5L18 6M14.5 14.5L18 18M9.5 14.5L6 18M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Wifi: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 19H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 15.5C9.07011 14.5344 10.4774 14 12 14C13.5226 14 14.9299 14.5344 16 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 12C7.00856 10.269 9.43816 9.28393 12 9.28393C14.5618 9.28393 16.9914 10.269 19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  FirstAid: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Drink: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2L6 7H18L16 2H8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="12" y1="10" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="15" y1="13" x2="9" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Bicycle: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5.5" cy="17.5" r="3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18.5" cy="17.5" r="3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 6H18L14 17.5H9L15 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 17.5H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 17.5H18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 9H11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Heating: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 21V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.5 4.5L9.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5 19.5L14.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.5 8.5L7.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.5 15.5L16.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.5 8.5L16.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.5 15.5L7.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Washer: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="6" cy="6" r="1" fill="currentColor"/>
    </svg>
  )
};

const RoomDetailPage = () => {
  const params = useParams();
  const router = useRouter(); // Moved inside component
  const [room, setRoom] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [checkInDate, setCheckInDate] = useState("17/07/2022");
  const [checkOutDate, setCheckOutDate] = useState("21/07/2022");
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [guests, setGuests] = useState(2);

  const handleReserve = () => {
    router.push("/checkout");
  };
  useEffect(() => {
    // In a real app, fetch room data from an API
    if (params.id && roomData[params.id]) {
      setRoom(roomData[params.id]);
    }
  }, [params.id]);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <ListingsNavbar />
      
      <div className="max-w-screen-xl mx-auto px-8 sm:px-12 py-6">
        <h1 className="text-2xl font-bold">{room.title}</h1>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-indigo-600 stroke-indigo-600" />
            <span className="font-medium">{room.rating}</span>
            <span className="text-gray-600">({room.reviews} reviews)</span>
            <span className="mx-1">•</span>
            <span className="text-gray-600">{room.location}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 px-3 py-1 hover:bg-gray-100 rounded-md">
              <Share className="h-4 w-4" />
              <span>Share</span>
            </button>
            <button 
              className="flex items-center space-x-1 px-3 py-1 hover:bg-gray-100 rounded-md"
              onClick={() => setIsSaved(!isSaved)}
            >
              <Heart className={`h-4 w-4 ${isSaved ? 'fill-red-500 stroke-red-500' : ''}`} />
              <span>Save</span>
            </button>
          </div>
        </div>
        
        
        {/* Image Gallery */}
        <div className="mt-4 relative">
          <div className="flex gap-2">
            <div className="w-1/2 h-96 relative rounded-l-lg overflow-hidden">
              <Image 
                src={room.images[0] || "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"} 
                alt={room.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <div className="h-[188px] flex gap-2">
                <div className="w-1/2 relative rounded-tr-lg overflow-hidden">
                  <Image 
                    src={room.images[1] || "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"} 
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-1/2 relative overflow-hidden">
                  <Image 
                    src={room.images[2] || "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"} 
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="h-[188px] flex gap-2">
                <div className="w-1/2 relative overflow-hidden">
                  <Image 
                    src={room.images[3] || "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"} 
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-1/2 relative rounded-br-lg overflow-hidden">
                <Image 
                    src={room.images[4] || "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"} 
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                  <button 
                    className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-md text-sm font-medium flex items-center"
                    onClick={() => setShowAllPhotos(true)}
                  >
                    Show all photos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
         
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          {/* Left Column - Room Details */}
          <div className="lg:w-7/12">
            <section className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-xl font-bold mb-2">Overview</h2>
              <div className="flex items-center mb-4">
                <div className="h-4 w-4 mr-2">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4V20H22V4H2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 10H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm">{room.guests} guests • {room.beds} beds • {room.bedrooms} bedrooms • {room.baths} private bath</span>
              </div>
              
              {room.hasFreeCancel && (
                <div className="flex items-center mb-4 text-sm text-green-600">
                  <div className="h-4 w-4 mr-2">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 14L12 18L20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Free cancellation for {room.cancelHours} hours</span>
                </div>
              )}
              
              <p className="text-sm text-gray-700 mb-3">{room.description}</p>
              
              <ul className="text-sm text-gray-700 mb-3">
                {room.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start mb-1">
                    <span className="text-lg mr-2">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <button className="text-sm font-semibold underline">Show more</button>
            </section>
            
            <section className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-xl font-bold mb-4">This place offers</h2>
              <div className="grid grid-cols-2 gap-4">
              {room.amenities.slice(0, showAllAmenities ? room.amenities.length : 8).map((amenity, index) => {
                    const IconComponent = Icons[amenity.icon];
                    return (
                        <div key={index} className="flex items-center">
                        <div className="h-6 w-6 text-gray-700 mr-3">
                            {IconComponent ? <IconComponent /> : (
                            <div className="h-6 w-6 bg-gray-200 rounded flex items-center justify-center">
                                <span className="text-xs">?</span>
                            </div>
                            )}
                        </div>
                        <span className="text-sm">{amenity.name}</span>
                        </div>
                    );
                    })}
                </div>
              
              {room.amenities.length > 8 && (
                <button 
                  className="mt-4 px-4 py-2 border border-gray-700 rounded-md text-sm font-medium"
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                >
                  {showAllAmenities ? "Show less" : "Show all amenities"}
                </button>
              )}
            </section>
          </div>
          
          {/* Right Column - Booking Card */}
          <div className="lg:w-5/12">
            <div className="sticky top-24 border rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xl font-bold">${room.price}</span>
                  <span className="text-gray-500">/night</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-indigo-600 stroke-indigo-600" />
                  <span className="ml-1 font-medium">{room.rating}</span>
                </div>
              </div>
              
              <div className="border rounded-lg mb-4 divide-y">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-3">
                    <div className="text-xs font-medium">Check in</div>
                    <div className="text-sm">{checkInDate}</div>
                  </div>
                  <div className="p-3">
                    <div className="text-xs font-medium">Check out</div>
                    <div className="text-sm">{checkOutDate}</div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-center">
                    <div className="text-xs font-medium">Guests</div>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="text-sm">{guests} guests</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm underline">$86 x 4 nights</span>
                  <span className="text-sm">${room.price * 4}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm underline">New user discount</span>
                  <span className="text-sm text-green-600">-${room.discount}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <span className="text-sm underline mr-1">Service fee</span>
                    <Info className="h-3 w-3" />
                  </div>
                  <span className="text-sm">${room.serviceFee}</span>
                </div>
              </div>
              
              <div className="border-t pt-4 mb-4">
                <div className="flex justify-between font-bold">
                  <span>Total (USD)</span>
                  <span>${room.totalPrice}</span>
                </div>
              </div>
              
              <button 
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium"
                onClick={handleReserve}
                >
                Reserve
                </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                You won't be charged yet
              </p>
            </div>
          </div>
        </div>
        
        {/* Reviews */}
        <section className="mt-12 mb-16">
          <div className="flex items-center mb-6">
            <Star className="h-5 w-5 fill-indigo-600 stroke-indigo-600" />
            <span className="text-xl font-bold ml-2">{room.rating} ({room.reviews} reviews)</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {room.guestReviews.map((review) => (
              <div key={review.id} className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="h-10 w-10 rounded-full overflow-hidden relative mr-3">
                    <Image 
                      src={review.avatar || "https://ui-avatars.com/api/?name=" + review.name} 
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
          
          {room.reviews > 4 && (
            <button className="px-4 py-2 border border-gray-700 rounded-md text-sm font-medium">
              Show all reviews
            </button>
          )}
        </section>
      </div>
      
      <Footer />
      
      {/* Full photo gallery modal */}
      {showAllPhotos && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="p-4">
            <button 
              className="absolute top-4 left-4 p-2 rounded-full bg-white shadow-md"
              onClick={() => setShowAllPhotos(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="max-w-4xl mx-auto pt-12 pb-8">
              <h2 className="text-2xl font-bold mb-6">All photos for {room.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.images.map((image, index) => (
                  <div key={index} className="aspect-[4/3] relative rounded-lg overflow-hidden">
                    <Image 
                      src={image || "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"} 
                      alt={`${room.title} - Photo ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetailPage;