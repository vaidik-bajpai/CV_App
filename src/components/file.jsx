function File({field, className='fileTags', eventListener, fun}){
    let style = {
        width: "100%",
        borderRadius: "10px",
        padding: "16px",
        marginTop: "20px",
        appearance: "none",
        height: "50px",
        background: "#333",
    }
    
    return (
        <input 
            className={className}
            type="file"
            placeholder={field}
            style={style}
            onChange={fun}
         />
    )
}

export default File