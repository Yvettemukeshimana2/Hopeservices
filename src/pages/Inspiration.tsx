 import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import im1 from "../assets/images/Homeimage/F1.jpeg";
import im2 from "../assets/images/Homeimage/F2.jpeg";
import im3 from "../assets/images/Homeimage/F3.jpeg";
import im4 from "../assets/images/Homeimage/F4.jpeg";
import im5 from "../assets/images/Homeimage/F5.jpeg";
import im6 from "../assets/images/Homeimage/F6.jpeg";
import im7 from "../assets/images/Homeimage/1.jpeg";
/**
 * HOW TO ADD IMAGES
 * 1. Put your photos in src/assets/images/
 * 2. Import them here, e.g.:
 *      import hero from "../assets/images/footwear-hero.jpg";
 *      import sandal1 from "../assets/images/ubudodo-sandal.jpg";
 * 3. Set the `image` field of the matching item below (or `heroImage`).
 * While `image` is left as "" a "Place image here" box is shown instead.
 */

const heroImage = ""; // <- PLACE HERO / BACKGROUND IMAGE HERE

interface Footwear {
  id: string;
  title: string;
  craft: string;
  image: string; // <- PLACE PRODUCT IMAGE HERE
  message: string;
}

const footwear: Footwear[] = [
  {
    id: "ubudodo-sandals",
    title: "Ubudodo Woven Sandals",
    craft: "Ubudodo weaving",
    image: im1,
    message:
      "Light, breathable sandals hand-woven in ubudodo, with patterns passed down through generations of Rwandan artisans.",
  },
  {
    id: "ubudodo-slippers",
    title: "Ubudodo Home Slippers",
    craft: "Ubudodo weaving",
    image: im2,
    message:
      "Soft woven slippers for everyday comfort, finished with a cushioned sole and traditional geometric details.",
  },
  {
    id: "crochet-booties",
    title: "Crochet Booties",
    craft: "Hand crochet",
    image: im3,
    message:
      "Cozy crocheted booties made stitch by stitch in bright colours, ideal for gifts and cool evenings.",
  },
  {
    id: "leather-heritage-sandals",
    title: "Heritage Leather Sandals",
    craft: "Leather craft",
    image: im4,
    message:
      "Durable handcrafted leather sandals with imigongo-inspired accents, made to be worn and loved for years.",
  },
  {
    id: "sisal-espadrilles",
    title: "Sisal & Raffia Espadrilles",
    craft: "Sisal / raffia craft",
    image: im5,
    message:
      "Natural fibre soles and woven uppers that bring Rwandan basketry skills into modern summer footwear.",
  },
  {
    id: "kitenge-flats",
    title: "Kitenge Print Flats",
    craft: "Fabric & stitching",
    image: im6,
    message:
      "Colourful African-print flats combined with woven trims, a bold mix of heritage and modern style.",
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
      <div className={`overflow-hidden ${className}`}>
  <img src={im7} alt="Footwear" className="w-full h-full object-cover" />
</div>
    </div>
  );

const InspirationPage: React.FC = () => {
  return (
    <div className="text-white min-h-screen">
      {/* Header Section */}
      <div className="bg-black relative">
        <header className="relative h-96">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-96 mt-10 opacity-40 overflow-hidden"
          >
            <ImageSlot src={heroImage} alt="Handmade footwear" className="w-full h-96" />
          </motion.div>
          <div className="absolute inset-0 flex flex-col items-center mt-10 justify-center px-4">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl lg:text-3xl font-bold tracking-wider">
                STEP INTO HERITAGE
              </h2>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <span className="lg:text-2xl text-3xl text-yellow-500 font-bold">
                  Handmade Footwear
                </span>
                <h3 className="lg:text-2xl text-3xl font-bold text-yellow-500">
                  from Ubudodo &amp; Local Crafts
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12"
            >
              <Link
                to="/contactus"
                className="px-8 py-4 border-2 border-yellow-500 hover:bg-yellow-600 text-white lg:text-sm text-lg font-semibold rounded-full transition duration-300"
              >
                ORDER A PAIR
              </Link>
            </motion.div>
          </div>
        </header>
      </div>

      {/* Message Section */}
      <section className="py-10">
        <h1 className="text-center text-4xl lg:text-2xl font-bold text-gray-600 mb-10">
          OUR FOOTWEAR COLLECTION
        </h1>

        <section className="p-4 mx-4 md:mx-20 mb-8 bg-yellow-600 rounded">
          <div className="text-center text-xl lg:text-sm">
            <p>
              "Every pair we make carries the story of Rwandan hands. From
              ubudodo weaving to crochet, leather and sisal, our artisans turn
              traditional skills into comfortable, modern footwear. When you
              wear a pair, you support local craftspeople and keep our heritage
              walking forward."
            </p>
          </div>
        </section>

        {/* Footwear Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-6 md:px-10">
          {footwear.map((item) => (
            <Link
              key={item.id}
              to={`/inspirations/${item.id}`}
              className="block bg-black bg-opacity-90 rounded-lg overflow-hidden hover:scale-105 transform transition"
            >
              <ImageSlot src={item.image} alt={item.title} className="w-full h-56" />
              <div className="p-4 text-center">
                <span className="text-xs uppercase tracking-widest text-gray-400">
                  {item.craft}
                </span>
                <h2 className="text-lg font-semibold text-yellow-500 mt-1">
                  {item.title}
                </h2>
                <p className="text-sm text-white mt-2">{item.message}</p>
                <span className="text-yellow-500 text-2xl mt-3 inline-block">
                  <i className="fa fa-heart"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InspirationPage;