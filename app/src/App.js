import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			version: '',
			frameworks: []
		}

		this.getVersion = this.getVersion.bind(this)
		this.getFrameworks = this.getFrameworks.bind(this)
	}
	componentDidMount() {
		this.getVersion()
		this.getFrameworks()
	}
	getVersion() {
		fetch('http://localhost:8080/').then((data) => {
			data.json().then((data) => {
				this.setState({
					version: data.version
				})
			})
		})
	}
	getFrameworks() {
		fetch('http://localhost:8080/graphql', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: 'query {frameworks { name description }}'
			})
		})
			.then((response) => {
				response.json().then((json) => {
					this.setState({
						frameworks: json.data.frameworks
					})
				})
			})
			.catch((reason) => {
				console.error(reason)
			})
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Welcome to the MERN-G Stack. This a fully fledged MERN
						boilerplate with GraphQL integration.
					</p>
					<p>This app was made with</p>
					<ul>
						{this.state.frameworks.map((framework) => {
							return (
								<li key={framework.name}>
									{framework.name}, {framework.description}
								</li>
							)
						})}
					</ul>
					<p>Version {this.state.version}</p>
				</header>
			</div>
		)
	}
}

export default App
