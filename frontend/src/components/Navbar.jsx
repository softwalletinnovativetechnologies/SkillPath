import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Programs",
    "Courses",
    "Internships",
    "Certifications",
    "About",
  ];

  return (
    <motion.nav
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div
        className={`
          w-full
          max-w-7xl
          bg-white/95
          backdrop-blur-xl
          border
          border-gray-100
          rounded-[32px]
          transition-all
          duration-500
          ${scrolled ? "shadow-2xl py-3" : "shadow-xl py-5"}
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
              transition={{
                duration: 0.3,
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
                font-bold
                shadow-lg
              "
            >
              S
            </motion.div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B2D5C]">SkillPath</h2>

              <p className="text-sm text-gray-500">Learn • Grow • Succeed</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{
                  y: -3,
                }}
                className="
                  relative
                  text-[#0B2D5C]
                  font-semibold
                  text-[16px]
                  group
                "
              >
                {item}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    w-0
                    h-[3px]
                    bg-[#00B894]
                    transition-all
                    duration-300
                    group-hover:w-full
                    rounded-full
                  "
                />
              </motion.a>
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
                transition
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#0B2D5C]"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
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
              className="
                lg:hidden
                overflow-hidden
              "
            >
              <div className="px-8 pt-6 pb-4 border-t border-gray-100 mt-5">
                <div className="flex flex-col gap-5">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="
                        text-[#0B2D5C]
                        font-semibold
                      "
                    >
                      {item}
                    </a>
                  ))}

                  <Link
                    to="/login"
                    className="
                      text-[#0B2D5C]
                      font-semibold
                    "
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
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
