 import React from "react";
import { motion } from "framer-motion";
import im1 from "../assets/images/Homeimage/imigongo.jpeg";
import im2 from "../assets/images/Homeimage/uduseke.jpeg";
import im3 from "../assets/images/Homeimage/waving.jpeg";
import im4 from "../assets/images/Homeimage/umushanana.jpeg";
import im5 from "../assets/images/Homeimage/intore.jpeg";
import im6 from "../assets/images/Homeimage/h1 (2).jpeg";
import im7 from "../assets/images/Homeimage/h21.jpeg";
/**
 * HOW TO ADD IMAGES
 * 1. Put your photos in src/assets/images/
 * 2. Import them here, e.g.:
 *      import imigongo from "../assets/images/imigongo.jpg";
 * 3. Set `image: imigongo` on the matching item below.
 * While `image` is "" a "Place image here" box is shown.
 */

const heroImage = ""; // <- PLACE HERO IMAGE HERE

interface HeritageItem {
  id: string;
  title: string;
  image: string; // <- PLACE IMAGE HERE
  description: string;
}

const heritageItems: HeritageItem[] = [
  {
    id: "imigongo",
    title: "Imigongo Art",
    image: im1,
    description:
      "Bold geometric patterns first made from cow dung in eastern Rwanda, now inspiring fabrics and fashion.",
  },
  {
    id: "agaseke",
    title: "Agaseke Peace Baskets",
    image: im2,
    description:
      "Finely woven baskets with pointed lids, a symbol of welcome, unity and Rwandan hospitality.",
  },
  {
    id: "ubudodo",
    title: "Ubudodo Weaving",
    image: im3,
    description:
      "The traditional craft of weaving and knitting by hand, used for mats, footwear and accessories.",
  },
  {
    id: "umushanana",
    title: "Umushanana",
    image: im4,
    description:
      "The graceful traditional dress worn at weddings and ceremonies, draped over one shoulder.",
  },
  {
    id: "intore",
    title: "Intore Attire",
    image: im5,
    description:
      "Proud dancers' costumes with beaded headpieces and raffia details, honouring Rwanda's warrior dance.",
  },
  {
    id: "crochet",
    title: "Heritage Crochet",
    image: im6,
    description:
      "Handmade crochet pieces in heritage colours, keeping our women's craft traditions alive.",
  },
];

const ImageSlot: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className = "",
}) =>
  src ? (
    <img src={src} alt={alt} loading="lazy" className={`object-cover ${className}`} />
  ) : (
    <div
      className={`flex flex-col items-center justify-center border-2 border-dashed border-yellow-500 bg-gray-800 text-yellow-500 text-sm font-semibold ${className}`}
    >
      <span className="text-3xl mb-1">+</span>
         <img src={im7} alt="Footwear" className="w-full h-full object-cover" />
    </div>
  );

const Publication: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero */}
      <header className="relative bg-black overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="opacity-40"
        >
          <ImageSlot src={heroImage} alt="Rwandan heritage" className="w-full h-96" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
             
            <p className="text-yellow-500 text-xs md:text-sm tracking-widest font-semibold uppercase">
               Heritage &amp; Crochet Fashion
            </p>
            <h2 className="text-3xl md:text-4xl mt-5 font-bold text-white">
              RWANDAN <span className="text-yellow-500">HERITAGE</span>
            </h2>
          </motion.div>
        </div>
      </header>

      {/* Heritage grid */}
      <section className="py-12 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {heritageItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border-b-4 border-yellow-500 hover:shadow-xl transition-shadow"
            >
              <ImageSlot src={item.image} alt={item.title} className="w-full h-56" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-yellow-600">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Publication;