import { SparklesIcon } from '@heroicons/react/24/outline'

export default function Feed() {
  return (
    <div className='border-l border-r border-gray-200 xl:min-w-[576px] max-w-xl flex-grow'>
      <div className='border-b border-gray-200 sticky top-0 z-50 py-2 px-3 bg-white flex'>
        <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
        <div className='sidebar-menu-item ml-auto px-0 w-9 h-9 flex items-center justify-center'>
          <SparklesIcon className='h-5'/>
        </div>
      </div>
    </div>
  )
}