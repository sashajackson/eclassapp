import React, {Component} from 'react'

class Header extends Component {
    render(){
        return(
            <div style={headerBackground} className="d-flex bd-highlight mb-3">
                <div className="me-auto p-2 bd-highlight">
                    <button className="btn btn-lg btn-outline-secondary">
                        Teach on eClass
                    </button>
                    <button className="btn btn-lg btn-outline-secondary ms-2">
                        About                       
                    </button>
                </div>

                <div className="p-2 bd-highlight">
                    <input style={input} type="text" className="form-control" placeholder="search anything" aria-label="search" aria-describedby="basic-addon1"/>
                </div>
                <div className="p-2 ps-0 bd-highlight">
                    <button className="btn btn-lg btn-outline-success" type="button">Login</button>
                </div>
                <div className="p-2 ps-0 bd-highlight">
                    <button className="btn btn-lg btn-outline-secondary" type="button">Sign Up</button>
                </div>
            </div>
        )
    }
}
const headerBackground = {
    background:'#f4f4f4',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
}
const input = {
    borderRadius:'30px',
    height:'48px',
    width:'300px',
    marginRight:'3em',
}
const iconStyle = {
    color: '#4c4c4c',
    fontSize: '20px',
}

export default Header