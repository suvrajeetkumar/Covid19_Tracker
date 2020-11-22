import logo from './logo.svg';
import React , {Component} from 'react';
import './App.css';
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import CovidApi from "./api/Covid19api";
import { NativeSelect } from '@material-ui/core';


  class App extends Component {

  state = {
   
      data: {},
      countryName: ""
    
    
  }

  async componentDidMount() {
    const response = await CovidApi.get();
    
    const {data:{confirmed,deaths,recovered}} = response;
    const fetchedData = {
      confirmed : confirmed,
      deaths: deaths,
      recovered: recovered,
      lastUpdate: "NA"
    }
    this.setState({ data: fetchedData })
    console.log(this.state);
  } 

  countrynameHandler= (name) =>{

    const fetchContriesfun = async () => {
      const {data : {confirmed ,recovered , deaths , lastUpdate}} = await CovidApi.get(`/countries/${name}`);
      
      const countryName = name;

      const countrydetails = {
        
        confirmed : confirmed,
        deaths : deaths,
        recovered : recovered ,
        lastUpdate : lastUpdate
      }

      this.setState({data: countrydetails , countryName: countryName})
      console.log(this.state.countryName);
      console.log(this.state);
     };
     
     fetchContriesfun(); 
  }

  

  render(){


    const  { data }  = this.state;

  
    return (
      <div className="App">
        <h1 style={{color:"white"}}>COVID-19 TRACKER</h1>
    <h1 style={{color:"#9CC0E7"}}>{this.state.countryName}</h1>
        <Cards data={data}/>
        <CountryPicker countrynamefn = {this.countrynameHandler}/>
        <Chart data={data} country={this.state.countryName}/>
      </div>
    );
  }  
  }
export default App;
