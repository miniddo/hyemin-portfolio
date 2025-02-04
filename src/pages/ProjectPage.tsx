const ProjectPage = () => {
  const projectList = [
    {
      imgSrc:
        'https://cdn.prod.website-files.com/6501e17b507eeeaff049b022/67901639eebcf9258487699c_6790157aa3bd2fbc5bc68ddf_Red-Note-Hero.jpeg',
      date: 'Words by Zoey Zhu and Savannah Kunovsky',
      title: 'Design Lessons from the Cultural Exchange on Red Note',
      description:
        'Two technologists on opportunities in interaction design, the cat tax, and more.',
    },
    {
      imgSrc:
        'https://cdn.prod.website-files.com/6501e17b507eeeaff049b022/67901639eebcf9258487699c_6790157aa3bd2fbc5bc68ddf_Red-Note-Hero.jpeg',
      date: 'Words by Zoey Zhu and Savannah Kunovsky',
      title: 'Design Lessons from the Cultural Exchange on Red Note',
      description:
        'Two technologists on opportunities in interaction design, the cat tax, and more.',
    },
    {
      imgSrc:
        'https://cdn.prod.website-files.com/6501e17b507eeeaff049b022/67901639eebcf9258487699c_6790157aa3bd2fbc5bc68ddf_Red-Note-Hero.jpeg',
      date: 'Words by Zoey Zhu and Savannah Kunovsky',
      title: 'Design Lessons from the Cultural Exchange on Red Note',
      description:
        'Two technologists on opportunities in interaction design, the cat tax, and more.',
    },
    {
      imgSrc:
        'https://cdn.prod.website-files.com/6501e17b507eeeaff049b022/67901639eebcf9258487699c_6790157aa3bd2fbc5bc68ddf_Red-Note-Hero.jpeg',
      date: 'Words by Zoey Zhu and Savannah Kunovsky',
      title: 'Design Lessons from the Cultural Exchange on Red Note',
      description:
        'Two technologists on opportunities in interaction design, the cat tax, and more.',
    },
    {
      imgSrc:
        'https://cdn.prod.website-files.com/6501e17b507eeeaff049b022/67901639eebcf9258487699c_6790157aa3bd2fbc5bc68ddf_Red-Note-Hero.jpeg',
      date: 'Words by Zoey Zhu and Savannah Kunovsky',
      title: 'Design Lessons from the Cultural Exchange on Red Note',
      description:
        'Two technologists on opportunities in interaction design, the cat tax, and more.',
    },
    {
      imgSrc:
        'https://cdn.prod.website-files.com/6501e17b507eeeaff049b022/67901639eebcf9258487699c_6790157aa3bd2fbc5bc68ddf_Red-Note-Hero.jpeg',
      date: 'Words by Zoey Zhu and Savannah Kunovsky',
      title: 'Design Lessons from the Cultural Exchange on Red Note',
      description:
        'Two technologists on opportunities in interaction design, the cat tax, and more.',
    },
  ];

  return (
    <section
      id="project-page"
      className="relative flex min-h-[100vh] flex-col justify-between bg-[#f0f0ee]"
    >
      <div className="ml-auto mr-auto max-w-[84.375rem]">
        <div
          role="list"
          className="grid-rows-auto grid-auto-cols-[1fr] grid grid-cols-3 gap-x-[3.125rem] gap-y-[6.25rem]"
        >
          {projectList.map((item, idx) => (
            <div
              role="listitem"
              className="group flex w-[300px] items-stretch"
              key={`${item.title}_${idx}`}
            >
              <a
                href=""
                className="min-h-auto line-clamp-0 flex h-full w-full flex-col items-stretch justify-start text-left no-underline"
              >
                <div>
                  <div className="h-[300px] w-[300px] overflow-hidden pb-[24px]">
                    <img
                      loading="lazy"
                      src={item.imgSrc}
                      alt=""
                      className="h-full w-full transform object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <div className="py-[16px] text-xs font-medium text-[#6a6e71]">{item.date}</div>
                  <div className="hold-title-and-underline pb-[24px]">
                    <h3 className="text-2xl leading-[1.2]">{item.title}</h3>
                  </div>
                  <div className="text-xl leading-[1.4] tracking-tight text-[#252c30]">
                    {item.description}
                  </div>
                </div>
                <div className="mt-auto h-[2.5rem] border-b-[6px] border-black"></div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
