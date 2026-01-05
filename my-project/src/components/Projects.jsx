const projects = [
  {
    title: "Smart Fridge Friend",
    desc: "AI ашиглан хөргөгч доторх хүнс таних систем",
    tech: "React, AI",
  },
  {
    title: "Portfolio Website",
    desc: "React + Tailwind ашигласан хувийн portfolio",
    tech: "React, Tailwind",
  },
  {
    title: "Tic Tac Toe Game",
    desc: "React ашиглан хийсэн classic тоглоом",
    tech: "React, JavaScript",
  },
  {
    title: "TGLOOOM Game",
    desc: "Logic + interaction дээр суурилсан mini game",
    tech: "JavaScript, Game Logic",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-slate-900 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-slate-800 p-6 rounded-2xl shadow-lg
                       hover:-translate-y-2 hover:shadow-2xl
                       transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">
              {p.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {p.desc}
            </p>

            <span className="text-sm text-blue-400">
              {p.tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
