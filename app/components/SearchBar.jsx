// app/components/SearchBar.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    // Navigate to listings page
    router.push("/listings");
  };

  return (
    <div className="relative z-10 mx-auto max-w-4xl -mt-8 px-4">
      <div className="rounded-full bg-white shadow-lg p-2 flex flex-col md:flex-row">
        {/* Location */}
        <div className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-200">
          <p className="text-xs font-medium text-gray-700">Location</p>
          <Input
            type="text"
            placeholder="Where are you going?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-none p-0 h-7 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        {/* Check-in */}
        <div className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-200">
          <p className="text-xs font-medium text-gray-700">Check in</p>
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="ghost" 
                className="p-0 h-7 text-sm font-normal justify-start hover:bg-transparent"
              >
                {checkInDate ? (
                  new Date(checkInDate).toLocaleDateString()
                ) : (
                  <span className="text-gray-500">Pick date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white border shadow-md" align="start">
              <Calendar
                mode="single"
                selected={checkInDate}
                onSelect={setCheckInDate}
                initialFocus
                className=" "
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Check-out */}
        <div className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-200">
          <p className="text-xs font-medium text-gray-700">Check out</p>
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="ghost" 
                className="p-0 h-7 text-sm font-normal justify-start hover:bg-transparent"
              >
                {checkOutDate ? (
                  new Date(checkOutDate).toLocaleDateString()
                ) : (
                  <span className="text-gray-500">Pick date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white border shadow-md" align="start">
              <Calendar
                mode="single"
                selected={checkOutDate}
                onSelect={setCheckOutDate}
                initialFocus
                disabled={(date) => date < new Date(checkInDate)}
                className=" "
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Guests */}
        <div className="flex-1 px-4 py-2">
          <p className="text-xs font-medium text-gray-700">Guests</p>
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="ghost" 
                className="p-0 h-7 text-sm font-normal justify-start hover:bg-transparent"
              >
                <span className="text-gray-900">{guests} {guests === 1 ? "guest" : "guests"}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 bg-white border shadow-md" align="start">
              <div className="flex items-center justify-between p-4">
                <span className="text-sm font-medium">Guests</span>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="h-7 w-7"
                    disabled={guests <= 1}
                    onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{guests}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => setGuests(prev => prev + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Search Button */}
        <div className="md:ml-2 p-1">
          <Button 
            className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 p-0"
            onClick={handleSearch}
          >
            <Search className="h-5 w-5 text-white" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;