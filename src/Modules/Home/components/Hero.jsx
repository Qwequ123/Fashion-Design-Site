import React from "react";
// import { HeroDropDown } from '../../components'
import { Pin } from ".";

const Hero = (props) => {
	let { pins } = props;
	return (
		<section className="py-16">
			{/* <Masonry /> */}

			<section className="flex w-100 h-full mt-[15px] justify-center">
				<div className="w-[90%] h-full mt-0 m-auto columns-5 max-w-[1260px]">
					{pins.map((pin, index) => {
						let { urls } = pin;
						return <Pin key={index} urls={urls} />;
					})}
				</div>
			</section>
		</section>
	);
};

export default Hero;
