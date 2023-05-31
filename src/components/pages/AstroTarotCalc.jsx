import React from 'react';
import '../../assets/styles/bootstrap.css';
import EnterChart from '../BirthChartForm';
import Header from '../Header';

// import NatalChart from '../calculate';



export default function AstroTarotCalc() {
  return (
    <>
      <Header/>
    <div className="container justify-content-center align-items-center" style={{ height: '70rem' }}>
      {/* <NatalChart /> */}
      <EnterChart />
    </div>
    </>
  );
}






