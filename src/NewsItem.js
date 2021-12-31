import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{source}</span>
          <img src={!imageUrl? "https://c.ndtvimg.com/2020-10/dsvc5dng_delhi-coronavirus-pti_625x300_30_October_20.jpg": imageUrl}
            className="card-img-top"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="card-footer">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </div>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark my-2"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
