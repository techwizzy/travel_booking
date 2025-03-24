// app/components/FeaturedDestinations.jsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  {
    id: 1,
    name: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
    properties: 7234,
    distance: 219,
  },
  {
    id: 2,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
    properties: 5568,
    distance: 5256,
  },
  {
    id: 3,
    name: "Bhutan",
    image: "https://images.unsplash.com/photo-1578556881786-851d4b79cb73",
    properties: 4497,
    distance: 8596,
  },
  {
    id: 4,
    name: "Amsterdam",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017",
    properties: 6078,
    distance: 4366,
  },
];

const FeaturedDestinations = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold tracking-wide uppercase">
        A Signature of Excellence
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <Card 
            key={destination.id}
            className="overflow-hidden border-none shadow-sm transition-all hover:shadow-md"
          >
            <CardContent className="p-0">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={`${destination.image}?auto=format&fit=crop&w=600&h=400&q=80`}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{destination.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {destination.properties.toLocaleString()} properties • {destination.distance} miles away
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestinations;