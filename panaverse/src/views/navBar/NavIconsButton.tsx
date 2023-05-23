'use client';

import { useTheme } from 'next-themes';
import {BiBell} from 'react-icons/bi';
import {FiMoon} from 'react-icons/fi';
import {BsFillSunFill} from 'react-icons/bs';

export default function NavIconsButton() {
 const {systemTheme,theme, setTheme} = useTheme();
 let currentTheme = theme ==="system"? systemTheme: theme;


  return (
    <div className='text-white text-3xl  flex space-x-7'>
        <BiBell></BiBell>
        <p className='-mt-1'>|</p>
        {
          currentTheme =='dark'? (<BsFillSunFill onClick={()=> setTheme("light")}></BsFillSunFill>) :
          (<FiMoon onClick={()=>{setTheme("dark")}}></FiMoon>)
        }
        <FiMoon></FiMoon>
    </div>
  )
}
