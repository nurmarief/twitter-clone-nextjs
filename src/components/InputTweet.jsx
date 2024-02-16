import { FaceSmileIcon, PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function InputTweet() {
  return (
    <div className='border-b border-gray-200 p-3 flex space-x-3'>
      <div className='relative rounded-full h-11 w-11 cursor-pointer hover:brightness-95 overflow-hidden'>
        <Image
          src='https://www.insoft.co.id/wp-content/uploads/2014/05/default-user-image.png'
          alt='User img'
          fill={true}
          className='object-cover'
        />
      </div>
      <div className='w-full divide-y divide-gray-200'>
        <div>
          <textarea className='border-none w-full min-h-[50px] focus:ring-0 text-lg tracking-wide text-gray-700 placeholder-gray-700' rows='2' placeholder="What's happening?"></textarea>
        </div>
        <div className='pt-2.5 flex items-center justify-between'>
            <div className='flex'>
                <PhotoIcon className='p-2 w-10 h-10 menu-item text-sky-500 hover:bg-sky-100'/>
                <FaceSmileIcon className='p-2 w-10 h-10 menu-item text-sky-500 hover:bg-sky-100'/>
            </div>
            <button className='rounded-full px-4 py-1.5 bg-blue-400 shadow-md text-white font-bold hover:brightness-95 disabled:opacity-50'>Tweet</button>
        </div>
      </div>
    </div>
  )
}