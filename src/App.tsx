import React from 'react';
import {Accordion} from './Accordion';
import {NewComponent} from './NewComponent';
import {Rating} from './Raiting';
import {OnOff} from './OnOff';


function App() {
    return (<div className='root'>
            <div className='accordion'>
                <Accordion titleValue={'menu'}/>
                <Accordion titleValue={'users'}/>
            </div>
            <NewComponent/>
            <Rating selected={3}/>
            <OnOff/>
        </div>
    )
}

export default App;
