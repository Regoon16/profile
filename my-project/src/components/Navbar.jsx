export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-10 bg-white">
      <div className="flex items-center gap-2">
        <img
          src="https://i.ibb.co/9W1q0Vt/logo.png"
          alt="logo"
          className="h-10"
        />
        <p className="text-xl font-semibold text-gray-700">Гэвааноров</p>
      </div>

      <div className="hidden md:flex items-center gap-8 text-gray-600">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Bookings</a>
      </div>

      <button className="border border-teal-500 py-2 px-5 rounded-lg text-teal-600 hover:bg-teal-50">
        Hello
      </button>
    </nav>
  );
}
