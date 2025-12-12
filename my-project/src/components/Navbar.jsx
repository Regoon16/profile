export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-10 bg-white">
      <div className="flex items-center gap-2">
        <img
          src="https://i.postimg.cc/c1n9n7Lf/IMG-0003.jpg"
          alt="logo"
          className="h-20"
        />
        <p className="text-xl font-semibold text-gray-700">Erdenetugsd</p>
      </div>

      <div className="hidden md:flex items-center gap-8 text-gray-600">

      </div>

      <button className="border border-teal-500 py-2 px-5 rounded-lg text-teal-600 hover:bg-teal-50">
        unjiiii2
      </button>
    </nav>
  );
}
