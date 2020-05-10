# rs-model

Usage


        <RSModel 
            show={this.state.show} 
            contentStyle={{
              "position": "fixed",
              "top": "50%",
              "left": "50%",
              "background": "white",
              "borderRadius": "4px",
            }
        }>
          <div className="card" >
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: "90%",marginTop:"17px"}} />
            <div className="container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
              <input type="button" className="button" value="OK" onClick={() => {
                this.setState({
                  show: false
                })
              }}></input>
            </div>
          </div>
        </RSModel>
     
