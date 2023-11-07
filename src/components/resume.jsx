import './resume.css'

function Resume({data}){
    let style = {
        backgroundImage: "linear-gradient(to right," + data.colorL + "," + data.colorR + ')'
    }
    return (
        <div 
          className="universal"
          style={style}
        >
            <div className="header">
                <div className="top">
                    <div className="head">
                        <div className="name">{data.info[0].text.toUpperCase() + " " + data.info[1].text.toUpperCase()}</div>
                        <div className="work">{data.info[2].text}</div>
                    </div>
                    <div className="image">
                        <img src={data.fileSrc} alt="" className="img"/>
                    </div>
                </div>
                <div className='aboutMe'>{data.info[3].text}</div>
            </div>
            <div className="center">
                <h1 className="title">Experience</h1>
                <div className="experienceList">
                {
                    data.experience.map((item, index) => {
                        return(
                            <div className={item.id}>
                                <div
                                    className="Position">
                                    {item.position}
                                </div>
                                <div>
                                    <span className='companyName'>{item.company}</span>
                                    <span className='startDate'> | {item.startDate}</span>
                                    <span className='endDate'>-{item.endDate}</span>
                                </div>
                                <div
                                    className="myExperience">
                                    {item.description}
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <div className="down">
                    <div className="education">
                        <h1 className="title">Education</h1>
                        <div className="school">{data.info[4].text}</div>
                        <div className="degree">{data.info[5].text}</div>
                    </div>
                    <div className="skills">
                        <h1 className="title">Skills</h1>
                        <div className="skillList">
                        {
                            data.skills.map((item, index) => {
                                return(
                                    <div
                                        className="skillItem" key={item.id}>
                                        {item.text}
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="location">
                    <svg width="50px" height="50px" viewBox="-6.72 -6.72 37.44 37.44" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-6.72" y="-6.72" width="37.44" height="37.44" rx="18.72" fill="#000000" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#ffffff" strokeWidth="2" d="M17.5,6.5 L23,9 L23,22 L16,19 L8,22 L1,19 L1,6 L6,8 M16,19 L16,12 M8,22 L8,12 M12,16.2727273 C12,16.2727273 6,11.5 6,7 C6,3.25 9,1 12,1 C15,1 18,3.25 18,7 C18,11.5 12,16.2727273 12,16.2727273 Z M13,7 C13,6.44766667 12.5523333,6 12,6 C11.4476667,6 11,6.44766667 11,7 C11,7.55233333 11.4476667,8 12,8 C12.5523333,8 13,7.55233333 13,7 Z"></path> </g></svg>
                    <div className="text">{data.info[6].text}</div>
                </div>
                <div className="email">
                    <svg width="50px" height="50px" viewBox="-5.04 -5.04 34.08 34.08" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-5.04" y="-5.04" width="34.08" height="34.08" rx="17.04" fill="#000000" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail_fill</title> <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Contact" transform="translate(-144.000000, -48.000000)" fillRule="nonzero"> <g id="mail_fill" transform="translate(144.000000, 48.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fillRule="nonzero"> </path> <path d="M2.06773,5.48201 L10.9435,14.3578 C11.4926875,14.9069875 12.3617969,14.9413117 12.9508922,14.4607727 L13.0648,14.3578 L21.934,5.48861 C21.9627333,5.59743667 21.9824889,5.70988556 21.9924667,5.82513296 L22,6 L22,18 C22,19.0543909 21.18415,19.9181678 20.1492661,19.9945144 L20,20 L4,20 C2.94563773,20 2.08183483,19.18415 2.00548573,18.1492661 L2,18 L2,6 C2,5.88057333 2.01046667,5.76359111 2.03053481,5.64992148 L2.06773,5.48201 Z M20,4 C20.1210667,4 20.2396,4.01075111 20.3547111,4.03135259 L20.5247,4.06953 L12.0042,12.59 L3.48191,4.06776 C3.59207,4.03829333 3.70597667,4.018 3.82276481,4.00774519 L4,4 L20,4 Z" id="形状" fill="#ffffff"> </path> </g> </g> </g> </g></svg>
                    <div className="text">{data.info[7].text}</div>
                </div>
                <div className="phone">
                    <svg width="50px" height="50px" viewBox="-5.04 -5.04 34.08 34.08" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-5.04" y="-5.04" width="34.08" height="34.08" rx="17.04" fill="#000000" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#ffffff"></path> </g></svg>
                    <div className="text">{data.info[8].text}</div>
                </div>
                <div className="linkToPortfolio">
                    <svg width="50px" height="50px" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-13.44 -13.44 90.88 90.88" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-13.44" y="-13.44" width="90.88" height="90.88" rx="45.44" fill="#000000" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#ffffff" d="M33,1.832V16.05c3.678-0.095,7.227-0.706,10.573-1.775C40.982,9.398,37.362,5.155,33,1.832z"></path> <path fill="#ffffff" d="M46.361,15.408c2.198,4.789,3.476,10.085,3.613,15.667h14c-0.245-7.968-3.396-15.202-8.439-20.675 C52.73,12.446,49.653,14.141,46.361,15.408z"></path> <path fill="#ffffff" d="M45.479,13.606c3.095-1.175,5.99-2.748,8.638-4.646c-5.278-5.051-12.278-8.312-20.035-8.811 C38.809,3.722,42.718,8.313,45.479,13.606z"></path> <path fill="#ffffff" d="M49.975,33.075c-0.153,6.246-1.736,12.134-4.438,17.354c3.153,1.134,6.117,2.66,8.846,4.508 c5.71-5.592,9.328-13.303,9.592-21.861H49.975z"></path> <path fill="#ffffff" d="M47.975,33.075H33v15.025c3.684,0.091,7.244,0.672,10.615,1.693C46.264,44.78,47.818,39.103,47.975,33.075z "></path> <path fill="#ffffff" d="M31,33.075H16.025c0.156,6.027,1.711,11.705,4.359,16.719c3.371-1.021,6.932-1.603,10.615-1.693V33.075z"></path> <path fill="#ffffff" d="M33,62.318c3.844-2.929,7.113-6.569,9.609-10.731c-3.062-0.889-6.282-1.4-9.609-1.486V62.318z"></path> <path fill="#ffffff" d="M33,31.075h14.975c-0.139-5.346-1.377-10.416-3.504-14.993C40.847,17.271,36.997,17.951,33,18.05V31.075z"></path> <path fill="#ffffff" d="M31,18.05c-3.997-0.099-7.848-0.779-11.471-1.968c-2.127,4.577-3.365,9.647-3.504,14.993H31V18.05z"></path> <path fill="#ffffff" d="M18.521,13.606c2.761-5.293,6.67-9.885,11.397-13.457c-7.757,0.499-14.757,3.76-20.035,8.812 C12.53,10.859,15.427,12.432,18.521,13.606z"></path> <path fill="#ffffff" d="M31,62.318V50.101c-3.327,0.086-6.548,0.598-9.609,1.486C23.887,55.749,27.156,59.391,31,62.318z"></path> <path fill="#ffffff" d="M44.559,52.21c-2.683,4.592-6.251,8.599-10.476,11.79c7.156-0.46,13.668-3.271,18.778-7.671 C50.293,54.639,47.512,53.244,44.559,52.21z"></path> <path fill="#ffffff" d="M19.441,52.209c-2.953,1.034-5.734,2.429-8.304,4.119c5.11,4.4,11.623,7.212,18.779,7.672 C25.692,60.809,22.124,56.802,19.441,52.209z"></path> <path fill="#ffffff" d="M14.025,33.075h-14c0.264,8.559,3.882,16.27,9.592,21.861c2.729-1.848,5.692-3.374,8.846-4.508 C15.762,45.209,14.179,39.321,14.025,33.075z"></path> <path fill="#ffffff" d="M31,1.832c-4.362,3.322-7.982,7.566-10.573,12.442c3.347,1.069,6.896,1.681,10.573,1.775V1.832z"></path> <path fill="#ffffff" d="M14.025,31.075c0.138-5.582,1.415-10.878,3.613-15.667c-3.292-1.268-6.369-2.962-9.174-5.008 c-5.043,5.473-8.194,12.707-8.439,20.675H14.025z"></path> </g> </g></svg>
                    <div className="text">{data.info[9].text}</div>
                </div>
            </div>
        </div>
    )
}

export default Resume