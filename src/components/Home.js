// Icons
import { DiCss3 } from 'react-icons/di';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail, SiJavascript } from 'react-icons/si';
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

// Components
import Projects from './Projects';

// Data
import data from '../data/data';

const Home = () => {
	// Download Resume
	const handleDownload = () => {
		const a = document.createElement('a');
		const url = `${process.env.PUBLIC_URL}/static/pdf/Resume.pdf`;

		a.href = url;
		a.download = url.split('/').pop();
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

	return (
		<div className="flex flex-col justify-center items-center p-2">
			<section
				id="home"
				className="home-container h-95 flex flex-col justify-center items-center pt-16  sm:flex-row-reverse md:p-5 md:pt-20 xl:w-10/12"
			>
				<div className=" sm:w-2/5 m-5 sm:m-0 ">
					<img
						src={`${process.env.PUBLIC_URL}/static/svg/developer2.svg`}
						alt="Developer Illustration"
					/>
				</div>
				<div className="mt-5 text-center flex flex-col justify-around items-center sm:w-3/5 sm:items-stretch sm:text-left sm:mr-10">
					<h1 className="text-3xl md:text-5xl">
						<span className="font-roboto text-4xl sm:text-5xl md:text-7xl">
							Arnav Gupta.
						</span>
					</h1>

					<div className="mt-2 text-font-secondary sm:mt-2 md:text-lg">
						FrontEnd Developer | Cloud Enthusiast | Student
					</div>
					<div className=" flex justify-around items-center w-3/5 sm:justify-between md:w-2/6 mt-8 xl:w-1/5">
						<a
							href={data.socials.linkedIn}
							target="_blank"
							rel="noreferrer"
							className="transform hover:-translate-y-1 transition duration-200 ease-in-out"
						>
							<BsLinkedin size="2em" color="#0071AE" />
						</a>

						<a
							href={data.socials.gmail}
							target="_blank"
							rel="noreferrer"
							className=" transform hover:-translate-y-1 transition duration-200 ease-in-out"
						>
							<SiGmail size="2em" color="#EA4335" />
						</a>

						<a
							href={data.socials.github}
							target="_blank"
							rel="noreferrer"
							className=" transform hover:-translate-y-1 transition duration-200 ease-in-out"
						>
							<AiFillGithub size="2em" color="#e0e1dd" />
						</a>
					</div>
				</div>
			</section>
			<section
				id="about"
				className="h-screen flex flex-col justify-center items-center mt-9 xl:w-10/12"
			>
				<h1 className="text-2xl sm:text-3xl md:text-4xl ">A Bit About Me</h1>
				<div className=" sm:flex justify-center items-center sm:mt-5">
					<div className="m-5 sm:m-0 sm:w-2/5">
						<img
							src={`${process.env.PUBLIC_URL}/static/svg/developer.svg`}
							alt="Developer Illustration 2"
						/>
					</div>
					<div className="flex flex-col  justify-around items-center sm:items-end sm:w-3/5">
						<p className=" mt-4 text-center md:text-lg text-font-secondary sm:mt-0 sm:ml-5 sm:text-right ">
							I am a student pursuing&nbsp;
							<span className="text-highlight">third year of CSE</span>&nbsp;in
							Symbiosis Institute Of Technology. I love solving problems and
							creating solutions to them using my skills. I have a keen interest
							&nbsp;
							<span className="text-highlight">web development</span>.
							Currently, I am learning more about&nbsp;
							<span className="text-highlight">cloud technologies &nbsp;</span>
							and its services and other backend technologies.
						</p>
						<div className="flex justify-between items-center w-full mt-4 sm:w-4/5 md:w-3/5 xl:w-2/5">
							<AiFillHtml5 size="2em" color="#D84924" />
							<DiCss3 size="2em" color="#0A72B1" />
							<SiJavascript size="2em" color="#E4D04B" />
							<FaPython size="2em" color="#3770A1" />
							<FaReact size="2em" color="#4FB7D3" />
							<FaNodeJs size="2em" color="#85BE47" />
						</div>
						<button
							className="hover-effect border-highlight text-highlight border-2 rounded-md p-2 mt-10"
							onClick={handleDownload}
						>
							Download Resume
						</button>
					</div>
				</div>
			</section>
			<Projects />
		</div>
	);
};

export default Home;
