import React from 'react';

const PopulationGraph = ({country: {name, population}, populationTotal}) => {
  return(
       <p className='graph-bar'>
          <span>{name.toUpperCase()}</span>
          <span style = {{width: `${((population / populationTotal) * 100)}%`}} className='bar'></span>
          <span>{population.toLocaleString()}</span>
      </p>
  )
};

export default PopulationGraph;




 
        