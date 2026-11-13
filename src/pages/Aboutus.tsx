 import img1 from "../assets/images/mettings.jpg"
 import img2 from "../assets/images/LOLA-Event-Productions-SouthAsianFlare-Wedding-Chicago-OldPostOffice_0699.jpg"
 import img3 from "../assets/images/LOLA-Event-Productions-SouthAsianFlare-Wedding-Chicago-OldPostOffice_0701.jpg"
import h1 from "../assets/images/Homeimage/his1.jpeg";
import h2 from "../assets/images/Homeimage/his2.jpeg";
import ach1 from "../assets/images/Homeimage/A1.jpeg";
import ach2 from "../assets/images/Homeimage/A2.jpeg";
 const AboutUs = () => {
   return (
     <div className=" space-y-6">
       <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 lg:w-full  sm:bg-yellow-500 -mt-7">
         <div className="relative">
           <img
             src={img2}
             alt="Our Mission"
             loading="lazy"
             className="w-full h-80 object-cover rounded-lg opacity-70"
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-60">
             <h3 className="lg:text-2xl text-5xl  text-yellow-500 font-bold mb-2">
               Our Mission
             </h3>
             <p className="lg:text-sm text-3xl px-4">
                Your destination for unique, handmade crochet fashion and authentic Rwandan heritage pieces. We craft every garment and curate every cultural item with passion, precision, and respect for local artistry—bringing sustainable style and Rwandan tradition straight to your wardrobe and home.
             </p>
           </div>
         </div>
         <div className="relative">
           <img
             src={img1}
             alt="Our Value"
             loading="lazy"
             className="w-full h-80 object-cover rounded-lg opacity-70"
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-60">
             <h3 className="lg:text-2xl text-5xl font-bold mb-2 text-yellow-500">
               Our Value
             </h3>
             <p className="lg:text-sm text-3xl px-4">
                 Craft it with love.
               <br />
                Honor our heritage.
               <br />
               Empower local hands.
               <br />
              Every stitch and piece in our shop reflects these beliefs.
             </p>
           </div>
         </div>
         <div className="relative">
           <img
             src={img3}
             alt="Our Vision"
             loading="lazy"
             className="w-full h-80 object-cover rounded-lg opacity-70"
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-60">
             <h3 className="lg:text-2xl text-5xl font-bold mb-2 text-yellow-500">
               Our Vision
             </h3>
             <p className="lg:text-sm text-3xl px-4">
               We envision a world where Rwandan craftsmanship and slow, handmade fashion are celebrated everywhere. Our goal is to keep cultural traditions alive through modern crochet designs and authentic heritage goods, becoming the premier destination for those who value heart, creativity, and timeless Rwandan artistry.
             </p>
           </div>
         </div>
       </div>

       <div className="flex flex-col lg:flex-row gap-6 items-center">
         <div className="lg:w-1/2 p-6 mx-auto bg-gray-50 rounded-lg shadow-lg">
           <h3 className="lg:text-2xl text-5xl font-bold mb-4 text-yellow-500 text-center">
             Our History
           </h3>
           <p className="lg:text-sm text-3xl text-gray-700">
              Our journey began with a love for handmade artistry and a deep pride in Rwandan culture. What started with a single crochet hook and a vision to share traditional craftsmanship has blossomed into a curated destination for unique crochet wear and authentic heritage pieces, connecting skilled local hands with people who value beauty, tradition, and slow fashion.
           </p>
         </div>
         <div className="lg:w-1/2  w-full  p-5 lg:p-0 grid grid-cols-2 focus-within  gap-4">
           <img
             src={h1}
             alt="History Image 1"
             loading="lazy"
             className="w-full h-56 object-cover mr-5 rounded-lg shadow-md"
           />
           <img
             src={h2}
             alt="History Image 2"
             loading="lazy"
             className="w-full h-56 object-cover mr-10 rounded-lg shadow-md"
           />
         </div>
       </div>
       <div className="flex flex-col lg:flex-row gap-6  items-center">
         <div className="lg:w-1/2  w-full  p-5 lg:p-0  grid grid-cols-2 gap-4 order-2 md:order-1">
           <img
             src={ach2}
             alt="Achievements Image 1"
             loading="lazy"
             className="w-full h-80 p-2 mt-4 ml-2 object-cover rounded-lg shadow-md"
           />
           <img
             src={ach1}
             alt="Achievements Image 2"
             loading="lazy"
             className="w-full h-80 p-2 mt-4 object-cover  rounded-lg shadow-md"
           />
         </div>
         <div className="lg:w-1/2 p-6 bg-gray-50 rounded-lg shadow-lg order-1 lg:order-2">
           <h3 className="lg:text-2xl text-5xl font-bold mb-4 text-yellow-500 text-center">
             Our Achievements
           </h3>
           <p className="lg:text-sm text-3xl text-gray-700">
              What started as a small local passion has grown into a trusted destination for handmade crochet fashion and Rwandan heritage products. Through dedication to fine craftsmanship and cultural preservation, we have built a growing family of repeat customers, delivered hundreds of bespoke crochet pieces, and proudly shared the beauty of Rwandan artistry with visitors and locals alike..
           </p>
         </div>
       </div>
     </div>
   );
 };
 export default AboutUs;