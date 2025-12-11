export default function page2() {
    const projects = [
      {
        title: "Smart Fridge AI",
        desc: "AI-based fridge item detection using computer vision.",
      },
      {
        title: "Face Recognition + Filter",
        desc: "Real-time face tracking and filter overlay app.",
      },
      {
        title: "Portfolio Website",
        desc: "My personal portfolio built with Next.js.",
      },
    ];
  
    return (
      <main className="p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="border p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }