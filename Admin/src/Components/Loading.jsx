import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FaSpinner className="text-blue-500 text-6xl animate-spin mb-4" />
      <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
      <p className="text-gray-500">
        Please wait while we load the data data data data.....
      </p>
    </div>
  );
};

export default Loading;
