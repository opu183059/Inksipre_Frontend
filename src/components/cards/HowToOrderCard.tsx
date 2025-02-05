import { howToOrderCardProps } from "../../types/howToOrderCardProps";

const HowToOrderCard = (CardData: howToOrderCardProps) => {
  const { image, title, description } = CardData;
  return (
    <div className="md:w-7/12 w-10/12 flex items-center gap-4 p-4 backdrop-blur-md border-[1px] rounded-lg shadow-sm shadow-gray-50 z-10 mx-auto md:mx-0">
      <div className="left w-5/12">
        <img src={image} alt="" className="md:h-40 md:w-40 rounded-l-md" />
      </div>
      <div className="right w-7/12 text-left text-gray-50 ">
        <h1 className="font-semibold font-playwrite md:text-xl mb-2">
          {title}
        </h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default HowToOrderCard;
