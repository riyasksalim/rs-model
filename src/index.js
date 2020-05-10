import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import './index.css';



class RSModel extends React.Component {
 
  openModel(){
    document.getElementById("modal").classList.add("modalclicked");
    document.getElementById("modelContent").classList.add("modelClickedContent");
  }
  closeModel() {
    document.getElementById("modal").classList.remove("modalclicked");
    document.getElementById("modelContent").classList.remove("modelClickedContent");
  }
  componentDidUpdate(prevProps) {
    debugger
    if (this.props.show) {
      this.openModel();
    }
    else{
      this.closeModel();
    }
  }
  render() {
    let t="click to close"
    let nochildren=(<span title={t} onClick={()=>{
      this.closeModel()
    }}>{t}</span>)
    return (
      <Fragment>
        <div class="rsmodal" id="modal">
          <div className={"modal-content"} style={this.props.contentStyle} id="modelContent">
            {this.props.children ? this.props.children : nochildren}
          </div>
        </div>
      </Fragment>
    );
  }

}

RSModel.propTypes = {
  show: PropTypes.bool,
  contentStyle:PropTypes.object
};
export default RSModel;
