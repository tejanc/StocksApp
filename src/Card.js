import React from 'react';

var article = {
    author: "",
    title: "",
    description: "",
    url: "",
    urlToImage: "",
    publishedAt: "",
    content: "",
}

const customStyle = {
    margin: 0,
    height: 200,
    width: 300,
    borderRadius: 15
}

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            api: '',
            arr: [],
            query: ''
        }
    }

    componentDidMount() {
        var val = document.getElementsByClassName("AsyncSelect").value;
        this.fetchNews(val);
    }

    componentWillReceiveProps() {
        if (this.props.query !== this.state.query) {
            if (this.props.changeLink != null) {
                console.log('fetching news: query: ' + this.props.changeLink);
                this.fetchNews(this.props.changeLink);

            }
        }
    }

    fetchNews = async (query) => {

        const pointerToThis = this;

        let proxy = 'https://cors-anywhere.herokuapp.com/';

        let url = 'http://newsapi.org/v2/everything?' +
            `q=${query}&` +
            `from=${Date.now()}}&` +
            'sortBy=popularity&' +
            'apiKey=9c0a6f3604e64d3eb2c3d50d20dd0770';
        //http://newsapi.org/v2/everything?q=Amazon&from=2020-09-02&sortBy=popularity&apiKey=9c0a6f3604e64d3eb2c3d50d20dd0770

        this.setState({
            api: url
        })

        var articles = [];

        let req = new Request(proxy + url);
        await fetch(req)
            .then(
                function (response) {
                    // console.log(response.json());
                    return response.json();
                }
            )
            .then(
                function (data) {
                    for (var key in data['articles']) {
                        article = new Object();
                        article.author = data['articles'][key]['author'];
                        article.title = data['articles'][key]['title'];
                        article.description = data['articles'][key]['description'];
                        article.url = data['articles'][key]['url'];
                        article.urlToImage = data['articles'][key]['urlToImage'];
                        article.publishedAt = data['articles'][key]['publishedAt'];
                        article.content = data['articles'][key]['content'];

                        articles.push(article);
                    }
                    pointerToThis.setState({
                        arr: articles
                    })
                }
            )
    }

    render() {
        var index = 0; // Dynamically set the index at the end of every card 'array' access.
        const { api, arr } = this.state;
        return (
            <div>
                <div className="recommended-title">
                    {/* <h2>{"API: " + api}</h2> */}
                    {/* <h1>Query:{this.props.changeLink}</h1> */}
                    <h1>Recommended</h1>
                </div>
                <div className="card-body">
                    <div className="card">
                        <a href={arr[index] === undefined ? '' : arr[index].url} target="_blank">
                            <div className="card-image">
                                <img src={arr[index] === undefined ? '' : arr[index].urlToImage} style={customStyle}></img>
                            </div>
                        </a>
                        <div className="card-text">
                            <span className="date">{arr[index] === undefined ? '' : arr[index].publishedAt}</span>
                            <h2>{arr[index] === undefined ? '' : arr[index].title}</h2>
                            <p>{arr[index] === undefined ? '' : arr[index++].description}</p>
                        </div>
                        {/* <div className="card-stats">
                            <div className="stat">
                                <div className="value">4<sup>m</sup></div>
                                <div className="type">read</div>
                            </div>
                            <div className="stat border">
                                <div className="value">1243</div>
                                <div className="type">views</div>
                            </div>
                            <div className="stat">
                                <div className="value">77</div>
                                <div className="type">comments</div>
                            </div>
                        </div> */}
                    </div >
                    <div className="card">
                        <a href={arr[index] === undefined ? '' : arr[index].url} target="_blank">
                            <div className="card-image">
                                <img src={arr[index] === undefined ? '' : arr[index].urlToImage} style={customStyle}></img>
                            </div>
                        </a>
                        <div className="card-text">
                            <span className="date">{arr[index] === undefined ? '' : arr[index].publishedAt}</span>
                            <h2>{arr[index] === undefined ? '' : arr[index].title}</h2>
                            <p>{arr[index] === undefined ? '' : arr[index++].description}</p>
                        </div>
                        {/* <div className="card-stats">
                            <div className="stat">
                                <div className="value">4<sup>m</sup></div>
                                <div className="type">read</div>
                            </div>
                            <div className="stat border">
                                <div className="value">1243</div>
                                <div className="type">views</div>
                            </div>
                            <div className="stat">
                                <div className="value">77</div>
                                <div className="type">comments</div>
                            </div>
                        </div> */}
                    </div >
                    <div className="card">
                        <a href={arr[index] === undefined ? '' : arr[index].url} target="_blank">
                            <div className="card-image">
                                <img src={arr[index] === undefined ? '' : arr[index].urlToImage} style={customStyle}></img>
                            </div>
                        </a>
                        <div className="card-text">
                            <span className="date">{arr[index] === undefined ? '' : arr[index].publishedAt}</span>
                            <h2>{arr[index] === undefined ? '' : arr[index].title}</h2>
                            <p>{arr[index] === undefined ? '' : arr[index++].description}</p>
                        </div>
                        {/* <div className="card-stats">
                            <div className="stat">
                                <div className="value">4<sup>m</sup></div>
                                <div className="type">read</div>
                            </div>
                            <div className="stat border">
                                <div className="value">1243</div>
                                <div className="type">views</div>
                            </div>
                            <div className="stat">
                                <div className="value">77</div>
                                <div className="type">comments</div>
                            </div>
                        </div> */}
                    </div >
                    <div className="card">
                        <a href={arr[index] === undefined ? '' : arr[index].url} target="_blank">
                            <div className="card-image">
                                <img src={arr[index] === undefined ? '' : arr[index].urlToImage} style={customStyle}></img>
                            </div>
                        </a>
                        <div className="card-text">
                            <span className="date">{arr[index] === undefined ? '' : arr[index].publishedAt}</span>
                            <h2>{arr[index] === undefined ? '' : arr[index].title}</h2>
                            <p>{arr[index] === undefined ? '' : arr[index++].description}</p>
                        </div>
                        {/* <div className="card-stats">
                            <div className="stat">
                                <div className="value">4<sup>m</sup></div>
                                <div className="type">read</div>
                            </div>
                            <div className="stat border">
                                <div className="value">1243</div>
                                <div className="type">views</div>
                            </div>
                            <div className="stat">
                                <div className="value">77</div>
                                <div className="type">comments</div>
                            </div>
                        </div> */}
                    </div >
                    <div className="card">
                        <a href={arr[index] === undefined ? '' : arr[index].url} target="_blank">
                            <div className="card-image">
                                <img src={arr[index] === undefined ? '' : arr[index].urlToImage} style={customStyle}></img>
                            </div>
                        </a>
                        <div className="card-text">
                            <span className="date">{arr[index] === undefined ? '' : arr[index].publishedAt}</span>
                            <h2>{arr[index] === undefined ? '' : arr[index].title}</h2>
                            <p>{arr[index] === undefined ? '' : arr[index++].description}</p>
                        </div>
                        {/* <div className="card-stats">
                            <div className="stat">
                                <div className="value">4<sup>m</sup></div>
                                <div className="type">read</div>
                            </div>
                            <div className="stat border">
                                <div className="value">1243</div>
                                <div className="type">views</div>
                            </div>
                            <div className="stat">
                                <div className="value">77</div>
                                <div className="type">comments</div>
                            </div>
                        </div> */}
                    </div >
                    <div className="card">
                        <a href={arr[index] === undefined ? '' : arr[index].url} target="_blank">
                            <div className="card-image">
                                <img src={arr[index] === undefined ? '' : arr[index].urlToImage} style={customStyle}></img>
                            </div>
                        </a>
                        <div className="card-text">
                            <span className="date">{arr[index] === undefined ? '' : arr[index].publishedAt}</span>
                            <h2>{arr[index] === undefined ? '' : arr[index].title}</h2>
                            <p>{arr[index] === undefined ? '' : arr[index++].description}</p>
                        </div>
                    </div>
                    <div className="card">
                        <a href={arr[index] === undefined ? '' : arr[index].url} target="_blank">
                            <div className="card-image">
                                <img src={arr[index] === undefined ? '' : arr[index].urlToImage} style={customStyle}></img>
                            </div>
                        </a>
                        <div className="card-text">
                            <span className="date">{arr[index] === undefined ? '' : arr[index].publishedAt}</span>
                            <h2>{arr[index] === undefined ? '' : arr[index].title}</h2>
                            <p>{arr[index] === undefined ? '' : arr[index++].description}</p>
                        </div>
                    </div>
                    <div className="card">
                        <a href={arr[index] === undefined ? '' : arr[index].url} target="_blank">
                            <div className="card-image">
                                <img src={arr[index] === undefined ? '' : arr[index].urlToImage} style={customStyle}></img>
                            </div>
                        </a>
                        <div className="card-text">
                            <span className="date">{arr[index] === undefined ? '' : arr[index].publishedAt}</span>
                            <h2>{arr[index] === undefined ? '' : arr[index].title}</h2>
                            <p>{arr[index] === undefined ? '' : arr[index++].description}</p>
                        </div>
                    </div>
                    <div className="card">
                        <a href={arr[index] === undefined ? '' : arr[index].url} target="_blank">
                            <div className="card-image">
                                <img src={arr[index] === undefined ? '' : arr[index].urlToImage} style={customStyle}></img>
                            </div>
                        </a>
                        <div className="card-text">
                            <span className="date">{arr[index] === undefined ? '' : arr[index].publishedAt}</span>
                            <h2>{arr[index] === undefined ? '' : arr[index].title}</h2>
                            <p>{arr[index] === undefined ? '' : arr[index++].description}</p>
                        </div>
                    </div>
                    <div className="card">
                        <a href={arr[index] === undefined ? '' : arr[index].url} target="_blank">
                            <div className="card-image">
                                <img src={arr[index] === undefined ? '' : arr[index].urlToImage} style={customStyle}></img>
                            </div>
                        </a>
                        <div className="card-text">
                            <span className="date">{arr[index] === undefined ? '' : arr[index].publishedAt}</span>
                            <h2>{arr[index] === undefined ? '' : arr[index].title}</h2>
                            <p>{arr[index] === undefined ? '' : arr[index++].description}</p>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Card;