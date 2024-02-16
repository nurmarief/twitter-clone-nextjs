import { SparklesIcon } from '@heroicons/react/24/outline'
import InputTweet from './InputTweet'
import Post from './Post'

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "User One",
      username: "User-1",
      userImg: "https://www.insoft.co.id/wp-content/uploads/2014/05/default-user-image.png",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      text: "Gooooooo!!!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "User One",
      username: "User-1",
      userImg: "https://www.insoft.co.id/wp-content/uploads/2014/05/default-user-image.png",
      img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
      text: "Wow!",
      timestamp: "2 days ago",
    },
  ]
  
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
      {/* Posts */}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}