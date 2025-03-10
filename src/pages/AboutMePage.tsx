import aboutMeImage1 from '@assets/images/hyemin1.jpg';
import aboutMeImage2 from '@assets/images/hyemin3.jpg';
import aboutMeImage3 from '@assets/images/hyemin4.jpg';

const AboutMePage = () => {
  const descriptionList = [
    {
      value: 'new_tech',
      label: '최신 기술을 이해하고 공유하는 것을 좋아합니다.',
      detail: [
        '그러나 무조건 적으로 최신 기술에 집착하지 않습니다.',
        '레거시 코드를 이해하고 현재 상황에 맞는 최적화 방법을 찾기 위해 노력하고, 팀원들과 논의하여 새 기술을 도입합니다.',
      ],
      imageSrc: aboutMeImage3,
    },
    {
      value: 'development_culture',
      label: '팀 개발 문화 도입에 주도적입니다.',
      detail: [
        '서비스에 대한 깊은 이해 없이 코드가 배포되는 과정에서',
        '발생할 수 있는 어려움을 줄이기 위해',
        '여러 기업의 코드 리뷰 사례를 참고하여 규칙을 정의했습니다.',
      ],
      imageSrc: aboutMeImage1,
    },
    {
      value: 'business_tech',
      label: '비지니스를 위한 개발 기술을 보유합니다.',
      detail: [
        '서비스 초기 기획부터 개발, 출시, 운영까지의 전 과정을 경험한 바 있습니다. 사용자 경험을 고려한 의견을 제시할 수 있습니다.',
        'ClickUp, Slack 등의 애자일 툴을 활용한 협업에 익숙합니다.',
      ],
      imageSrc: aboutMeImage2,
    },
  ];

  return (
    <section
      id="about_me-page"
      className="relative flex min-h-[90vh] flex-col justify-center bg-[#eff2f4]"
    >
      <div className="relative w-full py-[90px]">
        <div
          className="absolute left-0 top-0 h-full w-full bg-black/40 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://nakashimawoodworkers.com/wp-content/uploads/2017/05/Background-furniture-home-promo-1280x886.jpg)',
          }}
        ></div>
        <div className="relative mx-[30px] flex flex-col items-center justify-center">
          <div className="text-center text-[#fff] opacity-70">
            <p className="my-[13px] font-semibold tracking-widest">ABOUT ME</p>
            <div className="mb-[60px] max-w-[580px]">
              <p className="my-[20px] font-serif">
                I share latest technologies and take the lead in introducing a team development
                culture. I also have development skills for business.
              </p>
            </div>
          </div>
          <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {descriptionList.map((item) => (
              <div className="group relative cursor-grab overflow-hidden" key={item.value}>
                <img
                  alt={`${item.value} image`}
                  className="h-auto w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  src={item.imageSrc}
                />
                <div className="absolute inset-0 flex flex-col justify-end gap-3 bg-black/40 p-5 text-center text-[#ffffff]">
                  <p className="font-bold">{item.label}</p>
                  <div className="detail">
                    {item.detail.map((value, idx) => (
                      <p key={idx}>{value}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMePage;
