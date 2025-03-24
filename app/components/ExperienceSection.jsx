// app/components/ExperienceSection.jsx
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Adventure path\nfor your trip",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    buttonText: "Experiences",
    isLight: false,
  },
  {
    id: 2,
    title: "Things to do\nfrom home",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04",
    buttonText: "Online Experiences",
    isLight: true,
  },
];

const ExperienceSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold tracking-wide uppercase">
        Find New Possibilities
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((experience) => (
          <div key={experience.id} className="relative overflow-hidden rounded-lg h-[300px] group">
            <Image
              src={`${experience.image}?auto=format&fit=crop&w=800&h=600&q=80`}
              alt={experience.title.replace("\n", " ")}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 z-10">
              <h3 className="text-2xl font-semibold text-white mb-4 whitespace-pre-line">
                {experience.title}
              </h3>
              {experience.isLight ? (
                <button className="px-4 py-2 bg-white text-black font-medium text-sm rounded hover:bg-gray-100 transition-colors">
                  {experience.buttonText}
                </button>
              ) : (
                <button className="px-4 py-2 bg-indigo-600 text-white font-medium text-sm rounded hover:bg-indigo-700 transition-colors">
                  {experience.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;