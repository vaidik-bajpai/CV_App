import Input from "./input";
import TextArea from "./textarea";
import File from "./file";
import './resume.css'
function PersonalData({name, data, setData}){
  function handleChange(e){
    let newArray = data.info.map(item => {
      if(e.target.placeholder === item.name)
        return {...item, text: e.target.value}
      return {...item}
    })
    setData({...data, info: newArray})
    console.log(data.info)
  }

  function handleImage(e){
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        setData({...data, fileSrc: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
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
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" height="32" id="candidate"><defs><linearGradient id="a"><stop offset="0" stopColor="#4E65FF"></stop><stop offset="1" stopColor="#92EFFD"></stop></linearGradient><linearGradient id="b" x1="5" x2="23" y1="16" y2="16" gradientUnits="userSpaceOnUse" xlinkHref="#a"></linearGradient></defs><path fill="url(#b)" d="M5.5 3a.5.5 0 0 0-.5.5v25a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .354-.146l4-4A.5.5 0 0 0 26 24.5v-21a.5.5 0 0 0-.5-.5h-20zM6 4h19v20a.5.5 0 0 0-.008 0H21.5a.5.5 0 0 0-.5.5v3.494A.5.5 0 0 0 21 28H6V4zm3.5 2C8.677 6 8 6.678 8 7.5S8.677 9 9.5 9 11 8.322 11 7.5 10.323 6 9.5 6zM13 6v1h10V6H13zM9.5 7c.282 0 .5.218.5.5 0 .282-.218.5-.5.5a.493.493 0 0 1-.5-.5c0-.282.218-.5.5-.5zM13 8v1h4V8h-4zm-3.5 3c-.823 0-1.5.678-1.5 1.5S8.677 14 9.5 14s1.5-.678 1.5-1.5-.677-1.5-1.5-1.5zm3.5 0v1h10v-1H13zm-3.5 1c.282 0 .5.218.5.5 0 .282-.218.5-.5.5a.493.493 0 0 1-.5-.5c0-.282.218-.5.5-.5zm3.5 1v1h2v-1h-2zm-3.5 3c-.823 0-1.5.677-1.5 1.5S8.677 19 9.5 19s1.5-.677 1.5-1.5-.677-1.5-1.5-1.5zm3.5 0v1h10v-1H13zm-3.5 1c.282 0 .5.218.5.5 0 .282-.218.5-.5.5a.493.493 0 0 1-.5-.5c0-.282.218-.5.5-.5zm3.5 1v1h6v-1h-6zm-3.5 3c-.823 0-1.5.677-1.5 1.5S8.677 24 9.5 24s1.5-.677 1.5-1.5-.677-1.5-1.5-1.5zm3.5 0v1h10v-1H13zm-3.5 1c.282 0 .5.218.5.5 0 .282-.218.5-.5.5a.493.493 0 0 1-.5-.5c0-.282.218-.5.5-.5zm3.5 1v1h4v-1h-4zm9 2h2.293L22 27.293V25z" color="#000" fontFamily="sans-serif" fontWeight="400" overflow="visible" style={{lineHeight:"normal", textIndent:"0", textAlign:"start", textDecorationLine: "none", textDecorationStyle:"solid",textDecorationColor:"#000",textTransform:"none",blockProgression:"tb",isolation:"auto",mixBlendMode:"normal"}}></path></svg>
              <h2
                className="cardName"
                fontFamily="'Russo One', sans-serif"
                fontSize={2 + "rem"}>
                  {name}
              </h2>
            </div>
            <div className="fullName">
              <Input field={data.info[0].name} fun={handleChange}/>
              <Input field={data.info[1].name} fun={handleChange}/>
            </div>
            <Input field={data.info[2].name} fun={handleChange}/>
            <File fun={handleImage}/>

            <TextArea field={data.info[3].name} fun={handleChange}/>
        </section>

    )
}

export default PersonalData