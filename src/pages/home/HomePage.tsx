import Banner from "./sections/Banner";
import Categories from "./sections/Categories";
import Featured from "./sections/Featured";
import SaleOfferModal from "./sections/SaleOfferModal";

const HomePage = () => {
  return (
    <>
      <Banner />
      <SaleOfferModal />
      <Categories />
      <Featured />
    </>
  );
};

export default HomePage;
