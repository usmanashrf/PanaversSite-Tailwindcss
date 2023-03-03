import Image from "next/image";
import heroBG from '@/assets/images/hero/HeroBG.svg';

export default function Hero() {
  return (
    <div className="flex-1 -mt-40 relative -z-10">
        <div className="text-white absolute mt-[239px] z-10">
        Become Certified Web 3.0 and Metaverse Developer
        </div>

        <Image className="w-screen absolute" alt="bgImg" src={heroBG}></Image>
    </div>
  )
}
