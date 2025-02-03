import { trimToWords } from "../../utils/trimText";

const FeaturedCard = () => {
  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, debitis rerum earum cumque vel laudantium dolorem. Ipsa, et aspernatur culpa, delectus doloremque sed eveniet natus in quos voluptas, ab doloribus.";

  return (
    // <div
    //   className={`max-w-xl p-6 hover:shadow-xl rounded-md shadow-md bg-gray-50/20 backdrop-blur-sm text-gray-50 dark:bg-gray-900 group cursor-pointer`}
    // >
    //   <div className="aspect-square w-full relative overflow-hidden rounded-xl">
    //     <img
    //       src="https://soniofficemate.com/wp-content/uploads/2024/10/664080159-executive-kit.webp"
    //       alt=""
    //       className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 group-hover:scale-110 transition-all"
    //     />
    //   </div>
    //   <div className="mt-6 mb-2">
    //     <h2 className="text-xl font-semibold tracking-wide">Pen</h2>
    //     <hr />
    //     <span className="block text-xs mt-2 font-medium tracking-widest uppercase dark:text-violet-400">
    //       By Zaman
    //     </span>
    //   </div>
    //   <div className="mb-4">
    //     <div className="flex justify-between">
    //       <p>Price: 500</p>
    //       <p>Remaining: 16</p>
    //     </div>
    //     <div className="flex justify-between">
    //       <p>Total sites: </p>
    //       <p>Total enroled: </p>
    //     </div>
    //   </div>
    //   <button className="btn10">View</button>
    // </div>

    <div className="cursor-pointer border rounded-lg border-gray-600 hover:shadow-lg dark:hover:shadow-gray-700 duration-300 p-4 flex gap-2 md:gap-6 relative">
      <div className="left w-1/2">
        <img
          src="https://soniofficemate.com/wp-content/uploads/2024/10/664080159-executive-kit.webp"
          alt="product-image"
        />
      </div>
      <div className="left w-1/2 flex flex-col justify-between">
        <h3 className="md:text-lg font-bold font-playwrite mb-4 mt-2">
          Product Name <span className="animate-textColor uppercase">new</span>
        </h3>
        <p className="text-base hidden md:block">{trimToWords(text, 15)}</p>
        <p className="text-xs md:hidden">{trimToWords(text, 10)}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
