import React, { Component } from 'react'
import Services from '../services/coaster.services'



class CoasterForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            length: '',
            inversions: '',
            imageUrl: ''
        }
        this.service = new Services()
    }


    handleChangeInput = e => this.setState({ [e.target.name]: e.target.value })

    handleFormSubmit = e => {
        e.preventDefault()
        this.service.postCoaster(this.state)
            .then(x => window.location.assign('/coasters'))
            .catch(err => console.log('error', err))
    }

    render() {
        return (
            <div className="container">

                <h1>Nueva montaña rusa</h1>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="input-nombre">Nombre</label>
                                <input name="title" type="text" className="form-control" id="input-nombre" onChange={this.handleChangeInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-descripcion">Descripción</label>
                                <input name="description" type="text" className="form-control" id="input-descripcion" onChange={this.handleChangeInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-length">Longitud</label>
                                <input name="length" type="number" className="form-control" id="input-length" onChange={this.handleChangeInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-inv">Inversiones</label>
                                <input name="inversions" type="number" className="form-control" id="input-inv" onChange={this.handleChangeInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-img">URL imagen</label>
                                <input name="imageUrl" type="text" className="form-control" id="input-img" onChange={this.handleChangeInput} />
                            </div>
                            <button type="submit" className="btn btn-primary">Crear montaña rusa</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default CoasterForm