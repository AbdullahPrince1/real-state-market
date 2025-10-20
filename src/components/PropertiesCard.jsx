export default function PropertiesCard({ property }) {
  const {
    image,
    estate_title,
    status,
    bedrooms,
    bathrooms,
    description,
    location,
    price,
  } = property;
  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
        {/* Image Section */}
        <div className="relative">
          <img
            src={image}
            alt={estate_title}
            className="w-full h-64 object-cover"
          />
          <span
            className={`absolute top-3 left-3 px-3 py-1 text-sm font-semibold rounded-full ${
              status === "sale"
                ? "bg-green-600 text-white"
                : "bg-blue-600 text-white"
            }`}
          >
            {status === "sale" ? "For Sale" : "For Rent"}
          </span>
        </div>

        {/* Content Section */}
        <div className="p-5">
          <div className="flex items-center text-gray-600 text-sm mb-2 space-x-4">
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-bed"></i> {bedrooms} Bedrooms
            </span>
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-bath"></i> {bathrooms} Bathroom
            </span>
          </div>

          <h2 className="text-lg font-semibold mb-1">{estate_title}</h2>
          <p className="text-gray-500 text-sm mb-3">{description}</p>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-bold text-gray-800">{price}</p>
              <p className="text-gray-500 text-sm">{location}</p>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
              View Property
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
