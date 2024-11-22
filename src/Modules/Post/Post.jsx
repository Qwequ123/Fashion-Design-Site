import React from 'react'
import { Navbar } from '../Home/components'

const Post = () => {
  return (
    <>
    <Navbar/>
    <div className='relative '>
      
    <div className='absolute left-[10%] top-[100px] border-2 w-[80%]'>


      


      <div className='flex items-center justify-start gap-8'>
     <p className='text-xl font-medium '> Create Post</p>

        <div className="">
                <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-2 px-4 bg-blue-500 rounded-xl text-white font-medium text-lg">
                  Create New
                </button>
              </div>
</div>

<div className='lg:flex lg:justify-between '>


  {/* image upload */}

 <div>
  <label>
  <input type="file" name="myImage" accept="image/*" />
  
</label>
</div>

        


{/* input section */}


<div className='  border-2 w-full flex flex-col mt-8 lg:w-1/2'>

    <div className="flex flex-col">
                <label className="text-lg font-medium mt-2">Title</label>
                <input
                  className="w-full lg:w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter your email"
                />
              </div>


              <div className="flex flex-col">
                <label className="text-lg font-medium  my-2">Price</label>
                <input
                  className="w-full lg:w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <p className='text-lg font-medium  my-4'>About this item</p>


              {/* Material */}
              <div className="flex flex-col">
                <label className="text-l font-base my-2">Material:</label>
                <input
                  className="w-full lg:w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                  placeholder="Add material type"
                />
              </div>


                {/* Feature */}
              <div className="flex flex-col">
                <label className="text-l font-base  my-2 ">Feature:</label>
                <input
                  className="w-full lg:w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                  placeholder="Add feature"
                />
              </div>

                {/* Ocassion */}

              <div className="flex flex-col">
                <label className="text-l font-base  my-2 ">Occasion:</label>
                <input
                  className="w-full lg:w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                  placeholder="Add occasion to use"
                />
              </div>

              {/*  size */}

              <div className="flex flex-col">
                <label className="text-l font-base  my-2 ">Size:</label>
                <input
                  className="w-full lg:w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                  placeholder="Add Size"
                />
              </div>

              {/* Match */}

              <div className="flex flex-col">
                <label className="text-l font-base  my-2 ">Match:</label>
                <input
                  className="w-full lg:w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                  placeholder="Add Match"
                />
              </div>

              {/* Tagged topics (0) */}

              <div className="flex flex-col">
                <label className="text-lg font-medium  my-2">Tagged topics (0)</label>
                <input
                  className="w-full lg:w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                  placeholder="Search for tag"
                />
                <p className='my-2'>Don't worry, people won't see your tags</p>
              </div>

              <p className='my-2 text-xl font-bold'>More options</p>







</div>

   </div>
   </div>
   </div>

    </>
  )
}

export default Post