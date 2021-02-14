import React, {Component} from 'react' 

class SignUp extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div style={form} className="row">
                    <div className="col-8">
                        <div class="form-floating mb-3">
                            <input type="name" class="form-control" id="floatingInput" placeholder="John"/>
                            <label for="floatingInput">First Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="Doe"/>
                            <label for="floatingInput">Last Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="d-grid gap-2" style={{marginTop:"1em"}}>
                            <button class="btn btn-primary" type="button">Sign In</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src="https://i.ibb.co/2vG1kyd/Copy-of-Untitled-1.png" class="img-fluid"/>
                    </div>
                </div>
            </div>
        )
    }
}

const form = {
    padding:"80px",
}

export default SignUp