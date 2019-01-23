import React, { Component } from 'react'
import cat from './backpackCatWeb-234x234.jpg'
import "./Owner.css"


export default class OwnerDetail extends Component {
  render() {
      /*
          Using the route parameter, find the animal that the
          user clicked on by looking at the `this.props.animals`
          collection that was passed down from ApplicationViews
      */
      const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}

      return (
          <section className="owner">
              <div key={owner.id} className="card">
                  <div className="card-body">
                      <h4 className="card-title">
                          <img src={cat} className="icon--cat" alt="dumb" />
                          {owner.name}

                      </h4>
                      <h6 className="card-title">{owner.profession}</h6>
                      <a href="#"
                          onClick={() => this.props.deleteOwner(owner.id)
                                          .then(() => this.props.history.push("/owners"))}
                          className="card-link">Delete</a>
                  </div>
              </div>
          </section>
      )
  }
}