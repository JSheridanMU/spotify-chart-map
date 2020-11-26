import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import './Interface.css';
 
export const DateSlider = () => {

    const [value, setValue] = useState(0);
    const getThisYear = () => {
        return new Date().getFullYear();
    }

    return (
        <div className = "DateSlider">
            <RangeSlider
                value={value}
                onChange={changeEvent => setValue(changeEvent.target.value)}
                min={2006}
                max={getThisYear()}
            />
        </div>
    );
}