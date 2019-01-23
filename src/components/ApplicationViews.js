import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owners/OwnerList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from '../modules/EmployeeManager';
import LocationManager from '../modules/LocationManager';
import OwnerManager from '../modules/OwnerManager';
import AnimalDetail from './animals/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetails'
import OwnerDetail from './owners/OwnerDetails'


export default class ApplicationViews extends Component {
    state = {
        animals: [],
        employees: [],
        locations:[],
        owners:[]
    }

    //After components have mounted the rest of the requests will be carried out in this module 
    componentDidMount() {
        
        AnimalManager.getAll().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })
        EmployeeManager.getAll().then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })
        LocationManager.getAll().then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })
        OwnerManager.getAll().then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })
    }
    //Delete methods for the different components in the DOM. 
    deleteAnimal = (id) => {
        return AnimalManager.removeAnimal(id)
        .then(animals => this.setState({
            animals: animals
        }))
    }   

    deleteEmployee = id => {
        return EmployeeManager.removeOwner(id)
        .then(employees => this.setState({
            employees: employees
        }))
    }

    deleteOwner = id => {
        return OwnerManager.removeOwner(id)
        .then(owners => this.setState({
            owners: owners
        }))
    }
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />

            </React.Fragment>
        )
    }
}