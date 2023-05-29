import React from 'react'
function Card({details}) {
  return <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{details.plan}</h5>
            <h6 className="card-price text-center">${details.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={details.userEnabler?"":"text-muted"}><span className="fa-li"><i className={details.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.plan==="PLUS" || details.plan==="PRO"?<b>{details.user}</b>:details.user}</li>
              <li className={details.storageEnabler?"":"text-muted"}><span className="fa-li"><i className={details.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.storage}</li>
              <li className={details.publicProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={details.publicProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.publicProjects}</li>
              <li className={details.communityAccessEnabler?"":"text-muted"}><span className="fa-li"><i className={details.communityAccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.communityAccess}</li>
              <li className={details.privateProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={details.privateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.privateProjects}</li>
              <li className={details.phoneSupportEnabler?"":"text-muted"}><span className="fa-li"><i className={details.phoneSupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.phoneSupport}</li>
              <li className={details.subDomainEnabler?"":"text-muted"}><span className="fa-li"><i className={details.subDomainEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.plan==="PRO"?<><b>Unlimited</b> {details.subDomain}</>:details.subDomain}</li>
              <li className={details.statusReportEnabler?"":"text-muted"}><span className="fa-li"><i className={details.statusReportEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.statusReport}</li>
            </ul>
            <div className="d-grid">
              <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  </>
}
export default Card