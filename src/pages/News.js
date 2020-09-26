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

export default class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            api: '',
            query: '',
            arr: []
        }
    }

    componentDidMount() {
        var rand = Math.random() * Math.pow(10, 17);
        this.setState({
            query: rand
        }, () => this.fetchNews('Amazon'));
        this.render();
    }

    fetchNews = async (query) => {

        const pointerToThis = this;

        let proxy = 'https://cors-anywhere.herokuapp.com/';

        let url = 'http://newsapi.org/v2/everything?' +
            `q=${query}&` +
            `from=${Date.now()}&` +
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
                    var count = 0;
                    for (var key in data['articles']) {
                        if (count > 10) {
                            break;
                        }
                        article = new Object();
                        article.author = data['articles'][key]['author'];
                        article.title = data['articles'][key]['title'];
                        article.description = data['articles'][key]['description'];
                        article.url = data['articles'][key]['url'];
                        article.urlToImage = data['articles'][key]['urlToImage'];
                        article.publishedAt = data['articles'][key]['publishedAt'];
                        article.content = data['articles'][key]['content'];

                        articles.push(article);
                        count++;
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
                <h2> Page Under Development </h2>
                <div className="recommended-title">
                    {<h2>{"API: " + api}</h2>}
                    {<h1>Query:{this.props.changeLink}</h1>}
                    <h1>Recommended</h1>
                </div>
                <div className="news-post-body">
                    <div className="news-post-card">
                        <a href={arr[index] === undefined ? '' : arr[index].url} target="_blank">
                            <div className="news-post-card-image">
                                <img src={arr[index] === undefined ? '' : arr[index].urlToImage}></img>
                            </div>
                        </a>
                        <div className="news-post-card-text">
                            <span className="date">{arr[index] === undefined ? '' : arr[index].publishedAt}</span>
                            <h2>{arr[index] === undefined ? '' : arr[index].title}</h2>
                            <p>{arr[index] === undefined ? '' : arr[index++].description}</p>
                        </div>
                    </div >
                </div>
            </div >
        )
    }
}