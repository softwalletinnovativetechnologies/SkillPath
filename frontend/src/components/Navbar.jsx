import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

    window.location.reload();
  };

  const getDashboardRoute = () => {
    if (!user) return "/";

    if (user.fullName) {
      return "/student-dashboard";
    }

    if (user.parentName) {
      return "/parent/dashboard";
    }

    if (user.role === "admin") {
      return "/admin/dashboard";
    }

    return "/";
  };

  const getUserName = () => {
    if (!user) return "";

    return user.fullName || user.parentName || user.name || "User";
  };

  const menuItems = [
    {
      name: "Courses",
      path: "/courses",
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
      initial={{
        y: -120,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
      }}
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
              <h2 className="text-2xl font-black text-[#0B2D5C]">SkillPath</h2>

              <p className="text-sm text-gray-500">Learn • Grow • Succeed</p>
            </div>
          </Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-semibold transition-all ${
                  location.pathname === item.path
                    ? "text-[#00B894]"
                    : "text-[#0B2D5C]"
                }`}
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

          {/* Desktop Right */}

          <div className="hidden lg:flex items-center gap-4">
            {!user ? (
              <>
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
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-2
                  rounded-full
                  bg-white
                  shadow-lg
                  "
                >
                  <div
                    className="
                    w-10
                    h-10
                    rounded-full
                    bg-gradient-to-r
                    from-[#0B2D5C]
                    to-[#00B894]
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    "
                  >
                    {getUserName().charAt(0).toUpperCase()}
                  </div>

                  <span className="font-semibold text-[#0B2D5C]">
                    {getUserName()}
                  </span>

                  <ChevronDown size={18} />
                </button>

                {showProfileMenu && (
                  <div
                    className="
                    absolute
                    right-0
                    mt-3
                    w-64
                    bg-white
                    rounded-3xl
                    shadow-2xl
                    p-4
                    "
                  >
                    <p className="font-bold text-[#0B2D5C]">{getUserName()}</p>

                    <hr className="my-3" />

                    <button
                      onClick={() => navigate(getDashboardRoute())}
                      className="
                      w-full
                      text-left
                      py-3
                      hover:text-[#00B894]
                      "
                    >
                      Dashboard
                    </button>

                    <button
                      onClick={handleLogout}
                      className="
                      w-full
                      text-left
                      py-3
                      text-red-500
                      "
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}

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
                    >
                      {item.name}
                    </Link>
                  ))}

                  {!user ? (
                    <>
                      <Link to="/login">Login</Link>

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
                        "
                      >
                        Get Started
                      </Link>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => navigate(getDashboardRoute())}
                        className="text-left"
                      >
                        Dashboard
                      </button>

                      <button
                        onClick={handleLogout}
                        className="text-left text-red-500"
                      >
                        Logout
                      </button>
                    </>
                  )}
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
