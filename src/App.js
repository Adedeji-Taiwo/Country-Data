import React, { useEffect, useState } from 'react';
import './scss/_app.scss';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import axios from 'axios';
import Loading from './component/Loading';


const App =() => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [title, setTitle] = useState("10 most populated countries in the world");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    fetchData();

  }, []);
  
  
  const fetchData = async () => {
     const url = "https://restcountries.com/v2/all";

    axios.get(url)
    .then((res) => {
      setData(res.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error)
    })
  }




  const handleClick = (e) => {

    let filtered = [];

    //sort country data in descending order based on population size
    if (e.target.value === "population") {
       filtered = data.sort((a, b) => {
       if (a.population > b.population)  return -1;
       if (a.population < b.population) return 1;
         return 0
     })
     .slice(0, 10);

     setTitle("10 most populated countries in the world");

    }

    else if (e.target.value === "language") {
      const counts = [];
      //map language data and de-nested arrays with flat    
      const allLang = (data.map(item => (item.languages).map(items => items.name))).flat(1);
      //filter out unique values from array
      const langSet = [...new Set(allLang)]
      for (const lang of langSet) {
        //filter all languages equal to unique lang, determine their length and push into a new array. 
        const filteredLang = allLang.filter(data => data === lang);
        counts.push({language: lang, length: filteredLang.length});
      }
       
        filtered = counts.sort((a, b) => {
          if (a.length > b.length) return -1;
          if (a.length < b.length) return 1;
          return 0;
        })
        .slice(0, 10);

        setTitle("10 most spoken languages in the world");

        }

      else {
        return null;
      }

      setFilterData(filtered);
  }
  

 //sort original fetched data for display on page load
  const topTenData = data.sort((a, b) => {
    if (a.population > b.population) return -1;
    if (a.population < b.population) return 1;
    else return 0;
  })
  .slice(0, 10);


  //Obtain population sizes though mapping and sum all values
  const populationTotal = data.map((country) => country.population)
  .reduce((acc, cur) => acc + cur, 0);

 
  //Obtain sum of all languages
  const languageArray = [];
      const allLang = (data.map(item => (item.languages).map(items => items.name))).flat(1);
      const langSet = [...new Set(allLang)]
      for (const lang of langSet) {
        const filteredLang = allLang.filter(data => data === lang);
        languageArray.push({length: filteredLang.length});
      }
  const languageTotal = languageArray.map((country) => country.length)
                      .reduce((acc, cur) => acc + cur, 0);

 


  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  }
  

  //if input is not empty, capitalize the first letter.
  //filter out countries' data whose names equal to input. 
  //Sort names alphabetically
  const filteredCountry = data.filter(country => (country.name).startsWith( input === "" ? input : `${input.charAt(0).toUpperCase()}${input.slice(1)}`))
                    .sort((a, b) => {
                      if(a.name > b.name) return 1;
                      if(a.name < b.name) return -1;
                      else return 0;
                    })



  //obtain numbers of countries which satisfies search queries. 
  const filteredCountryLength = input === "" ?   "" : `${((data.filter(country => (country.name).startsWith( input === "" ? input : `${input.charAt(0).toUpperCase()}${input.slice(1)}`))).length)} satisfied the search criteria`;    
  

  
  return (
    <div className="container">
      <Header countryTotal={data.length} filteredCountryLength={filteredCountryLength}/>
      {isLoading ? (
        <Loading />
      ) : (
        <Main 
        countryList = {filterData.length === 0 ?  topTenData : filterData}
        handleClick={handleClick}
        populationTotal = {populationTotal}
        languageTotal={languageTotal}
        title = {title}
        data = {filteredCountry}
        input = {input}
        handleChange={handleChange}
      />
      )}
      <Footer />
    </div>
  );
}

export default App;
