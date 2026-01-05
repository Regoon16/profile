export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
  
        <form className="max-w-xl mx-auto bg-black p-8 rounded-xl space-y-4">
          <input required placeholder="Name" className="w-full p-3 rounded bg-slate-800" />
          <input required type="email" placeholder="Email" className="w-full p-3 rounded bg-slate-800" />
          <textarea required placeholder="Message" className="w-full p-3 rounded bg-slate-800"></textarea>
  
          <button className="w-full py-3 bg-blue-600 rounded hover:bg-blue-700 transition">
          Илгээх
          </button>
        </form>
      </section>
    );
  }
  