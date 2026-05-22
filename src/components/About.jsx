import { motion } from "framer-motion";

function About() {

  return (

    <section
      id="about"
      className="min-h-screen flex items-center px-8 md:px-20 py-20"
    >

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >

        <h2 className="text-5xl font-bold mb-10">

          About{" "}

          <span className="text-cyan-400">
            Me
          </span>

        </h2>

        <p className="text-zinc-400 text-lg leading-9">

          I am a passionate frontend developer currently learning
          full stack development. I enjoy building responsive,
          animated and user-friendly websites using React,
          Tailwind CSS and Framer Motion.

          <br /><br />

          My goal is to become a professional full stack developer
          and work on real-world modern web applications.

        </p>

      </motion.div>

    </section>
  );
}

export default About;