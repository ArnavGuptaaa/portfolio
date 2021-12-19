const Card = ({ imgUrl, title, tags, description, isLive, projectUrl }) => {
	return (
		<div className="card relative border rounded-xl overflow-hidden border-font-secondary w-11/12 my-3 mx-auto sm:mx-0 max-w-sm md:max-w-sm">
			<img
				src={imgUrl}
				className="object-cover w-full border-b border-font-secondary"
				alt=""
			/>
			<div className="p-2 flex flex-col justify-around items-center">
				<h1 className="text-2xl font-bold my-2 w-full ">{title}</h1>

				<p className="mt-2 text-font-secondary">{description}</p>
				<div className="w-full p-2 mt-4">
					{tags.map((tag, i) => (
						<span className=" font-medium mr-2 text-highlight" key={i}>
							{tag}
						</span>
					))}
				</div>
				<div className="p-2 absolute right-2 bottom-2 cursor-pointer hover-effect">
					<div className="border border-highlight rounded-full p-2 ">
						<a
							className="text-md text-highlight font-bold"
							href={projectUrl}
							target="_blank"
							rel="noreferrer"
						>
							{isLive ? 'Demo Site' : 'Github Repo'}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
