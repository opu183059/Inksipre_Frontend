import Banner from "./sections/Banner";
import Categories from "./sections/Categories";
import Featured from "./sections/Featured";
import SaleOfferModal from "./sections/SaleOfferModal";
import HowToOrder from "./sections/HowToOrder";
import Products from "./sections/Products";

const HomePage = () => {
  return (
    <>
      <Banner />
      <SaleOfferModal />
      <Categories />
      <Featured />
      <HowToOrder />
      <Products />
    </>
  );
};

export default HomePage;
