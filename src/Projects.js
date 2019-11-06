import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Spinner from './Spinner';
import { Link } from "react-router-dom";

export default class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			loading: true
		};
	}
	render(){
		return (
			<div className="projects">
			<Header route={this.props.match.path}/>
			    <main>
			        <section className="our_projects">
			        	{this.state.loading ? <Spinner/> : this.state.projects.map(({logo, title, description, route, noBlank})=>{
			        		return (<div className="project">
			                <div className="project_logo">
			                        <CreateLink route={route}><img alt={"Project Logo"} src={process.env.PUBLIC_URL+logo} /></CreateLink>
			                </div>

			                <div className="project_main">
			                    <CreateLink route={route}>
			                        <div className="project_content">
			                            <div className="project_title">
			                                <h2>{title}</h2>
			                            </div>
			                            <div className="project_description description">
			                                <h3>{description}</h3>
			                            </div>
			                        </div>
			                    </CreateLink>
			                </div>
			                </div>

			                );
			        	})}
			        </section>
			    </main>
		    <Footer/>
			</div>
		)
	}
	componentDidMount(){
		window.scrollTo(0,0);
		fetch(process.env.PUBLIC_URL+"/assets/projects.json").then(res=>res.json()).then(projects=>this.setState({projects, loading: false}))
	}



}

const CreateLink = (props) => {
	return props.route.match("http") ? (
		<a target="_blank" href={props.route} rel="noopener noreferrer">
			{props.children}
		</a>
	):(
		<Link to={props.route}>
			{props.children}
		</Link>
	);
}