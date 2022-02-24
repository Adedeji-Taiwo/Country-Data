import React from 'react';

const LanguageGraph = ({country: {language, length}, languageTotal}) => {
  return(
       <p className='graph-bar'>
          <span>{language.toUpperCase()}</span>
          <span style = {{width: `${((length / languageTotal) * 100)}%`}} className='bar'></span>
          <span>{length.toLocaleString()}</span>
      </p>
  )
};

export default LanguageGraph;




 
        