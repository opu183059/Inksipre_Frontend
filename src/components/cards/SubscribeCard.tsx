const SubscribeCard = () => {
  return (
    <div className="backdrop-blur-sm p-8 border border-gray-50 rounded-md text-gray-50 text-center">
      <p>Subscribe to get the latest updates</p>
      <div className="flex mt-3">
        <input
          type="email"
          required
          className="rounded-l-md text-gray-900 pl-1 md:w-72"
        />
        <button
          type="submit"
          className="bg-red-700 px-2 py-1 rounded-r-md uppercase"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeCard;
