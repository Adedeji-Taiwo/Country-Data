import React from 'react';
import {faChartBar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from './Button';
import Country from './Country';
import PopulationGraph from './PopulationGraph';
import LanguageGraph from './LanguageGraph';
import SummativeGraph from './SummativeGraph';

const Main = ({handleClick, title, countryList, populationTotal, languageTotal, data, input, handleChange}) => {
        
  return(
      <main>
          <div className='main-wrapper'>
            <div className = "controls" >
              <input 
                type="text" 
                name="search" 
                className= "search-input"
                value= {input === "" ? input : `${input.charAt(0).toUpperCase()}${input.slice(1)}`}
                onChange={handleChange}
                id="search"
                placeholder='Search countries by name...' 
                />
                 <p className='search-icon'><a href="#stat"><FontAwesomeIcon icon={faChartBar}/></a></p>
            </div>
            <div className='graph-blanket'>
              <div className='graph-wrapper'>
              
             
                {
                  input === "" ? (
                    <>
                    <div className='graph-header'>
                    <p className='graph-buttons'>
                        <Button 
                        text = "population"
                        value =  "population"
                        onClick={handleClick}
                      />
                      <Button 
                        text = "language"
                        value = "language"
                        onClick={handleClick}
                      />
                    </p>
                    <p className='title'>{title}</p>
                  </div>
                  <div className='graph-space' id = "stat">
                    <div className='graph'>
                  {countryList.findIndex(item =>  item.length) === -1 ?
                  (
                  <>
                   <SummativeGraph summativeTotal={populationTotal}/>
                   {countryList.map((country) =>  <PopulationGraph key = {country.name} country = {country} populationTotal = {populationTotal}/>)}
                  </>
                  ) : (
                   <>
                     <SummativeGraph summativeTotal={languageTotal}/>
                     {  countryList.map((country) => <LanguageGraph key = {country.language}  country = {country} languageTotal = {languageTotal}/>)}
                   </> 
                  )
                  }
                  </div>
                </div>
                </>
                  ) : (
                     <>
                    <div className='graph-header'>
                       <p className='title-head'>Country List</p>
                       <p className='title'>Filtered Search Result: </p>
                    </div>
                      <div className='graph-space' id = "stat">
                    <div className='graph'>
                     <div className='countries-wrapper'>
                  {input !== "" && (
                    data.map((country) => <Country key = {country.name} country = {country}/>))}     
                </div>
                </div>
                </div>
                </>
                  )
                }
              
            </div>
             
            </div>
            </div>
      </main>
  )
};

export default Main;
