// Components
import Card from './Card';

// Data
import data from '../data/data';

const Projects = () => {
	return (
		<section
			id="projects"
			className="w-full pt-5 flex flex-col justify-center items-center xl:w-10/12"
		>
			<div className="mt-9 w-full sm:h-full">
				<h1 className="text-2xl sm:text-3xl md:text-4xl text-center">
					My Projects
				</h1>

				<div className="w-full flex flex-col justify-around items-stretch h-full mt-5 sm:flex-row flex-wrap">
					{data.projects.map((project) => (
						<Card
							key={project.id}
							imgUrl={project.imgUrl}
							title={project.title}
							tags={project.tags}
							description={project.description}
							isLive={project.isLive}
							projectUrl={project.projectUrl}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
