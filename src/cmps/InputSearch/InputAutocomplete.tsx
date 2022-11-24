import './InputAutocomplete.css'
import optionsData from '../../data/InputAutocomplete'
import { useEffect, useRef, useState } from 'react'

interface IOptions {
    options: { data: string }[]
    setSelectedOption(value: string): void
}

export const InputAutocomplete = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [options, setOptions] = useState(optionsData)
    const [selectedOption, setSelectedOption] = useState('CSS')
    const ref = useRef<any>(null)

    useEffect(() => {
        document.addEventListener('click', eventListeners)
        return () => document.removeEventListener('click', eventListeners)
    }, [])

    const eventListeners = (ev: MouseEvent) => {
        if (!ref.current?.contains(ev.target)) setIsOpen(false)
    }

    return (
        <section className={`input-container ${isOpen ? 'active' : ''}`} ref={ref}>
            <input type="text" placeholder="matan" onClick={() => setIsOpen(true)} value={selectedOption} />
            <div className="option">
            </div>
            <OptionList options={options} setSelectedOption={setSelectedOption} />
        </section>
    )
}


const OptionList = (props: IOptions) => {
    const { options, setSelectedOption } = props
    return (
        <section className="option">
            {options.map((option, idx) => {
                return (
                    <div key={idx} onMouseOver={() => setSelectedOption(option.data)}>{option.data}</div>
                )
            })}
        </section>
    )
}