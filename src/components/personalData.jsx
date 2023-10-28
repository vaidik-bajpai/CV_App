import Input from "./input";
import Split from "./splitter";
import TextArea from "./textarea";
import File from "./file";
import './resume.css'
function PersonalData({name, icon, data, setData}){
  function handleChange(e){
    let newArray = data.info.map(item => {
      if(e.target.placeholder === item.name)
        return {...item, text: e.target.value}
      return {...item}
    })
    setData({...data, info: newArray})
    console.log(data.info)
  }
    return (
        <section
          className="theCard"
          style={{
            width: "100%",
            borderRadius: "30px"
          }}
        >
            <div className="heading">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 14H12.5M7 10H17M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V8.5M14 20L16.025 19.595C16.2015 19.5597 16.2898 19.542 16.3721 19.5097C16.4452 19.4811 16.5147 19.4439 16.579 19.399C16.6516 19.3484 16.7152 19.2848 16.8426 19.1574L21 15C21.5523 14.4477 21.5523 13.5523 21 13C20.4477 12.4477 19.5523 12.4477 19 13L14.8426 17.1574C14.7152 17.2848 14.6516 17.3484 14.601 17.421C14.5561 17.4853 14.5189 17.5548 14.4903 17.6279C14.458 17.7102 14.4403 17.7985 14.405 17.975L14 20Z" stroke="#006AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              <h2
                className="cardName"
                fontFamily="'Russo One', sans-serif"
                fontSize={2 + "rem"}>
                  {name}
              </h2>
            </div>
            <Split input={[<Input field={data.info[0].name} fun={handleChange}/>,<Input field={data.info[1].name} fun={handleChange}/>]}/>
            
            
            <Input field={data.info[2].name} fun={handleChange}/>
            <File/>

            <TextArea field={data.info[3].name} fun={handleChange}/>
        </section>

    )
}

export default PersonalData