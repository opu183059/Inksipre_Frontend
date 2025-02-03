import { TfiWrite } from "react-icons/tfi";
import { PiBuildingOffice } from "react-icons/pi";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import CategoryCard from "../../../components/cards/CategoryCard";

const Categories = () => {
  return (
    <div className="bg-primary">
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <CategoryCard icon={<TfiWrite size={30} />} category="Writing" />
          <CategoryCard
            icon={<PiBuildingOffice size={30} />}
            category="Office Supplies"
          />
          <CategoryCard
            icon={<HiOutlinePaintBrush size={30} />}
            category="Art Supplies"
          />
          <CategoryCard
            icon={<IoSchoolOutline size={30} />}
            category="Educational"
          />
          <CategoryCard
            icon={<LiaLaptopCodeSolid size={30} />}
            category="Technology"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
