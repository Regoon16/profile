export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur text-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold">Гэвааноров</h1>
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#resume" className="hover:text-blue-400">Resume</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
