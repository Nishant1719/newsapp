import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";

export class NewsComponent extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,

    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=apple&from=2025-05-05&to=2025-05-05&sortBy=popularity&apiKey=3ce28dc519024f2586b3b9d326154dd6&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false
    });
  }

  handleOnNext = async () => {

    let url = `https://newsapi.org/v2/everything?q=apple&from=2025-05-05&to=2025-05-05&sortBy=popularity&apiKey=3ce28dc519024f2586b3b9d326154dd6&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ 
      articles: parsedata.articles,
      page: this.state.page + 1,
      loading: false
     });
  };

  handleOnPrevious = async () => {
    let url = `https://newsapi.org/v2/everything?q=apple&from=2025-05-05&to=2025-05-05&sortBy=popularity&apiKey=3ce28dc519024f2586b3b9d326154dd6&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ 
      articles: parsedata.articles,
      page: this.state.page - 1,
      loading: false
     });
  };

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center">News Headlines</h1>
          {this.state.loading && <Spinner/>}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((ele) => {
                return (
                  <div className="col-md-4 my-2" key={ele.url}>
                    <NewsItem
                      title={ele.title ?? "Sooon.."}
                      description={ele.description ?? "Sooon.."}
                      imageUrl={
                        ele.urlToImage ??
                        "https://cdn.dribbble.com/userupload/25192977/file/original-f2508a9b57f4661f930c05ea046c6d5c.gif"
                      }
                      newsurl={ele.url}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleOnPrevious}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-success"
            onClick={this.handleOnNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
