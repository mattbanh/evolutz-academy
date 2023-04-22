import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import gsxLogo from "/public/assets/partner-logos/gsx-logo.png";
import siberxLogo from "/public/assets/partner-logos/siberx-logo.png";
import bondLogo from "/public/assets/partner-logos/bond-logo.png";
import ifsecLogo from "/public/assets/partner-logos/ifsec-global-logo.png";
import cyberTorontoLogo from "/public/assets/partner-logos/cyber-toronto-logo.jpg";
import mediumLogo from "/public/assets/partner-logos/medium-logo.png";
import investOttawaLogo from "/public/assets/partner-logos/invest-ottawa-logo.png";

export default function Carousel() {
  return (
    <section className="mx-auto h-80 px-5 md:px-14 w-[320px] md:w-full">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          768: {
            width: 924,
            slidesPerView: 3,
            spaceBetween: 40,
          },

          1280: {
            width: 924,
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[264px] flex justify-center items-center shadow-surround">
            <Image className="w-32" src={gsxLogo} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[264px] flex justify-center items-center shadow-surround">
            <Image className="w-32" src={siberxLogo} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[264px] flex justify-center items-center shadow-surround">
            <Image className="w-32" src={bondLogo} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[264px] flex justify-center items-center shadow-surround">
            <Image className="w-32" src={ifsecLogo} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[264px] flex justify-center items-center shadow-surround">
            <Image className="w-32" src={cyberTorontoLogo} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[264px] flex justify-center items-center shadow-surround">
            <Image className="w-32" src={mediumLogo} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[264px] flex justify-center items-center shadow-surround">
            <Image className="w-32" src={investOttawaLogo} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
