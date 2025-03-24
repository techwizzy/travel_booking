// app/components/FilterSidebar.jsx
"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const FilterSection = ({ title, isOpen: initialIsOpen, children }) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  return (
    <div className="mb-8">
      <button 
        className="flex items-center justify-between w-full mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      {isOpen && (
        <div className="space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};

// Custom checkbox with white checkmark on indigo background
const CustomCheckbox = ({ id, checked, onCheckedChange, label }) => {
  return (
    <div className="flex items-center">
      <div className="relative flex items-center">
        <Checkbox 
          id={id}
          className="h-5 w-5 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600 rounded"
          checked={checked}
          onCheckedChange={onCheckedChange}
        />
        {checked && (
          <Check className="h-3.5 w-3.5 text-white absolute left-[3px] top-[3px] pointer-events-none" />
        )}
      </div>
      <label htmlFor={id} className="ml-2 text-sm font-medium">{label}</label>
    </div>
  );
};

const FilterSidebar = ({ filters, onFilterChange }) => {
  return (
    <div className="md:w-1/4">
      {/* Property type filter */}
      <FilterSection title="Property type" isOpen={true}>
        <CustomCheckbox 
          id="hotel"
          checked={filters.propertyTypes.hotel}
          onCheckedChange={(checked) => onFilterChange('propertyTypes', 'hotel', checked)}
          label="Hotel"
        />
        <CustomCheckbox 
          id="guesthouse"
          checked={filters.propertyTypes.guesthouse}
          onCheckedChange={(checked) => onFilterChange('propertyTypes', 'guesthouse', checked)}
          label="Guesthouse"
        />
        <CustomCheckbox 
          id="house"
          checked={filters.propertyTypes.house}
          onCheckedChange={(checked) => onFilterChange('propertyTypes', 'house', checked)}
          label="House"
        />
        <CustomCheckbox 
          id="apartment"
          checked={filters.propertyTypes.apartment}
          onCheckedChange={(checked) => onFilterChange('propertyTypes', 'apartment', checked)}
          label="Apartment"
        />
      </FilterSection>

      {/* Price filter */}
      <FilterSection title="Price" isOpen={true}>
        <CustomCheckbox 
          id="below50"
          checked={filters.priceRanges.below50}
          onCheckedChange={(checked) => onFilterChange('priceRanges', 'below50', checked)}
          label="Below $50"
        />
        <CustomCheckbox 
          id="from50To99"
          checked={filters.priceRanges.from50To99}
          onCheckedChange={(checked) => onFilterChange('priceRanges', 'from50To99', checked)}
          label="From $50 to $99"
        />
        <CustomCheckbox 
          id="from100To200"
          checked={filters.priceRanges.from100To200}
          onCheckedChange={(checked) => onFilterChange('priceRanges', 'from100To200', checked)}
          label="From $100 to $200"
        />
        <CustomCheckbox 
          id="above200"
          checked={filters.priceRanges.above200}
          onCheckedChange={(checked) => onFilterChange('priceRanges', 'above200', checked)}
          label="Above $200"
        />
      </FilterSection>

      {/* Reviews (collapsed) */}
      <FilterSection title="Reviews" isOpen={false}>
        <div className="py-2">
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <span className="text-sm font-medium">4.5+</span>
              <div className="ml-2 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`h-4 w-4 ${i < 4 ? 'text-indigo-600 fill-indigo-600' : 'text-gray-300 fill-gray-300'}`} viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <span className="text-sm font-medium">4.0+</span>
              <div className="ml-2 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`h-4 w-4 ${i < 4 ? 'text-indigo-600 fill-indigo-600' : 'text-gray-300 fill-gray-300'}`} viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-sm font-medium">3.5+</span>
              <div className="ml-2 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`h-4 w-4 ${i < 3 ? 'text-indigo-600 fill-indigo-600' : i === 3 ? 'text-indigo-600 fill-indigo-600 opacity-50' : 'text-gray-300 fill-gray-300'}`} viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FilterSection>

      {/* Amenities (collapsed) */}
      <FilterSection title="Amenities" isOpen={false}>
        <div className="space-y-2">
          <CustomCheckbox 
            id="wifi"
            checked={false}
            onCheckedChange={() => {}}
            label="Wifi"
          />
          <CustomCheckbox 
            id="kitchen"
            checked={false}
            onCheckedChange={() => {}}
            label="Kitchen"
          />
          <CustomCheckbox 
            id="airConditioning"
            checked={false}
            onCheckedChange={() => {}}
            label="Air conditioning"
          />
          <CustomCheckbox 
            id="washer"
            checked={false}
            onCheckedChange={() => {}}
            label="Washer"
          />
          <CustomCheckbox 
            id="pool"
            checked={false}
            onCheckedChange={() => {}}
            label="Pool"
          />
          <button className="text-indigo-600 text-sm font-medium mt-2">
            Show more
          </button>
        </div>
      </FilterSection>

      {/* Rooms & beds (collapsed) */}
      <FilterSection title="Rooms & beds" isOpen={false}>
        <div>
          <h4 className="text-sm font-medium mb-2">Bedrooms</h4>
          <div className="flex space-x-2 mb-4">
            {['Any', '1', '2', '3', '4', '5+'].map((num) => (
              <button 
                key={num}
                className="px-4 py-1 border rounded-full text-sm hover:border-black transition-colors"
              >
                {num}
              </button>
            ))}
          </div>
          
          <h4 className="text-sm font-medium mb-2">Beds</h4>
          <div className="flex space-x-2 mb-4">
            {['Any', '1', '2', '3', '4', '5+'].map((num) => (
              <button 
                key={num}
                className="px-4 py-1 border rounded-full text-sm hover:border-black transition-colors"
              >
                {num}
              </button>
            ))}
          </div>
          
          <h4 className="text-sm font-medium mb-2">Bathrooms</h4>
          <div className="flex space-x-2">
            {['Any', '1', '2', '3', '4', '5+'].map((num) => (
              <button 
                key={num}
                className="px-4 py-1 border rounded-full text-sm hover:border-black transition-colors"
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </FilterSection>

      {/* Accessibility (collapsed) */}
      <FilterSection title="Accessibility" isOpen={false}>
        <div className="space-y-2">
          <CustomCheckbox 
            id="stepFreeGuest"
            checked={false}
            onCheckedChange={() => {}}
            label="Step-free guest entrance"
          />
          <CustomCheckbox 
            id="wideDoorways"
            checked={false}
            onCheckedChange={() => {}}
            label="Wide doorways"
          />
          <CustomCheckbox 
            id="accessibleBathroom"
            checked={false}
            onCheckedChange={() => {}}
            label="Accessible bathroom"
          />
        </div>
      </FilterSection>
    </div>
  );
};

export default FilterSidebar;