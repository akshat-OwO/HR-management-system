import { BellIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    return (
        <div className="navbar">
        <h3 className="nav-head">My Apps&#62; <span>Tasks</span></h3>
        <div className="icon-wrapper">
          <BellIcon className='icon nav' />
          <UserIcon className='icon nav' />
        </div>
      </div>
    );
}
 
export default Navbar;