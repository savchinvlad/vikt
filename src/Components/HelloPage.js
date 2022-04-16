import React from 'react';
import logo from '../assets/avatar.jpg';

export default function HelloPage() {
  return (
    <div className="hello">
      <div className="hello__container _container">
        <div className="hello__content">
          <h1 className="hello__title title">
            Hi, Iam John,
            <br /> Creative Technologist
          </h1>
          <div className="hello__text text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur, eum officiis
            expedita, ipsam molestias sint dolores esse molestiae cumque voluptas? Quos omnis quas
            adipisci dolorum impedit facere quasi, necessitatibus perspiciatis magni laborum,
            commodi dolorem numquam distinctio libero, recusandae et illum sequi in animi
            accusantium iure dolore! Exercitationem, in quisquam.
          </div>
          <a href="" className="hello__btn btn">
            Download Resume
          </a>
        </div>
        <div className="hello__avatar">
          <img src={logo} alt="avatar" />
        </div>
      </div>
    </div>
  );
}
