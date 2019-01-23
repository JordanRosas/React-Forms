import React, { Component } from 'react'
import cat from './backpackCatWeb-234x234.jpg'
import "./Owner.css"
import { Link } from "react-router-dom"

export default class OwnerList extends Component {
render () {
    return (
        <section className="owners">
        {
            this.props.owners.map(owner =>
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={cat} className="icon--owner" alt="stupid" />
                            {owner.name}
                            <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                            <a
                                href="#"
                                onClick={() => this.props.deleteOwner(owner.id)}
                                className="card-link">Delete</a>
                        </h5>
                    </div>
                </div>
            )
        }
        </section>
    )
}
}