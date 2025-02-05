import LinkedinLogo from '@assets/linkedin.svg';
import BlogLogo from '@assets/blog.svg';
import ArrowDownIcon from '@assets/arrowdown.svg';

const MainSubPage = () => {
  return (
    <section className="relative flex min-h-[100vh] min-h-screen flex-col bg-[#ffbc4b]">
      <header className="flex px-14 py-10">
        <nav className="ml-auto">
          <ul className="flex gap-4 text-lg font-bold">
            <li>
              <a className="group relative inline-block cursor-pointer pb-2 hover:text-[#837e7e]">
                Stories
                <span className="absolute bottom-0 left-0 left-1/2 block h-0 w-0 -translate-x-1/2 transform rounded-full transition-all duration-300 group-hover:h-1 group-hover:w-1 group-hover:bg-[#837e7e]"></span>
              </a>
            </li>
            <li>
              <a className="group relative inline-block cursor-pointer pb-2 hover:text-[#837e7e]">
                Listen
                <span className="absolute bottom-0 left-0 left-1/2 block h-0 w-0 -translate-x-1/2 transform rounded-full transition-all duration-300 group-hover:h-1 group-hover:w-1 group-hover:bg-[#837e7e]"></span>
              </a>
            </li>
            <li>
              <a className="group relative inline-block cursor-pointer pb-2 hover:text-[#837e7e]">
                Team
                <span className="absolute bottom-0 left-0 left-1/2 block h-0 w-0 -translate-x-1/2 transform rounded-full transition-all duration-300 group-hover:h-1 group-hover:w-1 group-hover:bg-[#837e7e]"></span>
              </a>
            </li>
            <li>
              <a className="group relative inline-block cursor-pointer pb-2 hover:text-[#837e7e]">
                Tools
                <span className="absolute bottom-0 left-0 left-1/2 block h-0 w-0 -translate-x-1/2 transform rounded-full transition-all duration-300 group-hover:h-1 group-hover:w-1 group-hover:bg-[#837e7e]"></span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-grow flex-col items-center justify-center px-40">
        <div className="flex w-full flex-row items-center justify-center pb-5">
          <div className="mr-20">
            <p className="pb-2 text-sm font-bold">DESIGN SYSTEMS</p>
            <p className="text-6xl font-extrabold leading-[1.2] tracking-tight">
              Can I get an Encore?
              <br />
              Spotify's Design System,
              <br />
              Three Years On
            </p>
          </div>
          <div className="relative h-[718px] w-[718px]">
            <div className="absolute inset-0 h-full w-full rotate-[-12deg] bg-[#a4c9d8]"></div>
            <div className="absolute inset-0 h-full w-full rotate-[-8deg] bg-[#3e8ef1]"></div>
            <div className="absolute inset-0 h-full w-full rotate-[-7deg] bg-[#ffd0d5]"></div>
            <div className="absolute inset-0 flex h-full w-full rotate-0 cursor-grab items-center justify-center bg-[#fb7ea8] shadow-[2px_5px_27px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-in-out hover:scale-105"></div>
          </div>
        </div>
        <div className="flex w-full py-20">
          <div className="flex items-center gap-3">
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
          <a href="#target-section" className="ml-auto flex items-center">
            <span className="text-sm font-bold">SCROLL DOWN</span>
            <div className="ml-3">
              <div className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-solid border-[rgba(0,0,0,0.08)] transition-colors duration-300 hover:bg-black">
                <img
                  src={ArrowDownIcon}
                  alt="arrow-down_icon"
                  className="relative z-10 transition-colors duration-300 group-hover:invert"
                />
              </div>
            </div>
          </a>
        </div>
      </main>
      {/* <footer className="">
        <p>© 2025 ParkHyemin. All rights reserved.</p>
      </footer> */}
    </section>
  );
};

export default MainSubPage;
