import React from 'react'

const MetricsScore = ({Title, Score}) => {
  return (
    <div className="h-[20px] w-[280px] flex justify-between items-center">
        <div className="h-[20px] w-auto text-[#888888] text-[12px] font-medium">{Title}</div>
        <div className="h-[5px] w-auto flex-1 border-[#888] border-b-[1px] mx-[5px]"></div>
        <div className="h-[20px] w-auto text-[black] text-[12px] font-medium">{Score}</div>
    </div>

  )
}

export default MetricsScore
