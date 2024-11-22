// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useId } from 'react';



// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import HeroSliderImages from "./data";

export default function HeroSlider() {
	const uid = useId()

	return (
		<div className="h-[70vh]">
			<Swiper
				key={uid}
				modules={[EffectFade, Navigation, Pagination, Autoplay]}
				spaceBetween={30}
				effect={"fade"}
				autoplay={{
					delay: 1000,
					disableOnInteraction: true,
				}}
				speed={5000}
				loop={true}
				navigation={false}
				pagination={{
					clickable: true,
				}}
				className="mySwiper"
			>
				{HeroSliderImages.map((images) => (
					<SwiperSlide>
						<div key={uid}>
							<img src={images.image} alt={images.image} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
