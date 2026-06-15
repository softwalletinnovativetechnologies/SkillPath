import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    {
      name: "Programs",
      path: "/programs",
    },
    {
      name: "Courses",
      path: "/courses",
    },
    {
      name: "AI Mentor",
      path: "/ai-mentor",
    },
    {
      name: "Internships",
      path: "/internships",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div
        className={`
          w-full
          max-w-7xl
          rounded-[32px]
          border
          border-white/30
          backdrop-blur-xl
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-white/95 shadow-2xl py-3"
              : "bg-white/90 shadow-xl py-5"
          }
        `}
      >
        <div className="flex items-center justify-between px-8">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-4">
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-br
              from-[#0B2D5C]
              to-[#17498D]
              flex
              items-center
              justify-center
              text-white
              text-2xl
              font-black
              shadow-lg
              "
            >
              S
            </motion.div>

            <div>
              <h2
                className="
                text-2xl
                font-black
                text-[#0B2D5C]
                "
              >
                SkillPath
              </h2>

              <p className="text-sm text-gray-500">Learn • Grow • Succeed</p>
            </div>
          </Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`
                relative
                font-semibold
                transition-all
                ${
                  location.pathname === item.path
                    ? "text-[#00B894]"
                    : "text-[#0B2D5C]"
                }
                `}
              >
                {item.name}

                <span
                  className={`
                  absolute
                  left-0
                  -bottom-2
                  h-[3px]
                  bg-[#00B894]
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 hover:w-full"
                  }
                  `}
                />
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="
              px-5
              py-3
              rounded-full
              font-semibold
              text-[#0B2D5C]
              hover:bg-gray-100
              transition-all
              "
            >
              Login
            </Link>

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Link
                to="/register"
                className="
                px-7
                py-3
                rounded-full
                bg-gradient-to-r
                from-[#00B894]
                to-[#00D4AA]
                text-white
                font-semibold
                shadow-lg
                "
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Button */}

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? (
              <X size={30} className="text-[#0B2D5C]" />
            ) : (
              <Menu size={30} className="text-[#0B2D5C]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-8 py-6 border-t mt-5">
                <div className="flex flex-col gap-5">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                      font-semibold
                      ${
                        location.pathname === item.path
                          ? "text-[#00B894]"
                          : "text-[#0B2D5C]"
                      }
                      `}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="
                    text-[#0B2D5C]
                    font-semibold
                    "
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="
                    bg-gradient-to-r
                    from-[#00B894]
                    to-[#00D4AA]
                    text-white
                    text-center
                    py-3
                    rounded-xl
                    font-semibold
                    "
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
