// app/components/ListingsNavbar.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Bell, Menu, Search, User } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ListingsNavbar = () => {
  const [selectedLocation, setSelectedLocation] = useState("Tokyo");
  const [selectedDates, setSelectedDates] = useState("Jul 17 - 21");
  const [selectedGuests, setSelectedGuests] = useState("2 guests");
  
  return (
 
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
         <div className="mx-auto">
        {/* Search bar */}
        <div className="hidden lg:flex items-center shadow-sm border rounded-full p-1 divide-x">
          <button className="px-4 py-1 font-medium text-sm rounded-full hover:bg-gray-100">
            {selectedLocation}
          </button>
          <button className="px-4 py-1 font-medium text-sm rounded-full hover:bg-gray-100">
            {selectedDates}
          </button>
          <div className="flex items-center">
            <button className="px-4 py-1 font-medium text-sm rounded-l-full hover:bg-gray-100">
              {selectedGuests}
            </button>
            <button className="bg-indigo-600 text-white p-2 rounded-full">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
        </div>
    
      </div>
  
  );
};

export default ListingsNavbar;