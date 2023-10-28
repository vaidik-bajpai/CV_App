import ColorPicker from "./colorPicker";
import Split from "./splitter";


function Gradient({name, value, data, setData}){
  function handleL(e){
    e.target.style.background = e.target.value
    setData({...data, colorL:e.target.value})
  }
  function handleR(e){
    e.target.style.background = e.target.value
    setData({...data, colorR:e.target.value})
  }
    return (
        <section
          className="theCard"
          style={{
            width: "100%",
            borderRadius: "30px",
            value: {value}
          }}
        >
            <div className="heading">
            <svg fill="#006aff" width="30px" height="30px" viewBox="0 0 512 512" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="#006aff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Paint_Brush"> <g id="XMLID_560_"> <polygon id="XMLID_628_" points="227.441,282 223.678,327 288.322,327 284.559,282 "></polygon> <path d="M299.721,462l-9.718-115h-68.006l-9.718,115c-0.003,0.036-0.007-0.022-0.01,0.014 c-1.188,12.473,2.8,24.401,11.229,33.67c8.429,9.271,19.972,14.352,32.501,14.352c12.529,0,24.072-5.117,32.501-14.387 c8.429-9.27,12.417-21.157,11.229-33.63C299.727,461.983,299.724,462.036,299.721,462z M266,466.177c0,5.502-4.498,9.963-10,9.963 c-5.502,0-10-4.461-10-9.963v-10.959c0-5.502,4.498-9.963,10-9.963c5.502,0,10,4.461,10,9.963V466.177z" id="XMLID_632_"></path> <path d="M363.949,2l-33.743,100.914c-1.403,4.199-5.396,6.947-9.831,6.777c-4.423-0.17-8.204-3.207-9.281-7.5 L285.944,2H228v108.512c0,5.502-4.498,9.963-10,9.963c-5.502,0-10-4.46-10-9.963V2h-34v108.512c0,5.502-4.498,9.963-10,9.963 c-5.502,0-10-4.46-10-9.963V2h-49v163h302V2H363.949z" id="XMLID_633_"></path> <path d="M105,237.375c0,13.67,10.446,24.625,24.117,24.625h89.167h75.432h89.167 c13.67,0,24.117-10.954,24.117-24.625V185H105V237.375z" id="XMLID_1283_"></path> </g> </g> <g id="Layer_1"></g> </g></svg>
              <h2 className="cardName">
                  {name}
              </h2>
            </div>
            <Split input={[<ColorPicker className="leftColor" fun={handleL} value={data.colorL}/>,<ColorPicker className="rightColor" fun={handleR}
            value={data.colorR}/>]}/>
        </section>
    )
}

export default Gradient