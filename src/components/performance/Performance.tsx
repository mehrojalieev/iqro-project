import "./Performance.scss"
import { Line } from "react-chartjs-2"
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js'

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip)

const Performance = () => {

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: "Users",
            data: [13000, 11000, 15000, 11000, 12500, 9800, 9000, 12700, 9000, 14500, 13000, 13500],
            // backgroundColor: 'none',
            borderColor: '#563bff',
            pointBorderColor: '#563bff',
            fill: true,
            borderWidth: 4,
            tension: 0.5
        }]
    }


    type option = {
        plugins: {
            legend: Boolean
        },
        scales?: {
            y: { min: Number, max: Number }
        }
    }


    const options: option = {
        plugins: {
            legend: true
        },
        scales: {

            y: { min: 100, max: 25000 }
        }
    }

    return (
        <div className="performance">
            <div className="performance-header">
                <h3 className="header-title">Performance</h3>
                <h6 className="header-subtitle">Year</h6>
            </div>
                <div className="performance__chart-container">
                    <Line data={chartData} options={options as option}>

                    </Line>
                </div>
        </div>
    )
}

export default Performance
