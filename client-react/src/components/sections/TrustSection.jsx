import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Heart, PhoneCall } from 'lucide-react';

// Counter component for the "Calculation" effect
const Counter = ({ value, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseFloat(value);
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = totalMiliseconds / end;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === Math.floor(end)) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const TrustSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: "3 Million+",
      subtitle: "Happy customers from 70+ countries all around.",
      countValue: "3",
      suffix: " Million+"
    },
    {
      icon: <Star className="w-8 h-8 text-orange-400" />,
      title: "4.8/5",
      subtitle: "Rated across Trip Advisor and Google.",
      countValue: "4.8",
      suffix: "/5"
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-400" />,
      title: "Curated with love",
      subtitle: "Special curated Indian Itineraries for Indians.",
      isText: true
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-orange-400" />,
      title: "24/7 On-trip assistance",
      subtitle: "We are always there to help you pre, post and on the trip.",
      isText: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Animated Icon Container */}
              <div className="relative mb-6">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center relative z-10"
                >
                  {item.icon}
                </motion.div>
                {/* Background decorative blob */}
                <div className="absolute top-0 -right-2 w-20 h-20 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Title with "Calculation" effect */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {!item.isText ? (
                  <Counter value={item.countValue} suffix={item.suffix} />
                ) : (
                  item.title
                )}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed max-w-[220px]">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
