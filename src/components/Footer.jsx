import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-wrap mx-5 pt-8 justify-evenly gap-3 md:gap-11">
      <div className="md:flex md:justify-evenly md:gap-[180px]">
        <div className="flex md:gap-11 w-[50%] flex-wrap">
          <div className="pt-8">
            <p className="pb-3 font-semibold">Product</p>
            <div className="flex flex-col">
              <a href="">What is Postman</a>
              <a href="">API repository</a>
              <a href="">Tools</a>
              <a href="">Governmant</a>
              <a href="">Integrations</a>
              <a href="">Workspace</a>
            </div>
          </div>
          <div className="pt-8">
            <p className="pb-3 font-semibold">Company</p>
            <div className="flex flex-col">
              <a href="">About</a>
              <a href="">Careers and culture</a>
              <a href="">Press and media</a>
              <a href="">Contact us</a>
              <a href="">Partner program</a>
            </div>
          </div>
          <div className="pt-8">
            <p className="pb-3 font-semibold">Legal and Security</p>
            <div className="flex flex-col">
              <a href="">Terms of Service</a>
              <a href="">Trust and Sefty</a>
              <a href="">privacy policy</a>
              <a href="">Cookie notice</a>
              <a href="">Privacy choices</a>
            </div>
          </div>
          <div className="pt-8">
            <p className="pb-3 font-semibold">API Categories</p>
            <div className="flex flex-col">
              <a href="">App Security</a>
              <a href="">Payments</a>
              <a href="">Financial Services</a>
              <a href="">DevOps</a>
              <a href="">Data Analytics</a>
              <a href="">Communicaton</a>
            </div>
          </div>
          <div className="pt-8">
            <p className="pb-3 font-semibold">Social</p>
            <div className="flex flex-col">
              <p className="flex items-center gap-2">
                <FaTwitter />
                Twitter
              </p>
              <p className="flex items-center gap-2">
                <CiLinkedin />
                Linkedin
              </p>
              <p className="flex items-center gap-2">
                <FaGithub />
                Github
              </p>
              <p className="flex items-center gap-2">
                <FaYoutube />
                YouTube
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="w-[50%] flex items-center justify-center pb-11">
          <img
            src="https://voyager.postman.com/illustration/postman-footer-rocket-launch.svg"
            alt=""
            className="w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
