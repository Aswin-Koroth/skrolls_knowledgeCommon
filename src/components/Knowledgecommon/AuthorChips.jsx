import React from 'react'

const AuthorChips = ({AuthorImage, AuthorName}) => {
  return (
    <div>
    <div className="h-[30px] w-[100px] rounded-[15px] bg-[#F9FAFB] ml-[20px] mt-[10px] overflow-hidden flex ">
        <div className="h-[30px] w-[30px] flex justify-center items-center"><img className='h-[20px] w-[20px] rounded-[10px]' src={AuthorImage} alt="" /></div>
        <p className='font-medium text-[12px] flex items-center px-[5px]'>{AuthorName}</p>
    </div>

    </div>
  )
}

export default AuthorChips
