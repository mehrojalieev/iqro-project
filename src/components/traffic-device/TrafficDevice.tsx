import { Progress } from "antd"
import "./TrafficDevice.scss"

const TrafficDevice = () => {
  return (
    <div className="traffic-device">
        <div className="traffic__device-wrapper">
                <h3 className="card-subtitle">Sesssion By Device</h3>
                <div className="traffic__item-header">
                    <p>Channel</p>
                    <p className="traffic-text">Traffic (%)</p>
                    <p>Value</p>
                </div>
                <div className="card-item">
                    <p>Direct</p>
                    <Progress size='small' className="progress" percent={55}/>
                    <p>23.28%</p>
                </div>
                <div className="card-item">
                    <p>Direct</p>
                    <Progress status="exception" size='small' className="progress" percent={70}/>
                    <p>23.28%</p>
                </div>
                <div className="card-item">
                    <p>Direct</p>
                    <Progress size='small' className="progress" percent={38}/>
                    <p>23.28%</p>
                </div>
        </div>

        <div className="region-card">
            <div className="card-info">
                <h5>Sessions By Device</h5>
                <p>Top Region & session</p>
            </div>
            <button className="view-btn">View</button>
        </div>
    </div>
  )
}

export default TrafficDevice
