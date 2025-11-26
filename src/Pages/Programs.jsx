import React from 'react'


const Programs = () => {
  return (
    <div className="program-hero">
      <div className="programs">
        <h1 className="program-title"> Programs 
          <div className='program-sub-title'> that you may choose </div>
        </h1>
        <div className="program-wrapper">
          <div className="program-left" style={{ color: "white" }}>
            <h3 style={{ color: "orange" }}><strong>Cardio Training</strong></h3>
            <p style={{marginTop:"47px"}}>Boost your heart health, endurance, and overall stamina with a variety of cardio exercises
              .Perfect for burning calories and staying energized.</p>
            <button style={{position:"fixed", marginTop:"20px"}}>Learn More</button>
          </div>

          <div className="program-left" style={{ color: "white" }}>
            <h3 style={{ color: "orange" }}><strong>Strength Training</strong></h3>
            <p>Build muscle, increase strength, and improve overall body composition through guided
              strength exercises including weightlifting, and bodyweight routines.</p>
            <button>Learn More</button>
          </div>

          <div className="program-left" style={{ color: "white" }}>
            <h3 style={{ color: "orange", fontSize: "25px" }}>Abs and Core Exercises</h3>
            <p>Strengthen your core and improve stability with targeted exercises for your abs,
              obliques, and lower back. Enhance posture, balance, and overall body strength.</p>
            <button style={{position:"fixed"}}>Learn More</button>
          </div>

          <div className="program-left" style={{ color: "white" }}>
            <h3 style={{ color: "orange" }}><strong>Shoulder Exercises</strong></h3>
            <p>Build strong and flexible shoulders through targeted workouts that increase mobility,
              prevent injuries, and improve your upper body strength for daily activities.</p>
            <button style={{position:"fixed"}}>Learn More</button>
          </div>
          
          <div className="program-left" style={{ color: "white" }}>
            <h3 style={{ color: "orange" }}><strong>Leg Exercises</strong></h3>
            <p style={{marginTop:"41px"}}>Tone and strengthen your legs with exercises that improve endurance, stability,
              and muscle definition, helping you move better and prevent lower-body injuries.</p>
            <button style={{position:"fixed", marginTop:"5px"}}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programs