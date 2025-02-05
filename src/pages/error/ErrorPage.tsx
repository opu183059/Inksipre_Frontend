import { Link } from "react-router-dom";

const ErrorPage = () => {
  // const { error } = useRouteError() as any;

  return (
    <div>
      <section className="flex items-center h-screen bg-[url('https://i.ibb.co/QQpBLcq/HTML-Yeti-404-Page.gif')] bg-contain bg-no-repeat sm:bg-cover">
        <div className="container flex flex-col items-end px-5 mx-auto my-8">
          <div className="max-w-md lg:max-w-xl text-center md:text-right">
            <p className="text-2xl font-semibold md:text-3xl mb-10 text-indigo-700 md:text-indigo-200">
              "Something went wrong"
            </p>
            <Link
              to="/"
              className="px-6 py-3 font-normal text-base text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-l"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
