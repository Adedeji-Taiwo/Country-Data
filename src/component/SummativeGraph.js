import React from 'react';

const SummativeGraph = ({summativeTotal}) => {
  return(
       (<p className='graph-bar'>
            <span>WORLD</span>
            <span style = {{width: `${((summativeTotal/ summativeTotal) * 100)}%`}} className='bar'></span>
            <span>{summativeTotal.toLocaleString()}</span>
        </p>)
  )
};

export default SummativeGraph;
