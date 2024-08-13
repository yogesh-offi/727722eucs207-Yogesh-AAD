import React, { useEffect, useState } from 'react';
import '../assets/css/Payment.css';
import { TextField } from '@mui/material';
import SelectMUI from './SelectMUI';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Payment() {
    const [cardno, setcardno] = useState("");
    const [cardname, setcardname] = useState("");
    const [year, setyear] = useState("");
    const [month, setmonth] = useState("");
    const [ccv, setccv] = useState("");
    const [cardFocus, setCardFocus] = useState({ number: false, name: false });

    const navi = useNavigate();

    useEffect(() => {
        setCardFocus({ number: true, name: false });
    }, [cardno]);

    useEffect(() => {
        setCardFocus({ number: false, name: true });
    }, [cardname]);

    const Onhandlepayform = (event) => {
        event.preventDefault();
        if (cardno.includes('#')) {
            alert("Please enter a valid card number");
            return;
        }
        else if (!cardname.match(/^[a-zA-Z\s]+$/)) {
            alert("Please enter a valid card name");
            return;
        }
        else if (year === "YYYY") {
            alert("Please Select year");
            return;
        }
        else if (month === "MM") {
            alert("Please Select month");
            return;
        }
        else if (ccv === "") {
            alert("Please enter CCV");
            return;
        }
        else {
            toast.success("Payment Successful");
            setTimeout(() => {
                navi('/plans');
            }, 1000);
        }
    };

    const OnChangeCardno = (event) => {
        setcardno(event.target.value);
    };

    const OnChangeName = (event) => {
        setcardname(event.target.value);
    };

    return (
        <div className="PaymentTotal">
            <Toaster />
            <div className={`cardbox ${(cardFocus.number || cardFocus.name) ? 'focused' : ''}`}>
                <i className="fa-brands fa-cc-visa"></i>
                <h4>BANK NAME</h4>
                <div className={`cardnumber ${cardFocus.number ? 'highlighted' : ''}`}>{cardno}</div>
                <span style={{ color: "rgba(163, 158, 158, 0.897)" }}>Holder Name</span>
                <span style={{ marginLeft: "100px", color: "rgba(163, 158, 158, 0.897)" }}>Expiry</span>
                <div className={`cardholder ${cardFocus.name ? 'highlighted' : ''}`}>{cardname}</div>
                <div className='Expiryyear'>{month}{year}</div>
            </div>
            <form className="PaymentForm" onSubmit={Onhandlepayform}>
                <TextField id="outlined-basic" label="Card Number" variant="outlined" onChange={OnChangeCardno} />
                <TextField id="outlined-basic" label="Card Holder" variant="outlined" onChange={OnChangeName} />
                <div className='CardYear'>
                    <SelectMUI dat={month} func={setmonth} atribute={"Month"} />
                    <SelectMUI dat={year} func={setyear} atribute={"Year"} />
                    <TextField id="outlined-basic" label="CCV" variant="outlined" value={ccv} onChange={(event) => { setccv(event.target.value); }} />
                </div>
                <button id='PayBut' type='submit'>Pay</button>
            </form>
        </div>
    );
}

export default Payment;
