import React, {Component} from 'react'

class Header extends Component {
    render(){
        return(
            <nav className="navbar navbar-light bg-light d-flex d-row">
                <div className="container-fluid justify-content-end">
                    <i style={{paddingRight:"20px", fontSize:"25px"}} className="fal fa-file-alt"></i>
                    <button className="btn btn-sm btn-outline-success me-2" type="button">Login</button>
                    <button className="btn btn-sm btn-outline-secondary" type="button">
                        Sign Up
                    </button>
                </div>
            </nav>
        )
    }
}

export default Header