function ColorPicker({field, height="60px", width="100%", className, fun, value}){
    let style = {
        height: height,
        width: width,
        display: "inline",
        borderRadius: "40px",
        padding: "16px",
        marginTop: "10px",
        border: "none",
        background: value
    }
    return (
        <input 
            className={className}
            type="color"
            placeholder={field}
            style={style}
            onChange={fun}
            value={value}
         />
    )
}

export default ColorPicker