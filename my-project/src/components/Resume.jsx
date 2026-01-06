export default function Resume() {
    return (
      <section id="resume" className="py-20 bg-black text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Resume</h2>
  
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold mb-4">🔥 Ур чадвар 🔥</h3>
            <ul className="text-gray-400 space-y-2">
              <li>✔ React / JSX</li>
              <li>✔ Tailwind CSS</li>
              <li>✔ JavaScript</li>
              <li>✔ Git</li>
            </ul>
          </div>
  
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold mb-4">🎓 Боловсрол 🎓</h3>
            <p className="text-gray-400">
            Мэдээллийн технологийн оюутан - Вэб хөгжүүлэлт
            </p>
            <p className="text-gray-400">
              Одоо монгол коосэнд компьютерын ангид сурдаг 🫶
            </p>
          </div>
        </div>
      </section>
    );
  }
  