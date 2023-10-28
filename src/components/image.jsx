function Image({field, className, eventListener}){
    let style = {
        width: "100%",
        borderRadius: "10px",
        padding: "16px",
        marginTop: "20px"
    }
    return (
        <>
            <input
                className={className}
                type="file"
                placeholder={field}
                style={style}
            />
        </>
    )
}

export default Image