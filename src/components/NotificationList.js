import React, { Component } from 'react'
import Notification from './Notification'

export default class NotificationList extends Component {
    render() {
        return (
            <div>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
            </div>
        )
    }
}
