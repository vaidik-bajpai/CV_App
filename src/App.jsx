import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import WorkExperience from "./components/workExperience";
import Education from "./components/education";
import PersonalData from "./components/personalData";
import Contacts from "./components/contacts";
import Skills from "./components/skills";
import Gradient from "./components/gradient";
import Resume from "./components/resume";
import ResumeMaker from "./components/resumeMaker";
import './App.css'

function App() { 
  const [data, setData] = useState({
    colorL: "#4E65FF",
    colorR: "#92EFFD",
    fileName: "",
    fileSrc: "",
    firstName: "",
    info:[
      {
        name: "First Name",
        text: ""
      },
      {
        name: "Last Name",
        text: ""
      },
      {
        name: "Niche: Software Developer",
        text: ""
      },
      {
        name: "Tell something unique about yourself",
        text: ""
      },
      {
        name: "School",
        text: ""
      },
      {
        name: "Degree",
        text: ""
      },
      {
        name: "Address",
        text: ""
      },
      {
        name: "E-mail",
        text: ""
      },
      {
        name: "Phone number",
        text: ""
      },
      {
        name: "Link to portfolio",
        text: ""
      },
    ],
    experience:[
      {
        id: uuidv4(),
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        description: ""
      }
    ],
    skills:[
      {
        id: uuidv4(),
        text: ""
      }
    ]
  })

  return (
    <div className="top">
      <div className="sidebar">
            <ResumeMaker name="Resume.com"/>
            <Gradient name="Gradient" data={data} setData={setData}/>
            <PersonalData name="Personal Data" data={data} setData={setData}/>
            <WorkExperience name="Work Experience" data={data} setData={setData}/>
            <Education name="Education" data={data} setData={setData}/>
            <Skills name="Skills" data={data} setData={setData}/>
            <Contacts name="Contacts" data={data} setData={setData}/>
        </div>
        <div className="resume">
          <Resume data={data} setData={setData}/>
        </div>
    </div>
  )
}

export default App
