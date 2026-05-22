import { motion } from "framer-motion";

function Portfolio() {

  const projects = [
    {
      title: "Expense Tracker",
      desc: "Track expenses easily."
    },
    {
      title: "Portfolio Website",
      desc: "Modern animated portfolio."
    },
    {
      title: "Weather App",
      desc: "Real-time weather updates."
    }
  ];

  return (

    <section
      id="portfolio"
      className="min-h-screen px-8 md:px-20 py-20"
    >

      <h2 className="text-5xl font-bold text-center mb-20">

        Latest{" "}

        <span className="text-cyan-400">
          Projects
        </span>

      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#111827] rounded-2xl overflow-hidden border border-zinc-800 hover:scale-105 transition-all"
          >

            <div className="h-60 bg-cyan-400"></div>

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400">
                {project.desc}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Portfolio;