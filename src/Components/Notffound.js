import React from 'react'
import notffound from "../assets/images/not-found.svg"

 function Notffound() {
  return (
    <div className='notfound text-center'>
      <img src={notffound} className="mx-auto"/>
      <div className='notfoundtitle text-xl mb-5  mt-8 font-bold'>No Definitions Found</div>
      <p className='notfoundContent text-lg'>
      Sorry pal, we couldn't find definitions for the word you were looking for.
    You can try the search again at later time or head to the web instead.
      </p>

    </div>
  )
}
export default Notffound;