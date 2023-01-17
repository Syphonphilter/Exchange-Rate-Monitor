import React, { useEffect, useState } from 'react';
 export const Converter = () => {

    var [currencyList, setCurrencylist] = useState<string[]>([])
    const url = 'https://currencyscoop.p.rapidapi.com/currencies';
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '229dbeb9ebmshe5810b00f154611p1da964jsn4c75272dbc82',
          'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com'
        }
      };
    

      useEffect(() => {
   

       
      }, [])
      
      
   const fetchCurrencyList = async ()=>{
        let tempCurrencylist :string[] = [];
        await fetch(url, options)
        .then(res => res.json())
        .then(data => tempCurrencylist = data)
        .catch(err => console.error('error:' + err))
        .then(()=>
        {
            // Map object with keys index
            let k1 = Object.values(tempCurrencylist)
            let k2 = Object.entries(k1[1])
            let k3 = Object.keys(k2[0][1])
            setCurrencylist(k3)
            setCurrencylist((state)=>{
             console.log(state);
             currencyList = state;
             
             return state;
           });
           
        })
          
     
    }
    const populatelist =()=>{
       return currencyList.map((i)=>{
        return <option>{i}</option>
       })
    } 


    return (
        <div>
            <>
            
            <h1>my con</h1>
            <p className='cmpcontentp'>  </p>
            <select>
          {populatelist()}
          </select>
            </>
        </div>
    );
};

