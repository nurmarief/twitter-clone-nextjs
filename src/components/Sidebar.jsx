import Image from 'next/image'
import SidebarMenuItem from './SidebarMenuItem'
import { HomeIcon } from '@heroicons/react/24/solid'
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

export default function Sidebar() {
  return (
    <div className='fixed p-2 h-full space-y-4 hidden sm:block'>
      {/* Logo */}
      <div className='sidebar-menu-item hover:bg-blue-100'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg'
          alt='Twitter logo'
          width='50'
          height='50'
        ></Image>
      </div>

      {/* Menu */}
      <div>
        <SidebarMenuItem text='Home' Icon={HomeIcon} active/>
        <SidebarMenuItem text='Explore' Icon={HashtagIcon} />
        <SidebarMenuItem text='Notifications' Icon={BellIcon} />
        <SidebarMenuItem text='Messages' Icon={InboxIcon} />
        <SidebarMenuItem text='Bookmarks' Icon={BookmarkIcon} />
        <SidebarMenuItem text='Lists' Icon={ClipboardIcon} />
        <SidebarMenuItem text='Profile' Icon={UserIcon} />
        <SidebarMenuItem text='More' Icon={EllipsisHorizontalCircleIcon} />
      </div>

      {/* Button */}
      <button className='rounded-full w-56 h-12 hidden xl:inline bg-blue-400 shadow-md hover:brightness-95 text-lg text-white font-bold'>Tweet</button>

      {/* Mini-Profile */}
      <div className='sidebar-menu-item flex items-center justify-center xl:justify-start text-gray-700'>
        <div className='rounded-full relative h-10 w-10 xl:mr-2'>
          <Image
            src='https://www.insoft.co.id/wp-content/uploads/2014/05/default-user-image.png'
            alt='User img'
            fill={true}
            className='h-auto object-cover'
          />
        </div>
        <div className='hidden xl:inline leading-5'>
          <p className='font-bold'>User-1</p>
          <p className='text-gray-500'>@user-1</p>
        </div>
        <EllipsisHorizontalIcon className='xl:ml-8 h-5 hidden xl:inline'/>
      </div>
    </div>
  )
}