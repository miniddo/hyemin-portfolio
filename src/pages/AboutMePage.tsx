const AboutMePage = () => {
  const descriptionList = [
    {
      value: 'standard_store',
      label: 'STANDARD STORE',
      detail: `In the vast expanse of time, it's the small moments of clarity that define the essence of who we are`,
      imageSrc: 'https://img2.stibee.com/98052_2337946_1723508296515513220.jpeg',
    },
    {
      value: 'micro_store',
      label: 'MICRO STORE',
      detail: `In the vast expanse of time, it's the small moments of clarity that define the essence of who we are`,
      imageSrc: 'https://img2.stibee.com/98052_2337946_1723508296515513220.jpeg',
    },
    {
      value: 'vco',
      label: 'VISION CHECKOUT-OUT',
      detail: `In the vast expanse of time, it's the small moments of clarity that define the essence of who we are`,
      imageSrc: 'https://img2.stibee.com/98052_2337946_1723508296515513220.jpeg',
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
          // style={{ backgroundImage: `url(${bgImage})` }}
          style={{
            backgroundImage:
              'url(https://nakashimawoodworkers.com/wp-content/uploads/2017/05/Background-furniture-home-promo-1280x886.jpg)',
          }}
        ></div>
        <div className="relative mx-[30px] flex flex-col items-center justify-center">
          <div className="text-center text-[#fff] opacity-70">
            <p className="my-[13px] font-semibold tracking-widest">FAINDERS</p>
            <div className="mb-[60px] max-w-[580px]">
              <p className="my-[20px] font-serif">
                All Nakashima furniture is made to order in compliance with the company’s classic
                and contemporary design approach and singular craftsmanship.
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
                  <p className="">{item.detail}</p>
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
