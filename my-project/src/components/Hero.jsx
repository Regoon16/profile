export default function Hero() {
  return (
    <section className="w-full bg-[#e9f8f6] px-10 py-20 flex flex-col md:flex-row items-center justify-between">
      
      {/* LEFT SIDE */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-800">
        Би одоогоор монгол коосэн сургуульд сурч байгаа <br /> 4-5 ангид сурдаг <br />
          IT мэргэжилээр суралцаж яваа жирийнл нэгэн хүүхэд
        </h1>

        <div className="mt-10 flex flex-col gap-6">
          {/* Feature Row */}
          <div className="flex items-start gap-4">
            <span className="text-teal-600 text-3xl">🚘</span>
            <div>
              <h3 className="font-bold">Машин жолоодох</h3>
              <p className="text-gray-500 text-sm">
                 Сайн жолоодоч чаддаг.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-teal-600 text-3xl">🛌</span>
            <div>
              <h3 className="font-bold">Унтах</h3>
              <p className="text-gray-500 text-sm">
                Сайн унтаж чадна хэтэрхий их унтдаг
                
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-teal-600 text-3xl">🎹</span>
            <div>
              <h3 className="font-bold">Хөгжим</h3>
              <p className="text-gray-500 text-sm">
                Төгөлдөр хуур дажгүй тоглож чадна
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-teal-600 text-3xl">🤳 🍱</span>
            <div>
              <h3 className="font-bold">Хобби</h3>
              <p className="text-gray-500 text-sm">
                 Зураг дарах,хоол хийх,ууланд алхах,дугуй унах хоббитэй
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-teal-600 text-3xl"> 👪 </span>
            <div>
              <h3 className="font-bold">Гэр бүл</h3>
              <p className="text-gray-500 text-sm">
                 Аав,ээж,ах,4 дүүгийн хамт 8лаа байдаг өнөр бүл билээ🥰.
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
        <div className="absolute w-72 h-72 bg-teal-300 rounded-full -z-10 top-10 right-10"></div>
        <img
          src="https://i.postimg.cc/LXzSyrZw/zurag.jpg"
          alt="student"
          className="h-[300px] object-cover"
        />
      </div>

    </section>
  );
}
