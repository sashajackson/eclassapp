import React, {Component} from 'react'

class Hero extends Component {

    render(){
        return (
            <div className="row">
                <div style={{background:"#99c1e6"}} className="col-8 p-0">
                    <div style={{background:"transparent"}} className="row">
                        <div style={{background:"transparent"}} className="col-12">
                        <div style={{border:"none", background:"transparent"}} className="card">
                        <div style={{padding:"30px", textAlign:"center", paddingTop:"4em"}} className="card-body">
                            <h1>The more you learn, the more you do.</h1>
                            <input style={{width:"450px", marginTop:"2em", position:"relative", left:"180px"}} type="text" className="form-control" placeholder="enhance your business skills"></input>
                            </div>
                        </div>
                        </div>
                        <div style={{background:"#99c1e6"}} className="col-12">
                            
                        </div>
                    </div>
                </div>
                <div style={{background:"#99c1e6"}} className="col-4">
                    <img className="w-100" src='https://i.ibb.co/JppP6sf/Copy-of-Untitled.png'/>
                </div>
            </div>
        )
    }
}
const img = {
    height: '400px',
}

export default Hero