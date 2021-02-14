import React, {Component} from 'react' 

class ClassList extends Component {

    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top classImg" alt="..." />
      <div class="card-body">
        <h5 class="card-title">User Interface 101</h5>
        <p class="card-text">This course will help you design beautiful web interfaces.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.pexels.com/photos/999267/pexels-photo-999267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top classImg" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Entrepreneur Basics</h5>
        <p class="card-text">Learn what you need to do to get your business up and running.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Get followers fast!</h5>
        <p class="card-text">Learn how to get followers fast on social media.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.pexels.com/photos/5915198/pexels-photo-5915198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Resume Workshop</h5>
        <p class="card-text">Learn how to create a professional resume.</p>
      </div>
    </div>
  </div>
</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassList