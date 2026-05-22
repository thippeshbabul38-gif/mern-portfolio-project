import { motion } from "framer-motion";
import hero1 from "../assets/hero1.png";

function Hero() {

  return (

    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-10 lg:px-24 py-20 gap-16"
    >

      {/* LEFT SIDE */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >

        <h3 className="text-2xl mb-4 text-zinc-300">
          Hello, It's Me
        </h3>

        <h1 className="text-5xl lg:text-7xl font-bold mb-5">
          Thippesh
        </h1>

        <h2 className="text-3xl lg:text-5xl font-bold mb-6">

          And I'm a{" "}

          <span className="text-cyan-400">
            Full Stack Developer
          </span>

        </h2>

        <p className="text-zinc-400 text-lg leading-8 mb-10">

          Passionate about building modern,
          responsive and animated websites
          using React and Tailwind CSS.

        </p>

       {/* Updated Button */}
       <a
  href="http://localhost:5000/resume"
  className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-full font-bold shadow-[0_0_30px_#22d3ee] hover:scale-105 transition-all"
>
  Download CV
</a>

      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >

        <div className="w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full border-[10px] border-cyan-400 shadow-[0_0_60px_#22d3ee] overflow-hidden">
          <img
            src={hero1}
            alt="profile"
            className="w-full h-full object-cover"
          />

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;