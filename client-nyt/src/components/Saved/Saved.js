import React from "react";
import API from "../../utils/API";
import {savedCard} from "../../components/SavedCard";

class Saved extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.findAll()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.remove(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="row search-saved">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"> Saved Articles </h5>
              
              {this.state.articles.length ? (
                <div>
                  {this.state.articles.map(article => {
                    const date = article.date.split("T")
                    return (
                      <savedCard
                        id={article._id}
                        title={article.title}
                        date={date[0]}
                        snippet={article.snippet}
                        url={article.url}
                        onClick={() => this.deleteArticle(article._id)}
                      />
                    );
                  })}
                </div>
              ) : (
                // else display no results
                <h5>No Results</h5>
              )}
            </div>
          </div>
        </div>
      </div> //close saved card container
    );
  }
}

export default Saved;
