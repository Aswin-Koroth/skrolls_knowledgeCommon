import React from 'react'

const SelectionTAb = ({activeTab}) => {
  return (
    <div className="h-[50px] w-full flex justify-center items-center">
    <div className="h-[40px] w-[900px] border-b-2 border-b-slate-300 flex justify-center gap-1 mt-[-40px]">
      <div
        className={`h-full w-[100px] flex items-center justify-center ${
          activeTab === 'department' ? 'border-b-2  border-b-slate-700 font-bold text-black' : ''
        }`}
      >
        Department
      </div>
      <div
        className={`h-full w-[100px]  flex items-center justify-center ${
          activeTab === 'authors' ? ' border-b-2  border-b-slate-700 font-bold text-black' : ''
        }`}
      >
        Authors
      </div>
    </div>
  </div>
  )
}

export default SelectionTAb
