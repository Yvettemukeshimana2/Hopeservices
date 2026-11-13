 import React from "react";

 const OurProcess: React.FC = () => {
   return (
     <div className="max-w-6xl mx-auto p-8">
       <h2 className="lg:text-2xl text-5xl font-bold text-center text-yellow-500 mb-10">
         Our Process
       </h2>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 -z-50">
         <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
           <h3 className="text-4xl lg:text-lg font-semibold mb-4 text-gray-800">
             We Curate & Consult
           </h3>
           <p className="text-sm">
              We begin by understanding your style and cultural needs—whether you are choosing from our ready-to-wear crochet collection, selecting authentic Rwandan heritage pieces, or requesting a custom garment with your preferred colors, sizes, and yarns.
           </p>
         </div>

         {/* Step 2: We Design */}
         <div className="bg-gradient-to-r from-gray-600 to-gray-200 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
           <h3 className="text-4xl lg:text-lg font-semibold mb-4 text-gray-800">
             We Design
           </h3>
           <p className="text-sm">
              Our design process focuses on blending modern fashion with timeless Rwandan artistry. From sketching bespoke crochet patterns to selecting traditional motifs and local materials, we ensure every piece reflects true craftsmanship and personal style.
           </p>
         </div>

         <div className="bg-gradient-to-r from-purple-400 to-pink-200 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
           <h3 className="text-4xl lg:text-lg font-semibold mb-4 text-gray-800">
              We Handcraft
           </h3>
           <p className="text-sm">
              Every crochet garment is carefully hooked by hand, and every heritage item is sourced directly from skilled Rwandan artisans. We take pride in slow, detailed production—ensuring durability, comfort, and authentic cultural beauty in every stitch and weave.
           </p>
         </div>

         <div className="bg-gradient-to-r from-blue-400 to-indigo-200 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
           <h3 className="font-semibold text-4xl lg:text-lg mb-4 text-gray-800">
              We Quality-Check & Deliver
           </h3>
           <p className="lg:text-sm text-2xl">
              Before your order leaves our shop, we inspect every seam, weave, and finish to guarantee top quality. We package your items with care and coordinate seamless local or international delivery right to your doorstep.
           </p>
         </div>
       </div>
     </div>
   );
 };

 export default OurProcess;
