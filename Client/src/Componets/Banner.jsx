import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { bannerImgOne, bannerImgThree, bannerImgTwo } from "../assets/images";
import Container from "./Container";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <AutoplaySlider
      play={true} // Enables autoplay
      cancelOnInteraction={false} // Prevents autoplay from stopping after user interaction
      interval={3000} // 3-second interval
      buttons={false}
      className="h-[248px] md:h-[500px]"
    >
      <Container className="relative">
        <img src={bannerImgOne} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 text-left space-y-2 md:space-y-3 text-black max-w-[90%] md:max-w-[50%]">
          <h1 className="text-xl md:text-5xl font-bold">
            The best Deals in The MacBook
          </h1>
          <p className="text-sm md:text-xl">
            About <strong className="text-red-500">25%</strong> Discount
          </p>
          <span className="text-lg md:text-2xl font-semibold">
            From <span className="text-red-500">578$</span>
          </span>
          <div>
            <button className="bg-gray-500 text-white p-3 px-6 rounded-md mt-2 text-sm md:text-base hover:bg-black hover:text-white duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </Container>

      <Container className="relative">
        <img src={bannerImgTwo} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 text-left space-y-2 md:space-y-3 text-black max-w-[90%] md:max-w-[50%]">
          <h1 className="text-xl md:text-5xl font-bold">
            The best Deals in The MacBook
          </h1>
          <p className="text-sm md:text-xl">
            About <strong className="text-red-500">25%</strong> Discount
          </p>
          <span className="text-lg md:text-2xl font-semibold">
            From <span className="text-red-500">578$</span>
          </span>
          <div>
            <button className="bg-gray-500 text-white p-3 px-6 rounded-md mt-2 text-sm md:text-base hover:bg-black hover:text-white duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </Container>

      <Container className="relative">
        <img
          src={bannerImgThree}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 text-left space-y-2 md:space-y-3 text-black max-w-[90%] md:max-w-[50%]">
          <h1 className="text-xl md:text-5xl font-bold">
            The best Deals in The MacBook
          </h1>
          <p className="text-sm md:text-xl">
            About <strong className="text-red-500">25%</strong> Discount
          </p>
          <span className="text-lg md:text-2xl font-semibold">
            From <span className="text-red-500">578$</span>
          </span>
          <div>
            <button className="bg-gray-500 text-white p-3 px-6 rounded-md mt-2 text-sm md:text-base hover:bg-black hover:text-white duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </Container>
    </AutoplaySlider>
  );
};

export default Banner;
