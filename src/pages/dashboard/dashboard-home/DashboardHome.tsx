import DailyOverview from "../../../components/daily-overview/DailyOverview"
import Navbar from "../../../components/navbar/Navbar"
import Performance from "../../../components/performance/Performance"
import SessionDevice from "../../../components/session-device/SessionDevice"
import TrafficDevice from "../../../components/traffic-device/TrafficDevice"
import "./DashboardHome.scss"

const DashboardHome = () => {
  return (
    <div>
        <Navbar/>
        <div className="content__main-wrapper">
            <Performance/>
            <SessionDevice/>
            <DailyOverview/>
            <TrafficDevice/>

        </div>
    </div>
  )
}

export default DashboardHome
