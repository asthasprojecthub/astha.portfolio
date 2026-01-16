import React from 'react'
import './Qualification.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import qualification_Data from '../../assets/qualification_data'
const Qualification = () => {
  return (
    <div id='qualification' className='qualification'>
        <div className="qualification-title">
            <h1>MY Qualification</h1>
            <img src= {theme_pattern} alt="" />
        </div>
      <div className="qualification-container">
        {qualification_Data.map((qualification,index)=>{
            return <div key={index} className="qualification-format">
                <h3>{qualification.q_year}</h3>
                <h2>{qualification.q_from}</h2>
                <p>{qualification.q_desc}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default Qualification
