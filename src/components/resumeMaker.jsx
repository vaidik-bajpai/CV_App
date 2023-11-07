import "./cards.css"
function ResumeMaker({name}){
    return (
        <section
          className="theCard"
          style={{
            width: "100%",
            borderRadius: "30px"
          }}
        >
            <div className="TitleCard">
                <div className="header">
                    <h1 className="head">{name}</h1>
                    <div>
                        <button>
                            <svg width="40px" height="40px" viewBox="-2.4 -2.4 28.80 28.80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ic_fluent_document_pdf_24_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-System-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="ic_fluent_document_pdf_24_filled" fill="#0011ff" fillRule="nonzero"> <path d="M12,2 L12,8 C12,9.05436227 12.81585,9.91816517 13.8507339,9.99451427 L14,10 L20,10 L20,10.6684 C20.5457231,10.9276923 20.9360284,11.4610959 20.9928462,12.0906982 L21,12.25 L21,17.75 C21,18.3944 20.6516734,18.9574272 20.1330898,19.2611692 L20,19.3316 L20,20 C20,21.0543909 19.18415,21.9181678 18.1492661,21.9945144 L18,22 L6,22 C4.94563773,22 4.08183483,21.18415 4.00548573,20.1492661 L4,20 L4,19.3316 C3.45424,19.0723077 3.06396592,18.5389041 3.0071531,17.9093018 L3,17.75 L3,12.25 C3,11.6056 3.34829254,11.0425728 3.86690228,10.7388308 L4,10.6684 L4,4 C4,2.94563773 4.81587733,2.08183483 5.85073759,2.00548573 L6,2 L12,2 Z M19.25,12 L4.75,12 C4.61193,12 4.5,12.1119 4.5,12.25 L4.5,17.75 C4.5,17.8881 4.61193,18 4.75,18 L19.25,18 C19.3881,18 19.5,17.8881 19.5,17.75 L19.5,12.25 C19.5,12.1119 19.3881,12 19.25,12 Z M8.50004,13.0021 C9.32858,13.0021 10.0002,13.6737 10.0002,14.5023 C10.0002,15.2820647 9.40527017,15.9229339 8.64451925,15.9956321 L8.50004,16.0025 L8.00269,16.0025 L8.00269,16.5021 C8.00269,16.7782 7.77883,17.0021 7.50269,17.0021 C7.25722333,17.0021 7.05308012,16.8251914 7.01074542,16.5919645 L7.00269,16.5021 L7.00269,13.5021 C7.00269,13.2565889 7.17955914,13.0524802 7.41281236,13.0101538 L7.50269,13.0021 L8.50004,13.0021 Z M17.0027,13.0021 C17.2788,13.0021 17.5027,13.2259 17.5027,13.5021 C17.5027,13.7782 17.2788,14.0021 17.0027,14.0021 L15.997,14.0021 L15.9958,15.0038 L17.0027,15.0038 C17.2788,15.0038 17.5027,15.2277 17.5027,15.5038 C17.5027,15.7799 17.2788,16.0038 17.0027,16.0038 L15.9964,16.0038 L15.9977,16.5008 C15.9984,16.7769 15.7751,17.0014 15.4989,17.0021 C15.2228,17.0028 14.9984,16.7795 14.9977,16.5033 L14.9951,15.5032 L14.9977,13.5014 C14.998,13.2255 15.2218,13.0021 15.4977,13.0021 L17.0027,13.0021 Z M11.9976,13.0021 C13.1021,13.0021 13.9976,13.8975 13.9976,15.0021 C13.9975045,16.0564909 13.1816502,16.9202678 12.1468531,16.9966144 L11.9976,17.0021 L11.5,17.0021 C11.2545778,17.0021 11.0504,16.8251914 11.0080571,16.5919645 L11,16.5021 L11,13.5021 C11,13.2565889 11.1769086,13.0524802 11.4101355,13.0101538 L11.5,13.0021 L11.9976,13.0021 Z M12,14.0021 L12,16.0021 C12.5512,16.0008 12.9975,15.5535 12.9976,15.0021 C12.9976,14.4899929 12.6126939,14.0678179 12.1163857,14.0090791 L12,14.0021 Z M8.50004,14.0021 L8.00269,14.0021 L8.00269,15.0025 L8.50004,15.0025 C8.7763,15.0025 9.00024,14.7785 9.00024,14.5023 C9.00024,14.2567 8.82329185,14.0525025 8.58995084,14.0101573 L8.50004,14.0021 Z M13.5,2.5 L19.5,8.5 L14,8.5 C13.7239,8.5 13.5,8.27614 13.5,8 L13.5,2.5 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
                        </button>
                    </div>
                </div>
                <div className="creator">
                    <div className="creatorName">Created By </div>
                    <a className="creatorGithub" href="">
                        <svg className="githubIcon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32"><path fillRule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path></svg>
                        <div className="creatorName">Vaidik Bajpai</div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ResumeMaker