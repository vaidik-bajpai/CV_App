import Input from "./input";
import Add from "./add";
import {v4 as uuidv4} from "uuid";

function Skills({name, data, setData}){
    function addSkill(){
      let newArray = [...data.skills, {id: uuidv4(), text: ""}];
      setData({...data, skills: newArray })
      console.log(data.skills)
    }

    function handleChange(e){
      let parent = document.querySelector(".skillInput")
      let child = e.currentTarget.parentNode
      console.log(child, parent)
      const index = Array.prototype.indexOf.call(parent.children, child)
      /* console.log(index) */
      data.skills[index].text = e.target.value;
      /* console.log(data.skills[index].text) */
      setData({...data})
      console.log(data.skills)
      /* console.log(data.skills) */
    }

    function handleClick(e){
      
      let parent = document.querySelector(".skillInput")
      let child = e.currentTarget.parentNode
      let index = Array.prototype.indexOf.call(parent.children, child)
      console.log(parent, child, e.currentTarget)
      console.log(index)
      data.skills.splice(index, 1)
      setData({...data})
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
            <svg fill="#006Aff" width="40px" height="40px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="#006Aff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M43.84,46.76a5.35,5.35,0,1,1,5.46-5.34A5.41,5.41,0,0,1,43.84,46.76Z" fillRule="evenodd"></path><path d="M77.33,55.7,70.06,44.9V44A24,24,0,0,0,46.19,20a22,22,0,0,0-5.67.7A23.89,23.89,0,0,0,22.31,44a21.92,21.92,0,0,0,3.58,12.7c4.18,6,7,10.8,5.27,17.3a4.58,4.58,0,0,0,.9,4.2A4.43,4.43,0,0,0,35.74,80h19.6A4.72,4.72,0,0,0,60,76.2a5,5,0,0,0,.2-1.2,2.37,2.37,0,0,1,2.39-2H64a4.72,4.72,0,0,0,4.68-3.4A41.31,41.31,0,0,0,70.16,60h5.17a2.78,2.78,0,0,0,2.19-1.6A2.86,2.86,0,0,0,77.33,55.7ZM57.49,47.33l-1,1.57a2.22,2.22,0,0,1-1.76.94,2.38,2.38,0,0,1-.72-.16l-2.65-1a11.64,11.64,0,0,1-3.85,2.2l-.48,2.91a2,2,0,0,1-2,1.65h-2a2,2,0,0,1-2-1.65l-.48-2.91a10,10,0,0,1-3.69-2l-2.81,1a2.38,2.38,0,0,1-.72.16,2.1,2.1,0,0,1-1.76-1l-1-1.65a1.94,1.94,0,0,1,.48-2.51l2.33-1.89a10.11,10.11,0,0,1-.24-2.12,9.41,9.41,0,0,1,.24-2L31.1,36.88a1.92,1.92,0,0,1-.48-2.51l1-1.65a2,2,0,0,1,1.76-1,2.38,2.38,0,0,1,.72.16l2.81,1a11.52,11.52,0,0,1,3.69-2.12L41,28a1.91,1.91,0,0,1,2-1.57h2a1.92,1.92,0,0,1,2,1.49l.48,2.83a11.31,11.31,0,0,1,3.69,2l2.81-1a2.38,2.38,0,0,1,.72-.16,2.1,2.1,0,0,1,1.76,1l1,1.65A2,2,0,0,1,57,36.8l-2.33,1.89a9.56,9.56,0,0,1,.24,2.12,9.41,9.41,0,0,1-.24,2L57,44.74A2,2,0,0,1,57.49,47.33Z" fillRule="evenodd"></path></g></svg>
              <h2 className="cardName">
                  {name}
              </h2>
            </div>

            <div className="List">
              <div className="skillInput">
                {
                    data.skills.map((item) => {
                      if(data.skills.length > 1){
                        return(
                          <div className="skillInputItem" key={item.id}>
                            <Input key={item.id} field="Language or Technology" width="100%" fun={handleChange} id={item.id}/>
                            
                            <button className="bin" onClick={handleClick}>
                              <svg width="100%" height="100%" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-can" class="svg-inline--fa fa-trash-can fa-xl icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#006Aff" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"></path></svg>
                            </button>
                          </div>
                        )
                      }
                      else{
                        return(
                          <div className="skillInputItem" key={item.id}>
                            <Input key={item.id} field="Language or Technology" width="100%" fun={handleChange} id={item.id}/>
                          </div>
                        )
                      }
                  })
                }
              </div>
            </div>
            <Add fun={addSkill}/>
        </section>

    )
}

export default Skills