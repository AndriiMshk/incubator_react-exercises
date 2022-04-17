import React, {useState} from 'react';
import {Accordion} from './Accordion';
import {NewComponent} from './NewComponent';
import {Rating} from './Raiting';
import {OnOff} from './OnOff';

function App() {

    let [isCollapsed, setIsCollapsed] = useState(false)

    const collapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    let [x, setX] = useState(false)
    const switchOnOff = () => setX(!x)

    return (<div className='root'>
            <div className='accordion'>
                <Accordion
                    titleValue={'menu'}
                    isCollapsed={isCollapsed}
                    collapse={collapse}
                />
            </div>
            <NewComponent/>
            <Rating/>
            <OnOff
                x={x}
                switchOnOff={switchOnOff}
            />

        </div>
    )
}

export default App;
