import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  // text over pic
  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: "10%",
    left: "20%",
    color: "white",
    fontSize: "48px",
    fontWeight: "600",
    textAlign: "left",
    fontFamily: "Poppins",
    width: "458px",
    height: "232px",
    lineHeight: "57.6px",
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col w-[1154px]  gap-[64px]">
        <div
          className="banner-img"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <Image src="/banner.webp" alt="banner" width={800} height={800} />
          {/* Overlay Text */}
          <div style={overlayStyle}>
            <h1>
              Where every pet finds a caring sitter, and every owner finds peace
            </h1>
          </div>
        </div>

        <h1 className="text-header text-dark-blue text-center">
          Connecting pets and sitters <br />
          Creating happy moments together!
        </h1>

        {/* Container for all sections */}
        <div className="flex flex-row  gap-[32px] justify-between">
          {/* Main container for content 1 */}
          <div className="flex w-[324px] flex-col gap-[32px] items-end">
            <div className="img1 flex flex-col items-center text-center mx-[20px]">
              <Image
                src="/content1.svg"
                alt="home 1"
                width={200}
                height={200}
              />

              <h3 className="text-subheading text-dark-blue mt-[32px] ">
                Better for Pet Owners
              </h3>
              <p className="text-body text-center mt-[32px]">
                Find trusted pet sitters with ease. Create activities for your
                pets, track their progress, and receive real-time updates. Enjoy
                peace of mind knowing your pets are in good hands.
              </p>
            </div>
          </div>

          {/* Main container for content 2 */}
          <div className="flex w-[324px] flex-col gap-[32px] items-center">
            <div className="img2 flex flex-col items-center text-center mx-[20px]">
              <Image
                src="/content2.svg"
                alt="home 2"
                width={200}
                height={200}
              />
              <h3 className="text-subheading text-dark-blue mt-[32px] ">
                Better for Pets
              </h3>
              <p className="text-body text-center mt-[32px]">
                Your pets deserve the best care. Our sitters provide
                personalized attention, ensuring your pets stay happy, healthy,
                and active while you're away.
              </p>
            </div>
          </div>

          {/* Main container for content 3 */}
          <div className="flex w-[324px] flex-col gap-[32px] items-start">
            <div className="img3 flex flex-col items-center text-center mx-[20px]">
              <Image
                src="/content3.svg"
                alt="home 3"
                width={200}
                height={200}
              />
              <h3 className="text-subheading text-dark-blue mt-[32px] ">
                Better for Sitters
              </h3>
              <p className="text-body text-center mt-[32px]">
                Connect with pet owners and offer your services on your terms.
                Choose the activities you want to do, set your own rates, and
                enjoy flexible work that fits your schedule.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-[10px] ">
          <button className=" px-[24px] py-[16px] text-button text-white bg-bright-blue rounded-lg">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
}
