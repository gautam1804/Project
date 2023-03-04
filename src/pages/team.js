import React from 'react'
import Team from '../components/teams'
import Img1 from '../assets/img1.jpeg'

const teamm = () => {
  const description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, corrupti."
  return (
    <div className='pageBody'>
      <div className="container">
        <Team img={Img1} title="Card One" description={description}/>
      
      </div>
    </div>
  )
}

export default teamm;
