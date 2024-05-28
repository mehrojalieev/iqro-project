import "./Performance.scss"
import { Line } from "react-chartjs-2"
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js'
import { useEffect, useRef, useState } from "react"

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip)

const Performance = () => {
    // HOOKS

    const chartLine: any = useRef(null)
    const [screenWidth, setScreenWidth] = useState<number>()

    console.log(screenWidth);
    

    const GetScreenWidth = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', GetScreenWidth)
        return () => {
            window.removeEventListener('resize', GetScreenWidth)
        }
    }, [])


    useEffect(() => {
        const ctx = chartLine.current?.chartInstance?.ctx;
        if(ctx){
            ctx.shadowColor = '#000';
            ctx.shadowBlur = 10
        }
    }, [])

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: "Users",
            data: [13000, 10000, 18000, 10000, 13500, 8000, 13000, 8000, 12000, 17000, 10000, 13000],
            borderColor: '#563bff',
            pointBorderColor: '#563bff',
            fill: true,
            borderWidth: screenWidth as number < 451 ? 2.4 : 4,
            tension: 0.6
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
    const myPlugin = {
        id: 'customShadow',
        beforeDraw: (chart: any) => {
          const ctx = chart.ctx;
          ctx.save();
          const originalLineDraw = ctx.stroke;
          ctx.stroke = function () {
            ctx.save();
            ctx.shadowColor = '#a498ffe8';
            ctx.shadowBlur = 8;
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 10;
            originalLineDraw.apply(this, arguments);
            ctx.restore();
          };
        }
      };

    return (
        <div className="performance">
            <div className="performance-header">
                <h3 className="header-title">Performance</h3>
                <h6 className="header-subtitle">Year</h6>
            </div>
            <div className="performance__chart-container">
                <Line ref={chartLine}
                    redraw={false}
                    updateMode="none"
                    data={chartData}
                    plugins={[myPlugin]}
                    options={options as any}
                >

                </Line>
            </div>
        </div>
    )
}

export default Performance
