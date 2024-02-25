import React from 'react';
import './ViewRecordDetailPage.css'
import record_pre from '../../../assets/images/record_pre.png';
import MapContainerDetail from '../../../components/map/MapContainerDetail';
import ViewCharge from './Charge/ViewCharge';
import ViewHome from './Home/ViewHome';
import ViewRoom from './Room/ViewRoom';
import ViewToilet from './Toilet/ViewToilet';
import ViewOptions from './Options/ViewOptions';
import ViewPlus from './Plus/ViewPlus';
import ViewImage from './Image/ViewImage';
import ViewCollection from './Collection/ViewCollection';

function ViewRecordDetailPage() {
    return (
        <div className='viewRecordDetail'>
            <div className='content'>
                <div className="place-yellow">
                    서울 서대문구 신촌동 2-195
                </div>
                <MapContainerDetail className='map-circle' searchPlace="강남역" />

                <ViewCharge/>
                <ViewHome/>
                <ViewRoom/>
                <ViewToilet/>
                <ViewOptions/>
                <ViewPlus/>
                <ViewImage/>
                <ViewCollection/>

            </div>

            <div className='row-bottom'>
                <img className='record-pre' src={record_pre} alt='record_pre'/>
                <button className='btn-bottom'>수정</button>
            </div>
            
        </div>
    );
}

export default ViewRecordDetailPage;