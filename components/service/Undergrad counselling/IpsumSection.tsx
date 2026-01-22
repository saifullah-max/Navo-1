import React from "react";

const IpsumSection = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col justify-center items-start relative"
      style={{ backgroundColor: "#e7f941" }}
    >
      <div className="pl-8 pt-12 md:pl-16 md:pt-12 lg:pt-12 z-10 max-w-2xl">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#03336d] leading-tight mb-4">
          SPOTTING<br />WHAT<br />MATTERS!
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl text-[#03336d] font-medium">
          College counselling<br />with precision!
        </p>
      </div>
      <div
        className="absolute left-1/2 bottom-0 translate-x-[-10%] z-0 flex justify-center items-end p-6"
        style={{
          backgroundColor: "#e7f941",
          borderRadius: "24px",
          width: "800px",
          height: "340px",
        }}
      >

        <img
          src="/undergrad-banner.png"
          alt="undergrad banner"
          className="w-[420px] md:w-[520px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px] h-auto object-contain"
          style={{ backgroundColor: '#e7f941', borderRadius: '24px' }}
        />
      </div>
    </section>
  );
};

export default IpsumSection;