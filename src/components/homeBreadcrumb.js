import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Breadcrumb extends Component {
    render(){
        return (
            <div className="container-fluid">
            <div className="row pt-4 pb-3">
                <div className="col-12">
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to='/' style={{color:"#4c4c4c", textDecoration:"none"}}>Most Popular</Link></li>
                            <li class="breadcrumb-item"><Link to='/rising-stars' style={{color:"#4c4c4c", textDecoration:"none"}}>Rising Stars</Link></li>
                            <li class="breadcrumb-item"><Link to='/deals' style={{color:"#4c4c4c", textDecoration:"none"}}>Deals</Link></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        )
    }
}


export default Breadcrumb