import "./Performance.scss"
import { Line } from "react-chartjs-2"
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js'

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip)

const Performance = () => {

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: "Users",
            data: [13000, 10000, 18000, 10000, 13500, 8000, 13000, 8000, 12000, 17000, 10000, 13000],
            borderColor: '#563bff',
            pointBorderColor: '#563bff',
            fill: true,
            borderWidth: 4,
            tension: 0.5
        }],

    }


    interface Option {
        plugins?: {
            legend?: boolean;
        };
        scales?: {
            x?: {
                grid?: {
                    display?: boolean;
                };
            };
            y?: {
                min?: number;
                max?: number;
                ticks?: {
                    display?: boolean;
                };
                grid?: {
                    display?: boolean;
                };
            };
        };
    }


    const options: Option = {
        plugins: {
            legend: true
        },
        
        scales: {
            x: {
                grid: {
                    display: false, 
                },
            },
            y: { min: 100, max: 25000,
                grid: {
                    display: false
                },
                    ticks: {
                        display: false
                    }
            },
        },
    }

    return (
        <div className="performance">
            <div className="performance-header">
                <h3 className="header-title">Performance</h3>
                <h6 className="header-subtitle">Year</h6>
            </div>
            <div className="performance__chart-container">
                {/* <Line  data={chartData} options={options as option}> */}
                <Line
                    redraw={false}
                    updateMode="none"
                    data={chartData}
                    options={options as any}
                >

                </Line>
            </div>
        </div>
    )
}

export default Performance
