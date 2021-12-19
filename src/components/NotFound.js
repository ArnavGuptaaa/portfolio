const NotFound = () => {
	return (
		<div className="w-full h-95 flex justify-center items-center">
			<div className=" w-full flex flex-col sm:flex-row justify-around items-center bg-background xl:w-10/12 p-2">
				<img
					className="w-4/5 sm:w-2/5 m-5 sm:m-0"
					src={`${process.env.PUBLIC_URL}/static/svg/404.svg`}
					alt="404 Illustration"
				/>
				<div className="flex flex-col justify-around items-center">
					<h2 className="mt-4 text-md sm:text-lg md:text-2xl text-center">
						The page youre trying to reach was not found
					</h2>
					<a
						href="/"
						className="border-highlight text-highlight border-2 p-2 mt-5 rounded-md"
					>
						Back To Homepage
					</a>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
