import React from 'react';
import BasicInfoPage from './BasicInfoPage';
import InfoPage from './InfoPage';
import InfoPageOne from './InfoPageOne';
import InfoPageTwo from './InfoPageTwo';
import InfoPageThree from './InfoPageThree';
import InfoPageFour from './InfoPageFour';
import InfoPageFive from './InfoPageFive';
import InfoPageSix from './InfoPageSix';
import FormReviewPage from './FormReviewPage' 
import './MainPage.css'

export const MainPage = () =>{

    return(
        <div>
        <BasicInfoPage/>
        <InfoPage/>
        <InfoPageOne/>
        <InfoPageTwo/>
        <InfoPageThree/>
        <InfoPageFour/>
        <InfoPageFive/>
        <InfoPageSix/>
        <FormReviewPage/>

        </div>
    );
    
}

export default MainPage;