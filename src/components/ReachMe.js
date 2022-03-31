// Icons
import { SiGmail } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';

// Data
import data from '../data/data';

const ReachMe = () => {
	return (
		<div className="h-screen p-2 flex flex-col md:justify-center items-center">
			<div className="w-full flex pt-16 flex-col justify-start items-center xl:w-10/12 xl:mx-auto">
				<h1 className="text-2xl sm:text-3xl md:text-4xl w-full text-center">
					Reach Me
				</h1>

				<div className="flex flex-col justify-center items-center w-full sm:flex-row">
					<img
						src={`${process.env.PUBLIC_URL}/static/svg/social.svg`}
						className="mt-4 w-3/5 sm:w-2/6 sm:ml-12 xl:ml-0"
						alt=""
					/>
					<div className="flex flex-col mt-4 justify-around items-center w-full sm:w-4/6  sm:ml-5">
						<a
							href={data.socials.gmail}
							target="_blank"
							rel="noreferrer"
							className="w-full lg:w-4/5 my-2 border rounded-md border-font-secondary p-4 transform hover:-translate-y-1 hover:text-highlight transition duration-200 ease-in-out"
						>
							<div className="w-full text-font flex items-center">
								<SiGmail size="2em" color="#EA4335" />

								<div className="ml-3 flex flex-col justify-start items-start  ">
									<h3 className="text-lg font-semibold">
										arnavrgupta002@gmail.com
									</h3>
									<p className="text-xs text-font-secondary">Gmail</p>
								</div>
							</div>
						</a>
						<a
							href={data.socials.linkedIn}
							target="_blank"
							rel="noreferrer"
							className="w-full lg:w-4/5 my-2 border rounded-md border-font-secondary p-4 transform hover:-translate-y-1 hover:text-highlight transition duration-200 ease-in-out"
						>
							<div className="w-full text-font flex items-center">
								<BsLinkedin size="2em" color="#0071AE" />

								<div className="ml-3 flex flex-col justify-start items-start  ">
									<h3 className="text-lg font-semibold">Arnav Gupta</h3>
									<p className="text-xs text-font-secondary">LinkedIn</p>
								</div>
							</div>
						</a>

						<a
							href={data.socials.github}
							target="_blank"
							rel="noreferrer"
							className="w-full lg:w-4/5 my-2 border rounded-md border-font-secondary p-4 transform hover:-translate-y-1 hover:text-highlight transition duration-200 ease-in-out"
						>
							<div className="w-full text-font flex items-center">
								<AiFillGithub size="2em" color="#e0e1dd" />

								<div className="ml-3 flex flex-col justify-start items-start  ">
									<h3 className="text-lg font-semibold">ArnavGuptaaa</h3>
									<p className="text-xs text-font-secondary">Github</p>
								</div>
							</div>
						</a>
						<a
							href={data.socials.twitter}
							target="_blank"
							rel="noreferrer"
							className="w-full lg:w-4/5 my-2 border rounded-md border-font-secondary p-4 transform hover:-translate-y-1 hover:text-highlight transition duration-200 ease-in-out"
						>
							<div className="w-full text-font flex items-center">
								<BsTwitter size="2em" color="#009DED" />

								<div className="ml-3 flex flex-col justify-start items-start  ">
									<h3 className="text-lg font-semibold">CoderNav_</h3>
									<p className="text-xs text-font-secondary">Twitter</p>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReachMe;
