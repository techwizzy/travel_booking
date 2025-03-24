import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Hero from "./components/Hero";
import FeaturedDestinations from "./components/FeaturedDestinations";
import CategoryGrid from "./components/CategoryGrid";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SearchBar />
      
      <div className="container px-4 py-16 md:px-6">
        <FeaturedDestinations />
      </div>
      
      <div className="container px-4 py-8 md:px-6">
        <CategoryGrid />
      </div>
      
      <div className="container px-4 py-16 md:px-6">
        <ExperienceSection />
      </div>
      
      <Footer />
    </div>
  );
}