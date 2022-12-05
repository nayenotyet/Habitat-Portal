import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import HeadNav from "../components/HeadNav/index";
import LeftNav from "../components/LeftNav/index";


const myEventsList = [
    {title: "Onboarding Meeting2",
        allDay: true,
        start: new Date(2022,9,20),
        end: new Date(2022,9,20)
    },
    {
        title: "Fundraising Gala",
        allDay: false,
        start: new Date(2022,9,20),
        end: new Date(2022,9,20)
    },
        {
            title: "Annual Training Session 1",
            // allDay: true,
            start: new Date(2022,9,23,17,30),
            end: new Date(2022,9,23,19)
        },
        {
            title: "Annual Training Session 2",
            // allDay: true,
            start: new Date(2022,10,27,17,30),
            end: new Date(2022,10,27,19)
        },
        {
            title: "Annual Training Session 3",
            // allDay: true,
            start: new Date(2022,11,17,17,30),
            end: new Date(2022,11,17,19)
        },
        {
            title: "Christmas Social Dinner",
            // allDay: true,
            start: new Date(2022,11,21,18,30),
            end: new Date(2022,11,21,21)
        },
        {
            title: "General Board Meeting",
            // allDay: true,
            start: new Date(2022,11,8,9,30),
            end: new Date(2022,11,8,12,30)
        },
        {
            title: "Director One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,11,2,14),
            end: new Date(2022,11,2)
        },
        {
            title: "Committee Meeting",
            // allDay: true,
            start: new Date(2022,11,14,9,30),
            end: new Date(2022,11,14)
        },
        {
            title: "Advisory Council Meeting",
            // allDay: true,
            start: new Date(2022,11,5,10,30),
            end: new Date(2022,11,5)
        },
        {
            title: "Volunteer Team Meeting",
            // allDay: true,
            start: new Date(2022,11,13,15,30),
            end: new Date(2022,11,13)
        },
        {
            title: "HR One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,11,16,12,30),
            end: new Date(2022,11,16)
        },
        {
            title: "Decatur Fundraising Event",
            // allDay: true,
            start: new Date(2022,11,19,14),
            end: new Date(2022,11,19,16)
        },
        {
            title: "Atlanta Fundraising Event",
            // allDay: true,
            start: new Date(2022,11,5,13),
            end: new Date(2022,11,5,15)
        },
        {
            title: "General Board Meeting",
            // allDay: true,
            start: new Date(2022,10,8,9,30),
            end: new Date(2022,10,8,12,30)
        },
        {
            title: "Director One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,10,2,14),
            end: new Date(2022,10,2)
        },
        {
            title: "Committee Meeting",
            // allDay: true,
            start: new Date(2022,10,14,9,30),
            end: new Date(2022,10,14)
        },
        {
            title: "Advisory Council Meeting",
            // allDay: true,
            start: new Date(2022,10,5,10,30),
            end: new Date(2022,10,5)
        },
        {
            title: "Volunteer Team Meeting",
            // allDay: true,
            start: new Date(2022,10,13,15,30),
            end: new Date(2022,10,13)
        },
        {
            title: "HR One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,10,16,12,30),
            end: new Date(2022,10,16)
        },
        {
            title: "Decatur Fundraising Event",
            // allDay: true,
            start: new Date(2022,10,19,14),
            end: new Date(2022,10,19,16)
        },
        {
            title: "DeKalb History Center Museum Fundraising Event",
            // allDay: true,
            start: new Date(2022,10,5,13),
            end: new Date(2022,10,5,15)
        },
        {
            title: "General Board Meeting",
            // allDay: true,
            start: new Date(2022,9,8,9,30),
            end: new Date(2022,9,8,12,30)
        },
        {
            title: "Director One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,9,2,14),
            end: new Date(2022,9,2)
        },
        {
            title: "Committee Meeting",
            // allDay: true,
            start: new Date(2022,9,14,9,30),
            end: new Date(2022,9,14)
        },
        {
            title: "Advisory Council Meeting",
            // allDay: true,
            start: new Date(2022,9,5,9,30),
            end: new Date(2022,9,5)
        },
        {
            title: "Volunteer Team Meeting",
            // allDay: true,
            start: new Date(2022,9,13,15,30),
            end: new Date(2022,9,13)
        },
        {
            title: "HR One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,9,16,12,30),
            end: new Date(2022,9,16)
        },
        {
            title: "High Museum Fundraising Event",
            // allDay: true,
            start: new Date(2022,9,19,14),
            end: new Date(2022,9,19,16)
        },
        {
            title: "Atlanta Fundraising Event",
            // allDay: true,
            start: new Date(2022,9,5,13),
            end: new Date(2022,9,5,15)
        },
        {
            title: "General Board Meeting",
            // allDay: true,
            start: new Date(2022,8,8,9,30),
            end: new Date(2022,8,8,12,30)
        },
        {
            title: "Director One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,8,2,14),
            end: new Date(2022,8,2)
        },
        {
            title: "Committee Meeting",
            // allDay: true,
            start: new Date(2022,8,14,9,30),
            end: new Date(2022,8,14)
        },
        {
            title: "Advisory Council Meeting",
            // allDay: true,
            start: new Date(2022,8,5,9,30),
            end: new Date(2022,8,5)
        },
        {
            title: "Volunteer Team Meeting",
            // allDay: true,
            start: new Date(2022,8,13,15,30),
            end: new Date(2022,8,13)
        },
        {
            title: "HR One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,8,16,12,30),
            end: new Date(2022,8,16)
        },
        {
            title: "Decatur Fundraising Event",
            // allDay: true,
            start: new Date(2022,8,19,14),
            end: new Date(2022,8,19,16)
        },
        {
            title: "Atlanta Fundraising Event",
            // allDay: true,
            start: new Date(2022,8,5,13),
            end: new Date(2022,8,5,15)
        },
        {
            title: "General Board Meeting",
            // allDay: true,
            start: new Date(2022,7,8,9,30),
            end: new Date(2022,7,8,12,30)
        },
        {
            title: "Director One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,7,2,14),
            end: new Date(2022,7,2)
        },
        {
            title: "Committee Meeting",
            // allDay: true,
            start: new Date(2022,7,14,9,30),
            end: new Date(2022,7,14)
        },
        {
            title: "Advisory Council Meeting",
            // allDay: true,
            start: new Date(2022,7,5,9,30),
            end: new Date(2022,7,5)
        },
        {
            title: "Volunteer Team Meeting",
            // allDay: true,
            start: new Date(2022,7,13,15,30),
            end: new Date(2022,7,13)
        },
        {
            title: "HR One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,7,16,12,30),
            end: new Date(2022,7,16)
        },
        {
            title: "Decatur Fundraising Event",
            // allDay: true,
            start: new Date(2022,7,19,14),
            end: new Date(2022,7,19,16)
        },
        {
            title: "Atlanta Fundraising Event",
            // allDay: true,
            start: new Date(2022,7,5,13),
            end: new Date(2022,7,5,15)
        },
        {
            title: "General Board Meeting",
            // allDay: true,
            start: new Date(2022,6,8,9,30),
            end: new Date(2022,6,8,12,30)
        },
        {
            title: "Director One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,6,2,14),
            end: new Date(2022,6,2)
        },
        {
            title: "Committee Meeting",
            // allDay: true,
            start: new Date(2022,6,14,9,30),
            end: new Date(2022,6,14)
        },
        {
            title: "Advisory Council Meeting",
            // allDay: true,
            start: new Date(2022,6,5,9,30),
            end: new Date(2022,6,5)
        },
        {
            title: "Volunteer Team Meeting",
            // allDay: true,
            start: new Date(2022,6,13,15,30),
            end: new Date(2022,6,13)
        },
        {
            title: "HR One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,6,16,12,30),
            end: new Date(2022,6,16)
        },
        {
            title: "Decatur Fundraising Event",
            // allDay: true,
            start: new Date(2022,6,19,14),
            end: new Date(2022,6,19,16)
        },
        {
            title: "Atlanta Fundraising Event",
            // allDay: true,
            start: new Date(2022,6,5,13),
            end: new Date(2022,6,5,15)
        },
        {
            title: "General Board Meeting",
            // allDay: true,
            start: new Date(2022,5,8,9,30),
            end: new Date(2022,5,8,12,30)
        },
        {
            title: "Director One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,5,2,14),
            end: new Date(2022,5,2)
        },
        {
            title: "Committee Meeting",
            // allDay: true,
            start: new Date(2022,5,14,9,30),
            end: new Date(2022,5,14)
        },
        {
            title: "Advisory Council Meeting",
            // allDay: true,
            start: new Date(2022,5,5,9,30),
            end: new Date(2022,5,5)
        },
        {
            title: "Volunteer Team Meeting",
            // allDay: true,
            start: new Date(2022,5,13,15,30),
            end: new Date(2022,5,13)
        },
        {
            title: "HR One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,5,16,12,30),
            end: new Date(2022,5,16)
        },
        {
            title: "Decatur Fundraising Event",
            // allDay: true,
            start: new Date(2022,5,19,14),
            end: new Date(2022,5,19,16)
        },
        {
            title: "Atlanta Fundraising Event",
            // allDay: true,
            start: new Date(2022,5,5,13),
            end: new Date(2022,5,5,15)
        },
        {
            title: "General Board Meeting",
            // allDay: true,
            start: new Date(2022,4,8,9,30),
            end: new Date(2022,4,8,12,30)
        },
        {
            title: "Director One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,4,2,14),
            end: new Date(2022,4,2)
        },
        {
            title: "Committee Meeting",
            // allDay: true,
            start: new Date(2022,4,14,9,30),
            end: new Date(2022,4,14)
        },
        {
            title: "Advisory Council Meeting",
            // allDay: true,
            start: new Date(2022,4,5,9,30),
            end: new Date(2022,4,5)
        },
        {
            title: "Volunteer Team Meeting",
            // allDay: true,
            start: new Date(2022,4,13,15,30),
            end: new Date(2022,4,13)
        },
        {
            title: "HR One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,4,16,12,30),
            end: new Date(2022,4,16)
        },
        {
            title: "Decatur Fundraising Event",
            // allDay: true,
            start: new Date(2022,4,19,14),
            end: new Date(2022,4,19,16)
        },
        {
            title: "Atlanta Fundraising Event",
            // allDay: true,
            start: new Date(2022,4,5,13),
            end: new Date(2022,4,5,15)
        },
        {
            title: "General Board Meeting",
            // allDay: true,
            start: new Date(2022,3,8,9,30),
            end: new Date(2022,3,8,12,30)
        },
        {
            title: "Director One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,3,2,14),
            end: new Date(2022,3,2)
        },
        {
            title: "Committee Meeting",
            // allDay: true,
            start: new Date(2022,3,14,9,30),
            end: new Date(2022,3,14)
        },
        {
            title: "Advisory Council Meeting",
            // allDay: true,
            start: new Date(2022,3,5,9,30),
            end: new Date(2022,3,5)
        },
        {
            title: "Volunteer Team Meeting",
            // allDay: true,
            start: new Date(2022,3,13,15,30),
            end: new Date(2022,3,13)
        },
        {
            title: "HR One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,3,16,12,30),
            end: new Date(2022,3,16)
        },
        {
            title: "Decatur Fundraising Event",
            // allDay: true,
            start: new Date(2022,3,19,14),
            end: new Date(2022,3,19,16)
        },
        {
            title: "Atlanta Fundraising Event",
            // allDay: true,
            start: new Date(2022,3,5,13),
            end: new Date(2022,3,5,15)
        },
        {
            title: "General Board Meeting",
            // allDay: true,
            start: new Date(2022,2,8,9,30),
            end: new Date(2022,2,8,12,30)
        },
        {
            title: "Director One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,2,2,14),
            end: new Date(2022,2,2)
        },
        {
            title: "Committee Meeting",
            // allDay: true,
            start: new Date(2022,2,14,9,30),
            end: new Date(2022,2,14)
        },
        {
            title: "Advisory Council Meeting",
            // allDay: true,
            start: new Date(2022,2,5,9,30),
            end: new Date(2022,2,5)
        },
        {
            title: "Volunteer Team Meeting",
            // allDay: true,
            start: new Date(2022,2,13,15,30),
            end: new Date(2022,2,13)
        },
        {
            title: "HR One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,2,16,12,30),
            end: new Date(2022,2,16)
        },
        {
            title: "Decatur Fundraising Event",
            // allDay: true,
            start: new Date(2022,2,19,14),
            end: new Date(2022,2,19,16)
        },
        {
            title: "Atlanta Fundraising Event",
            // allDay: true,
            start: new Date(2022,2,5,13),
            end: new Date(2022,2,5,15)
        },
        {
            title: "General Board Meeting",
            // allDay: true,
            start: new Date(2022,1,8,9,30),
            end: new Date(2022,1,8,12,30)
        },
        {
            title: "Director One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,1,2,14),
            end: new Date(2022,1,2)
        },
        {
            title: "Committee Meeting",
            // allDay: true,
            start: new Date(2022,1,14,9,30),
            end: new Date(2022,1,14)
        },
        {
            title: "Advisory Council Meeting",
            // allDay: true,
            start: new Date(2022,1,5,9,30),
            end: new Date(2022,1,5)
        },
        {
            title: "Volunteer Team Meeting",
            // allDay: true,
            start: new Date(2022,1,13,15,30),
            end: new Date(2022,1,13)
        },
        {
            title: "HR One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,1,16,12,30),
            end: new Date(2022,1,16)
        },
        {
            title: "Decatur Fundraising Event",
            // allDay: true,
            start: new Date(2022,1,19,14),
            end: new Date(2022,1,19,16)
        },
        {
            title: "Atlanta Fundraising Event",
            // allDay: true,
            start: new Date(2022,1,5,13),
            end: new Date(2022,1,5,15)
        },
        {
            title: "General Board Meeting",
            // allDay: true,
            start: new Date(2022,0,8,9,30),
            end: new Date(2022,0,8,12,30)
        },
        {
            title: "Director One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,0,2,14),
            end: new Date(2022,0,2)
        },
        {
            title: "Committee Meeting",
            // allDay: true,
            start: new Date(2022,0,26,9,30),
            end: new Date(2022,0,26)
        },
        {
            title: "Advisory Council Meeting",
            // allDay: true,
            start: new Date(2022,0,5,9,30),
            end: new Date(2022,0,5)
        },
        {
            title: "Volunteer Team Meeting",
            // allDay: true,
            start: new Date(2022,0,13,15,30),
            end: new Date(2022,0,13)
        },
        {
            title: "HR One-On-One Meeting",
            // allDay: true,
            start: new Date(2022,0,16,12,30),
            end: new Date(2022,0,16)
        },
        {
            title: "Decatur Fundraising Event",
            // allDay: true,
            start: new Date(2022,0,19,14),
            end: new Date(2022,0,19,16)
        },
        {
            title: "Atlanta Fundraising Event",
            // allDay: true,
            start: new Date(2022,0,5,13),
            end: new Date(2022,0,5,15)
        },
        {
            title: "General Board Meeting",
            // allDay: true,
            start: new Date(2023,0,9,9,30),
            end: new Date(2023,0,9,12,30)
        },
        {
            title: "Director One-On-One Meeting",
            // allDay: true,
            start: new Date(2023,0,2,14),
            end: new Date(2023,0,2)
        },
        {
            title: "Committee Meeting",
            // allDay: true,
            start: new Date(2023,0,26,9,30),
            end: new Date(2023,0,26)
        },
        {
            title: "Advisory Council Meeting",
            // allDay: true,
            start: new Date(2023,0,5,9,30),
            end: new Date(2023,0,5)
        },
        {
            title: "Volunteer Team Meeting",
            // allDay: true,
            start: new Date(2023,0,13,15,30),
            end: new Date(2023,0,13)
        },
        {
            title: "HR One-On-One Meeting",
            // allDay: true,
            start: new Date(2023,0,16,12,30),
            end: new Date(2023,0,16)
        },
        {
            title: "Fernbank Fundraising Event",
            // allDay: true,
            start: new Date(2023,0,19,14),
            end: new Date(2023,0,19,16)
        },
        {
            title: "CDC Fundraising Event",
            // allDay: true,
            start: new Date(2023,0,5,13),
            end: new Date(2023,0,5,15)
        }
]

const localizer = momentLocalizer(moment)

export default function Event(){
return (
    <div className="myCustomHeight">
        {HeadNav()}
        <div className="d-flex justify-content-between container h-100">

        {LeftNav()}
        <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style = {{height:600, width:1000, marginTop: "50px"}}
        />
        </div>
    </div>
)
}
