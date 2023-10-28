function Add({fun, width="30px", height="30px"}){
    let style={
        marginTop: "20px",
        width: "80px",
        height: "40px",
        display: "grid",
        placeContent: "center",
        borderRadius: "15px"
    }
    return (
        <button
            className="add"
            style={style}
            onClick={fun}
        >

            <svg className="plusMark" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
                <path d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    )
}

export default Add