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

function getState(zipString) {

    if (typeof zipString !== 'string') {
        return('Must pass the zipcode as a string.');
    }

    if (zipString.length !== 5) {
        return('Must pass a 5-digit zipcode.');
    }

    const zipcode = parseInt(zipString, 10);
  
    let st;
    let state;

    if (zipcode >= 35000 && zipcode <= 36999) {
        st = 'AL';
        state = 'Alabama';
    } else if (zipcode >= 99500 && zipcode <= 99999) {
        st = 'AK';
        state = 'Alaska';
    } else if (zipcode >= 85000 && zipcode <= 86999) {
        st = 'AZ';
        state = 'Arizona';
    } else if (zipcode >= 71600 && zipcode <= 72999) {
        st = 'AR';
        state = 'Arkansas';
    } else if (zipcode >= 90000 && zipcode <= 96699) {
        st = 'CA';
        state = 'California';
    } else if (zipcode >= 80000 && zipcode <= 81999) {
        st = 'CO';
        state = 'Colorado';
    } else if ((zipcode >= 6000 && zipcode <= 6389) || (zipcode >= 6391 && zipcode <= 6999)) {
        st = 'CT';
        state = 'Connecticut';
    } else if (zipcode >= 19700 && zipcode <= 19999) {
        st = 'DE';
        state = 'Delaware';
    } else if (zipcode >= 32000 && zipcode <= 34999) {
        st = 'FL';
        state = 'Florida';
    } else if ( (zipcode >= 30000 && zipcode <= 31999) || (zipcode >= 39800 && zipcode <= 39999) ) {
        st = 'GA';
        state = 'Georgia';
    } else if (zipcode >= 96700 && zipcode <= 96999) {
        st = 'HI';
        state = 'Hawaii';
    } else if (zipcode >= 83200 && zipcode <= 83999) {
        st = 'ID';
        state = 'Idaho';
    } else if (zipcode >= 60000 && zipcode <= 62999) {
        st = 'IL';
        state = 'Illinois';
    } else if (zipcode >= 46000 && zipcode <= 47999) {
        st = 'IN';
        state = 'Indiana';
    } else if (zipcode >= 50000 && zipcode <= 52999) {
        st = 'IA';
        state = 'Iowa';
    } else if (zipcode >= 66000 && zipcode <= 67999) {
        st = 'KS';
        state = 'Kansas';
    } else if (zipcode >= 40000 && zipcode <= 42999) {
        st = 'KY';
        state = 'Kentucky';
    } else if (zipcode >= 70000 && zipcode <= 71599) {
        st = 'LA';
        state = 'Louisiana';
    } else if (zipcode >= 3900 && zipcode <= 4999) {
        st = 'ME';
        state = 'Maine';
    } else if (zipcode >= 20600 && zipcode <= 21999) {
        st = 'MD';
        state = 'Maryland';
    } else if ( (zipcode >= 1000 && zipcode <= 2799) || (zipcode == 5501) || (zipcode == 5544 )) {
        st = 'MA';
        state = 'Massachusetts';
    } else if (zipcode >= 48000 && zipcode <= 49999) {
        st = 'MI';
        state = 'Michigan';
    } else if (zipcode >= 55000 && zipcode <= 56899) {
        st = 'MN';
        state = 'Minnesota';
    } else if (zipcode >= 38600 && zipcode <= 39999) {
        st = 'MS';
        state = 'Mississippi';
    } else if (zipcode >= 63000 && zipcode <= 65999) {
        st = 'MO';
        state = 'Missouri';
    } else if (zipcode >= 59000 && zipcode <= 59999) {
        st = 'MT';
        state = 'Montana';
    } else if (zipcode >= 27000 && zipcode <= 28999) {
        st = 'NC';
        state = 'North Carolina';
    } else if (zipcode >= 58000 && zipcode <= 58999) {
        st = 'ND';
        state = 'North Dakota';
    } else if (zipcode >= 68000 && zipcode <= 69999) {
        st = 'NE';
        state = 'Nebraska';
    } else if (zipcode >= 88900 && zipcode <= 89999) {
        st = 'NV';
        state = 'Nevada';
    } else if (zipcode >= 3000 && zipcode <= 3899) {
        st = 'NH';
        state = 'New Hampshire';
    } else if (zipcode >= 7000 && zipcode <= 8999) {
        st = 'NJ';
        state = 'New Jersey';
    } else if (zipcode >= 87000 && zipcode <= 88499) {
        st = 'NM';
        state = 'New Mexico';
    } else if ( (zipcode >= 10000 && zipcode <= 14999) || (zipcode == 6390) || (zipcode == 501) || (zipcode == 544) ) {
        st = 'NY';
        state = 'New York';
    } else if (zipcode >= 43000 && zipcode <= 45999) {
        st = 'OH';
        state = 'Ohio';
    } else if ((zipcode >= 73000 && zipcode <= 73199) || (zipcode >= 73400 && zipcode <= 74999) ) {
        st = 'OK';
        state = 'Oklahoma';
    } else if (zipcode >= 97000 && zipcode <= 97999) {
        st = 'OR';
        state = 'Oregon';
    } else if (zipcode >= 15000 && zipcode <= 19699) {
        st = 'PA';
        state = 'Pennsylvania';
    } else if (zipcode >= 300 && zipcode <= 999) {
        st = 'PR';
        state = 'Puerto Rico';
    } else if (zipcode >= 2800 && zipcode <= 2999) {
        st = 'RI';
        state = 'Rhode Island';
    } else if (zipcode >= 29000 && zipcode <= 29999) {
        st = 'SC';
        state = 'South Carolina';
    } else if (zipcode >= 57000 && zipcode <= 57999) {
        st = 'SD';
        state = 'South Dakota';
    } else if (zipcode >= 37000 && zipcode <= 38599) {
        st = 'TN';
        state = 'Tennessee';
    } else if ( (zipcode >= 75000 && zipcode <= 79999) || (zipcode >= 73301 && zipcode <= 73399) ||  (zipcode >= 88500 && zipcode <= 88599) ) {
        st = 'TX';
        state = 'Texas';
    } else if (zipcode >= 84000 && zipcode <= 84999) {
        st = 'UT';
        state = 'Utah';
    } else if (zipcode >= 5000 && zipcode <= 5999) {
        st = 'VT';
        state = 'Vermont';
    } else if ( (zipcode >= 20100 && zipcode <= 20199) || (zipcode >= 22000 && zipcode <= 24699) || (zipcode == 20598) ) {
        st = 'VA';
        state = 'Virgina';
    } else if ( (zipcode >= 20000 && zipcode <= 20099) || (zipcode >= 20200 && zipcode <= 20599) || (zipcode >= 56900 && zipcode <= 56999) ) {
        st = 'DC';
        state = 'Washington DC';
    } else if (zipcode >= 98000 && zipcode <= 99499) {
        st = 'WA';
        state = 'Washington';
    } else if (zipcode >= 24700 && zipcode <= 26999) {
        st = 'WV';
        state = 'West Virginia';
    } else if (zipcode >= 53000 && zipcode <= 54999) {
        st = 'WI';
        state = 'Wisconsin';
    } else if (zipcode >= 82000 && zipcode <= 83199) {
        st = 'WY';
        state = 'Wyoming';
    } else {
        st = 'none';
        state = 'No state';
        console.log('No state found matching', zipcode);
    }
  
    return state;
  }

const Map = ()=> {
    const [country, setCountry] = useState('Select')
    const handlechange = (e) =>{
        setCountry(e.value)
    }
    const [Zipcode, setZipcode] = useState(null)
    const [State, setState] = useState('')


    const handleZipcode = (e) =>{
        setZipcode(e.target.value.trim())
    }
    const handleState = async(e) =>{
        e.preventDefault()
        let data = getState(Zipcode)
        setState(data)
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
                <input onChange={handleZipcode} placeholder="Enter zipcode" type="number"></input>
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