// TODO: @types 폴더로 분리
interface ProjectInfo {
  title: string;
  imgSrc: string;
  subTitle: string;
  description: string;
  skills: string[];
}

interface ProjectPageProps {
  openModal: (project: ProjectInfo) => void;
}

const ProjectPage = ({ openModal }: ProjectPageProps) => {
  const projectList = [
    {
      imgSrc:
        'https://cdn.prod.website-files.com/6501e17b507eeeaff049b022/67901639eebcf9258487699c_6790157aa3bd2fbc5bc68ddf_Red-Note-Hero.jpeg',
      subTitle: 'Words by Zoey Zhu and Savannah Kunovsky',
      title: 'Design Lessons from the Cultural Exchange on Red Note',
      description:
        'Two technologists on opportunities in interaction design, the cat tax, and more.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    },
    {
      imgSrc:
        'https://cdn.prod.website-files.com/6501e17b507eeeaff049b022/67901639eebcf9258487699c_6790157aa3bd2fbc5bc68ddf_Red-Note-Hero.jpeg',
      subTitle: 'Words by Zoey Zhu and Savannah Kunovsky',
      title: 'Design Lessons from the Cultural Exchange on Red Note',
      description:
        'Two technologists on opportunities in interaction design, the cat tax, and more.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    },
    {
      imgSrc:
        'https://cdn.prod.website-files.com/6501e17b507eeeaff049b022/67901639eebcf9258487699c_6790157aa3bd2fbc5bc68ddf_Red-Note-Hero.jpeg',
      subTitle: 'Words by Zoey Zhu and Savannah Kunovsky',
      title: 'Design Lessons from the Cultural Exchange on Red Note',
      description:
        'Two technologists on opportunities in interaction design, the cat tax, and more.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    },
    {
      imgSrc:
        'https://cdn.prod.website-files.com/6501e17b507eeeaff049b022/67901639eebcf9258487699c_6790157aa3bd2fbc5bc68ddf_Red-Note-Hero.jpeg',
      subTitle: 'Words by Zoey Zhu and Savannah Kunovsky',
      title: 'Design Lessons from the Cultural Exchange on Red Note',
      description:
        'Two technologists on opportunities in interaction design, the cat tax, and more.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    },
    {
      imgSrc:
        'https://cdn.prod.website-files.com/6501e17b507eeeaff049b022/67901639eebcf9258487699c_6790157aa3bd2fbc5bc68ddf_Red-Note-Hero.jpeg',
      subTitle: 'Words by Zoey Zhu and Savannah Kunovsky',
      title: 'Design Lessons from the Cultural Exchange on Red Note',
      description:
        'Two technologists on opportunities in interaction design, the cat tax, and more.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    },
    {
      imgSrc:
        'https://cdn.prod.website-files.com/6501e17b507eeeaff049b022/67901639eebcf9258487699c_6790157aa3bd2fbc5bc68ddf_Red-Note-Hero.jpeg',
      subTitle: 'Words by Zoey Zhu and Savannah Kunovsky',
      title: 'Design Lessons from the Cultural Exchange on Red Note',
      description:
        'Two technologists on opportunities in interaction design, the cat tax, and more.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    },
  ];

  return (
    <section
      id="project-page"
      className="relative flex min-h-[100vh] flex-col justify-between bg-[#f0f0ee]"
    >
      <div className="relative h-full px-[2.5rem]">
        <div className="ml-auto mr-auto max-w-[73.75rem] 2xl:max-w-[88.75rem]">
          <div className="ml-auto mr-auto w-full max-w-[73.75rem]">
            <div
              role="list"
              className="grid-rows-auto grid-auto-cols-[1fr] grid grid-cols-3 gap-x-[3.125rem] gap-y-[6.25rem]"
            >
              {projectList.map((project, idx) => (
                <div
                  role="listitem"
                  className="group flex w-full items-stretch"
                  key={`${project.title}_${idx}`}
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(project);
                  }}
                >
                  <a
                    href=""
                    className="min-h-auto line-clamp-0 flex h-full w-full flex-col items-stretch justify-start text-left no-underline"
                  >
                    <div>
                      <div className="aspect-square max-h-[22.5rem] w-full overflow-hidden">
                        <img
                          loading="lazy"
                          src={project.imgSrc}
                          alt=""
                          className="h-full max-h-[22.5rem] w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                      </div>
                      <div className="pb-[16px] pt-[24px] text-xs font-medium text-[#6a6e71]">
                        {project.subTitle}
                      </div>
                      <p className="pb-[24px]">
                        <span className="highlighter text-2xl leading-[1.2] transition-all ease-in-out">
                          {project.title}
                        </span>
                      </p>
                      <div className="text-xl leading-[1.4] tracking-tight text-[#252c30]">
                        {project.description}
                      </div>
                    </div>
                    <div className="mt-auto h-[2.5rem] border-b-[6px] border-black"></div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
