import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ChevronDown, Sparkles, Clock, MapPin, Camera } from "lucide-react";

function ItineraryList({ itinerary }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <LayoutGroup>
        <div className="flex flex-col gap-6">
          {/* Vertical Timeline Line */}


          {itinerary.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                layout
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className={`relative grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 p-3 rounded-2xl transition-all duration-500 ${isOpen ? "bg-white shadow-2xl ring-1 ring-slate-100" : "hover:bg-white/50 shadow-[0px_1px_4px_rgba(255,140,0,0.6)]"
                  }`}
              >
                {/* DYNAMIC IMAGE CONTAINER 
                    Closed: sm:w-[200px] sm:h-[160px] (Your previous look)
                    Open: sm:w-[280px] aspect-[4/5] (Your elegant look)
                */}
                <motion.div
                  layout
                  className={`relative overflow-hidden flex-shrink-0 transition-all duration-500 rounded-2xl shadow-md ${isOpen
                    ? "sm:w-[280px] aspect-[4/5] w-full"
                    : "sm:w-[200px] sm:h-[160px] h-48 w-full"
                    }`}
                >
                  {item.image ? (
                    <motion.img
                      layout
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                      <Camera className="text-slate-300" size={32} />
                    </div>
                  )}

                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm z-10">
                    <span className="text-accent font-black text-[10px] uppercase tracking-widest">
                      Day {item.day}
                    </span>
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="flex flex-col justify-center py-2 pr-4">
                  <motion.h3 layout="position" className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                    {item.title}
                  </motion.h3>

                  <motion.p layout="position" className={`text-slate-500 mt-2 leading-relaxed text-sm sm:text-base ${isOpen ? "" : "line-clamp-2"}`}>
                    {item.description}
                  </motion.p>

                  {/* Icon Row - Stays tidy when closed */}
                  <motion.div layout="position" className="flex gap-4 mt-2 text-slate-400">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider">
                      <Clock size={14} className="text-accent/60" /> 4-5 Hours
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider">
                      <MapPin size={14} className="text-accent/60" /> 3 Stops
                    </div>
                  </motion.div>

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex items-center gap-2 mt-2 text-accent font-bold text-sm w-fit group"
                  >
                    <span className="group-hover:mr-1 transition-all">
                      {isOpen ? "Show Less" : "Explore Day"}
                    </span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 p-4 rounded-2xl bg-orange-50/50 border border-orange-100 flex gap-4">
                          <div className="bg-white p-2 h-fit rounded-lg shadow-sm text-orange-500">
                            <Sparkles size={18} />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-1">Expert Tip</h4>
                            <p className="text-sm text-slate-600 leading-snug">
                              Don't forget to bring your camera for the sunset! The light hits the cliffs perfectly around 6:30 PM.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </LayoutGroup>
    </div>
  );
}

export default ItineraryList;