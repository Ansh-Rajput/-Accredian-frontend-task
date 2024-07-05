import heroSectionImage from "../assets/heroSection.png";

interface HeroSectionProps {
  setOpen: (state: boolean) => void;
}

const HeroSection = ({ setOpen }: HeroSectionProps) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row max-w-7xl rounded-md bg-blue-200/40 m-auto my-5 pb-0 overflow-hidden">
        <div className="flex-1 flex items-center justify-center">
          <div className="p-5 space-y-10">
            <h1 className="text-black text-5xl sm:text-7xl font-bold">
              Let's Learn
              <br /> & Earn
            </h1>
            <p className="text-black text-lg sm:text-3xl ">
              Get a chance to win <br /> up-to{" "}
              <span className="text-blue-500 text-2xl sm:text-5xl font-bold">
                Rs. 15,000
              </span>
            </p>
            <button
              className="text-lg sm:text-3xl bg-blue-500 text-white p-3 py-2 rounded-md"
              onClick={() => setOpen(true)}
            >
              Refer Now
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden relative">
          <img
            src={heroSectionImage}
            alt="img"
            className="w-[80%] m-auto md:w-full translate-y-7"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
