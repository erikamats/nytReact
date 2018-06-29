import React from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { Results } from "../../components/Results";

class Main extends React.Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  // grab the values of the form inputs
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When form is submitted, call api + search inputs from form
  handleSubmitForm = event => {
    event.preventDefault();

    if (this.state.topic && this.state.startYear && this.state.endYear) {
      API.getArticles({
        "api-key": "985ea6ce339c4406a9745e2267215aac",
        topic: this.state.topic,
        begin_date: this.state.startDate + "0101",
        end_date: this.state.endDate + "1229",
        sort: "newest",
        fl: "pub_date, web_url, headline, snippet"
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  }; //close handleSubmitForm

  saveArticles = event => {
    API.save({
      title: event[0],
      date: event[1],
      snippet: event[3],
      url: event[2]
    })
      .then(res => console.log("Article has been Saved!"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      // Card: Search-Articles
      <div className="container">

        <div className="row search-articles">
        <div className="card col-10">
            <div className="card-body">
              <h5 className="card-title">Search Articles </h5>
              <form>
                <Input
                  id= "searchString"
                  name="topic"
                  value={this.state.topic}
                  placeholder="Topic (required)"
                  label= "Search Topic"
                  onChange={this.handleInputChange}
                />
                <Input
                  id= "startYear"
                  name="startYear"
                  value={this.state.startYear}
                  placeholder="Start Year - YYYY (required)"
                  label= "Start Year"
                  onChange={this.handleInputChange}
                />
                <Input
                  id= "endYear"
                  name="endYear"
                  value={this.state.endYear}
                  placeholder="End Year - YYYY (required)"
                  label= "End Year"
                  onChange={this.handleInputChange}
                />
                <FormBtn>
                  Search Articles <i class="fas fa-search-plus" />
                </FormBtn>
              </form>
            </div>
          </div>
        </div>
      
        <div className="row search-results">
          <div className="card col-10">
            <div className="card-body">
              <h5 className="card-title"> Results </h5>
                
                 {this.state.articles.length ? (
                    <ul className="list-group list-group-flush">
                        {this.state.articles.map(article => {
                            const date= article.pub_date.split("T");
                      
                        return (
                            <li className="list-group-item"> 
                                <Results>
                                    key={article.headline.main}

                                    title={article.headline.main}
                                    date={date[0]}
                                    
                                    snippet={article.snippet}
                                    url={article.web_url}
                                    
                                    onClick={() => this.saveArticle([article.headline.main, date[0], article.web_url, article.snippet])}
                                    </Results>
                                </li>
                            );
                        })}
                    </ul>
                    // else display no results
                      ) : (<h5>No Results</h5>)
                 }
                </div>
            </div>
        </div>



      </div> 
    );
  } 
} 

export default Main;
