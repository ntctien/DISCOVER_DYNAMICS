import { Outlet } from 'react-router-dom'
import './HomeLayout.css';
import Header from '../../components/Header'

const HomeLayout = () => {
  return (
    <div className='px-[40px]'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default HomeLayout