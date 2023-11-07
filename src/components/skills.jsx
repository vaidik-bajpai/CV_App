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
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" height="32" id="settings"><defs><linearGradient id="a"><stop offset="0" stopColor="#4E65FF"></stop><stop offset="1" stopColor="#ff00f3"></stop></linearGradient><linearGradient id="b" x1="3.795" x2="25" y1="16.125" y2="16.125" gradientUnits="userSpaceOnUse" xlinkHref="#a"></linearGradient></defs><path style={{lineHeight:"normal", textIndent:"0", textAlign:"start", textDecorationLine:"none", textDecorationStyle:"solid", textDecorationColor:"#000", textTransform:"none", blockProgression:"tb", isolation:"auto", mixBlendMode:"normal"}} fill="url(#b)" d="M15.875 5a.5.5 0 0 0-.5.5v.512a3.95 3.95 0 0 0-.422.174l-.361-.36a.5.5 0 0 0-.707 0l-1.06 1.06a.5.5 0 0 0 0 .708l.36.361a3.856 3.856 0 0 0-.173.42H12.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h.512c.05.145.107.284.174.422l-.362.361a.5.5 0 0 0 0 .707l1.06 1.06a.5.5 0 0 0 .708 0l.361-.36c.138.066.277.125.422.175v.51a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-.512c.144-.05.285-.105.422-.172l.361.36a.5.5 0 0 0 .707 0l1.06-1.06a.5.5 0 0 0 0-.708l-.36-.361c.066-.138.125-.277.175-.422h.51a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5h-.512a3.846 3.846 0 0 0-.172-.422l.36-.36a.5.5 0 0 0 0-.706l-1.06-1.06a.5.5 0 0 0-.708 0l-.361.36a3.816 3.816 0 0 0-.422-.175V5.5a.5.5 0 0 0-.5-.5h-1.5zm.5 1h.5v.338a.5.5 0 0 0 .389.488c.315.072.617.198.89.37a.5.5 0 0 0 .62-.071l.238-.238.353.353-.236.237a.5.5 0 0 0-.072.617c.17.274.296.577.367.892a.5.5 0 0 0 .486.389h.34v.5h-.338a.5.5 0 0 0-.488.39 2.868 2.868 0 0 1-.367.89.5.5 0 0 0 .07.618l.238.239-.353.353-.237-.236a.5.5 0 0 0-.619-.07 2.875 2.875 0 0 1-.89.365.5.5 0 0 0-.391.488v.338h-.5v-.338a.5.5 0 0 0-.389-.486 2.888 2.888 0 0 1-.89-.37.5.5 0 0 0-.62.071l-.238.238-.353-.353.238-.237a.5.5 0 0 0 .07-.619 2.872 2.872 0 0 1-.365-.89.5.5 0 0 0-.488-.391H13v-.5h.338a.5.5 0 0 0 .488-.389c.072-.315.196-.615.367-.888a.5.5 0 0 0-.07-.62l-.238-.238.353-.353.239.236a.5.5 0 0 0 .617.07c.274-.17.575-.294.89-.365a.5.5 0 0 0 .391-.488V6zm.25 1.98c-.903 0-1.646.742-1.646 1.645s.743 1.646 1.646 1.646c.903 0 1.646-.743 1.646-1.646 0-.903-.743-1.645-1.646-1.645zm0 1a.645.645 0 1 1 0 1.291.645.645 0 1 1 0-1.291zM7.67 11.535a.5.5 0 0 0-.5.5v.512a3.76 3.76 0 0 0-.422.172l-.36-.36a.5.5 0 0 0-.706 0l-1.06 1.06a.5.5 0 0 0 0 .708l.36.361a3.845 3.845 0 0 0-.175.422h-.512a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h.512c.05.144.107.285.173.422l-.359.36a.5.5 0 0 0 0 .708l1.06 1.06a.5.5 0 0 0 .708 0l.361-.36c.137.066.276.124.42.173v.512a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-.512a3.95 3.95 0 0 0 .422-.173l.361.36a.5.5 0 0 0 .707 0l1.06-1.06a.5.5 0 0 0 0-.709l-.359-.359c.067-.137.124-.278.174-.422h.51a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5h-.512a3.856 3.856 0 0 0-.174-.422l.362-.361a.5.5 0 0 0 0-.707l-1.06-1.06a.5.5 0 0 0-.708 0l-.361.36a3.816 3.816 0 0 0-.422-.175v-.51a.5.5 0 0 0-.5-.5h-1.5zm.5 1h.5v.338a.5.5 0 0 0 .389.486c.315.072.616.198.89.37a.5.5 0 0 0 .62-.07l.238-.24.353.354-.236.237a.5.5 0 0 0-.07.619c.17.274.294.575.365.89a.5.5 0 0 0 .488.391h.338v.5h-.338a.5.5 0 0 0-.486.389 2.872 2.872 0 0 1-.37.889.5.5 0 0 0 .07.62l.24.237-.354.353-.237-.236a.5.5 0 0 0-.619-.07 2.875 2.875 0 0 1-.89.365.5.5 0 0 0-.391.488v.34h-.5v-.338a.5.5 0 0 0-.389-.488 2.87 2.87 0 0 1-.888-.367.5.5 0 0 0-.62.068l-.238.238-.353-.355.236-.236a.5.5 0 0 0 .07-.618 2.872 2.872 0 0 1-.365-.89.5.5 0 0 0-.488-.39h-.34v-.5h.338a.5.5 0 0 0 .488-.39c.072-.315.195-.616.367-.89a.5.5 0 0 0-.068-.62l-.238-.238.353-.353.236.236a.5.5 0 0 0 .618.07c.274-.17.575-.294.89-.365a.5.5 0 0 0 .39-.488v-.336zm11.238 1.715a.5.5 0 0 0-.5.5v.895c-.31.096-.608.217-.896.367l-.63-.627a.5.5 0 0 0-.706 0l-1.543 1.54a.5.5 0 0 0 0 .708l.63.63c-.15.289-.276.587-.372.897H14.5a.5.5 0 0 0-.5.5v2.182a.5.5 0 0 0 .5.5h.893c.096.31.219.61.369.898l-.63.63a.5.5 0 0 0 0 .706l1.544 1.541a.5.5 0 0 0 .707 0l.63-.629c.288.15.586.273.895.37v.892a.5.5 0 0 0 .5.5h2.184a.5.5 0 0 0 .5-.5v-.893c.31-.096.608-.217.896-.367l.63.627a.5.5 0 0 0 .706 0l1.543-1.54a.5.5 0 0 0 0-.708l-.63-.63c.15-.289.276-.587.372-.897h.891a.5.5 0 0 0 .5-.5V19.66a.5.5 0 0 0-.5-.5h-.893a5.385 5.385 0 0 0-.369-.898l.63-.63a.5.5 0 0 0 0-.706l-1.544-1.541a.5.5 0 0 0-.707 0l-.63.629a5.373 5.373 0 0 0-.895-.37v-.894a.5.5 0 0 0-.5-.5h-2.184zm-10.988.264c-.903 0-1.645.743-1.645 1.646 0 .903.742 1.647 1.645 1.647s1.646-.744 1.646-1.647-.743-1.646-1.646-1.646zm11.488.736h1.184v.719a.5.5 0 0 0 .388.488c.484.11.944.301 1.364.564a.5.5 0 0 0 .619-.07l.508-.506.836.834-.506.506a.5.5 0 0 0-.07.62c.262.42.451.88.56 1.365a.5.5 0 0 0 .488.39H26v1.182h-.719a.5.5 0 0 0-.488.388c-.11.484-.3.946-.564 1.366a.5.5 0 0 0 .07.619l.508.508-.836.834-.506-.504a.5.5 0 0 0-.617-.07c-.421.262-.884.451-1.368.56a.5.5 0 0 0-.388.486v.721h-1.184v-.719a.5.5 0 0 0-.388-.486 4.403 4.403 0 0 1-1.364-.565.5.5 0 0 0-.619.07l-.508.507-.836-.834.506-.506a.5.5 0 0 0 .07-.62 4.403 4.403 0 0 1-.56-1.365.5.5 0 0 0-.488-.39H15V20.16h.719a.5.5 0 0 0 .488-.389c.11-.483.3-.945.564-1.365a.5.5 0 0 0-.07-.619l-.508-.508.836-.834.506.504a.5.5 0 0 0 .617.07c.421-.262.884-.453 1.368-.562a.5.5 0 0 0 .388-.484v-.723zm-11.488.264a.647.647 0 0 1 0 1.293.645.645 0 0 1 0-1.293zM20.5 18.25a2.511 2.511 0 0 0-2.5 2.5 2.51 2.51 0 0 0 2.5 2.5 2.51 2.51 0 0 0 2.5-2.5c0-1.372-1.128-2.5-2.5-2.5zm0 1c.826 0 1.5.674 1.5 1.5s-.674 1.5-1.5 1.5-1.5-.674-1.5-1.5.674-1.5 1.5-1.5z" color="#000" fontFamily="sans-serif" fontWeight="400" overflow="visible"></path></svg>
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