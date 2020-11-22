import { FormControl, NativeSelect } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CovidApi from '../../api/Covid19api';
const CountryPicker = ({countrynamefn}) => {
    
const [fetchContries , setFetchContries] = useState([]);

useEffect(()=>{
    const fetchContriesfun = async () => {
        const { data: { countries } } = await CovidApi.get("/countries")
        const countrynames = countries.map((country)=> country.name);
        setFetchContries(countrynames);
        
    }
    fetchContriesfun();
},[])



//console.log(fetchContries);
    
    return (
    <div>
        <FormControl>
            <NativeSelect onChange={(event) => countrynamefn(event.target.value)}>
                {fetchContries.map((country,i)=><option key={i} value= {country}>{country} </option>)}
            </NativeSelect>
        </FormControl>
        <h1>CountryPicker</h1>
    </div>
        
    )
}

export default CountryPicker;