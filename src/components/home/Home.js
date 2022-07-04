import React from "react"
import console from "console"
import "./HomeStyle.css"
import { Link } from "react-router-dom"
import bg from "../../images/bg1.jpg"
import logo from "../../images/logo-resort.png"
import { ConnectButton, Icon, Select, DatePicker, Input, Button } from "web3uikit"
import { useState, useEffect } from "react"

// 17.39 on june 1 at 12.24 am
// 17.40 HR June 30 at 8.22 PM- 1 month in Patrcick Collins 32 hrs

const Home = () => {
    const [checkIn, setCheckIn] = useState(new Date())
    const [checkOut, setCheckOut] = useState(new Date())
    const [destination, setDestination] = useState("New York")
    const [guests, setGuests] = useState(2)

    return (
        <>
            <div className="container">
                <img className="bg-image" src={bg} alt="no image"></img>
                <div className="containerGradient"></div>
            </div>
            <div className="topBanner">
                <div>
                    <img className="logo" src={logo} alt="" srcSet="" />
                </div>
                <div className="tabs">
                    <div className="selected">Places to Stay</div>
                    <div>Experiences</div>
                    <div>Online Experiences</div>
                </div>
                <div className="lrContainers">
                    <ConnectButton></ConnectButton>
                </div>
            </div>

            <div className="tabContent">
                <div className="searchFields">
                    <div className="inputs">
                        Location
                        <Select
                            defaultOptionIndex={0}
                            onChange={(data) => console.log(data.label)}
                            options={[
                                {
                                    id: "ny",
                                    label: "New York",
                                },

                                {
                                    id: "lon",
                                    label: "London",
                                },

                                {
                                    id: "db",
                                    label: "Dubai",
                                },
                                {
                                    id: "ty",
                                    label: "Tokyo",
                                },
                            ]}
                        />
                    </div>
                    <div className="vl" />
                    <div className="inputs">
                        Check In
                        <DatePicker id="CheckIn" onChange={(event) => console.log(event.data)} />
                    </div>
                    <div className="vl" />
                    <div className="inputs">
                        Check Out
                        <DatePicker id="CheckOut" onChange={(event) => console.log(event.data)} />
                    </div>
                    <div className="vl" />
                    <div className="inputs">
                        Guests
                        <Input
                            label="Label text"
                            name="AddGuests"
                            type="number"
                            // onBlur={function noRefCheck() { }}
                            onChange={(event) => console.log(Number(event.target))}
                            value={2}
                        />
                    </div>
                    <Link
                        to={"/rentals"}
                        state={{
                            destination: destination,
                            checkIn: checkIn,
                            checkOut: checkOut,
                            guests: guests,
                        }}
                    >
                        <div className="searchButton">
                            <Icon fill="#ffffff" size={24} svg="search" />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="randomLocation">
                <div className="title">Feel Adventurous</div>
                <div className="text">
                    How about deciding on new places to stay, live, work or just relax!
                </div>
                <Button text="Explore a Location" onClick={() => console.log(checkOut)} />
            </div>
        </>
    )
}

export default Home
