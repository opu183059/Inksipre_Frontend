import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import { mainMenu } from "../menu/mainMenu";
import { footerMenu } from "../menu/footerMenu";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  // const date = new Date().getFullYear;
  // console.log(date.getFullYear());
  return (
    <div className="py-6 custom-shadow">
      <div className="container flex md:justify-between flex-col md:flex-row">
        <div className="left md:w-8/12 text-center md:text-left flex flex-col items-center md:items-start">
          <div>
            <Logo />
          </div>
          <p className="mt-4">
            Your one-stop destination for high-quality stationery products,
            office supplies, and creative essentials. Whether you are a student,
            professional, artist, or business owner, we provide a carefully
            curated selection of products designed to inspire creativity,
            enhance productivity, and meet all your everyday needs.
          </p>
        </div>
        <div className="right flex md:w-4/12 md:justify-end justify-around gap-6 mt-4 md:mt-0">
          <div className="right flex flex-col items-center md:items-end">
            <p className="footer-menu-header">Quick Links</p>
            {footerMenu.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="footer-menu-hover font-poppins font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="right flex flex-col items-center md:items-end">
            <p className="footer-menu-header">Menu</p>
            {mainMenu.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="footer-menu-hover font-poppins font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center mt-5 mb-2 uppercase">Follow US</p>
      <div className="flex gap-4 justify-center">
        <a href="#">
          <FaFacebookF
            size={20}
            className="cursor-pointer w-7 h-7 p-1 rounded-full hover:bg-blue-500 hover:text-gray-50 duration-300"
          />
        </a>
        <a href="#">
          <FaXTwitter
            size={20}
            className="cursor-pointer w-7 h-7 p-1 rounded-full hover:bg-black hover:text-gray-50 duration-300"
          />
        </a>
        <a href="#">
          <FaWhatsapp
            size={20}
            className="cursor-pointer w-7 h-7 p-1 rounded-full hover:bg-green-800 hover:text-gray-50 duration-300"
          />
        </a>
      </div>
      <p className="text-center mt-5">
        &copy; {new Date().getFullYear()} All rights reserved |
        <Link
          to="https://aktheruzzaman.netlify.app/"
          className="menu-hover ml-1"
        >
          Aktheruzzaman
        </Link>
      </p>
    </div>
  );
};

export default Footer;
