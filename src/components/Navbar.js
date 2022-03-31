const Navbar = () => {
	// Responsive
	const handleClick = () => {
		const menu = document.querySelector('#nav-menu');
		if (menu.classList.contains('hidden')) {
			menu.classList.remove('hidden');
			menu.classList.add('block');
		} else {
			menu.classList.add('hidden');
		}
	};
	return (
		<nav className="bg-background  navbar-container p-3 md:flex justify-center fixed w-full z-10">
			<div className="navbar w-full xl:w-10/12 sm:flex justify-between items-center">
				<div className="nav-hambuger flex justify-between items-center">
					<a href="/">
						<h1 className="cursor-pointer font-mono text-2xl">&lt;Nav /&gt;</h1>
					</a>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 cursor-pointer sm:hidden"
						onClick={handleClick}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</div>

				<ul
					id="nav-menu"
					className="hidden text-right uppercase mt-3 sm:mt-0 sm:flex sm:w-3/6 xl:w-2/5 justify-around items-center  "
				>
					<li className="mt-2 sm:mt-0 sm:ml-5 md:ml-0 transform hover:-translate-y-1 hover:text-highlight transition duration-200 ease-in-out">
						<a href="/#home" className=" " onClick={handleClick}>
							Home
						</a>
					</li>
					<li className="mt-2 sm:mt-0 sm:ml-5 md:ml-0 transform hover:-translate-y-1 hover:text-highlight transition duration-200 ease-in-out">
						<a href="/#about" onClick={handleClick}>
							About Me
						</a>
					</li>
					<li className="mt-2 sm:mt-0 sm:ml-5 md:ml-0 transform hover:-translate-y-1 hover:text-highlight transition duration-200 ease-in-out">
						<a href="/#projects" onClick={handleClick}>
							Projects
						</a>
					</li>
					<li className="mt-2 sm:mt-0 sm:ml-5 md:ml-0 transform hover:-translate-y-1 hover:text-highlight transition duration-200 ease-in-out">
						<a href="/reachme" onClick={handleClick}>
							Reach Me
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
