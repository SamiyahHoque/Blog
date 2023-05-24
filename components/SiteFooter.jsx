import Link from "next/link";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const SiteFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-1xl font-semibold">Contact</h3>
            <p className="mt-4">
              <a href="mailto:samiyahhoque22@gmail.com">
                <FiMail className="inline mr-2" />samiyahhoque22@gmail.com
              </a>
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-1xl font-semibold">Follow Me</h3>
            <div className="flex mt-4">
              <a
                href="https://www.linkedin.com/in/samiyah-hoque/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FiLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/SamiyahHoque"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
