import React from "react";
import { Link } from "react-router-dom";

const signup = () => {
return (
	<>
		<div className="signupbg bg-opacity-50 bg-black">
			<div className="hidden lg:block absolute bottom-[50%] ml-48 text-white">
			<h1
				className="text-5xl font-bold       tracking-tighter 
		"
			>
				Fashion
			</h1>
			<p className="">Shop Your favourite Dress here</p>
			</div>
			<div className="flex justify-center lg:flex lg:justify-end  lg:mx-[10%]">
			<div className="w-full mx-5 lg:w-[50%] max-w-[700px] px-10 py-20 rounded-3xl border-2 bg-white border-gray-100  my-8 ">
				<h1 className="text-4xl font-semibold">Sign Up</h1>
				<div className="mt-5 flex ">
				<p className="font-medium text-2xl">
					Create an account
				</p>
				</div>

				{/* icons */}

				<div className="flex gap-2 mt-5">
				{/* google icon */}
				<button className="flex  gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 px-4 text-gray-700 font-semibold text-lg border-2 rounded-full border-gray-100 ">
					<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					>
					<path
						d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
						fill="#EA4335"
					/>
					<path
						d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
						fill="#34A853"
					/>
					<path
						d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
						fill="#4A90E2"
					/>
					<path
						d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
						fill="#FBBC05"
					/>
					</svg>
				</button>

				{/* facebook icon */}
				<button className="flex  gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 px-4 text-gray-700 font-semibold text-lg border-2 rounded-full border-gray-100 ">
					<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="24"
					height="24"
					viewBox="0 0 48 48"
					>
					<linearGradient
						id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
						x1="9.993"
						x2="40.615"
						y1="9.993"
						y2="40.615"
						gradientUnits="userSpaceOnUse"
					>
						<stop
						offset="0"
						stop-color="#2aa4f4"
						></stop>
						<stop
						offset="1"
						stop-color="#007ad9"
						></stop>
					</linearGradient>
					<path
						fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
						d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
					></path>
					<path
						fill="#fff"
						d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
					></path>
					</svg>
				</button>

				{/* apple icon */}

				<button className="flex  gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 px-4 text-gray-700 font-semibold text-lg border-2 rounded-full border-gray-100 ">
					<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="24"
					height="24"
					viewBox="0 0 50 50"
					>
					<path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
					</svg>
				</button>

				{/* Microsoft icon */}
				<button className="flex  gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 px-4 text-gray-700 font-semibold text-lg border-2 rounded-full border-gray-100 ">
					<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="24"
					height="24"
					viewBox="0 0 48 48"
					>
					<path
						fill="#ff5722"
						d="M6 6H22V22H6z"
						transform="rotate(-180 14 14)"
					></path>
					<path
						fill="#4caf50"
						d="M26 6H42V22H26z"
						transform="rotate(-180 34 14)"
					></path>
					<path
						fill="#ffc107"
						d="M26 26H42V42H26z"
						transform="rotate(-180 34 34)"
					></path>
					<path
						fill="#03a9f4"
						d="M6 26H22V42H6z"
						transform="rotate(-180 14 34)"
					></path>
					</svg>
				</button>
				</div>

				{/* Or word */}
				<h1 className="flex justify-center orword items-center mt-4">
				Or
				</h1>

				{/* sign up with emal */}

				<div className="mt-4">
				<h2 className="text-l font-medium">
					Sign Up with email
				</h2>
				<div className="flex">
					<p className="text-sm">
					Already have an account?{" "}
					</p>
					<Link
					to="/login"
					className="ml-2 font-medium text-sm text-blue-500"
					>
					Sign in
					</Link>
				</div>
				</div>

				{/* email */}
				<div className="mt-8">
				<div className="flex flex-col">
					<label className="text-lg font-medium">
					Email
					</label>
					<input
					className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
					placeholder="Enter your email"
					/>
				</div>

				{/* password */}
				<div className="flex flex-col mt-4">
					<label className="text-lg font-medium">
					Password
					</label>
					<input
					className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
					placeholder="Enter your password"
					type={"password"}
					/>
				</div>

				{/* Confirm Password */}
				<div className="flex flex-col mt-4">
					<label className="text-lg font-medium">
					Confirm Password
					</label>
					<input
					className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
					placeholder="Confirm password"
					type={"password"}
					/>
				</div>

				<div className="mt-8 flex justify-between items-center">
					<div>
					<input type="checkbox" id="remember" />
					<label
						className="ml-2    text-sm"
						for="remember"
					>
						I agree to (a)Free Membership Agreement,
						(b) Terms of Use, and (c) Privacy
						Policy. I agree to receive more
						information from Fashion.com about its
						products and services.
					</label>
					</div>
					{/* <button className="font-medium text-base text-blue-500">
					Forgot password
					</button> */}
				</div>

				<div className="mt-8 flex flex-col gap-y-4">
					<button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-blue-500 rounded-xl text-white font-bold text-lg">
					Accept and register
					</button>
				</div>
				</div>
			</div>
			</div>
		</div>
	</>
);
};

export default signup;
