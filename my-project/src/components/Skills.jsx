import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGitAlt,
  } from "react-icons/fa";
  import { SiTailwindcss } from "react-icons/si";
  
  export default function Skills() {
    return (
      <section
        id="skills"
        className="bg-slate-800 py-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-10">
          🛠 Ашигладаг технологиуд
        </h2>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <Skill icon={<FaReact />} name="React" />
          <Skill icon={<FaJs />} name="JavaScript" />
          <Skill icon={<SiTailwindcss />} name="Tailwind" />
          <Skill icon={<FaHtml5 />} name="HTML" />
          <Skill icon={<FaCss3Alt />} name="CSS" />
          <Skill icon={<FaGitAlt />} name="Git" />
        </div>
      </section>
    );
  }
  
  function Skill({ icon, name }) {
    return (
      <div className="bg-slate-900 rounded-2xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition">
        <div className="text-4xl text-blue-400">{icon}</div>
        <p className="text-white">{name}</p>
      </div>
    );
  }
  