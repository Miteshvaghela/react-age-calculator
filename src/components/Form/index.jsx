import React, { useState } from 'react'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Result({year, month, day}){
    return (
        <div className='result'>
            <strong>Age : </strong>
            <p>{year} Years {month} Months {day} Days</p>
        </div>
    )
}


const index = () => {
const [ageYear, setAgeYear] = useState(null);
const [ageMonth, setAgeMonth] = useState(null);
const [ageDay, setAgeDay] = useState(null);
const [birthDate, setBirthDate] = useState(null);
const calculateAge = (e) => {
    e.preventDefault(); 
    console.log('Birth date : ', birthDate); 
    let year = new Date(birthDate).getFullYear();
    let month = new Date(birthDate).getMonth();
    let day = new Date(birthDate).getDate();
    let today = new Date();
    let calAgeYear = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
        calAgeYear--;
    }
    setAgeYear(calAgeYear);    
    let calAgeMonth = today.getMonth() - month;
    if (today.getDate() < day) {
        calAgeMonth--;
    }
    setAgeMonth(calAgeMonth);
    
    let calAgeDay = today.getDate() - day < 0 ? today.getDate() - day + 31 : today.getDate() - day;
    setAgeDay(calAgeDay);
}
  return (
    <>
        <div className="bg"></div>
        <main className="form-signin">
            <h1 className="h3">Age Calculator</h1>
            <form action=""> 
            <div >
            <DatePicker style={{width: '100%'}} selected={birthDate} dateFormat="dd/MM/yyyy" onChange={(date) => setBirthDate(date)} className='form-control datepicker' placeholderText="Date of Birth"/> 
            </div> 
 
            <button className="w-100 btn btn-lg" type="submit" onClick={e => calculateAge(e)}>Calculate</button>
            </form>
            
            {ageYear && <Result year={ageYear} month={ageMonth} day={ageDay}/>}
        </main>
    </>
  )
}

export default index