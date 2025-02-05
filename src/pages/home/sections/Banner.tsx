import { Button } from "antd";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="min-h-screen bg-[url('../../../HomeBanner.jpg')] bg-center md:bg-cover bg-local md:bg-fixed -mt-14">
      <div className="min-h-screen bg-black/40">
        <div className="container">
          <div className="md:w-1/2 flex flex-col justify-center min-h-screen text-center md:text-left p-4 md:p-0">
            <h1 className="text-4xl md:text-6xl font-playwrite font-bold text-gray-50">
              Inkspire
            </h1>
            <p className="text-gray-50 text-base md:text-lg mt-4 flex justify-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
            </p>
            <Link to={"/products"}>
              <Button type="primary" className="btn10 mt-4">
                View All Products{" "}
                <AiOutlineProduct size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
