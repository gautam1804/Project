import React from 'react'

const Timer = () => {
  return (
    <div>
      <section className='timer-container'>
        <section className="timer"></section>
        <div>
            <span className="mdi mdi-calendar-clock timer-icon"></span>
            <h2>Count down begins</h2>
            
        </div>
      </section>
    </div>
  )
}

export default Timer
