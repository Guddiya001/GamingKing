import React, { Component } from "react";
import { connect } from "react-redux";
import {
    getProduct
  
  } from "./redux/actions";
class ScrollComponent extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false,
      page: 0,
      prevY: 0
    };
  }
  
  

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const lastPhoto = this.state.photos[this.state.photos.length - 1];
      const curPage = lastPhoto.albumId;
//      this.getPhotos(curPage);
      this.setState({ page: curPage });
    }
    this.setState({ prevY: y });
  }

  componentDidMount() {
    this.props.getProduct(this.state.page, this.props);



    //this.getPhotos(this.state.page);

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };
    
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }
  
  componentDidUpdate(preProps) {
         const { page } = this.state;
                      
        if(preProps.product.products !== this.props.product.products){
            this.setState({ loading: true });
            const {products} = this.props.product;
            this.props.getProduct({ page }, this.props);
            this.setState({ photos: [...this.state.photos, ...this.props.product.products] });
            this.setState({ loading: false });
          }
        
      }
  
render() {

    // Additional css
    const loadingCSS = {
      height: "100px",
      margin: "30px"
    };

    // To change the loading icon behavior
    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

    return (
      <div className="container">
        <div style={{ minHeight: "800px" }}>
          {this.state.photos.map(user => (
            <img src={user.url} height="100px" width="200px" />
          ))}
        </div>
        <div
          ref={loadingRef => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </div>
    );
  }
}



const mapStateToProps = ({productApp }) => {  

   
      return {
       product: productApp
    
    };
  };
  export default connect(mapStateToProps, {
  
    getProduct
 
  })(ScrollComponent);
  