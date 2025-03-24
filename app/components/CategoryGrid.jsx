// app/components/CategoryGrid.jsx
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Outdoor getaways",
    image: "https://images.unsplash.com/photo-1578556881786-851d4b79cb73",
    stays: 131,
    size: "large",
  },
  {
    id: 2,
    name: "Unique destinations",
    image: "https://images.unsplash.com/photo-1578556881786-851d4b79cb73",
    stays: 85,
    size: "small",
  },
  {
    id: 3,
    name: "Entire homes",
    image: "https://images.unsplash.com/photo-1578556881786-851d4b79cb73",
    stays: 153,
    size: "small",
  },
  {
    id: 4,
    name: "Pet allowed",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9",
    stays: 98,
    size: "small",
  },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          href="#"
          key={category.id}
          className={`relative overflow-hidden rounded-lg transition-transform hover:scale-[1.02] ${
            category.size === "large" ? "md:col-span-1 md:row-span-2" : ""
          }`}
        >
          <div className={`relative ${category.size === "large" ? "h-full min-h-[450px]" : "h-64"}`}>
            <Image
              src={`${category.image}?auto=format&fit=crop&q=80`}
              alt={category.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
              <p className="text-sm opacity-90">{category.stays} stays</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;