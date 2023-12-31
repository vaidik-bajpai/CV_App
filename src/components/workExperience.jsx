import Input from "./input";
import TextArea from "./textarea";
import Add from "./add";
import {v4 as uuidv4} from "uuid";
import './cards.css'

function WorkExperience({name, data, setData}){
  function addExperience(){
    if(data.experience.length < 2){
      let newArray = [...data.experience, {id: uuidv4(), position: "", company: "", startDate: "", endDate: "", description: "" }];
      data.experience = newArray
      setData({...data, experience: newArray})
    }
  }

  function handleChange(e){
    let parent = e.currentTarget.parentNode
    let key = e.currentTarget.classList[0]
    
    data.experience.map((item, index) => {
      
      if(item.id === parent.className){
        item[key] = e.target.value
        console.log(item[key])
        return
      }
    })
    setData({...data})
    console.log(data.experience)
  }

  function handleClick(e){
    console.log(data.experience)
    let parent = e.currentTarget.parentNode.parentNode.parentNode
    let child = e.currentTarget.parentNode.parentNode
    let index = Array.prototype.indexOf.call(parent.children, child)
    
    data.experience.splice(index, 1)
    setData({...data})
    console.log(data.experience)
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
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" height="32" id="experience"><defs><linearGradient id="a"><stop offset="0" stopColor="#4E65FF"></stop><stop offset="1" stopColor="#92EFFD"></stop></linearGradient><linearGradient id="b" x1="1" x2="29" y1="16" y2="16" gradientUnits="userSpaceOnUse" xlinkHref="#a"></linearGradient></defs><path style={{lineHeight:"normal", textIndent:"0", textAlign:"start", textDecorationLine:"none", textDecorationStyle:"solid", textDecorationColor:"#000", textTransform:"none", blockProgression:"tb", isolation:"auto", mixBlendMode:"normal"}} fill="url(#b)" fillRule="evenodd" d="M8.5 0a.5.5 0 0 0-.5.5V2H1.5a.5.5 0 0 0-.5.5c0 4.803 1.676 8.407 3.896 10.928 2.2 2.497 4.91 3.94 7.088 4.537.198.223.4.438.612.629.45.405.942.723 1.459.96a.5.5 0 0 0 .074.143s.143.192.28.451c.135.26.221.584.208.682-.028.21-.279.514-.582.738-.303.225-.594.356-.594.356a.5.5 0 0 0-.171.129c-.025.02-.074.02-.092.04a.821.821 0 0 0-.17.298 1.621 1.621 0 0 0-.084.55c0 .184.018.364.084.551.017.048.06.102.088.153-.012 1.178-.15 1.706-.399 2.076-.255.379-.744.712-1.494 1.375a.5.5 0 0 0-.025.021l-.01.01a.5.5 0 0 0-.088.102.5.5 0 0 0-.014.025.5.5 0 0 0-.011.017.5.5 0 0 0-.006.014.5.5 0 0 0-.043.139.5.5 0 0 0 0 .012.5.5 0 0 0-.006.064V29h-.352a.658.658 0 0 0-.648.65v1.702c0 .35.3.648.648.648h10.704a.656.656 0 0 0 .648-.648V29.65c0-.35-.3-.65-.648-.65h-.325v-1.5a.5.5 0 0 0-.29-.455c-.71-.621-1.187-.958-1.434-1.324-.25-.37-.387-.898-.399-2.078.028-.051.071-.105.088-.153a1.61 1.61 0 0 0 .082-.55c0-.185-.017-.366-.084-.553a.822.822 0 0 0-.172-.295.702.702 0 0 0-.244-.16s-.31-.158-.625-.399c-.314-.24-.558-.572-.57-.693-.011-.11.081-.437.217-.695a3.87 3.87 0 0 1 .277-.452.5.5 0 0 0 .072-.138 5.793 5.793 0 0 0 1.46-.961c.211-.191.413-.406.61-.63 2.178-.596 4.89-2.04 7.089-4.536C29.324 10.907 31 7.303 31 2.5a.5.5 0 0 0-.5-.5H24V.5a.5.5 0 0 0-.5-.5h-15zM9 1h14v1.924H9V1zM2.043 3H8v.424a.5.5 0 0 0 .002.049c0 .177.007.35.01.527H3.8a.5.5 0 0 0-.5.5c0 2.902 1.312 5.404 2.85 7.31 1.518 1.885 3.245 3.193 4.279 3.797.168.332.344.645.529.946a14.425 14.425 0 0 1-5.313-3.787C3.653 10.502 2.16 7.3 2.043 3zM24 3h5.957c-.116 4.301-1.61 7.502-3.603 9.766a14.425 14.425 0 0 1-5.313 3.787c.184-.3.36-.615.527-.946 1.034-.603 2.762-1.912 4.282-3.796C27.387 9.904 28.7 7.4 28.7 4.5a.5.5 0 0 0-.5-.5h-4.212c.003-.193.012-.382.012-.576V3zm-14.957.924h13.914c-.058 4.12-.757 7.907-1.977 10.623-.635 1.416-1.4 2.544-2.244 3.303C17.893 18.608 16.99 19 16 19c-.99 0-1.893-.392-2.736-1.15-.844-.759-1.61-1.887-2.246-3.303C9.798 11.83 9.1 8.045 9.043 3.924zM4.406 5h3.627c.136 3.31.698 6.357 1.62 8.838a16.67 16.67 0 0 1-2.723-2.654C5.585 9.516 4.554 7.38 4.406 5zm19.56 0h3.628c-.148 2.38-1.18 4.516-2.524 6.184-.9 1.115-1.883 1.999-2.726 2.656.922-2.481 1.487-5.529 1.623-8.84zm-8.581 15.055c.394.056.834.056 1.228 0-.117.27-.264.53-.228.884.067.67.557 1.081.957 1.387.364.279.653.422.713.453.009.043.02.091.02.162 0 .026-.005.034-.007.059h-4.136c-.002-.025-.008-.033-.008-.059 0-.07.01-.117.02-.16.077-.036.335-.147.687-.408.4-.297.885-.734.976-1.408.05-.366-.102-.634-.222-.91zM13.996 24h4.008c.05.965.129 1.778.469 2.281.186.277.517.502.763.719h-6.472c.246-.217.577-.442.763-.719.34-.503.42-1.316.47-2.281zM12 28h8.027v1H12v-1zm-1 2h10v1H11v-1z" color="#000" fontFamily="sans-serif" fontWeight="400" overflow="visible"></path></svg>
              <h2 className="cardName">
                  {name}
              </h2>
            </div>
            <div className="Experience">
              {
                  data.experience.map((item, index) => {
                    if (data.experience.length < 2)
                      return(
                        <div className={item.id} key={item.id}>
                          <div className="experienceHeader"></div>
                          <Input field="Position" width="100%" display="inline"fun={handleChange} id={"position" + 0} className="position inputTags"/>
                          <Input field="Company" width="100%" display="inline" fun={handleChange} id={"company" + 0} className="company inputTags"/>
                          <Input field="Start date of employement" width="100%" fun={handleChange} id={"startDate" + 0} className="startDate inputTags"/>
                          <Input field="End date of employement" width="100%" fun={handleChange} id={"endDate" + 0} className="endDate inputTags"/>
                          <TextArea field="Your main occupation, daily tasks and work field" width="100%" height="150px" fun={handleChange} id={"description" + 0} className="description textAreaTag"/>
                        </div>
                      )
                    else{
                      return(
                        <div className={item.id} key={item.id}>
                          <div className="experienceHeader">
                            <h3 className="expHeading">Experience {index+1}</h3>
                            <button className="bin" onClick={handleClick}>
                                <svg width="100%" height="100%" aria-hidden="true" focusable="false" dataPrefix="fas" dataIcon="trash-can" className="svg-inline--fa fa-trash-can fa-xl icon dustBin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"></path></svg>
                            </button>
                          </div>
                          
                          <Input field="Position" width="100%" display="inline"fun={handleChange} id={"position" + 0} className="position inputTags"/>
                          <Input field="Company" width="100%" display="inline" fun={handleChange} id={"company" + 0} className="company inputTags"/>
                          <Input field="Start date of employement" width="100%" fun={handleChange} id={"startDate" + 0} className="startDate inputTags"/>
                          <Input field="End date of employement" width="100%" fun={handleChange} id={"endDate" + 0} className="endDate inputTags"/>
                          <TextArea field="Your main occupation, daily tasks and work field" width="100%" height="150px" fun={handleChange} id={"description" + 0} className="description textAreaTag"/>
                        </div>
                      )
                    }    
                  })
              }
            </div>
            <Add fun={addExperience}/>
        </section>

    )
}

export default WorkExperience