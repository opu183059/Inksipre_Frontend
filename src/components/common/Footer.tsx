import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import { mainMenu } from "../menu/mainMenu";
import { footerMenu } from "../menu/footerMenu";

const Footer = () => {
  // const date = new Date().getFullYear;
  // console.log(date.getFullYear());
  return (
    <div className="bg-primary text-primary py-4">
      <div className="container flex justify-between">
        <div className="left w-8/12">
          <Logo />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
        <div className="right flex w-4/12 justify-end gap-6">
          <div className="right flex flex-col items-end">
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
          <div className="right flex flex-col items-end">
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
