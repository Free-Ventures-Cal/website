import React from 'react';

import './../styles/Program.css';

class SpotlightArticle extends React.Component {
	render() {
		return (
				<div className="spotlight">
					<img src={this.props.image} />
					<h1>{this.props.headline} </h1>
					<h4>{this.props.date} </h4>
					<h5><a href={this.props.url}>Read full article!</a></h5>
				</div>
			)
	}
}

export default SpotlightArticle;