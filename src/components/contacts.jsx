import Input from "./input";
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
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" height="32" id="business"><defs><linearGradient id="a"><stop offset="0" stopColor="#4E65FF"></stop><stop offset="1" stopColor="#92EFFD"></stop></linearGradient><linearGradient id="b" x1="2" x2="28" y1="16" y2="16" gradientUnits="userSpaceOnUse" xlinkHref="#a"></linearGradient></defs><path style={{lineHeight:"normal", textIndent:"0", textAlign:"start", textDecorationLine:"none", textDecorationStyle:"solid", textDecorationColor:"#000", textTransform:"none", blockProgression:"tb", isolation:"auto", mixBlendMode:"normal"}} fill="url(#b)" d="M21 3a2.508 2.508 0 0 0-2.5 2.5c0 .694.289 1.323.75 1.777l-2.307 3.846A3.954 3.954 0 0 0 16 11c-1.197 0-2.262.54-2.996 1.379L12.5 12l-.6.8.543.409A3.946 3.946 0 0 0 12 15c0 .64.166 1.237.436 1.775L6.742 20.57A2.969 2.969 0 0 0 5 20c-1.65 0-3 1.35-3 3 0 1.651 1.35 3 3 3s3-1.349 3-3c0-.634-.2-1.222-.54-1.707l5.532-3.688C13.727 18.452 14.796 19 16 19c.644 0 1.245-.169 1.785-.441l.389.546.814-.582-.375-.521C19.456 17.268 20 16.201 20 15c0-.02-.006-.04-.006-.06l6.338-.846c.359.543.973.906 1.668.906 1.099 0 2-.901 2-2s-.901-2-2-2-2 .901-2 2c0 .044.01.085.014.129l-6.172.822a3.996 3.996 0 0 0-1.955-2.455l2.205-3.674c.282.112.587.178.908.178 1.375 0 2.5-1.125 2.5-2.5S22.375 3 21 3zm0 1c.834 0 1.5.666 1.5 1.5S21.834 7 21 7s-1.5-.666-1.5-1.5S20.166 4 21 4zM8 7c-1.099 0-2 .901-2 2s.901 2 2 2c.395 0 .761-.12 1.072-.32L9.5 11l.6-.799-.348-.262C9.905 9.658 10 9.341 10 9c0-1.099-.901-2-2-2zm0 1c.558 0 1 .442 1 1s-.442 1-1 1-1-.442-1-1 .442-1 1-1zm2.9 2.8-.6.802.8.6.6-.802-.8-.6zM16 12c1.663 0 3 1.337 3 3s-1.337 3-3 3-3-1.337-3-3 1.337-3 3-3zm12 0c.558 0 1 .442 1 1s-.442 1-1 1-1-.442-1-1 .442-1 1-1zm-8.43 7.338-.814.582.58.812.814-.58-.58-.814zm1.162 1.627-.814.582.582.812.813-.58-.58-.814zM5 21c1.11 0 2 .89 2 2 0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2zm16.895 1.592-.815.582.582.814.813-.582-.58-.814zM24.5 24a2.47 2.47 0 0 0-1.324.389l-.12-.168-.814.58.203.283A2.48 2.48 0 0 0 22 26.5c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5s-.666 1.5-1.5 1.5-1.5-.666-1.5-1.5.666-1.5 1.5-1.5z" color="#000" fontFamily="sans-serif" fontWeight="400" overflow="visible"></path></svg>
              <h2 className="cardName">
                  {name}
              </h2>
            </div>
            <div className="addressEmail">
              <Input field={data.info[6].name} fun={handleChange}/>
              <Input field={data.info[7].name} fun={handleChange}/>
            </div>
            <Input field={data.info[8].name} fun={handleChange}/>
            <Input field={data.info[9].name} fun={handleChange}/> 
        </section>

    )
}

export default Contacts