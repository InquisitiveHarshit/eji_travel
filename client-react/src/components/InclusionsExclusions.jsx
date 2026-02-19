import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

function InclusionsExclusions({ inclusions, exclusions }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
      {/* Inclusions Column */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-emerald-50/50 p-6 sm:p-8 rounded-[2rem] border border-emerald-100"
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3 text-emerald-900">
          <div className="bg-emerald-500 p-1.5 rounded-lg shadow-sm">
            <CheckCircle className="w-5 h-5 text-white" strokeWidth={3} />
          </div>
          Inclusions
        </h3>
        <ul className="space-y-4">
          {inclusions.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start gap-3 text-emerald-800/80 leading-snug"
            >
              {/* Added pt-1 to align icon with the center of the first line of text */}
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 pt-1" />
              <span className="text-sm sm:text-base font-medium">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Exclusions Column */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-rose-50/50 p-6 sm:p-8 rounded-[2rem] border border-rose-100"
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3 text-rose-900">
          <div className="bg-rose-500 p-1.5 rounded-lg shadow-sm">
            <XCircle className="w-5 h-5 text-white" strokeWidth={3} />
          </div>
          Exclusions
        </h3>
        <ul className="space-y-4">
          {exclusions.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start gap-3 text-rose-800/80 leading-snug"
            >
              <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 pt-1" />
              <span className="text-sm sm:text-base font-medium">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default InclusionsExclusions;