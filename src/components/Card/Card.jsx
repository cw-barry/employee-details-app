import React from 'react';

const Card = (props) => {
  return (
    <div className="col-md-6 col-lg-4 item">
      <div className="box">
        <img className="rounded-circle" src="assets/img/1.jpg" alt="" />
        <h3 className="name">Ben Johnson</h3>
        <p className="title">Musician</p>
        <p className="description"></p>
        <div className="social">
          <p>
            <i class="fa fa-facebook-official"></i>
          </p>
          <p>
            <i class="fa fa-twitter"></i>
          </p>
          <p>
            <i class="fa fa-instagram"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
