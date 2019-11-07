import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Spinner from './Spinner';

export default class Team extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			team: [],
			loading: true
		};
	}
	render() {
		return (
		<div className="team">
			<Header route={this.props.match.path}/>
		    <main>
		        <section className="teammates">
		        	{
		        		this.state.loading ? <Spinner/> :Object.values(this.state.team).map(({title,members})=>{
	        				return (<div className="teamgrouptitle"><h2>{title}</h2>
		        				{members.map(({name, description, photo, github, email})=>{
		        					const emailAddress = email ? email.split("@"):null;
				        			return (
				        				<div className="teammate">
				        				    <div className="mate_img">
				        				        <a href={github} target="_blank" rel="noopener noreferrer">
				        				            <img alt={"Team member"} src={process.env.PUBLIC_URL + photo} className="grayscale"/>
				        				        </a>
				        				    </div>

				        				    <div className="mate_info">
				        				        <div className="mate_name">
				        				                <h3>{name}</h3>
				        				        </div>
				        				        <div className="mate_description">
				        				            <p>{description}</p>
													<p><b>{emailAddress ? 
														(<span>{emailAddress[0]}  <img alt="at" className="at" src={process.env.PUBLIC_URL + "/assets/img/arroba-symbol.svg"}/>
														 {emailAddress[1]}</span>
														):""}</b></p>
				        				        </div>
				        				    </div>
				        				</div>
				        			)})}
	        				 </div>)
	        			})
					}

		        </section>
		    </main>
			<Footer/>
		</div>
		)
	}

	componentDidMount(){
		window.scrollTo(0,0);
		fetch(process.env.PUBLIC_URL+"/assets/team.json").then(res=>res.json()).then(team=>this.setState({team, loading: false}))
	}
}