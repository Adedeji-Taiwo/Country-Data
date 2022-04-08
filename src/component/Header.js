import React from 'react';

const Header = ({countryTotal, filteredCountryLength}) => {
  return(
      <header>
          <div className='header-wrapper'>
            <h1>World Countries Data</h1>
            <p>Currently, we have {countryTotal} countries</p>
            <p>{filteredCountryLength}</p>
          </div>
      </header>
  )
};

export default Header;
