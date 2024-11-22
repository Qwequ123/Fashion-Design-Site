import { OurBg, shaun } from "../../../public/images";
import { Hero } from "../Home/components";

const Profile = () => {
	return (
		<>
			<section>
				<figure className="flex flex-col items-center justify-end relative w-full">
					<img
						src={OurBg}
						alt="profile_picture"
						className="background-cover w-full h-60"
					/>

					<img
						src={shaun}
						alt="profile_picture"
						className="profile-image absolute rounded-full w-40 h-40 bottom-[-80px]"
					/>
				</figure>

				<div className="w-full flex flex-col-reverse justify-center items-center py-10 px-[10rem] md:flex md:flex-row md:justify-between md:items-center mt-8">
					<div className="">
						<header className="text-2xl font-semibold">
							Shaun Tha Sheep
						</header>
						<p className="w-80">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Rerum dignissimos in aperiam aut ullam
							distinctio eos doloribus hic, explicabo praesentium
							non tempore quis quaerat. Sapiente fugiat
							repellendus nam a? Rem?
						</p>
					</div>

					<div>
						<div className="flex gap-8  my-10 just">
							<div className="flex flex-col text-center">
								<span>100</span>
								<span>Posts</span>
							</div>
							<div className="flex flex-col text-center">
								<span>1000</span>
								<span>Followers</span>
							</div>
							<div className="flex flex-col text-center">
								<span>200</span>
								<span>Following</span>
							</div>
						</div>

						{/* Share follow icon */}

						<div className="flex gap-8  my-8 justify-between font-bold items-center">
							<div className="flex flex-col text-center">
								<span>Share</span>
							</div>

							<div className="flex flex-col text-center">
								<span className="border-2 border-blue-400  rounded-full px-4 py-2">
									Follow{" "}
								</span>
							</div>
							<div className="flex flex-col text-center">
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
									>
										<path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zM6 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
									</svg>
								</span>
							</div>
						</div>
					</div>
				</div>
				{/* Horizontal line */}
				<hr className="pt-8 mx-10 " />

				{/* <Hero /> */}
			</section>
		</>
	);
};

export default Profile;
