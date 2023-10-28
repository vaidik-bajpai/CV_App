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
    let key = e.currentTarget.className
    data.experience.map((item, index) => {
      if(item.id === parent.className){
        item[key] = e.target.value
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
            <svg fill="#006Aff" width="25px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#006Aff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></g></svg>
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
                          <Input field="Position" width="100%" display="inline"fun={handleChange} id={"position" + 0} className="position"/>
                          <Input field="Company" width="100%" display="inline" fun={handleChange} id={"company" + 0} className="company"/>
                          <Input field="Start date of employement" width="100%" fun={handleChange} id={"startDate" + 0} className="startDate"/>
                          <Input field="End date of employement" width="100%" fun={handleChange} id={"endDate" + 0} className="endDate"/>
                          <TextArea field="Your main occupation, daily tasks and work field" width="100%" height="150px" fun={handleChange} id={"description" + 0} className="description"/>
                        </div>
                      )
                    else{
                      return(
                        <div className={item.id} key={item.id}>
                          <div className="experienceHeader">
                            <h3 className="expHeading">Experience {index+1}</h3>
                            <button className="bin" onClick={handleClick}>
                                <svg width="100%" height="100%" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-can" className="svg-inline--fa fa-trash-can fa-xl icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#006Aff" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"></path></svg>
                            </button>
                          </div>
                          
                          <Input field="Position" width="100%" display="inline"fun={handleChange} id={"position" + 0} className="position"/>
                          <Input field="Company" width="100%" display="inline" fun={handleChange} id={"company" + 0} className="company"/>
                          <Input field="Start date of employement" width="100%" fun={handleChange} id={"startDate" + 0} className="startDate"/>
                          <Input field="End date of employement" width="100%" fun={handleChange} id={"endDate" + 0} className="endDate"/>
                          <TextArea field="Your main occupation, daily tasks and work field" width="100%" height="150px" fun={handleChange} id={"description" + 0} className="description"/>
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