 import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import im1 from "../assets/images/Homeimage/B1.jpeg";
import im2 from "../assets/images/Homeimage/B2.jpeg";
import im3 from "../assets/images/Homeimage/B3.jpeg";
import im4 from "../assets/images/Homeimage/B4.jpeg";
import im5 from "../assets/images/Homeimage/B5.jpeg";
import im6 from "../assets/images/Homeimage/F3.jpeg";
/**
 * HOW TO ADD IMAGES
 * 1. Put your photos in src/assets/images/
 * 2. Import them here, e.g.:
 *      import bag1 from "../assets/images/crochet-bag.jpg";
 * 3. Set `image: bag1` on the matching bag below (or `featuredImage`).
 * While `image` is "" a "Place image here" box is shown.
 */

const featuredImage = ""; // <- PLACE BIG FEATURED BAG IMAGE HERE

interface Bag {
  id: string;
  name: string;
  craft: "Crochet" | "Heritage" | "Crochet + Heritage";
  image: string; // <- PLACE BAG IMAGE HERE
  description: string;
  details: string[];
}

const bags: Bag[] = [
  {
    id: "crochet-tote",
    name: "Crochet Market Tote",
    craft: "Crochet",
    image: im1,
    description:
      "A roomy hand-crocheted tote that stretches to carry your day, from the market to the beach.",
    details: ["100% handmade", "Strong woven handles", "Many colours"],
  },
  {
    id: "agaseke-bag",
    name: "Agaseke Handbag",
    craft: "Heritage",
    image: im2,
    description:
      "Inspired by the Rwandan peace basket, woven in natural fibres with a pointed lid and fine pattern work.",
    details: ["Traditional weave", "Natural fibres", "Lined inside"],
  },
  {
    id: "imigongo-clutch",
    name: "Imigongo Clutch",
    craft: "Crochet + Heritage",
    image: im3,
    description:
      "A small evening clutch with bold imigongo-inspired geometric patterns worked into the crochet.",
    details: ["Imigongo motifs", "Magnetic closure", "Perfect for ceremonies"],
  },
  {
    id: "crochet-sling",
    name: "Crochet Sling Bag",
    craft: "Crochet",
    image: im4,
    description:
      "A light cross-body bag in soft cotton yarn, made for everyday errands and easy travel.",
    details: ["Adjustable strap", "Zip pocket", "Soft cotton yarn"],
  },
  {
    id: "ubudodo-basket-bag",
    name: "Ubudodo Basket Bag",
    craft: "Heritage",
    image: im5,
    description:
      "Hand-woven in ubudodo with a sturdy round base, a classic summer bag with real Rwandan character.",
    details: ["Hand-woven", "Round base", "Leather-style handles"],
  },
  {
    id: "bridal-pouch",
    name: "Bridal Crochet Pouch",
    craft: "Crochet + Heritage",
    image: im6,
    description:
      "A delicate pouch for weddings and gifts, finished with beads and traditional colours.",
    details: ["Beaded trim", "Made to order", "Gift ready"],
  },
];

const craftSteps = [
  { step: "01", title: "Choose", text: "Pick a bag style, colours and size." },
  { step: "02", title: "Handmade", text: "Our artisans crochet or weave it stitch by stitch." },
  { step: "03", title: "Finished", text: "Lined, strengthened and checked with care." },
  { step: "04", title: "Delivered", text: "Ready for you, or wrapped as a gift." },
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
      className={`flex flex-col items-center justify-center border-2 border-dashed border-amber-600 bg-stone-200 text-amber-700 text-sm font-semibold ${className}`}
    >
      <span className="text-3xl mb-1">+</span>
        <img src={im3} alt="bag" className="w-full h-full object-cover" />
    </div>
  );

const Tag: React.FC<{ text: string }> = ({ text }) => (
  <span className="inline-block rounded-full bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1">
    {text}
  </span>
);

const OurTeam: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Featured split hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-14 space-y-5"
          >
            <p className="text-amber-400 tracking-[0.3em] text-xs font-semibold uppercase">
              Muhe Heritage &amp; Crochet
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Handmade Bags <br />
              <span className="text-amber-400">with a Story</span>
            </h1>
            <p className="text-stone-300 max-w-md">
              Every bag is crocheted or woven by hand, mixing Rwandan heritage
              patterns with modern, useful design.
            </p>
            <Link
              to="/contactus"
              className="inline-block mt-2 px-8 py-3 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold rounded-full transition"
            >
              Order a Bag
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <ImageSlot src={featuredImage} alt="Featured handmade bag" className="w-full h-80 lg:h-[28rem]" />
          </motion.div>
        </div>
      </section>

      {/* Alternating bag rows */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold">The Collection</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3" />
        </div>

        {bags.map((bag, index) => (
          <motion.article
            key={bag.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageSlot src={bag.image} alt={bag.name} className="w-full h-72 md:h-80" />
            </div>
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
                {bag.craft}
              </span>
              <h3 className="text-2xl font-serif font-bold">{bag.name}</h3>
              <p className="text-stone-600">{bag.description}</p>
              <div className="flex flex-wrap gap-2">
                {bag.details.map((d) => (
                  <Tag key={d} text={d} />
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* How it's made */}
      <section className="bg-amber-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-center mb-10">
            How Your Bag Is Made
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-6 shadow text-center">
                <div className="text-4xl font-serif font-bold text-amber-500">{s.step}</div>
                <h3 className="font-bold mt-2">{s.title}</h3>
                <p className="text-sm text-stone-600 mt-1">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-14 text-center px-6">
        <h2 className="text-2xl font-serif font-bold">Want a bag made just for you?</h2>
        <p className="text-stone-600 mt-2">
          Tell us your colours, size and occasion and we will craft it by hand.
        </p>
        <Link
          to="/contactus"
          className="inline-block mt-5 px-8 py-3 border-2 border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white font-bold rounded-full transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default OurTeam;