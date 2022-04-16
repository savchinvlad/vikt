import React from 'react';

export default function Header() {
  const [activeClass, setActiveClass] = React.useState(true);
  const toggleClass = () => {
    setActiveClass(!activeClass);
  };

  return (
    <div>
      <div className="header">
        <div className="header__content">
          <div className="header__menu menu">
            <div
              onClick={toggleClass}
              className={activeClass ? 'menu__icon icon-menu ' : 'menu__icon icon-menu _active'}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav
              onClick={toggleClass}
              className={activeClass ? 'menu__body' : 'menu__body _active'}>
              <ul className="menu__list">
                <li>
                  <a href="" className="menu__link">
                    Works
                  </a>
                </li>
                <li>
                  <a href="" className="menu__link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="" className="menu__link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
