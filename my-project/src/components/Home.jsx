export default function Home() {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-slate-900 text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4">
            Сайн байна уу? <span className="text-blue-500">Гэвааноров</span> байна.
          </h1>
          <p className="text-gray-400 mb-6">
          React • Tailwind
          </p>
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >
            Миний бүтээлийг үзнэ үү
          </a>
        </div>
      </section>
    );
  }
  