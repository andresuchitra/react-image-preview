import React, { Component } from 'react'

export default class ImageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: 'Choose File'
        }
    }

    onChangeFile = (e) => {
        if(e.target.files[0] !== null) {
            if(e.target.files[0].size > 1000000) {
                alert('File is too big! Please select 1MB file at the most')
                return
            }
            else {
                this.setState({
                    file: e.target.files[0].name
                })
                //emit to parent to set the preview div
                this.props.onChangeImage(e)
            }
        }
        else this.resetStateFile()
    }

    resetStateFile = () => {
        this.setState({
            file: 'Choose File'
        })
    }

    resetImage = () => {
        this.resetStateFile()
        this.props.onResetImage()
    }

    render() {
        return (
            <div className="d-flex flex-column">
                <div className="d-flex w-100">
                    <div className="mr-2">
                        <div className="input-group mb-3">
                            <div className="custom-file">
                                <input type="file" onChange={(e) => this.onChangeFile(e)} className="custom-file-input"></input>
                                <label className="custom-file-label">{this.state.file}</label>
                            </div>
                        </div>
                    </div>
                    <div className="mr-2">
                        <button className="btn btn-primary" onClick={this.props.onSaveImage}>Save</button>
                    </div>
                    <div className="mr-2">
                        <button className="btn btn-danger" onClick={this.resetImage}>Reset</button>
                    </div>
                    <div className="d-flex ml-2 mr-2">
                        <input className="form-control" onChange={(e) => this.props.onChangeWidth(e.target.value)} type="text" placeholder="Enter Width..." ></input>
                    </div>
                    <div className="d-flex">
                        <input className="form-control" onChange={(e) => this.props.onChangeHeight(e.target.value)}  type="text" placeholder="Enter Height..." ></input>
                    </div>
                </div>
            </div>
        )
    }
}
