import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
      <section className="w-full bg-white">
        <Link href="/shop" aria-label="Navigate to shop page">
          <Image
            width={1400}
            height={800}
            src="/images/banner/bannerImgOne.WEBP"
            className="w-screen cursor-pointer"
            alt="Shop our exclusive products on sale"
            priority
          />
        </Link>
      </section>
  );
};

export default Hero;
