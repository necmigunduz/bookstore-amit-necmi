import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function header() {
  return (
    <div className="header">
      <div className="header">
        <p className="Bookstore-CMS">Bookstore CMS</p>
        <span className="BOOKS">BOOKS</span>
        <span className="CATEGORIES">CATEGORIES</span>
      </div>
      <div className="Mask"><FontAwesomeIcon icon={faUserCircle} /></div>
    </div>
  );
}

export default header;
