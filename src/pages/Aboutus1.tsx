 import { useState } from "react";
import { ChevronRight, ChevronDown, Heart, Scissors, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OurTeam from "./Ourteam";
import im7 from "../assets/images/Homeimage/intore.jpeg";

/**
 * HOW TO ADD IMAGES
 * 1. Put your photos in src/assets/images/
 * 2. Import them here, e.g.:
 *      import hero from "../assets/images/about-hero.jpg";
 * 3. Set the `image` field below (or `heroImage`).
 * While an image is "" a "Place image here" box is shown.
 */

const heroImage = ""; // <- PLACE HERO IMAGE HERE
const storyImage = ""; // <- PLACE STORY / ARTISAN IMAGE HERE

const ImageSlot = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
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

const AboutUs = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const sections = [
    {
      title: "Our Mission",
      icon: <Compass className="w-8 h-8 text-yellow-600" />,
      description:
        "To keep Rwandan heritage craft alive by turning traditional skills into beautiful, useful handmade fashion, from crochet and ubudodo weaving to bags and footwear, while giving local artisans fair and steady work.",
      stats: [
        { value: "100%", label: "Handmade" },
        { value: "Local", label: "Artisans" },
        { value: "Unique", label: "Every Piece" },
      ],
    },
    {
      title: "Our Story",
      icon: <Heart className="w-8 h-8 text-yellow-600" />,
      description:
        "Our craft began with skills passed from hand to hand: grandmothers teaching hands to weave, crochet and decorate. We bring those same patterns, colours and stitches into modern designs, so heritage can be worn and used every day.",
      stats: [
        { value: "Heritage", label: "Inspired" },
        { value: "Stitch", label: "by Stitch" },
        { value: "Made", label: "to Order" },
      ],
    },
  ];

  const crafts = [
    {
      title: "Crochet",
      description:
        "Dresses, tops, shawls, bags and accessories crocheted by hand in soft yarns and heritage colours.",
    },
    {
      title: "Ubudodo Weaving",
      description:
        "The traditional art of weaving by hand, used for footwear, mats, baskets and accessories.",
    },
    {
      title: "Imigongo & Heritage Patterns",
      description:
        "Bold geometric designs drawn from Rwandan imigongo art and woven or stitched into our pieces.",
    },
    {
      title: "Traditional Attire",
      description:
        "Ceremony and wedding wear inspired by umushanana and Intore costumes, tailored to your measurements.",
    },
    {
      title: "Footwear & Bags",
      description:
        "Handmade sandals, slippers, totes and clutches that blend local materials with modern shapes.",
    },
    {
      title: "Made to Order",
      description:
        "Choose your colours, size and style and our artisans will craft a piece just for you.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="h-[80vh] overflow-hidden bg-black relative">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="pt-16 opacity-40"
        >
          <ImageSlot src={heroImage} alt="Handmade heritage craft" className="w-full h-96" />
        </motion.div>
        <div className="absolute inset-0 flex justify-center text-center mt-7">
          <div className="container mx-auto px-6 top-36 absolute">
             
            <p className="text-yellow-500 text-xs md:text-sm tracking-widest font-semibold uppercase">
              IMENA Heritage &amp; Crochet Fashion
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-8 text-white">
              HANDMADE WITH <span className="text-yellow-500">HERITAGE</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="text-center mb-16">
        <h2 className="lg:text-2xl text-2xl font-bold mt-8">
          Crafted by Hand, Rooted in Rwanda
        </h2>
        <p className="bg-gradient-to-t p-9 text-white lg:text-base text-xl m-6 md:m-10 from-yellow-400 to-yellow-500 rounded-lg">
          Every piece we make tells a story. We believe in slow, careful,
          handmade work that honours the artisans who made it and the heritage
          that inspired it.
        </p>
      </div>

      {/* Story with image */}
      <div className="max-w-6xl mx-auto px-6 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <ImageSlot src={storyImage} alt="Our artisans at work" className="w-full h-80" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Scissors className="w-6 h-6 text-yellow-600" /> Meet the Hands Behind the Craft
          </h3>
          <p className="text-gray-600">
            Our work is made by skilled artisans who learned crochet, weaving
            and traditional design from their families and communities. Each
            bag, garment and pair of shoes passes through their hands from the
            first stitch to the final finish.
          </p>
        </div>
      </div>

      {/* Mission & Story */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mb-16 px-6">
        {sections.map((section) => (
          <div key={section.title} className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              {section.icon}
              <h3 className="text-2xl font-bold ml-3">{section.title}</h3>
            </div>
            <p className="text-gray-600 mb-8">{section.description}</p>
            <div className="grid grid-cols-3 gap-4">
              {section.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-yellow-500">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* What we make */}
      <div className="bg-yellow-50 rounded-lg p-8 mb-16 mx-6">
        <div className="flex items-center mb-8">
          <Scissors className="w-8 h-8 text-yellow-600" />
          <h3 className="text-2xl font-bold ml-3 text-yellow-600">Our Crafts</h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {crafts.map((craft) => (
            <div
              key={craft.title}
              className="bg-white p-4 rounded-lg shadow cursor-pointer"
              onClick={() => setExpanded(expanded === craft.title ? null : craft.title)}
            >
              <div className="flex items-center">
                {expanded === craft.title ? (
                  <ChevronDown className="text-yellow-500" />
                ) : (
                  <ChevronRight className="text-yellow-500" />
                )}
                <span className="ml-2 font-semibold">{craft.title}</span>
              </div>
              {expanded === craft.title && (
                <p className="mt-2 text-gray-600 text-sm">{craft.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <OurTeam />

      <Link to="/contactus">
        <div className="text-center">
          <button className="bg-yellow-500 text-white px-8 py-3 mb-5 rounded-lg hover:bg-yellow-700 transition-colors">
            Contact Us Today
          </button>
        </div>
      </Link>
    </div>
  );
};

export default AboutUs;