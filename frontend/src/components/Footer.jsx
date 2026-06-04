const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">SkillPath AI</h2>

            <p className="text-gray-400 mt-3">
              AI-powered education, certification, internship and hiring
              ecosystem.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Courses</li>
              <li>Certifications</li>
              <li>Internships</li>
              <li>Hiring</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500">
          © 2026 SkillPath AI Ultra. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
