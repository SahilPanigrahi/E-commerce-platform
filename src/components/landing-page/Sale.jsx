import Image from "next/image";
import Link from "next/link";


const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link href="/shop">
          <Image width={500} height={500} className="h-full w-full object-cover" src="/images/sale/saleImgOne.WEBP" alt="saleImgOne" loading="lazy"/>
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link href="/shop">
            <Image width={780} height={209} className="h-full w-full object-cover" src="/images/sale/saleImgTwo.WEBP" alt="saleImgTwo" loading="lazy"/>
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link href="/shop">
            <Image width={780} height={209}
              className="h-full w-full object-cover"
              src="/images/sale/saleImgThree.WEBP"
              alt="saleImgThree"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
