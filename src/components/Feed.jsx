import { SparklesIcon } from '@heroicons/react/24/outline'
import InputTweet from './InputTweet'

export default function Feed() {
  return (
    <div className='border-l border-r border-gray-200 xl:min-w-[576px] max-w-xl flex-grow'>
      {/* Header */}
      <div className='z-50 sticky top-0 border-b border-gray-200 py-2 px-3 bg-white flex justify-between items-center'>
        <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
        <div className='menu-item w-9 h-9 flex items-center justify-center'>
          <SparklesIcon className='h-5'/>
        </div>
      </div>
      {/* Input tweet */}
      <InputTweet />
    </div>
  )
}