import React, { Component } from 'react'
import Services from '../services/coaster.services'

import CoasterCard from './Coaster-card'


class CoasterList extends Component {

    constructor() {
        super()
        this.state = { coasters: [] }
        this.services = new Services()
    }

    componentDidMount() {
        this.services.getCoasters()
            .then(response => this.setState({ coasters: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <div className="container">

                    <h1>Listado de montañas rusas</h1>

                    <div className="row coasters-list">

                        {this.state.coasters.map(coaster => <CoasterCard key={coaster._id} {...coaster} />)}

                    </div>
                </div>
            </>
        )
    }
}


export default CoasterList