import data from '../data/data';

const Footer = () => {
	return (
		<div className="text-center p-2">
			<p className="text-font-secondary">
				Made by&nbsp;
				<a
					href={data.socials.github}
					className=" underline"
					target="_blank"
					rel="noreferrer"
				>
					Nav
				</a>
				, 2021.
			</p>
		</div>
	);
};

export default Footer;
