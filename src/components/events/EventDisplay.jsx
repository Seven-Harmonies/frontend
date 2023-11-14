import React from "react";
import './EventDisplay.css';
import './AllEvents';

const EventDisplay=(props)=>{
    const {events}=props;
    return(
        <div className="event-display">
            <div className="eventdisplay-left">
                <div className="productdisplay-img-list">
                <img src={events.image} alt="" />
                <img src={events.image} alt="" />
                <img src={events.image} alt="" />
            </div>
            <div className="eventdisplay-img">
                <img className="eventdisplay-main-img" src={events.image} alt=''/>
            </div>
            </div>
            <div className="eventdisplay-right">
                <h1>{events.name} </h1>
                div.productdisplay-right
            </div>
        </div>
        
    )
}

export default EventDisplay;