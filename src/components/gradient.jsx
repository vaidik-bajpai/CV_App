import ColorPicker from "./colorPicker";


function Gradient({name, value, data, setData}){
  function handleL(e){
    setData({...data, colorL:e.target.value})
  }
  function handleR(e){
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
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" height="32" id="success"><defs><linearGradient id="a"><stop offset="0" stopColor="#000092"></stop><stop offset="1" stopColor="#92EFFD"></stop></linearGradient><linearGradient id="b" x1="2" x2="27" y1="15.791" y2="15.791" gradientUnits="userSpaceOnUse" xlinkHref="#a"></linearGradient></defs><path style={{lineHeight:"normal", textIndent:"0", textAlign:"start", textDecorationLine:"none", textDecorationStyle:"solid", textDecorationColor:"#000", textTransform:"none", blockProgression:"tb", isolation:"auto", mixBlendMode:"normal"}} fill="url(#b)" fillRule="evenodd" d="m25.484 2-.37.93 1.005.402c-.949.285-4.116 1.249-7.797 2.656-2.137.817-4.277 1.728-5.91 2.64-.816.457-1.505.91-2.017 1.378-.513.467-.895.965-.895 1.576 0 .583.352 1.066.82 1.463.468.397 1.088.744 1.813 1.082 1.45.677 3.334 1.303 5.209 1.928 1.875.625 3.741 1.249 5.103 1.884.681.318 1.234.643 1.586.942.352.298.469.534.469.701 0 .125-.156.444-.6.826-.443.382-1.12.811-1.945 1.246-1.649.87-3.886 1.774-6.125 2.582-4.477 1.617-8.965 2.864-8.965 2.864l.27.962s4.512-1.253 9.035-2.886c2.261-.817 4.524-1.726 6.25-2.637.863-.455 1.592-.91 2.133-1.375.54-.465.947-.957.947-1.582 0-.583-.352-1.068-.82-1.465-.468-.397-1.088-.743-1.813-1.082-1.45-.677-3.334-1.303-5.209-1.928-1.875-.625-3.741-1.249-5.103-1.884-.681-.318-1.234-.643-1.586-.942-.352-.298-.469-.532-.469-.699 0-.139.149-.455.566-.836.418-.38 1.057-.81 1.834-1.244 1.555-.869 3.665-1.77 5.778-2.578 3.93-1.503 7.559-2.59 8.092-2.748l-.541 1.353.93.371 1.112-2.785L25.484 2zM10.5 3.082v1h-1v1h1v1h1v-1h1v-1h-1v-1h-1zm-4 6.5c-.823 0-1.5.678-1.5 1.5 0 .823.677 1.5 1.5 1.5s1.5-.677 1.5-1.5c0-.822-.677-1.5-1.5-1.5zm0 1c.282 0 .5.218.5.5 0 .282-.218.5-.5.5a.493.493 0 0 1-.5-.5c0-.282.218-.5.5-.5zm16.5.5v1h-1v1h1v1h1v-1h1v-1h-1v-1h-1zm-14.5 7.5v1h-1v1h1v1h1v-1h1v-1h-1v-1h-1zm20 0c-.823 0-1.5.678-1.5 1.5 0 .823.677 1.5 1.5 1.5s1.5-.677 1.5-1.5c0-.822-.677-1.5-1.5-1.5zm0 1c.282 0 .5.218.5.5 0 .282-.218.5-.5.5a.493.493 0 0 1-.5-.5c0-.282.218-.5.5-.5zm-25 5c-.823 0-1.5.678-1.5 1.5 0 .823.677 1.5 1.5 1.5s1.5-.677 1.5-1.5c0-.822-.677-1.5-1.5-1.5zm0 1c.282 0 .5.218.5.5 0 .282-.218.5-.5.5a.493.493 0 0 1-.5-.5c0-.282.218-.5.5-.5zm16 1v1h-1v1h1v1h1v-1h1v-1h-1v-1h-1z" color="#000" fontFamily="sans-serif" fontWeight="400" overflow="visible"></path></svg>
              <h2 className="cardName">
                  {name}
              </h2>
            </div>
            <div className="colors">
              <ColorPicker className="leftColor" fun={handleL} value={data.colorL} id="color1"/>
              <ColorPicker className="rightColor" fun={handleR} value={data.colorR} id="color2"/>
            </div>
        </section>
    )
}

export default Gradient