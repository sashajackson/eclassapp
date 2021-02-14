import React, {Component} from 'react'
import './../styles/styles.css'

class Header extends Component {
    render(){
        return(
            <div style={headerBackground} className="d-flex bd-highlight">
                <div className="me-auto p-2 bd-highlight">
                    <button className="btn btn-md instructorBtn btn-primary">
                        Become an Instructor
                    </button>
                    <button className="btn btn-md ms-2 offerBtn btn-secondary">
                        About                       
                    </button>
                </div>

                <div className="p-2 bd-highlight">
                    <input style={input} type="text" className="form-control" placeholder="search anything" aria-label="search" aria-describedby="basic-addon1"/>
                </div>
                <div className="p-2 ps-0 bd-highlight">
                    <button className="btn btn-md btn-primary" type="button">Login</button>
                </div>
                <div className="p-2 ps-0 bd-highlight">
                    <button className="btn btn-md btn-success" type="button">Sign Up</button>
                </div>
            </div>
        )
    }
}
const headerBackground = {
    background:'#2d3945',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    zIndex:'100',
}
const input = {
    borderRadius:'30px',
    marginRight:'3em',
}
const iconStyle = {
    color: '#4c4c4c',
    fontSize: '20px',
}

export default Header