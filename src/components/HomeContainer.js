// import React, { useState } from 'react';
// import NavTabs from './NavTabs';
// import Home from './pages/Home';
// // import Portfolio from './pages/Portfolio';
// // import Contact from './pages/Contact';
// import '../assets/styles/bootstrap.css';
// import '../assets/styles/App.css';
// import Footer from './pages/Footer';

// export default function HomeContainer() {
//   const [currentPage, setCurrentPage] = useState('Home');

//   const renderPage = () => {
//     if (currentPage === 'Home') {
//       return <Home />;
//     }
//     // if (currentPage === 'Portfolio') {
//     //   return <Portfolio />;
//     // }
//     // return <Contact />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       <div id="homeCard" className='display-flex align-items-center justify-content-center'>
//         <NavTabs style={{margin:'15px', display:'flex',width:'max-width', height:'fit-content' }} currentPage={currentPage} handlePageChange={handlePageChange} />
//         {renderPage()}
//       </div>
//       <Footer />
//     </div>
//   );
// }
