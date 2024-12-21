const WhyUs = () => {
  return (
    <>
      <h1 className="mx-auto mb-8 mt-16 text-center text-4xl md:text-5xl text-[#f59542] font-bold">
        Why Choose Us
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap w-11/12 md:w-3/4 gap-10 md:gap-20 mx-auto items-center justify-center">

        {/* items */}

        <div className="w-full md:w-5/12 flex flex-col hover:bg-[#f59542] hover:text-white pb-8 rounded-xl shadow-2xl transition-all duration-500 ease-in-out hover:scale-110">
          <div>
            <img className="h-24 pt-8 pl-8 mx-auto md:mx-0" src="/timeLogo.png" alt="" />
          </div>
          <div className="text-center md:text-left pl-0 md:pl-8 pt-3 font-bold">
            Timely Delivery
          </div>
          <div className="text-center md:text-left px-6 md:px-8 pt-3 break-words">
            <span>
              We strictly follow time delivery schedules and strive hard to deliver products within time.
            </span>
          </div>
        </div>

        <div className="w-full md:w-5/12 flex flex-col hover:bg-[#f59542] hover:text-white pb-8 rounded-xl shadow-2xl transition-all duration-500 ease-in-out hover:scale-110">
          <div>
            <img
              className="h-24 pt-4 pl-6 mx-auto md:mx-0"
              src="https://cdn0.iconfinder.com/data/icons/art-designing-glyph/2048/1871_-_Magnifier-512.png"
              alt=""
            />
          </div>
          <div className="text-center md:text-left pl-0 md:pl-6 pt-3 font-bold">
            Best Quality
          </div>
          <div className="text-center md:text-left px-6 md:px-8 pt-3 break-words">
            <span>
              We strictly follow time delivery schedules and strive hard to deliver products within time.
            </span>
          </div>
        </div>

        <div className="w-full md:w-5/12 flex flex-col hover:bg-[#f59542] hover:text-white pb-8 rounded-xl shadow-2xl transition-all duration-500 ease-in-out hover:scale-110">
          <div>
            <img className="h-24 pt-8 pl-8 mx-auto md:mx-0" src="/priceLogo.png" alt="" />
          </div>
          <div className="text-center md:text-left pl-0 md:pl-8 pt-3 font-bold">
            Competitive Pricing
          </div>
          <div className="text-center md:text-left px-6 md:px-8 pt-3 break-words">
            <span>
              We strictly follow time delivery schedules and strive hard to deliver products within time.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
