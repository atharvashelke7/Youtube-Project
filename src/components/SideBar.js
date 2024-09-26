import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { GrChannel } from "react-icons/gr";
import { GoHistory } from "react-icons/go";
import { CgPlayList } from "react-icons/cg";
import { MdVideoLibrary } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { TfiHelpAlt } from "react-icons/tfi";
import { MdOutlineFeedback } from "react-icons/md";

const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;


  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-8 gap-1 text-lg font-bold tracking-tighter">
          {/* Sidebar content here */}
          <li><Link to='/'><MdHomeFilled className='w-12 h-7' />Home</Link></li>
          <li><Link to=""><SiYoutubeshorts className='w-12 h-7' />Shorts</Link></li>
          <li><Link to=""><MdSubscriptions className='w-12 h-7' />Subscription</Link></li>
          <div className='border border-b-2 m-3'></div>

          <li className='text-2xl font-medium'><Link to=''>You <IoIosArrowForward className='w-8 h-5' /></Link></li>
          <li><Link to=""><GrChannel className='w-12 h-7' />Your Channel</Link></li>
          <li><Link to=""><GoHistory className='w-12 h-7' />History</Link></li>
          <li><Link to=""><CgPlayList className='w-12 h-7' />Playlist</Link></li>
          <li><Link to=""><MdVideoLibrary className='w-12 h-7' /> Your Videos</Link></li>
          <li><Link to=""><MdOutlineWatchLater className='w-12 h-7' />watch Later</Link></li>
          <li><Link to=""><AiOutlineLike className='w-12 h-7' />Like Videos</Link></li>

          <div className='border border-b-2 m-3'></div>

          <li><Link to='/'><IoSettingsOutline className='w-12 h-7' />Setting</Link></li>
          <li><Link to=""><MdOutlineOutlinedFlag className='w-12 h-7' />Report history</Link></li>
          <li><Link to=""><TfiHelpAlt className='w-12 h-7' />Help</Link></li>
          <li><Link to=""><MdOutlineFeedback className='w-12 h-7' />send feedback</Link></li>

          <div className='border border-b-2 m-3'></div>

          <p className='flex flex-wrap text-slate-600 font-semibold'>About Press Copyright Contact us Creator Advertise Developers</p>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
