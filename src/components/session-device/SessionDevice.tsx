import { useEffect, useState } from "react"
import "./SessionDevice.scss"
import { Progress } from "antd"

const SessionDevice = () => {

    const [screenWidth, setScreenWidth] = useState<any>()

    const handleChangeWidth = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleChangeWidth)
        return  () => {
            window.removeEventListener('resize', handleChangeWidth)
        }
    }, [])

  return (
    <div className="session-device">
        <div className="session__device-wrapper">

        <div className="session__device-header">
            <h3>Sessions By Device</h3>
            <p>year</p>
        </div>
        <div className="session-card">
            <div className="session__progress-chart">
                    <Progress strokeWidth={screenWidth < 400 ? 5 : 6} width={ screenWidth < 400 ? 165 : 190} strokeColor={'#563bff'} className="blue-progress" percent={75} type="circle"/>
                    <Progress strokeWidth={screenWidth < 400 ? 5 : 6} width={ screenWidth < 400 ? 120 : 140} strokeColor={'#ff7049'} className="orange-progress" percent={40} type="circle"/>
                    <Progress strokeWidth={screenWidth < 400 ? 8 : 9} width={ screenWidth < 400 ? 75 : 90} strokeColor={'#20c997'} className="green-progress" percent={30} type="circle"/>
            </div>
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
