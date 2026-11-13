import React from "react";
import im1 from "../assets/images/Homeimage/S1.jpeg";
import im2 from "../assets/images/Homeimage/rh1.jpeg";
import im3 from "../assets/images/Homeimage/rh2.jpeg";
const specialtiesData = [
  {
    title: " HANDMADE CROCHET APPAREL",
    description:
      "We design and handcraft unique crochet clothing—from stylish tops, dresses, and cardigans to beachwear and accessories. Every stitch is made with care using quality yarns, giving you comfortable, breathable, and one-of-a-kind fashion pieces made to last.",
    image: im1,
  },
  {
    title: "RWANDAN HERITAGE & CRAFTS",
    description:
      "Looking for authentic pieces that celebrate Rwandan culture? We curate traditional treasures—including handwoven agaseke baskets, imigongo art, beaded jewelry, and cultural home décor—sourced directly from skilled local artisans to bring warmth and heritage into your space.",
    image: im2,
  },
  {
    title: "CUSTOM ORDERS & GIFTING",
    description:
      " Want a specific color, size, or bespoke design? We bring your vision to life with custom-made crochet outfits and thoughtfully curated cultural gift sets. From personal wardrobe staples to memorable souvenirs and special occasion gifts, we deliver excellence and creativity in every piece.",
    image: im3,
  },
];
const Specialties: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto  ">
      <h2 className="lg:text-2xl text-5xl font-bold text-center text-yellow-500 mt-10">
        Our Specialties
      </h2>
      <h1 className="text-sm">
         At IMENA HERITAGE RWANDA, our specialty is simple: "Timeless Rwandan heritage meets modern handmade fashion, crafted just for you!" Whether you are looking for ready-to-wear crochet pieces, custom designs, or authentic cultural treasures, we offer personalized craftsmanship and curated artistry tailored to your style and home
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {specialtiesData.map((specialty, index) => (
          <div key={index} className="  p-6 rounded-lg ">
            <img
              src={specialty.image}
              loading="lazy"
              alt={specialty.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="lg:text-lg text-3xl  font-semibold 
            text-yellow-500">
              {specialty.title}
            </h3>
            <p className="lg:text-sm text-xl text-gray-700">
              {specialty.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Specialties;