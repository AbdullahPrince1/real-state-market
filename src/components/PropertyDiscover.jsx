import { MapPin, ArrowRight } from "lucide-react";

export default function PropertyDiscover() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white py-12 px-6 md:px-16 gap-8">
      <div className="relative w-full md:w-1/2 flex justify-center">
        <img
          src="/discoverMap.png"
          alt="Map showing properties"
          className="w-full max-w-md rounded-xl shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Discover Properties with the Best Value
        </h2>
        <p className="text-gray-600 mt-4 max-w-md mx-auto md:mx-0">
          From minimalist interiors to compact solutions, small spaces inspire
          big ideas, proving that you don't need much room.
        </p>
        <button className="mt-6 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Find Nearest Properties <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
