import React from 'react'
import Tilt from 'react-tilt'

export const LeftTimeline = () => {
    return (
        <>
        <div className="mb-8 md:flex lg:flex justify-between flex-row-reverse items-center w-full left-timeline">
        <div className="z-50 md:flex lg:flex invisible md:visible lg:visible items-center order-1 bg-white border rounded-full mt-1 md:mt-0 lg:mt-0 lg:mr-5 md:ml-6 -ml-1 mb-4 md:mb-80 lg:mb-96 w-3 h-3 md:w-8 lg:w-8 md:h-4 lg:h-4">
            </div>
          <div className="order-1 bg-black w-full  lg:py-4">
            <div className="order-1 w-11/12 md:max-w-full lg:w-4/5 bg-baseBlue rounded-xl -mt-3 lg:mt-0 mx-5 lg:ml-20 px-6 py-3 lg:py-4">
              <h3 className=" lg:mb-3 w-full font-bold text-white lg:text-xl">Lorem Ipsum</h3>
            </div>
            <Tilt options={{max : 25, scale: 1  }}>
              <div className="Tilt-inner ml-4 lg:mx-10">
                <div className="lg:order-1 mt-6 lg:mt-12 ml-3 md:ml-0 lg:ml-16 lg:transform -rotate-2 min-w-96 w-11/12 md:max-w-full lg:w-4/5 h-max bg-baseBlack rounded-xl p-4">
                  <div className="h-64 lg:h-80 bg-white rounded-xl px-3  lg:px-6 lg:py-4">
                    <h3 className="lg:mb-3 w-full font-bold text-black lg:text-xl">Lorem Ipsum</h3>
                  </div> 
                  <p className="mt-4 text-sm font-medium leading-snug tracking-wide text-white text-opacity-100"              >
                    12th December 2020
                   </p>
                 </div>              
              </div>
            </Tilt>
          </div>
          <div className="lg:mb-20 mt-4 lg:mt-0 mx-4 pr-5 md:px-0 lg:p-0 md:-mr-2 lg:mx-0 w-full">
            <div className="lg:p-8 w-full ">
            <h3 className="lg:mb-3 w-full lg:mt-auto mt-6 text-white font-bold text-3xl">Mozohack</h3>
              <p className="lg:text-xl lg:leading-relaxed lg:tracking-widest ">
                A 3-day extravaganza aimed at spreading the message of the power of open-source web among the students is complete with workshops, technical quizzes, games and much more. Mozofest provides the perfect respite to students from their busy schedules.
              </p>
            </div>
          </div>
        </div>
        </>
    )
}
// export  LeftTimeline
export const RightTimeline = () => {
    return (
        <>
        {/* right timeline */}
         <div className="mb-8 md:flex lg:flex justify-between  items-center w-full right-timeline">
          <div className="z-50 md:flex lg:flex items-center invisible md:visible lg:visible order-1 bg-white border rounded-full mt-1 md:mt-0 lg:mt-0  lg:ml-0 md:-ml-1 -ml-1 mb-4 md:mb-80 lg:mb-96 w-3 h-3 md:w-8 lg:w-8 md:h-4 lg:h-4">
            
          </div>
          <div className="order-1 bg-black w-full ">
          <div className="order-1 w-11/12 md:max-w-full lg:w-4/5 bg-orange600 rounded-xl -mt-3 lg:mt-0 mx-4 lg:mx-2 lg:ml-10 px-6 py-3 lg:py-4">
              <h3 className="lg:mb-3 w-full font-bold text-white lg:text-xl">Lorem Ipsum</h3>
            </div>
            <Tilt className="Tilt" options={{ max : 25, scale: 1  }}  >
              <div className="Tilt-inner  ml-4 lg:mx-10"> 
              <div className="order-1 mt-6 lg:mt-12 lg:ml-4 ml-3 md:ml-0  lg:transform rotate-2 min-w-96 w-11/12 md:max-w-full lg:w-4/5 h-max bg-baseBlack rounded-xl shadow-xl p-4">
              <div className="h-64 lg:h-80 bg-white rounded-xl shadow-xl px-3  lg:px-6 lg:py-4">
                <h3 className="lg:mb-3 w-full font-bold text-black lg:text-xl">Lorem Ipsum</h3>
              </div> 
              <p className="mt-5 text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                12th December 2020
              </p>
                </div>
                </div>
            </Tilt>
          </div>
          <div className="lg:mb-20 mt-4 lg:mt-0 mx-4 pr-5 md:px-0 lg:p-0 md:ml-0 lg:mx-0 w-full">
          <div className="lg:p-14 w-full ">
            <h3 className="lg:mb-3 w-full text-white font-bold text-3xl">Mozohack</h3>
              <p className="lg:text-xl leading-relaxed lg:tracking-widest ">
                A 3-day extravaganza aimed at spreading the message of the power of open-source web among the students is complete with workshops, technical quizzes, games and much more. Mozofest provides the perfect respite to students from their busy schedules.
              </p>
          </div>
        </div>
      </div>
     </>
    )
}