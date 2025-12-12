export default function Hero() {
  return (
    <section className="w-full bg-[#e9f8f6] px-10 py-20 flex flex-col md:flex-row items-center justify-between">
      
      {/* LEFT SIDE */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-800">
        huuurhun tsairailag nzdaab tursun <br /> udriin mend hurgii hairtai shuu onjig mini <br />
          hamtdaa zunduu olon dursamj buteltsend bayrlalaaa❤️❤️❤️❤️ ter dood talin youtube link daraad duugaa sonsoorei haahahaha
        </h1>

        <div className="mt-10 flex flex-col gap-6">
          {/* Feature Row */}
          <div className="flex items-start gap-4">
            <span className="text-teal-600 text-3xl">🥰</span>
            <div>
              <h3 className="font-bold">Найз минь, чи байхгүй бол уйтгартай шүү 😄</h3>
              <p className="text-gray-500 text-sm">
                 
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-teal-600 text-3xl">😃</span>
            <div>
              <h3 className="font-bold">Чи байснаараа л хангалттай гоё хүн. Яг иймээрээ байгаарай 🤍</h3>
              <p className="text-gray-500 text-sm">
              
                
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-teal-600 text-3xl"> 😎 </span>
            <div>
              <h3 className="font-bold">Алдаа бол төгсгөл биш, харин туршлага mundag shuu llraa</h3>
              <p className="text-gray-500 text-sm">
                
              </p>
            </div>
          </div>
        </div>

        <button className="mt-10 bg-teal-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-teal-700 transition">
          Анхаарал хандуулсанд баярлалаа😉.
        </button>
      </div>

      {/* RIGHT SIDE (Doctor Image) */}
      <div className="relative mt-12 md:mt-0">
        <div className="absolute w-72 h-72 bg-teal-300 rounded-full -z-10 top-10  right-10"></div>
        <img
          src="https://i.postimg.cc/65j6DJnh/Screenshot-2025-12-13-at-04-07-35.png"
          alt="student"
          className="h-[300px] object-cover w-64 h-auto rounded-xl border-4 border-gray-300"
        />
      </div>

    </section>
  );
}
