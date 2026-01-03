const projects = [
    { title: "Smart Fridge Friend", tech: "React, AI" },
    { title: "Portfolio Website", tech: "React, Tailwind" },
    { title: "Procon System", tech: "JS, Algorithm" },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-slate-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
  
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-slate-800 p-6 rounded-xl hover:-translate-y-2 transition shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400">{p.tech}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  