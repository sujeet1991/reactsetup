import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Fetch_Api} from '../../Store/Action/AboutusAction';
import {Link} from 'react-router-dom';
import './about.css';

class about extends Component {
  componentDidMount(){
    this.props.Fetch_Api();
  }
  render() {
    console.log(this.props.about)
    return (
      
  <div className="row contaner">
  {this.props.about.headlineData.length!==0?
  this.props.about.headlineData.articles.map((curr,index)=>{
    return (
      <div className="col-sm-6 col-md-4" key={index} style={{marginBottom:'15px',overflow:'hidden'}}>
    <div className="thumbnail">
      <img src={curr.urlToImage} alt="..." style={{height:'200px'}}/>
      <div className="caption">
        <h3>{curr.title}</h3>
        <p>...</p>
       <Link to={`/Contact/${curr.source.id}`} className="btn btn-primary">Read more</Link>
       
      </div>
    </div>
  </div>
    )
  })
  
  :<div>Loading..</div>}
</div>
    
    )
  }
}

function mapStateToProps(state){
  return{
    about:state.About
  }

}
export default connect(mapStateToProps,{Fetch_Api})(about)
