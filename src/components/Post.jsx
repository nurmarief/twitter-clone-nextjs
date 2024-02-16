import {
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Post({ post }) {
  return (
    <div className='border-b p-3 flex cursor-pointer border-gray-200'>
      {/* user image */}
      <div className='relative mr-4 rounded-full h-11 w-11 shrink-0 overflow-hidden'>
        <Image src={post.userImg} alt='User image' fill={true} className='object-cover' />
      </div>
      {/* right side */}
      <div>
        {/* Header */}
        <div className='flex items-center justify-between'>
          {/* user info */}
          <div className='flex items-center space-x-1 whitespace-nowrap'>
            <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>
              {post.name}
            </h4>
            <span className='text-sm sm:text-[15px]'>@{post.username} - </span>
            <span className='text-sm sm:text-[15px] hover:underline'>
              {post.timestamp}
            </span>
          </div>

          {/* dot icon */}
          <EllipsisHorizontalIcon className='menu-item p-2 h-10 w-10 hover:bg-sky-100 hover:text-sky-500' />
        </div>

        {/* post text */}
        <p className='mb-2 text-gray-800 text-[15px sm:text-[16px]'>
          {post.text}
        </p>

        {/* post image */}
        <img className='rounded-2xl mr-2' src={post.img} alt='' />

        {/* icons */}
        <div className='p-2 flex justify-between text-gray-500'>
          <ChatBubbleOvalLeftIcon className='menu-item p-2 h-9 w-9 hover:text-sky-500 hover:bg-sky-100' />
          <TrashIcon className='menu-item p-2 h-9 w-9 hover:text-red-600 hover:bg-red-100' />
          <HeartIcon className='menu-item p-2 h-9 w-9 hover:text-red-600 hover:bg-red-100' />
          <ShareIcon className='menu-item p-2 h-9 w-9 hover:text-sky-500 hover:bg-sky-100' />
          <ChartBarIcon className='menu-item p-2 h-9 w-9 hover:text-sky-500 hover:bg-sky-100' />
        </div>
      </div>
    </div>
  )
}