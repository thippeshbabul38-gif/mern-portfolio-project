import { motion } from "framer-motion";

function Skills() {

  const skills = [

    {
      name: "HTML",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png"
    },

    {
      name: "CSS",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png"
    },

    {
      name: "JavaScript",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
    },

    {
      name: "React",
      logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
    },

    {
      name: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
    },

    {
      name: "Framer Motion",
      logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
    },

    {
      name: "SQL",
      logo: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
    },

    {
      name: "Java",
      logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png"
    }

  ];

  return (

    <section
      id="skills"
      className="min-h-screen px-8 md:px-20 py-20"
    >

      <h2 className="text-5xl font-bold text-center mb-20">

        My{" "}

        <span className="text-cyan-400">
          Skills
        </span>

      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111827] border border-zinc-800 rounded-3xl p-10 text-center shadow-lg hover:shadow-cyan-500/20 transition-all"
          >

            <img
              src={skill.logo}
              alt={skill.name}
              className="w-20 h-20 mx-auto mb-6 object-contain"
            />

            <h3 className="text-2xl font-bold text-cyan-400">
              {skill.name}
            </h3>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;