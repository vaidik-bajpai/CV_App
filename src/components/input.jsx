import './cards.css'

function Input({field, className='inputTags', fun, id='undefined'}){
    let style = {
        width: "100%",
        borderRadius: "10px",
        padding: "16px",
        marginTop: "20px",
        
    }
    
    return (
        <input 
            id={id}
            className={className}
            type="text"
            placeholder={field}
            style={style}
            onChange={fun}
         />
    )
}

export default Input