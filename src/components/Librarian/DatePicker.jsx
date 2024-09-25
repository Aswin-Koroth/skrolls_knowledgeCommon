import React from 'react'

const UserDate = ({dateTitle}) => {
  return (
    <div className="h-[30px] w-[200px] flex justify-start gap-[3px]">
      <div className="h-[full] flex justify-center items-center font-semibold">{dateTitle}</div>
      <input className='px-2 w-[150px]' type="date" name="" id="" />
    </div>
  )
}

export default UserDate
