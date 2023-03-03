import {BiBell} from 'react-icons/bi';
import {FiMoon} from 'react-icons/fi';

export default function NavIconsButton() {
  return (
    <div className='text-white text-3xl  flex space-x-7'>
        <BiBell></BiBell>
        <p className='-mt-1'>|</p>
        <FiMoon></FiMoon>
    </div>
  )
}
