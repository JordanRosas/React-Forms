import React, { Component } from "react"
import "./Owner.css"

export default class AnimalForm extends Component {
    // Set initial state
    state = {
        ownerName: "",
        profession: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewOwner = evt => {
        evt.preventDefault()

            const owner = {
                name: this.state.ownerName,
                profession: this.state.profession
            }

            // Create the animal and redirect user to animal list
            this.props.addOwner(owner).then(() => this.props.history.push("/owners"))
        }
    

    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">New Owners Name</label>
                        <input type="text" required
                              className="form-control"
                              onChange={this.handleFieldChange}
                              id="ownerName"
                              placeholder="Owners name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="profession">Profession</label>
                        <input type="text" required
                              className="form-control"
                              onChange={this.handleFieldChange}
                              id="breed" placeholder="Profession" />
                    </div>
                    <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}