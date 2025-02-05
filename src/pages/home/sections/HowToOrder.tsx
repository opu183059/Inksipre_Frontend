import HowToOrderCard from "../../../components/cards/HowToOrderCard";

const HowToOrder = () => {
  return (
    <div className="min-h-screen  bg-[url('https://c1.wallpaperflare.com/preview/48/96/26/craft-paper-craft-card-making-handcraft-card-handicrafts.jpg')] bg-cover bg-fixed">
      <div className="bg-black/70 min-h-screen py-10">
        <div className="container">
          <h1 className="text-center text-2xl font-playwrite font-bold mb-6 text-gray-50">
            How to Order
          </h1>
          <div className="w-full flex relative">
            <HowToOrderCard
              title="Add to Cart"
              image="https://th.bing.com/th/id/OIP.JpBtWSdXKQEIRTPH7YCyxAHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain"
              description="Browse our collection, select your favorite stationery items, and click “Add to Cart.” Once you’re done, go to your cart to review your selections."
            />
            <div className="w-7/12 rounded-[80px] hidden md:block absolute right-60 -bottom-36 border-t-4 border-r-4 h-60 border-gray-50"></div>
          </div>
          <div className="w-full flex md:justify-end my-16 relative">
            <HowToOrderCard
              title="Checkout & Payment"
              image="https://5.imimg.com/data5/SELLER/Default/2022/12/VH/XL/RN/3056452/all-office-stationery-items-1000x1000.jpg"
              description="Enter your shipping details, choose a payment method (Credit/Debit Card, UPI, Cash on Delivery, etc.), and confirm your order."
            />
            <div className="w-7/12 rounded-[80px] hidden md:block absolute right-60 -bottom-36 border-t-4 border-l-4 h-60 border-gray-50"></div>
          </div>
          <div className="w-full flex">
            <HowToOrderCard
              title="Order Processing & Delivery"
              image="https://th.bing.com/th/id/OIP.nO2pqUYPCsLZ4TJRJ8N3rgAAAA?rs=1&pid=ImgDetMain"
              description="We’ll process your order and ship it as soon as possible. You’ll receive tracking details, and your order will be delivered to your doorstep."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;
