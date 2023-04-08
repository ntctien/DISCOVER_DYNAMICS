import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

const HomeLayout = () => {
  return (
    <div className='px-[40px]'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default HomeLayout