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
          <Skill
            icon={<FaReact />}
            name="React"
            link="https://react.dev"
          />
          <Skill
            icon={<FaJs />}
            name="JavaScript"
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <Skill
            icon={<SiTailwindcss />}
            name="Tailwind"
            link="https://tailwindcss.com"
          />
          <Skill
            icon={<FaHtml5 />}
            name="HTML"
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
          />
          <Skill
            icon={<FaCss3Alt />}
            name="CSS"
            link="https://developer.mozilla.org/en-US/docs/Web/CSS"
          />
          <Skill
            icon={<FaGitAlt />}
            name="Git"
            link="https://git-scm.com"
          />
        </div>
      </section>
    );
  }
  
  function Skill({ icon, name, link }) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-900 rounded-2xl p-6 flex flex-col items-center gap-3
                   hover:scale-105 hover:bg-slate-700 transition cursor-pointer"
      >
        <div className="text-4xl text-blue-400">{icon}</div>
        <p className="text-white font-medium">{name}</p>
        <span className="text-xs text-slate-400"></span>
      </a>
    );
  }
  