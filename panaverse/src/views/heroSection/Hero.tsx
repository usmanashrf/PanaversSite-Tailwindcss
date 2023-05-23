import Image from "next/image";
import heroBG from '@/assets/images/hero/HeroBG.svg';
import desc from '@/assets/data/HeroDescription';
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Character from '@/assets/images/hero/Character.svg';
export default function Hero() {
  return (
    <div className="flex-1 -mt-40 relative -z-10">
      <div className="z-10">
        <div className="text-white absolute mt-[239px] z-10 text-5xl font-bold ml-[183px]">
          <span>Become</span>
          <br />
          <span className="text-[#11AD8E]">Certified Web 3.0 </span>and <br />
          <span className="text-[#11AD8E]">Metaverse Developer</span>
        </div>
        <span className="text-white absolute z-10 ml-[183px] mt-[445px] text-lg w-[588px]">
          {desc}
        </span>
        <div className="mt-[564px] ml-[183px] absolute z-10">
          <PrimaryButton labelName="Join Now" link="/" />
        </div>
      </div>
      <div className="absolute z-10 ml-[824px] mt-[239px] ">
        <Image alt="Hero" src={Character}></Image>
      </div>
      <Image className="w-screen" alt="bgImg" src={heroBG}></Image>
    </div>
  );

}
