function TextArea({field, height="150px", className='textAreaTag', display="block", fun, id}){
    let style = {
        height: height,
        width: "100%",
        display: display,
        borderRadius: "10px",
        padding: "16px",
        marginTop: "20px"
    }
    return (
        <textarea
            className={className}
            type="textarea"
            placeholder={field}
            style={style}
            onChange={fun}
            id={id}
        >
        </textarea>
    )
}

export default TextArea