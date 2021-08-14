import Slider from "./Slider"
import Output from "./Output"
import React, { useState } from 'react'

export default function ColorBrowser () {

    const [colorValues, setVal] = useState({"red": 0, "blue": 0, "green": 0})
    function updateColors (name, value) {
        setVal({...colorValues, [name]: value})
    }
    return (
        <div className="space-y-5 mx-auto container">
            <Slider name="red" val={colorValues.red} set={updateColors} />
            <Slider name="green" val={colorValues.green} set={updateColors} />
            <Slider name="blue" val={colorValues.blue} set={updateColors} />
            <Output values={colorValues} />
        </div>
    )
}

