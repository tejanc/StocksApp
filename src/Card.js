import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            heading: '',
            paragraph: ''
        }
    }

    componentDidMount() {
        this.setState({date: "4 days ago"})
        this.setState({heading: "Post One"})
        this.setState({paragraph:"It was going to rain. The weather forecast didn't say that, but the steel plate in his hip did. He had learned over the years to trust his hip over the weatherman. It was going to rain, so he better get outside and prepare."})
    }


    render() {

        const { date, heading, paragraph } = this.state;

        return (
            <div class="card-body">
                <div class="card">
                    <div class="card-image"></div>
                    <div class="card-text">
                        <span class="date">{date}</span>
                        <h2>{heading}</h2>
                        <p>{paragraph}</p>
                    </div>
                    <div class="card-stats">
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
                    </div>
                </div >
                <div class="card">
                    <div class="card-image"></div>
                    <div class="card-text">
                        <span class="date">{date}</span>
                        <h2>{heading}</h2>
                        <p>{paragraph}</p>
                    </div>
                    <div class="card-stats">
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
                    </div>
                </div >
            </div>
        )
    }
}
export default Card;