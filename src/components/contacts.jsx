import Input from "./input";
import Split from "./splitter";
import './cards.css'
function Contacts({name, data, setData}){
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
            borderRadius: "30px",
          }}
        >
            <div className="heading">
            <svg width="25px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#006aff" stroke="#006aff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>contacts-solid</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Q3_icons" data-name="Q3 icons"> <g> <path d="M14,31.7V34H28V31.7a15.3,15.3,0,0,0-14,0Z"></path> <circle cx="21" cy="17" r="3"></circle> <path d="M36,3H6A2,2,0,0,0,4,5V43a2,2,0,0,0,2,2H36a2,2,0,0,0,2-2V5A2,2,0,0,0,36,3ZM21,10a7,7,0,1,1-7,7A7,7,0,0,1,21,10ZM32,36a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V29.4l.9-.6a19.6,19.6,0,0,1,20.2,0l.9.6Z"></path> <path d="M42,19H40V29h2a2,2,0,0,0,2-2V21A2,2,0,0,0,42,19Z"></path> <path d="M42,31H40V41h2a2,2,0,0,0,2-2V33A2,2,0,0,0,42,31Z"></path> <path d="M42,7H40V17h2a2,2,0,0,0,2-2V9A2,2,0,0,0,42,7Z"></path> </g> </g> </g> </g></svg>
              <h2 className="cardName">
                  {name}
              </h2>
            </div>
            <Split input={[<Input field={data.info[6].name} fun={handleChange}/>,<Input field={data.info[7].name} fun={handleChange}/>]}/>
            <Input field={data.info[8].name} fun={handleChange}/>
            <Input field={data.info[9].name} fun={handleChange}/> 
        </section>

    )
}

export default Contacts