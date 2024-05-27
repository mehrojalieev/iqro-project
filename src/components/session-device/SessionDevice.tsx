import "./SessionDevice.scss"
import Session from "../../assets/images/session.svg"

const SessionDevice = () => {
  return (
    <div className="session-device">
        <div className="session__device-wrapper">

        <div className="session__device-header">
            <h3>Sessions By Device</h3>
            <p>year</p>
        </div>
        <div className="session-card">
            <img className="session-image" src={Session} alt="Session Device" />
            <div className="session__card-content">
                    <div className="content-item">
                        <p>Desktop</p>
                        <h6>8,085<sub>13%</sub> </h6>
                    </div>
                    <div className="content-item">
                        <p>Mobile</p>
                        <h6>8,085<sub>30%</sub></h6>
                    </div>
                    <div className="content-item">
                        <p>Tablets</p>
                        <h6>8,085<sub>25%</sub> </h6>
                    </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default SessionDevice
