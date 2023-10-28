import Input from "./input";
function Education({name, data, setData}){
  function handleChange(e){
    let newArray = data.info.map(item => {
      if(e.target.placeholder === item.name)
        return {...item, text: e.target.value}
      return {...item}
    })
    setData({...data, info: newArray})
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
            <svg fill="#006Aff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="26px" height="30px" viewBox="0 0 184.153 184.152" xmlSpace="preserve" stroke="#006Aff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M110.52,108.654c12.617-8.488,21.471-24.673,22.604-39.929c1.729-1.507,2.722-2.993,2.722-4.32V35.384l27.663-9.876 L92.08,0L20.653,25.507l27.66,9.876v29.021c0,1.328,0.993,2.813,2.725,4.32c1.135,15.256,9.983,31.441,22.603,39.929 c-32.33,8.202-56.285,36.268-56.285,57.062c0,24.582,149.44,24.582,149.44,0C166.796,144.922,142.847,116.856,110.52,108.654z M92.08,184.148l-20.932-20.936l17.622-42.6h-0.183l-6.848-7.849c3.319,1.188,6.765,1.906,10.346,1.906 c3.577,0,7.012-0.719,10.318-1.899l-6.839,7.836h-0.176l17.621,42.6L92.08,184.148z"></path> <path d="M33.742,33.234v46.694c-1.504,0.886-2.551,2.457-2.551,4.324c0,2.822,2.283,5.1,5.103,5.1c2.816,0,5.1-2.284,5.1-5.1 c0-1.867-1.047-3.438-2.558-4.324V34.711L33.742,33.234z"></path> </g> </g> </g></svg>
              <h2 className="cardName">
                  {name}
              </h2>
            </div>
            
            <Input field={data.info[4].name} fun={handleChange}/>
            <Input field={data.info[5].name} fun={handleChange}/>
        </section>

    )
}

export default Education