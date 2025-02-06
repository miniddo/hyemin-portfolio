import javascriptLogo from '@assets/javascript.svg';
import typescriptLogo from '@assets/typescript.svg';
import reactLogo from '@assets/react.svg';
import webpackLogo from '@assets/webpack.svg';
import viteLogo from '@assets/vite.svg';
import tanstackQueryLogo from '@assets/tanstack_query.png';
import nodejsLogo from '@assets/nodejs.svg';
import mongodbLogo from '@assets/mongodb.svg';

const SkillPage = () => {
  const frontendSkillList = [
    javascriptLogo,
    typescriptLogo,
    reactLogo,
    webpackLogo,
    viteLogo,
    tanstackQueryLogo,
  ];

  const backendSkillList = [nodejsLogo, mongodbLogo];

  return (
    <section id="skill-page" className="relative justify-between bg-[#eff2f4]">
      <div className="flex">
        <div className="flex h-[56vw] min-h-0 w-full items-end justify-center overflow-hidden bg-[#6F8555]">
          <div className="flex flex-wrap justify-center gap-4 p-8">
            {frontendSkillList.map((logo) => (
              <img
                src={logo}
                alt="skill logo"
                className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]"
              />
            ))}
          </div>
        </div>

        <div className="relative h-[56vw] min-h-0 w-full">
          <img
            className="h-full w-full object-cover"
            alt="frontend image"
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3"
          />
          <div className="absolute inset-0 flex items-end justify-center bg-black/50 p-8">
            {backendSkillList.map((logo) => (
              <img
                src={logo}
                alt="skill logo"
                className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]"
              />
            ))}
          </div>
        </div>

        <div className="flex h-[56vw] min-h-0 w-full items-end justify-center overflow-hidden bg-[#151623]">
          <div className="flex flex-wrap justify-center gap-4 p-8">
            {backendSkillList.map((logo) => (
              <img
                src={logo}
                alt="skill logo"
                className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillPage;
