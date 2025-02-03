import { Button } from "antd";
import { AiOutlineProduct } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="min-h-screen bg-[url('../../../HomeBanner.jpg')] bg-cover bg-fixed -mt-14">
      <div className="container">
        <div className="w-1/2 flex flex-col justify-center min-h-screen">
          <h1 className="text-6xl font-playwrite font-bold text-white">
            Inkspire
          </h1>
          <p className="text-white text-lg mt-4 flex justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <Button type="primary" className="btn10 mt-4">
            View Products <AiOutlineProduct size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
