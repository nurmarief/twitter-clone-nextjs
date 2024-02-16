import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widget'

export default function Home() {
  return (
    <main className='mx-auto max-w-7xl min-h-screen flex'>
      <Sidebar />
      <Feed />
      <Widgets />

      {/* Modal */}
    </main>
  )
}
