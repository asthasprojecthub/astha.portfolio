import project1_img from '../assets/project_1.svg'
import project2_img from '../assets/project_2.svg'
import project3_img from '../assets/project_3.svg'
import project4_img from '../assets/project_4.svg'
import project5_img from '../assets/project_5.svg'
import project6_img from '../assets/project_6.svg'
import AUDIROBO_IMG from '../assets/AUDIROBO.jpeg'
import rover from '../assets/rover.jpeg'
import STRESSDETECTION from '../assets/STRESSDETECTION.jpeg'

const mywork_data = [
    {
        w_no:1,
        w_name:"Auditorium Serving robot",
        w_img:AUDIROBO_IMG,
        w_desc:"I am working on auditorium service robot which will used for serviece purpose it is patent work by university we are using omni wheels it already does line following and obstacle avoidance i am planning to automate it so i will include gesture controll can you rewrite this" 
    },
    {
        w_no:2,
        w_name:"AI Integrated Stress Detecting system",
        w_img: STRESSDETECTION,
        w_desc:"An AI-based stress detection system that uses multi-sensor fusion of GSR, body temperature, and heart rate/SpO₂ data to estimate stress levels in real time. The system integrates an Arduino-based hardware platform with a machine-learning model to classify stress as low, medium, or high and provide user-friendly feedback."
    },
    {
        w_no:3,
        w_name:"Obstacle Avoidance & Path Following Rover ",
        w_img:rover,
        w_desc:"Designed and built an autonomous robot car featuring integrated Obstacle Detection and path-following capabilities. Integrated Single Board Computers with ultrasonic sensors and motor drivers to build a responsive hardware-software interface"
    },
    // {
    //     w_no:4,
    //     w_name:"Web design",
    //     w_img:project4_img
    // },
    // {
    //     w_no:5,
    //     w_name:"Web design",
    //     w_img:project5_img
    // },
    // {
    //     w_no:6,
    //     w_name:"Web design",
    //     w_img:project6_img
    // },
]
 
export default mywork_data;