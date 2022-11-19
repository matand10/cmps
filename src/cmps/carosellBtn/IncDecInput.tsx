import { useState } from "react";
import { NumericFormat } from 'react-number-format'

interface cmpsProps {
    incDecProps: {
        max: number
        min: number
        defaultValue: number
        style: object
        cb: any
    }
}

function IncDecCounter(props: cmpsProps) {
    const { incDecProps } = props
    const { max, min, defaultValue, cb } = incDecProps
    const [num, setNum] = useState<any>(defaultValue);


    const incNum = () => {
        if (typeof num === 'string') {
            const int = parseFloat(num.replace(/,/g, ''))
            if (int < max) return setNum(int + 1)
            else return cb()
        }
        else if (typeof num === 'number') {
            if (num < max) return setNum(num + 1)
            else return cb()
        }
    };

    const decNum = () => {
        if (typeof num === 'string') {
            const int = parseFloat(num.replace(/,/g, ''))
            if (int > min) return setNum(int - 1)
            else return cb()
        }
        else if (typeof num === 'number') {
            if (num > min) return setNum(num - 1)
            else return cb()
        }
    }

    const handleChange = ({ target }: any) => {
        let { value } = target
        const int = parseFloat(value.replace(/,/g, ''))
        setNum(int)
    }

    return (
        <>
            <div>
                <button onClick={decNum}>-</button>
                {/* <input type="text" value={new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(num)} onChange={handleChange} /> */}
                <NumericFormat type="text" value={num} thousandsGroupStyle="thousand" thousandSeparator="," onChange={handleChange} decimalScale={2} />
                <button onClick={incNum}>+</button>
            </div>
        </>
    );
}

export default IncDecCounter;