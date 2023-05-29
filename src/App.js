import React from "react";
import Card from "./component/Card";
function App() {

  let data = [
    {
      plan:"FREE",
      price:"0",
      user:"Single User",
      userEnabler:true,
      storage:"5GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:false,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:false,
      subDomain:"Free Subdomain",
      subDomainEnabler:false,
      statusReport:"Monthly Status Report",
      statusReportEnabler:false
    },
    {
      plan:"PLUS",
      price:"9",
      user:"5 Users",
      userEnabler:true,
      storage:"50GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subDomain:"Free Subdomain",
      subDomainEnabler:true,
      statusReport:"Monthly Status Report",
      statusReportEnabler:false
    },
    {
      plan:"PRO",
      price:"49",
      user:"Unlimited Users",
      userEnabler:true,
      storage:"150GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subDomain:"Free Subdomains",
      subDomainEnabler:true,
      statusReport:"Monthly Status Report",
      statusReportEnabler:true
    }
  ]

  return <>
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{
          return <Card details={e} key={i}/>
        })
      }
    </div>
  </div>
</section>
  </>
}

export default App;


{/* 
  let data = [{
    name:"React.js",
    duration:"10 days",
    type:"Library"
  },
  {
    name:"Node.js",
    duration:"2 days",
    type:"Server Side Script"
  },
  {
    name:"Express.js",
    duration:"4 days",
    type:"Framework"
  },
  {
    name:"MongoDB",
    duration:"1 day",
    type:"Database"
  }
]
<>
    <h1>Welcome to Guvi</h1>
    <h3>We are going to Learn</h3>
    <table>
      <thead>
        <tr>
          {
            Object.keys(data[0]).map((e,i)=><th key={i}>{e}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row,i)=>{
            return <tr key={i}>
                    {
                       Object.keys(row).map((e,i)=>{
                        return <td key={i}>{row[e]}</td> //==> row["name"], row["duration"], row["type"]
                       })
                    }
                  </tr>
          })
        }
      </tbody>
    </table>
  </> */}