import Slider from "./Slider"
import React, { useState } from 'react'

export default function ColorBrowser () {

    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(0)
    const [yellow, setYellow] = useState(0)

    return (
        <div>
            <Slider name="red" val={red} set={setRed} />
            <Slider name="blue" val={blue} set={setBlue} />
            <Slider name="yellow" val={yellow} set={setYellow} />
        </div>
    )
}

