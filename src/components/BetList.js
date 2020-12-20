import React, { Component } from 'react'
import Bet from './Bet'
import CreateBet from './CreateBet'

export default class BetList extends Component {
    render() {
        return (
            <div>
                <div className="container betList">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <CreateBet/>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Bet/>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Bet/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
