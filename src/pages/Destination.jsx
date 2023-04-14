import { Pagination } from 'antd';
import ToursContainer from '../components/ToursContainer';
import tours from '../constants/tours';

const Destination = () => {
  return (
    <div className='pb-[45px]'>
      <ToursContainer tours={tours} className={'mt-[25px]'}/>
      <Pagination defaultCurrent={1} total={50} className='mt-[47px] w-fit mx-auto'/>
    </div>
  )
}

export default Destination