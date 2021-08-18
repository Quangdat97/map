import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import Select from 'react-select';
import axios from 'axios';

const options = [
  { value: 'Select', label: 'Select' },
  { value: 'Populations', label: 'Populations' }
]

const data = [
    ['State', 'Select'],
    ['US-AL', 1],
    ['US-AK', 2],
    ['US-AZ', 3],
    ['US-AR', 4],
    ['US-CA', 5],
    ['US-CO', 6],
    ['US-CT', 7],
    ['US-DE', 8],
    ['US-DC', 9],
    ['US-FL', 10],
    ['US-GA', 11],
    ['US-HI', 12],
    ['US-ID', 13],
    ['US-IL', 14],
    ['US-IN', 15],
    ['US-IA', 16],
    ['US-KS', 17],
    ['US-KY', 18],
    ['US-LA', 19],
    ['US-ME', 20],
    ['US-MT', 21],
    ['US-NE', 22],
    ['US-NV', 23],
    ['US-NH', 24],
    ['US-NJ', 25],
    ['US-NM', 26],
    ['US-NY', 27],
    ['US-NC', 28],
    ['US-ND', 29],
    ['US-OH', 30],
    ['US-OK', 31],
    ['US-OR', 32],
    ['US-MD', 33],
    ['US-MA', 34],
    ['US-MI', 35],
    ['US-MN', 36],
    ['US-MS', 37],
    ['US-MO', 38],
    ['US-PA', 39],
    ['US-RI', 40],
    ['US-SC', 41],
    ['US-SD', 42],
    ['US-TN', 43],
    ['US-TX', 44],
    ['US-UT', 45],
    ['US-VT', 46],
    ['US-VA', 47],
    ['US-WA', 48],
    ['US-WV', 49],
    ['US-WI', 50],
    ['US-WY', 51]
];

const data2 = [
    ['State', 'Populations'],
    ['US-AL', 10000],
    ['US-AK', 20000],
    ['US-AZ', 3000],
    ['US-AR', 4000],
    ['US-CA', 5000],
    ['US-CO', 6000],
    ['US-CT', 7000],
    ['US-DE', 8000],
    ['US-DC', 9000],
    ['US-FL', 10000],
    ['US-GA', 11000],
    ['US-HI', 12000],
    ['US-ID', 13000],
    ['US-IL', 14000],
    ['US-IN', 15000],
    ['US-IA', 16000],
    ['US-KS', 17000],
    ['US-KY', 18000],
    ['US-LA', 19000],
    ['US-ME', 20000],
    ['US-MT', 21000],
    ['US-NE', 22000],
    ['US-NV', 23000],
    ['US-NH', 2400],
    ['US-NJ', 2000],
    ['US-NM', 26000],
    ['US-NY', 2700],
    ['US-NC', 2800],
    ['US-ND', 2900],
    ['US-OH', 3000],
    ['US-OK', 3100],
    ['US-OR', 3200],
    ['US-MD', 3300],
    ['US-MA', 3400],
    ['US-MI', 3500],
    ['US-MN', 3600],
    ['US-MS', 3700],
    ['US-MO', 3800],
    ['US-PA', 3900],
    ['US-RI', 4000],
    ['US-SC', 4100],
    ['US-SD', 4200],
    ['US-TN', 4300],
    ['US-TX', 4400],
    ['US-UT', 4500],
    ['US-VT', 4600],
    ['US-VA', 4700],
    ['US-WA', 4800],
    ['US-WV', 4900],
    ['US-WI', 5000],
    ['US-WY', 5100]
];

const Map = ()=> {
    const [country, setCountry] = useState('Select')
    const handlechange = (e) =>{
        setCountry(e.value)
    }
    const [Zipcode, setZipcode] = useState(null)
    const [State, setState] = useState('')
    const url ='http://api.zippopotam.us/us/'

    const handleZipcode = (e) =>{
        setZipcode(e.target.value.trim())
    }
    const handleState = async(e) =>{
        e.preventDefault()
        try{
            const {data} = await axios.get(url+Zipcode)
            setState(data.places[0].state)
        }
        catch(e){
            console.log('error! cannot found');
            setState("Not found!")
        }
    }
    return (
        <div className="App">
            <div style={{width:'50%', maxWidth:'200px', margin:'20px 80px'}}>
                <Select 
                options={options} 
                onChange={handlechange}
                />
            </div>
            <div style={{display:'flex', margin:'10px 50px', height:'30px' ,width:'100%', alignItems:'center'}}>
                <label>Zipcode: </label>
                <input id="zipcode" onChange={handleZipcode} placeholder="Enter zipcode" type="number"></input>
                <button onClick={handleState}>Get State</button>
                <p style={{paddingLeft:'20px'}}>Sate: {State}</p>
            </div>
            
            <Chart
            chartEvents={[
                {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = data[selection[0].row + 1];
                    console.log("Selected : " + region);
                }
                }
            ]}
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={ country=="Select" ? data : data2}
            options = {{
                region: 'US',
                displayMode: 'regions',
                resolution: 'provinces',
                colors: ['blue', 'green', 'orange'],
            }}
            />
        </div>
    );

}

export default Map;