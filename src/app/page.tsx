import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import LandingPageButton from "@/components/Button/LandingPageButton";
import Footer from "@/components/Footer/Footer";

export default function Home() {

  return (
    <>
      <NavBar />
      <div className="w-[1297px] -ml-[68.5px] pb-9 flex flex-col items-center gap-[64px]">
        <div
          className="flex flex-row justify-center relative"
        >
          <Image src="/banner.webp" alt="banner" width={1297} height={577} className="rounded-xl object-cover"/>
          <div className="w-[575px] text-[56px] leading-[120%] font-semibold text-white absolute top-14 left-14">
            <h1>
              Where every pet finds a caring sitter, and every owner finds peace
            </h1>
          </div>
        </div>

        <h1 className="text-[32px] font-semibold leading-[120%] text-dark-blue text-center">
          Connecting pets and sitters <br />
          Creating happy moments together!
        </h1>

        {/* Container for all sections */}
        <div className="w-full flex flex-row  gap-[32px] justify-between">
          {/* Main container for content 1 */}
          <div className="flex w-[324px] flex-col gap-[32px] items-end">
            <div className="img1 flex flex-col items-center text-center">
              <Image
                src="/content1.svg"
                alt="home 1"
                width={324}
                height={245}
              />

              <h3 className="text-subheading text-dark-blue mt-[32px] ">
                Better for Pet Owners
              </h3>
              <p className="text-body-paragraph text-center mt-[32px]">
                Find trusted pet sitters with ease. Create activities for your
                pets, track their progress, and receive real-time updates. Enjoy
                peace of mind knowing your pets are in good hands.
              </p>
            </div>
          </div>

          {/* Main container for content 2 */}
          <div className="flex w-[324px] flex-col gap-[32px] items-center">
            <div className="img2 flex flex-col items-center text-center">
              <Image
                src="/content2.svg"
                alt="home 2"
                width={324}
                height={245}
              />
              <h3 className="text-subheading text-dark-blue mt-[32px] ">
                Better for Pets
              </h3>
              <p className="text-body-paragraph text-center mt-[32px]">
                {"Your pets deserve the best care. Our sitters provide personalized attention, ensuring your pets stay happy, healthy,and active while you're away."}
              </p>
            </div>
          </div>

          {/* Main container for content 3 */}
          <div className="flex w-[324px] flex-col gap-[32px] items-start">
            <div className="img3 flex flex-col items-center text-center">
              <Image
                src="/content3.svg"
                alt="home 3"
                width={324}
                height={245}
              />
              <h3 className="text-subheading text-dark-blue mt-[32px] ">
                Better for Sitters
              </h3>
              <p className="text-body-paragraph text-center mt-[32px]">
                Connect with pet owners and offer your services on your terms.
                Choose the activities you want to do, set your own rates, and
                enjoy flexible work that fits your schedule.
              </p>
            </div>
          </div>
        </div>
        <LandingPageButton />
      </div>
      <Footer />
    </>
  );
}
