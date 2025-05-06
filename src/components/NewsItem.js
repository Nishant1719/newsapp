import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsurl } = this.props;
    return (
      <div>
        {/* <div className="col-sm-6 mb-3 mb-sm-0"> */}
          <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsurl} className="btn btn-primary">Full News</a>
            </div>
          </div>
        </div>
      // </div>
    )
  }
}

export default NewsItem
