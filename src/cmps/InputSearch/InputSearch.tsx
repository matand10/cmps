import './InputSearch.css'

interface cmpProps {
    placeholder: string
    data: object[]
}


export const InputSearch = (props: cmpProps) => {
    const { placeholder, data } = props

    return (
        <div className="search">
            <div className="search-input">
                <div className="search-icon">icon</div>
                <input type="text" placeholder={placeholder} />
            </div>
            <div className="data-result">
                {data.map((item, idx) => {
                    return <div key={idx}></div>
                })}
            </div>
        </div>
    )
}