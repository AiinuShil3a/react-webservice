import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Card = () => {
  return (
    <div className="card" style={{ width: '400px' }}>
      <img className="card-img-top" src="https://th.bing.com/th/id/OIP.sVzJZ-RhnkM6T4o59WTypwHaEv?pid=ImgDet&rs=1" alt="Card image" />
      <div className="card-body">
        <h4 className="card-title">Shiori</h4>
        <p className="card-text">Hello World.</p>
        <a href="#" className="btn btn-primary">
          See Profile
        </a>
      </div>
    </div>
  );
};

export default Card;
