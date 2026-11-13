 import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Scissors, Sparkles, Gift } from "lucide-react";
import { motion } from "framer-motion";
import bg from "../assets/images/3U8A0855.jpg";

interface FormInputs {
  name: string;
  email: string;
  inquiryType: string;
  subject: string;
  message: string;
}

const inquiryTypes = [
  "Custom crochet outfit",
  "Heritage wear / traditional attire",
  "Wedding & ceremony collection",
  "Wholesale & boutique orders",
  "Crochet workshop / class",
  "Collaboration / press",
  "General question",
];

const highlights = [
  {
    icon: Scissors,
    title: "Handmade Crochet",
    text: "Dresses, tops, shawls, bags and accessories crocheted stitch by stitch.",
  },
  {
    icon: Sparkles,
    title: "Heritage Fashion",
    text: "Designs inspired by Rwandan patterns, imigongo motifs and traditional wear.",
  },
  {
    icon: Gift,
    title: "Made to Measure",
    text: "Custom pieces for weddings, ceremonies, gifts and everyday style.",
  },
];

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormInputs>({ defaultValues: { inquiryType: inquiryTypes[0] } });

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    reset();
  };

  const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-amber-50"
    >
      {/* HERO */}
      <header className="relative flex justify-center bg-black overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={bg}
          loading="lazy"
          alt="Heritage and crochet fashion"
          className="w-full h-96 object-cover opacity-40 bg-black"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* <h1 className="text-5xl lg:text-6xl text-white font-semibold">MHS</h1> */}
            <p className="text-yellow-500 text-xs md:text-sm tracking-widest font-semibold uppercase">
              IMENA Heritage &amp; Crochet Fashion
            </p>
            <h2 className="text-3xl md:text-4xl mt-5 font-bold text-white">
              WOVEN BY HAND,{" "}
              <span className="text-yellow-500">ROOTED IN HERITAGE</span>
            </h2>
            <p className="mt-3 text-gray-200 max-w-xl mx-auto text-sm md:text-base">
              Crochet fashion and traditional-inspired wear, made with love for
              you and your special moments.
            </p>
          </motion.div>

          <motion.a
            href="#contact-form"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 border-2 border-yellow-400 rounded-full text-white font-bold hover:bg-yellow-500 hover:text-black transition-colors duration-300"
          >
            Order or Enquire
          </motion.a>
        </div>
      </header>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              className="bg-white rounded-lg shadow-md p-6 text-center border-b-4 border-yellow-500"
            >
              <Icon className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-gray-600 text-sm mt-2">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LOCATION */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-yellow-500">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Visit Our Studio &amp; Showroom
          </h2>
          <div className="w-full h-64 bg-gray-200 mb-6 rounded-lg overflow-hidden">
            <iframe
              title="Kigali Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.731971859826!2d30.0648!3d-1.9444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7eae2393d07%3A0x354d5a92d5c8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1686102805929!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-yellow-600 mt-1 shrink-0" />
              <div className="text-sm">
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">KG 17 Ave, Kigali – Rwanda</p>
                <p className="text-gray-600">24X8+MM Kigali</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-yellow-600 mt-1 shrink-0" />
              <div className="text-sm">
                <h3 className="font-semibold">Phone / WhatsApp</h3>
                <p className="text-gray-600">(+250) 788501009</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-yellow-600 mt-1 shrink-0" />
              <div className="text-sm">
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@muheservices.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-yellow-600 mt-1 shrink-0" />
              <div className="text-sm">
                <h3 className="font-semibold">Studio Hours</h3>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500 text-center italic">
            Fittings and custom-order consultations are by appointment.
          </p>
        </div>

        {/* FORM */}
        <div
          id="contact-form"
          className="bg-white rounded-lg shadow-lg p-6 border-2 border-yellow-500"
        >
          <h2 className="font-bold text-2xl mb-6 text-center">
            Tell Us About Your Piece
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 2, message: "Name must be at least 2 characters" },
                })}
                type="text"
                className={inputClass}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                className={inputClass}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <select
                {...register("inquiryType", { required: "Please choose a type" })}
                className={`${inputClass} bg-white`}
              >
                {inquiryTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <input
                {...register("subject", {
                  required: "Subject is required",
                  minLength: { value: 5, message: "Subject must be at least 5 characters" },
                })}
                type="text"
                className={inputClass}
                placeholder="e.g. Crochet dress for a wedding in March"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "Message must be at least 10 characters" },
                })}
                rows={5}
                className={inputClass}
                placeholder="Describe your idea: item, colours, size, occasion and the date you need it by"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full font-bold text-lg lg:text-base border-2 border-yellow-500 hover:bg-white text-black py-2 px-4 rounded-md bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
            >
              Send Message
            </button>
          </form>

          {isSubmitSuccessful && (
            <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">
              Thank you! We've received your message and will get back to you soon.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;