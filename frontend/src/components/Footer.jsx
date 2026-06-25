import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
      relative
      overflow-hidden
      mt-24
      bg-gradient-to-br
      from-[#03101F]
      via-[#0B2D5C]
      to-[#03101F]
      text-white
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        top-[-150px]
        left-[-100px]
        w-[350px]
        h-[350px]
        bg-[#00B894]/20
        blur-[140px]
        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-[-150px]
        right-[-100px]
        w-[350px]
        h-[350px]
        bg-blue-500/20
        blur-[140px]
        rounded-full
        "
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-14">
          {/* Brand */}

          <div>
            <h2
              className="
              text-5xl
              font-black
              bg-gradient-to-r
              from-[#00B894]
              to-[#00D4AA]
              bg-clip-text
              text-transparent
              "
            >
              SkillPath
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed text-lg">
              Learn future-ready skills, work on live industry projects, earn
              certifications and accelerate your career through one intelligent
              platform.
            </p>

            <div className="flex gap-4 mt-8">
              {[Globe, ExternalLink].map((Icon, index) => (
                <div
                  key={index}
                  className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-[#00B894]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  cursor-pointer
                  "
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}

          <div>
            <h3 className="text-2xl font-bold mb-8">Quick Links</h3>

            <div className="flex flex-col gap-5 text-slate-300">
              <Link
                to="/courses"
                className="hover:text-[#00B894] transition-all"
              >
                Courses
              </Link>

              <Link
                to="/internships"
                className="hover:text-[#00B894] transition-all"
              >
                Internships
              </Link>

              <Link to="/about" className="hover:text-[#00B894] transition-all">
                About Us
              </Link>

              <Link
                to="/contact"
                className="hover:text-[#00B894] transition-all"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Us</h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5">
                <Mail className="text-[#00B894]" size={20} />

                <span>info@softwalletinnovativetechnologies.cloud</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5">
                <Phone className="text-[#00B894]" size={20} />

                <span>+91 9596393658</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5">
                <MapPin className="text-[#00B894]" size={20} />

                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-slate-400">
            © 2026 Softwallet Innovative Technologies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
