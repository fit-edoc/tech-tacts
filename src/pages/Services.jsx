import React from "react";
import webb from '/images/web.png'
const Services = () => {
  return (
    <div className="show h-[101vh] w-screen">
      <div className="h-[101vh] w-[90%] bg-white/5 absolute flex   left-[5.5%]">
        <div className="h-full w-[50%]"></div>
        <div className="h-full md:w-[50%]">
          <div className="h-[50%] w-full   px-2 text-white md:flex flex-col justify-center items-center">
            <h1 className="text-center  font-bold md:text-[3vw]">How we do </h1>
          <p className="mt-5">
            At Tech Tacts, we blend innovation with expertise to deliver
            top-notch digital solutions tailored to your business needs. Whether
            it's web development, SEO, digital business solutions, Android
            development, or graphic design, we ensure your brand stands out in
            the digital world. With a passion for creativity and technology, we
            help businesses establish a strong online presence, drive
            engagement, and accelerate growth. Let's turn your ideas into
            reality and take your brand to new heights!
          </p>
          </div>
          <div className="h-[50%] w-full "> <img src={webb} className="h-full w-full object-contain  md:object-cover" alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
