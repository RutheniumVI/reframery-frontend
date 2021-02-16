import React from 'react'
import { Link } from 'react-router-dom'

export default function WellcomeComponent() {
    return (
        <div className="left">

            <div className="head">
                <Link className="link" to="/">
                    <img
                        className="logo"
                        src="/images/logo.png"
                        alt="logo"
                        width="100"
                    ></img >
                </Link>
                <div className="text">
                    <Link className="link" to="/">
                        <div>Reframery Marketplace</div>
                    </Link>
                </div>

            </div>

            <div className="description">
                <h2>
                    Why Reframery？
                        </h2>
                <div>
                    <ul>
                        <li>You do not need real money to start your business</li>
                        <li>Provide a real-world business experience</li>
                        <li>Resources available for entrepreneuship</li>
                    </ul>
                </div>
            </div>
            <div className="image">
                <img
                    src="/images/signup.png"
                    alt="logo"
                ></img>
            </div>
        </div>
    )
}
