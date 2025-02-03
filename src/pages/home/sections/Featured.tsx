import FeaturedCard from "../../../components/cards/FeaturedCard";

// https://e0.pxfuel.com/wallpapers/214/113/desktop-wallpaper-school-supplies-abstract-stationary-office-office-stationery.jpg

const Featured = () => {
  const feature = [1, 2, 3, 4];
  return (
    <div className="bg-primary">
      <p className="text-center text-2xl font-playwrite font-bold mb-6">
        New Arrivals
      </p>
      <div className="container grid grid-cols-2 gap-4">
        {feature.map((item) => (
          <FeaturedCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
