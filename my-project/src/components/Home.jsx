export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 flex flex-col justify-center items-center text-center text-white px-6 pt-28"
    >
    
      <img
        src="zurag.JPG"
        alt="My profile"
        className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-xl mb-6 hover:scale-105 transition"
      />

      <h1 className="text-4xl font-bold mb-4">
        Сайн байна уу 👋<br />Би Гэвааноров байна
      </h1>

      <p className="text-slate-300 max-w-xl mb-8">
        React, Tailwind ашиглан веб апп, миний тоглоом хөгжүүлэх сонирхолтой
      </p>

      <button
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-2xl text-white text-lg transition"
      >
        🎮 Миний тоглоомууд 🎮
      </button>
    </section>
  );
}
