import Image from "next/image"
import BG from '@/assets/images/joinUs/BG.svg';
import PrimaryButton from "@/components/buttons/PrimaryButton";
import JoinUsCard from "@/components/Cards/JoinUsCard";
import ProductOwner from "@/assets/images/joinUs/ProductOwner.svg";
import GlobalMarket from "@/assets/images/joinUs/GlobalMarket.svg";
import Freelancer from "@/assets/images/joinUs/Freelancer.svg";
import Economy from "@/assets/images/joinUs/Economy.svg";

export default function JoinUs() {
  return (
    <div className="relative flex">
      <Image className="absolute -z-10" alt="joinusBg" src={BG} />
      <div className="basis-1/2  z-10">
        <div className="text-[#11AD8E] absolute text-[48px] font-bold ml-[194px] mt-[64px]">
          Why to join
        </div>
        <div className="absolute ml-[120px] mt-[168px] w-[517px]">
          <ul className="list-disc">
            <li>
              Own products (Full-Stack App Templates, AR and VR Experiences, and
              APIs).
            </li>
            <li>
              Offer services at a rate of $50 per hour ($96,000 per year).{" "}
            </li>
            <li>Fantastic opportunity to better their financial situation.</li>
            <li>Boost economy by expanding software exports.</li>
          </ul>
        </div>
        <div className="absolute ml-[125px] mt-[350px]">
          <PrimaryButton labelName="Join Now" link="/" />
        </div>
      </div>
      <div className="  basis-1/2 flex space-x-7">
        <div className="mt-[64px] space-y-5">
        <JoinUsCard title="Product Owner" img={ProductOwner} />
        <JoinUsCard title="Access to Global Market" img={GlobalMarket} />
        </div>
        <div className="mt-[105px] space-y-5">
        <JoinUsCard title="Freelance" img={Freelancer} />
        <JoinUsCard title="Access to Global Market" img={Economy} />
        </div>
      </div>
    </div>
  );
}
