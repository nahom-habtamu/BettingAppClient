import React, { Component } from 'react';
import { FaDollarSign, FaThumbsDown, FaArchive, FaQuestion ,FaWallet  } from 'react-icons/fa'
export default class Status extends Component {
    renderIcon = (iconName) => {
        if(iconName === "dollar-sign"){
            return <FaDollarSign size="1.2em"/>
        }
        else if(iconName === "thumbs-down"){
            return <FaThumbsDown size="1.2em"/>
        }
        else if(iconName === "active"){
            return <FaArchive size="1.2em"/>
        }
        else if(iconName === "dispute"){
            return <FaQuestion size="1.2em"/>
        }
        else if(iconName === "total"){
            return <FaWallet size="1.2em"/>
        }
    
    }

    render() {
        return (
            <div>
                <div className="status-wrapper">
                    <span className="status-icon">
                        { this.renderIcon(this.props.iconName)}
                    </span>
                    <div className="countAndName">
                        <div className="count">
                            { this.props.count}
                        </div>
                        <div className="status-name">
                            { this.props.statusName}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
