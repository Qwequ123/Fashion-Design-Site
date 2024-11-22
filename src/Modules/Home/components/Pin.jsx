import React from "react";

const Pin = (props) => {
	let { urls } = props;
	return (
		<figure className="inline-flex p-2">
			<div className="flex items-center cursor-pointer w-[236px]">
				<img src={urls?.regular} alt="description" className="flex w-full cursor-pointer rounded-lg object-cover" />
			</div>
		</figure>
	);
};

export default Pin;
