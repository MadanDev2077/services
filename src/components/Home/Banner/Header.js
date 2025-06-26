import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: "-100%" },
      { y: "0%", duration: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full px-4 py-3 bg-transparent fixed top-5 z-[100] left-0"
    >
      <div
        className={`flex justify-between items-center max-w-7xl mx-auto nav`}
      >
        <a href="https://www.gamesd.app" className="flex items-center gap-2">
          <span className="text-white text-base md:text-[18px] lg:text-[19px] font-semibold">
            TechnoSpots
          </span>
        </a>

        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          <a
            href="https://www.gamesd.app"
            className="text-lime-400 hover:text-white flex items-center gap-2"
          >
            <i className="fa fa-home"></i>{" "}
            <span className="text-white">Home</span>
          </a>
          <a
            href="https://www.gamesd.app/blog/category/metaverse-games-clone"
            className="text-lime-400 hover:text-white flex items-center gap-2"
          >
            <i className="fa fa-book"></i>{" "}
            <span className="text-white">Blog</span>
          </a>
          <a
            href="https://www.gamesd.app/news"
            className="text-lime-400 hover:text-white flex items-center gap-2"
          >
            <i className="fa fa-newspaper"></i>{" "}
            <span className="text-white">News</span>
          </a>
          <a
            href="https://www.gamesd.app/announcement"
            className="text-lime-400 hover:text-white flex items-center gap-2"
          >
            <i className="fa fa-bullhorn"></i>{" "}
            <span className="text-white">Announcement</span>
          </a>
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => alert("Open contact form")}
            className="bg-lime-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-lime-500"
          >
            Contact Us
          </button>
        </div>

        <div className="md:hidden flex justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="text-lime-400 focus:outline-none cursor-pointer"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <nav
        ref={menuRef}
        className={`fixed -top-5 right-0 h-screen w-screen bg-black bg-opacity-95 z-[100] p-6 flex flex-col gap-6 text-sm font-medium md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-lime-400 cursor-pointer"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col gap-6 items-center justify-center flex-1 text-base sm:text-xl">
          <a
            href="https://www.gamesd.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-400 hover:text-white flex items-center gap-2"
          >
            <i className="fa fa-home"></i>{" "}
            <span className="text-white">Home</span>
          </a>
          <a
            href="https://www.gamesd.app/blog/category/metaverse-games-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-400 hover:text-white flex items-center gap-2"
          >
            <i className="fa fa-book"></i>{" "}
            <span className="text-white">Blog</span>
          </a>
          <a
            href="https://www.gamesd.app/news"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-400 hover:text-white flex items-center gap-2"
          >
            <i className="fa fa-newspaper"></i>{" "}
            <span className="text-white">News</span>
          </a>
          <a
            href="https://www.gamesd.app/announcement"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-400 hover:text-white flex items-center gap-2"
          >
            <i className="fa fa-bullhorn"></i>{" "}
            <span className="text-white">Announcement</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
