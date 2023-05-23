
import Character from '@/assets/images/program/Character.svg';
import Image from 'next/image';

export default function Program() {
  return (
    <div  className='mt-[240px] ml-[97px] flex '>
        <Image alt="hero" src={Character}></Image>
        <div className='bg-gray-800 w-[775px] h-[416px] text-white mr-[97px] rounded-lg'>
            <p className='text-[#11AD8E] text-4xl font-bold ml-[45px] mt-[66px]'>The Program in a Nutshell</p>
            <p className='text-[#11AD8E] text-2xl font-normal underline ml-[186px] mt-[10px]'>Earn While You Learn</p>
            
            <div className='-space-y-4 mt-[20px]'>
            <p className='ml-8'>
            In this brand-new type of curriculum,
            students will learn how to  </p> <br/>
            <p className='ml-12'> make money and boost exports
             in the classroom and will begin</p><br/>
             <p className='ml-16'> doing so within six months
              of the program's beginning. It </p><br/>
              <p className='ml-20'>resembles a cross between a corporate 
              venture and an</p><br/>
              <p className='ml-48'> educational project.
            </p>
            </div>
        </div>

    </div>
  )
}
