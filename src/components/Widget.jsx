import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Widgets() {
  return (
    <div className='relative hidden lg:block grow space-y-5'>
        <div className='z-50 sticky top-0 py-4 px-8 bg-white'>
            {/* Search bar */}
            <div className='relative rounded-full px-3 h-10 flex items-center'>
              <MagnifyingGlassIcon className='z-50 h-5 text-gray-500'/>
              <input className='absolute inset-0 rounded-full border-gray-500 pl-11 bg-gray-100 text-gray-700 focus:shadow-lg focus:bg-white' type='text' placeholder='Search Twitter' />
            </div>
        </div>
    </div>
  )
}