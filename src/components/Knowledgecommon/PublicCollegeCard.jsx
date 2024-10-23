import ArrowRight from '@/assets/arrow_forward.svg';
import FarookClg from '@/assets/FarookCollege.svg';

const PublicCollegeCard = ({CollegeName,CollegeDiscription}) => {
  return (
    <div>
      <div className="h-[100px] w-[1000px] rounded-[18px] border-[2px] flex bg-white ">
        <div className="h-full w-[970px] flex">
            <div className="h-full w-[100px] flex justify-center items-center"><img className='h-[70px] w-[70px] p-1 border-[1px] rounded-[10px]' src={FarookClg} alt="" /></div>
            <div className="h-full w-[800px] flex flex-col justify-center ml-[10px]">
                <h1>{CollegeName}</h1>
                <p>{CollegeDiscription}</p>
            </div>
        </div>
        <div className="h-full w-[30px] flex "><img className='w-[20px]' src={ArrowRight} alt="" /></div>

      </div>
    </div>
  )
}

export default PublicCollegeCard
