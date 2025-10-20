import { ArrowRight } from "lucide-react";
import { usePropertyData } from "../hooks/usePropertyData";
import PropertiesCard from "./PropertiesCard";
import { motion } from "framer-motion";

export default function Properties() {
  const allPropertyData = usePropertyData();

  if (!allPropertyData) {
    return <h1>Loading ....</h1>;
  }

  return (
    <>
      <div className="my-10">
        <h1 className="text-4xl font-semibold">Explore Our Premier houses</h1>
        <div className="flex justify-between items-center my-4">
          <p className="font-medium text-neutral-400">
            Each listing Offers Unique features,exceptional quality, <br />{" "}
            prime locations, exclusive living experience
          </p>
          <button className="inline-flex gap-2 px-5 py-3 bg-black text-white rounded-l-4xl rounded-r-4xl">
            See all Houses <ArrowRight />
          </button>
        </div>
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          className="grid grid-cols-3 gap-4 mt-10"
        >
          {allPropertyData.map((property) => (
            <PropertiesCard property={property} key={property.id} />
          ))}
        </motion.div>
      </div>
    </>
  );
}
