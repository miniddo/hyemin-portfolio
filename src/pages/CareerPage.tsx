import { ChevronRight } from 'lucide-react';

interface CareerInfo {
  type: 'A' | 'B';
  company: string;
  date: string;
  description: string;
  imgSrc: string;
}

const CareerTextArea = ({ career }: { career: CareerInfo }) => {
  return (
    <section>
      <p className="mb-[1rem] font-semibold tracking-widest">{career.company}</p>
      <p className="my-[1rem]">{career.description}</p>
      <button className="group flex items-center">
        <span className="tracking-widest text-[#9B9B9B] transition-colors duration-300 group-hover:text-[#4A4A4A]">
          more
        </span>
        <ChevronRight
          width={16}
          className="text-[#9B9B9B] transition-colors duration-300 group-hover:text-[#4A4A4A]"
        />
      </button>
    </section>
  );
};

const CareerPage = () => {
  const careerList: CareerInfo[] = [
    {
      type: 'A',
      company: 'PROJECT1',
      date: '2020.01 - 2023.05',
      description:
        'The soul and spirit of the tree, the essence and character of wood, and the dedication of the woodworker to his or her craft.',
      imgSrc: 'https://img2.stibee.com/98052_2337946_1723508296515513220.jpeg',
    },
    {
      type: 'B',
      company: 'PROJECT2',
      date: '2023.06 - 2024.12',
      description:
        'The soul and spirit of the tree, the essence and character of wood, and the dedication of the woodworker to his or her craft.',
      imgSrc: 'https://wowtale.net/wp-content/uploads/2023/06/wowtale.net-wowtale.net--26.jpg',
    },
    {
      type: 'A',
      company: 'PROJECT3',
      date: '2025.01 -',
      description:
        'The soul and spirit of the tree, the essence and character of wood, and the dedication of the woodworker to his or her craft.',
      imgSrc: 'https://cdn.hankooki.com/news/photo/202306/86890_117817_1687740060.jpg',
    },
  ];

  return (
    <section
      id="career-page"
      className="relative flex min-h-[100vh] flex-col justify-between bg-[#eff2f4]"
    >
      <div className="mx-[30px] py-[3.5rem]">
        <div className="mx-auto flex max-w-[980px] flex-col gap-24">
          {careerList.map((career) => (
            <div className="flex items-center gap-10">
              <div className="w-[50%]">
                {career.type === 'A' ? (
                  <CareerTextArea career={career} />
                ) : (
                  <img src={career.imgSrc} alt="company image" />
                )}
              </div>
              <div className="w-[50%]">
                {career.type === 'A' ? (
                  <img src={career.imgSrc} alt="company image" />
                ) : (
                  <CareerTextArea career={career} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPage;
