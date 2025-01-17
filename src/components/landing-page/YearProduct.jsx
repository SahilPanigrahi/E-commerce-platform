import Image from "next/image";
import Link from "next/link";

const YearProduct = () => {
  return (
    <Link href="/shop">
      <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
        <Image
          className="w-full h-full object-contain hidden md:inline-block"
          src="/images/products/productOfTheYear.WEBP"
          width={1000}
          height={100}
          alt="productOfTheYear image"
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-black">
            Product of The year
          </h1>
          <p className="text-base font-normal text-black max-w-[600px] mr-4">
            The humble clock, a timeless innovation, takes the crown as Product
            of the Year! Beyond its primary function of telling time, the clock
            has evolved into a symbol of style, precision, and innovation.
          </p>
          <button className="bg-black text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
            Shop Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;
