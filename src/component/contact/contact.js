import React, { Component } from 'react'
import {connect} from 'react-redux';

class contact extends Component {
  render() {
   
     
    

   
    return (
      <div className="container" style={{marginBottom:'20px'}}>
        <div className="text-center" style={{overflow:'hidden'}}><img src={this.props.data.urlToImage}  className="img-responsive" alt=""/></div>
        <h1 className="text-center">{this.props.data.title}</h1>
        <div className="text-center">Author Name:{this.props.data.author}<br/>publish Date:{this.props.data.publishedAt}</div>
        <div>{this.props.data.description}</div>

      </div>
    )
  }
}

const mapStateToProps=(state,ownProps )=>{
    let id=ownProps.match.params.id
  return{
    data:state.About.headlineData.articles.find(data=>data.source.id===id)
  }
}


export default connect(mapStateToProps)(contact);
