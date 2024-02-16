export default function SidebarMenuItem({ text, Icon, active }) {
  return (
    <div className='sidebar-menu-item flex items-center justify-center xl:justify-start space-x-3 text-gray-700 text-lg'>
      <Icon className='h-7' />
      <span className={`${active && 'font-bold'} hidden xl:inline`}>{text}</span>
    </div>
  )
}