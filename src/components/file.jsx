function File({fun}){
    
    return (
        <>
            <input 
                className="inputfile"
                id="file"
                type="file"
                onChange={fun}
                accept="image/*"
            />
            <label htmlFor="file" id='filepicture'>Choose a Picture</label>
        </>
    )
}

export default File