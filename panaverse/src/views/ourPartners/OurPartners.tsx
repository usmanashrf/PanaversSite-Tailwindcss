import PIAIC from '@/assets/images/partners/PIAIC.svg';
import PSX from '@/assets/images/partners/PSX.svg';
import Panacloud from '@/assets/images/partners/Panacloud.svg';
import Salayni from '@/assets/images/partners/Salayni.svg';
import CECOS from '@/assets/images/partners/CECOS.svg';
import Bharia from '@/assets/images/partners/Bharia.svg';
import Air from '@/assets/images/partners/Air.svg';
import Image from 'next/image';

export default function OurPartners() {
  return (
    <div>
      <div className="text-[#11AD8E] text-[48px] font-bold flex justify-center mt-[124px]"> 
      OurPartners </div>

      <div className="h-[148px] bg-gray-700 flex pl-[252px] mb-[124px] shadow-lg shadow-[#11AD8E]">
        <Image alt="" src={PIAIC}/>
        <Image alt="" src={PSX}/>
        <Image alt="" src={Panacloud}/>
        <Image alt="" src={Salayni}/>
        <Image alt="" src={CECOS}/>
        <Image alt="" src={Bharia}/>
        <Image alt="" src={Air}/>
      </div>
        </div>
  )
}
