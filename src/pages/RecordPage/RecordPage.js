import React , { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import './RecordPage.css';
import ChargeBox from './Charge/ChargeBox';
import HomeBox from './Home/HomeBox';
import useOneCheckbox from '../../hooks/useOneCheckbox';
import useCheckbox from '../../hooks/useCheckbox';

function RecordPage() {

    const [isOneChecked, handleOneCheckboxChange] = useOneCheckbox();
    const [isChecked, handleCheckboxChange] = useCheckbox();


    return (
        <div className='recordPage'>
            <div className="recordPage-top">
                <Nav/> 
            </div>

            <div className="place-yellow">
                서울 서대문구 신촌동 2-195
            </div>

            <ChargeBox isChecked={isOneChecked} handleCheckboxChange={handleOneCheckboxChange} />
            <HomeBox isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
        </div>
    );
}

export default RecordPage;