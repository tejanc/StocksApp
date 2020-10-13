import React from 'react';
import DateUtils from '../utils/DateUtils';
import FileUtils from '../utils/FileUtils';

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
            arr: [],
            query: ''
        }
    }

    componentDidMount() {
        var randomIndex = Math.floor(Math.random() * 100);
        var newsQuery = FileUtils.getTicker(randomIndex)
        this.setState({
            query: newsQuery
        });
        this.fetchNews(newsQuery);
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
                        var date = new Date(Date.parse(data['articles'][key]['publishedAt']));
                        article.publishedAt = DateUtils.formatDate(date);
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
        const { api, arr, query } = this.state;

        return (
            <div>
                <div className="recommended-title">
                    {/* {<h2>{"API: " + api}</h2>}
                     {<h1>Query:{query}</h1>} */}
                    <h1>News</h1>
                </div>
                <div className="blog-post__body">
                    {arr.map((postDetail, index) => {
                        return (
                            <div className="blog-post__card">
                                <a href={arr[index] === undefined ? '' : arr[index].url} target="_blank">
                                    <div className="blog-post__image">
                                        <img src={arr[index] === undefined ? '' : arr[index].urlToImage} ></img>
                                    </div>
                                </a>
                                <div className="blog-post__info">
                                    <h1 className="blog-post__title">{arr[index] === undefined ? '' : arr[index].title}</h1>
                                    <div className="blog-post__date">
                                        <span className="date">{arr[index] === undefined ? '' : arr[index].publishedAt}</span>
                                    </div>
                                    <p className="blog-post__text">
                                        {arr[index] === undefined ? '' : arr[index].description}
                                    </p>
                                    <a className="blog-post__cta" href={arr[index] === undefined ? '' : arr[index++].url} target="_blank">Read More</a>
                                </div>
                            </div >
                        )
                    })}
                </div>
            </div>
        )
    }
}