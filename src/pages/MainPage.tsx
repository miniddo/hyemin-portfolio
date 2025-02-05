import hyeminLogo from '@assets/hyemin400.svg';
import LinkedinLogo from '@assets/linkedin.svg';
import BlogLogo from '@assets/blog.svg';

const MainPage = () => {
  return (
    <section className="relative flex min-h-[100vh] flex-col justify-between bg-gradient-to-b from-[#a8c6e3] to-[#eff2f4]">
      <header className="mx-20 flex justify-between pt-20">
        <div>
          <img src={hyeminLogo} alt="Hyemin logo" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <ul className="flex items-center gap-12 text-4xl">
              <li>
                <a href="#target-section" className="group relative inline-block">
                  About Me
                  <span className="absolute bottom-0 left-0 block h-[0.1px] w-0 bg-[#000d10] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#target-section" className="group relative inline-block">
                  Career
                  <span className="absolute bottom-0 left-0 block h-[0.1px] w-0 bg-[#000d10] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#project-page" className="group relative inline-block">
                  Projects
                  <span className="absolute bottom-0 left-0 block h-[0.1px] w-0 bg-[#000d10] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="font-base pb-16 text-7xl font-semibold leading-[0.8] tracking-tight">
            Frontend
            <br />
            Developer
          </div>
        </div>
      </header>
      <main className="flex flex-grow">중간</main>
      <footer className="mx-10 flex items-end pb-10">
        <p>© 2025 ParkHyemin. All rights reserved.</p>
        <div className="ml-auto flex items-center gap-3">
          <a
            href=""
            target="_blank"
            rel="Linkedin logo"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#000d10] transition-opacity duration-200 hover:opacity-80"
          >
            <img src={LinkedinLogo} alt="Linkedin logo" />
          </a>
          <a
            href="https://velog.io/@minidoo/posts"
            target="_blank"
            rel="Blog logo"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#000d10] transition-opacity duration-200 hover:opacity-80"
          >
            <img src={BlogLogo} alt="Blog logo" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default MainPage;
