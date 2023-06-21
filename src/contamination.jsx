import React from 'react';

const Contamination = () => {
  return (
    <div className="container">
      <Hamburger />
      <div className="description">
        <div className="viento">
          <img src="src\assets\viento.png" alt="" />
        </div>
        <div className="humedad">
          <img src="src\assets\humedad.png" alt="" />
        </div>
        <div className="altura">
          <img src="src\assets\altura.png" alt="" className=''/>
        </div>
      </div>
    </div>
  );
};

export default Contamination;