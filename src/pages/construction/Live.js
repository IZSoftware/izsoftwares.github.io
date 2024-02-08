import React from 'react';
import ConstructionFooter from '../../components/construction/ConstructionFooter';
import CountdownTimer from '../../components/construction/CountdownTimer';

export default function Live(){
    return(
        <div>
            <CountdownTimer />
            <ConstructionFooter />
        </div>
    )
}