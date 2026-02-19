import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ChevronDown } from "lucide-react"; // Using lucide for cleaner icons

function ItineraryList({ itinerary }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <LayoutGroup>
        <div className="flex flex-col gap-8 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] sm:left-[100px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden sm:block" />

          {itinerary.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className={`relative grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-6 p-2 rounded-3xl transition-all duration-500 ${openIndex === index ? "bg-white shadow-xl" : "hover:bg-white/50"
                }`}
            >
              {/* Image Section with Hover Zoom */}
              <motion.div
                layout
                className="relative h-48 sm:h-40 rounded-2xl overflow-hidden shadow-md group"
              >
                {item.image ? (
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                  <span className="text-accent font-black text-[10px] uppercase tracking-widest">
                    Day {item.day}
                  </span>
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="flex flex-col justify-center pr-4">
                <motion.h3 layout className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                  {item.title}
                </motion.h3>

                <motion.p layout className={`text-slate-600 mt-2 leading-relaxed ${openIndex === index ? "" : "line-clamp-2"}`}>
                  {item.description}
                </motion.p>

                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center gap-2 mt-4 text-accent font-bold text-sm group w-fit"
                >
                  <span className="group-hover:mr-1 transition-all">
                    {openIndex === index ? "Show Less" : "Explore Day"}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-slate-100 mt-4">
                        <p className="text-slate-500 italic text-sm">
                          {/* You could add more details here, like "Best time to visit" or "Nearby spots" */}
                          Pro-tip: Don't forget to bring your camera for the sunset!
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </LayoutGroup>
    </div>
  );
}

export default ItineraryList;
