import "./DailyOverview.scss"
import Group from '../../assets/images/group.svg'
import Time from '../../assets/images/time.svg'
import Rate from '../../assets/images/rate.svg'
import Duration from '../../assets/images/duration.svg'


const DailyOverview = () => {


    interface CardType  {
        icon: string,
        title: string,
        count: string,
        percent: string,
        bg_color: string
    }

    const CardData = [
        {
            icon: Group,
            title: "Users",
            count: "72.6k",
            percent: "+25%",
            bg_color: "#ebf2ff"
        },
        {
            icon: Time,
            title: "Sessions",
            count: "87.2k",
            percent: "+47%",
            bg_color: "#fef0ed"

        },
        {
            icon: Rate,
            title: "Bounce Rate",
            count: "26.3k",
            percent: "-28%",
            bg_color: "#edeaff"

        },
        {
            icon: Duration,
            title: "Session Duration",
            count: "2m 18s",
            percent: "+13%",
            bg_color: "#eafbf6"

        },
    ]

  return (
    <div className="daily-overview">
        <div className="action__card-wrapper">
            {
                CardData.map((card: CardType, index) =>
                <div className="action-card" key={index}>
                    <div style={{backgroundColor: card.bg_color}} className="image">
                        <img src={card.icon} />
                    </div>
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-count">{card.count}</p>
                        <strong className="card-percent">{card.percent}</strong>
                </div>
                )
            }
        </div>
    </div>
  )
}

export default DailyOverview
