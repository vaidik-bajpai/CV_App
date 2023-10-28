function Split({gap="20px", input=[]}){
    let style={
        display: "flex",
        gap: gap
    }
    return (
        <div
            className="splitContainer"
            style={style}
        >
            {input.map((item, index) => {
                return item
            })}
        </div>
    )
}

export default Split