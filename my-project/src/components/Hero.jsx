export default function Hero() {
  return (
    <section className="w-full bg-[#e9f8f6] px-10 py-20 flex flex-col md:flex-row items-center justify-between">
      
      {/* LEFT SIDE */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
          hsdbahvdavdad <br /> djahdhgsvdhgavdhsavd <br />
          jhvdgfacdgadhvadvas
        </h1>

        <div className="mt-10 flex flex-col gap-6">
          {/* Feature Row */}
          <div className="flex items-start gap-4">
            <span className="text-teal-600 text-3xl">⏱️</span>
            <div>
              <h3 className="font-bold">Fast</h3>
              <p className="text-gray-500 text-sm">
                Urgent reports available within a few hours
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-teal-600 text-3xl">🎯</span>
            <div>
              <h3 className="font-bold">Accurate</h3>
              <p className="text-gray-500 text-sm">
                Latest techniques and guidelines customised to YOU
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-teal-600 text-3xl">🚗</span>
            <div>
              <h3 className="font-bold">Easy Parking</h3>
              <p className="text-gray-500 text-sm">
                Right outside our front door
              </p>
            </div>
          </div>
        </div>

        <button className="mt-10 bg-teal-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-teal-700 transition">
          Book an Appointment
        </button>
      </div>

      {/* RIGHT SIDE (Doctor Image) */}
      <div className="relative mt-12 md:mt-0">
        <div className="absolute w-72 h-72 bg-teal-300 rounded-full -z-10 top-10 right-10"></div>
        <img
          src="https://i.postimg.cc/LXzSyrZw/zurag.jpg"
          alt="student"
          className="h-[380px] object-cover"
        />
      </div>

    </section>
  );
}
