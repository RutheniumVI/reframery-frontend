import React from "react";

class CartCard extends React.Component {
    render (){
        return (
            <div className="box">
                <article className="media">

                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src="" alt="the cake product"/>
                        </figure>
                    </div>

                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>Birthday Cake</strong> <small>@seller</small> 
                                <div class="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                                <div class="dropdown-content">
                                <div class="dropdown-item">
                                    <p>Discount Available:</p>
                                    <p>
                                        <strong>Buy 2 get 1 for free</strong> to save your money.
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                            <br/>
                            This is a best birthday cake. It is perfect for celebrating important days for your loved ones.
                            </p>
                        </div>    
                    </div>

                    <div className="media-right">

                        
                        <div className="dropdown is-hoverable">
                            <div className="dropdown-trigger">
                                <p>Number of Items:</p>
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>1</span>
                                    <span className="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>

                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <a href="#" className="dropdown-item">
                                        1
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        2
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        3
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        4
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        5
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        6
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        7
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        8
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        9
                                    </a>
                                </div>
                            </div>


                            </div>
                        </div>

                    </div>
                </article>
            </div>
        )
    }
}

export default CartCard;