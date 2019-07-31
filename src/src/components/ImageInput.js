import React, { Component } from 'react'

export default class ImageInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: '',
            savedImage: '',
            height: 100,
            width: 800,
        }
    }
    
    onCrop = (el) => {
        
    }

    onFileSelect = (imgFile) => {
        this.setState({
            image: imgFile
        })

        this.setState({
            savedImage: this.saveImage(imgFile)
        })
    }

    render() {
        return (
            <div className="d-flex flex-column">
                <div className="d-flex w-100">
                    <div className="mr-2">
                        <div className="input-group mb-3">
                            <div className="custom-file">
                                <input type="file" onChange={(e) => this.props.onChangeImage(e)} className="custom-file-input"></input>
                                <label className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mr-2">
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
