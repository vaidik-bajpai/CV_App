function ColorPicker({field, width="100%", fun, value, id}){
    return (
        <>
            <label htmlFor={id} className="color" style={{background: `${value}`}}>
                <input 
                className="colorPicker"
                type="color"
                onChange={fun}
                id={id}
                value={value}
                />
            </label>
            
         </>
    )
}

export default ColorPicker