import React from 'react';

var article = {
    author: "",
    title: "",
    description: "",
    url: "",
    urlToImage: "",
    publishedAt: "",
    content: "",
    length: 0
}

const customStyle = {
    margin: 10,
    height: 200,
    width: 280,
}

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            api: '',
            arr: []
        }
    }

    componentDidMount() {
        var val = document.getElementsByClassName("AsyncSelect").value;
        this.fetchNews(val);
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

        let req = new Request(proxy+url);
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

    openURL(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    render() {
        const { api, arr } = this.state;
        return (
            <div>
                <div class="news-title">
                    {/* <h2>{"API: " + api}</h2> */}
                    <h1>News</h1>
                </div>
                <div class="card-body">
                    <div class="card">
                        <div class="card-image">
                            <img src={arr[0] === undefined ? '' : arr[0].urlToImage} style={customStyle}></img>
                        </div>
                        <div class="card-text">
                            <span class="date">{arr[0] === undefined ? '' : arr[0].publishedAt}</span>
                            <h2>{arr[0] === undefined ? '' : arr[0].title}</h2>
                            <p>{arr[0] === undefined ? '' : arr[0].description}</p>
                        </div>
                        {/* <div class="card-stats">
                            <div class="stat">
                                <div class="value">4<sup>m</sup></div>
                                <div class="type">read</div>
                            </div>
                            <div class="stat border">
                                <div class="value">1243</div>
                                <div class="type">views</div>
                            </div>
                            <div class="stat">
                                <div class="value">77</div>
                                <div class="type">comments</div>
                            </div>
                        </div> */}
                    </div >
                    <div class="card">
                        <div class="card-image">
                            <img src={arr[1] === undefined ? '' : arr[1].urlToImage} style={customStyle}></img>
                        </div>
                        <div class="card-text">
                            <span class="date">{arr[1] === undefined ? '' : arr[1].publishedAt}</span>
                            <h2>{arr[1] === undefined ? '' : arr[1].title}</h2>
                            <p>{arr[1] === undefined ? '' : arr[1].description}</p>
                        </div>
                        {/* <div class="card-stats">
                            <div class="stat">
                                <div class="value">4<sup>m</sup></div>
                                <div class="type">read</div>
                            </div>
                            <div class="stat border">
                                <div class="value">1243</div>
                                <div class="type">views</div>
                            </div>
                            <div class="stat">
                                <div class="value">77</div>
                                <div class="type">comments</div>
                            </div>
                        </div> */}
                    </div >
                    <div class="card">
                        <div class="card-image">
                            <img src={arr[2] === undefined ? '' : arr[2].urlToImage} style={customStyle}></img>
                        </div>
                        <div class="card-text">
                            <span class="date">{arr[2] === undefined ? '' : arr[2].publishedAt}</span>
                            <h2>{arr[2] === undefined ? '' : arr[2].title}</h2>
                            <p>{arr[2] === undefined ? '' : arr[2].description}</p>
                        </div>
                        {/* <div class="card-stats">
                            <div class="stat">
                                <div class="value">4<sup>m</sup></div>
                                <div class="type">read</div>
                            </div>
                            <div class="stat border">
                                <div class="value">1243</div>
                                <div class="type">views</div>
                            </div>
                            <div class="stat">
                                <div class="value">77</div>
                                <div class="type">comments</div>
                            </div>
                        </div> */}
                    </div >
                    <div class="card">
                        <div class="card-image">
                            <img src={arr[3] === undefined ? '' : arr[3].urlToImage} style={customStyle}></img>
                        </div>
                        <div class="card-text">
                            <span class="date">{arr[3] === undefined ? '' : arr[3].publishedAt}</span>
                            <h2>{arr[3] === undefined ? '' : arr[3].title}</h2>
                            <p>{arr[3] === undefined ? '' : arr[3].description}</p>
                        </div>
                        {/* <div class="card-stats">
                            <div class="stat">
                                <div class="value">4<sup>m</sup></div>
                                <div class="type">read</div>
                            </div>
                            <div class="stat border">
                                <div class="value">1243</div>
                                <div class="type">views</div>
                            </div>
                            <div class="stat">
                                <div class="value">77</div>
                                <div class="type">comments</div>
                            </div>
                        </div> */}
                    </div >
                    <div class="card">
                        <div class="card-image">
                            <img src={arr[4] === undefined ? '' : arr[4].urlToImage} style={customStyle}></img>
                        </div>
                        <div class="card-text">
                            <span class="date">{arr[4] === undefined ? '' : arr[4].publishedAt}</span>
                            <h2>{arr[4] === undefined ? '' : arr[4].title}</h2>
                            <p>{arr[4] === undefined ? '' : arr[4].description}</p>
                        </div>
                        {/* <div class="card-stats">
                            <div class="stat">
                                <div class="value">4<sup>m</sup></div>
                                <div class="type">read</div>
                            </div>
                            <div class="stat border">
                                <div class="value">1243</div>
                                <div class="type">views</div>
                            </div>
                            <div class="stat">
                                <div class="value">77</div>
                                <div class="type">comments</div>
                            </div>
                        </div> */}
                    </div >
                </div>
            </div>
        )
    }
}
export default Card;