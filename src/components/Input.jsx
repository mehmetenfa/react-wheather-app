import React from 'react'

const input = ({ getLocation, getInfos }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='mt-7'>
        <input
          placeholder="Enter a City"
          type="text"
          className="px-3 py-2 sm:w-[25rem] bg-slate-300 text-black outline-none rounded-lg focus:bg-slate-200 placeholder-text-slate-500"
          onChange={(e) => getLocation(e.target.value)}
          onKeyUp={(e) => {
            if(e.key === "Enter") {
                getInfos()
            }
          }}
        />
      </div>
    </div>
  )
}

export default input
