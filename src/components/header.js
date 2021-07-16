import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function header() {
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <h1 className="Bookstore-CMS">Bookstore CMS</h1>
          <div className="header-left-links">
            <span className="BOOKS active">BOOKS</span>
            <span className="CATEGORIES">CATEGORIES</span>
          </div>
        </div>
        <div className="header-right"><FontAwesomeIcon icon={faUserCircle} /></div>
      </div>
    </header>
  );
}

export default header;
