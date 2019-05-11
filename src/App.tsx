import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { welcomeSaga } from './store/actions/default/default';

export interface AppProps
{
	sendWelcome:Function,
	name:string|null,
	greeting:string|null
}

export interface AppState
{
	name:string|null
}

class App extends React.Component<AppProps, AppState> {
	constructor(__props:AppProps) {
		super(__props);
		this.state = {
			name:''
		}
		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	private _handleChange(__event:any) {
		this.setState({
			name: __event.target.value
		});
	}

	private _handleSubmit(__event:any) {
		__event.preventDefault();
		console.log('app sending name', this.state.name);
		
		this.props.sendWelcome(this.state.name);
	}

	componentDidMount()
	{
		this.props.sendWelcome(null);
	}
	
	render() {
		return (
		  <div className="App">
			<header className="App-header">
			  <form onSubmit={this._handleSubmit}>
				<label htmlFor="name">Enter your name: </label>
				<input
				  id="name"
				  type="text"
				  value={this.state.name || ''}
				  onChange={this._handleChange}
				/>
				<button type="submit">Submit</button>
			  </form>
			  <p>{this.props.greeting}</p>
			</header>
		  </div>
		);
	  }
}

const _mapStateToProps = (__state:any) =>
{
	return {
		name		:	__state.default.name,
		greeting	:	__state.default.greeting
	}
}

const _mapDispatchToProps = (__dispatch:Function) => {
	return {
		sendWelcome			:	(__name:string|null)	=>	__dispatch(welcomeSaga(__name))
	}
}

export default connect(_mapStateToProps, _mapDispatchToProps)(App);