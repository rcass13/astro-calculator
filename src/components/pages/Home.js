import React from 'react';
import '../../assets/styles/bootstrap.css';
import EnterChart from '../form';
import Header from '../Header';

// import NatalChart from '../calculate';



export default function Home() {
//   function Card() {
//     return (
//       <div className="justify-content-center align-items-center card text-white bg-dark mb-3" 
//       style={{ margin:"40px",width:'max-width', height:'fit-content' }}>
//         <div className="card-header">ABOUT ME</div>
//         <div className="card-body">
//           <h4 className="card-title">Hi, I'm Rose!</h4>
//           <p className="card-text">I'm a 19-year-old web developer based in Seattle. I took my coding bootcamp at University of Washington and I specialize in building responsive and engaging web applications using HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB.</p>
// <p className="card-text">When I'm not coding, I love to unleash my creative side by working on art projects like crocheting, writing, and making jewelry. I believe that creativity is an essential part of life, and it helps me approach coding challenges with a unique perspective.</p>
// <p className="card-text">In addition to my passion for coding and art, I also have a keen interest in astrology. I am fascinated by the stars and use this knowledge to better understand myself and others around me. I believe that this insight can help me build more meaningful and authentic connections with people.</p>
// <p className="card-text">Overall, I'm excited about the future of web development and the opportunity to use my skills to create unique and engaging user experiences. Thank you for visiting my portfolio, and I can't wait to connect with you!</p>


//         </div>
//       </div>
//     );
//   }
  return (
    <>
      <Header />
    <div className="container justify-content-center align-items-center" style={{ height: '70rem' }}>
      {/* <NatalChart /> */}
      <EnterChart />
    </div>
    </>
  );
}






