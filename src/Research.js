import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Filters from './Filters';
import Spinner from './Spinner';

export default class Research extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			papers: [],
			search: "",
			year: undefined,
			type: undefined,
			loading: true
		};
	}

	render(){
		const {papers, search, year, type, loading } = this.state;
		return (
			<div className="research">
				<Header route={this.props.match.path}/>
			    <main>
			        <section className="research">
					<Filters search = {search} year={year} type={type} papers={papers} changeSearch={search=>this.setState({search})} changeYear={year=>this.setState({year})} changeType={type=>this.setState({type})}/>
			        	{
			        		loading ? <Spinner/>: papers.filter(
			        			paper => {
			        				return (!search || search.toLowerCase()
											.replace(new RegExp(/\s/g),"")
											.replace(new RegExp(/[àáâãäå]/g),"a")
											.replace(new RegExp(/æ/g),"ae")
											.replace(new RegExp(/ç/g),"c")
											.replace(new RegExp(/[èéêë]/g),"e")
										    .replace(new RegExp(/[ìíîï]/g),"i")
											.replace(new RegExp(/ñ/g),"n")
											.replace(new RegExp(/[òóôõö]/g),"o")
											.replace(new RegExp(/œ/g),"oe")
											.replace(new RegExp(/[ùúûü]/g),"u")
											.replace(new RegExp(/[ýÿ]/g),"y")
											.replace(new RegExp(/\W/g),"")
											.split(" ").every(item => paper.content.toLowerCase()
											.replace(new RegExp(/\s/g),"")
											.replace(new RegExp(/[àáâãäå]/g),"a")
											.replace(new RegExp(/æ/g),"ae")
											.replace(new RegExp(/ç/g),"c")
											.replace(new RegExp(/[èéêë]/g),"e")
										    .replace(new RegExp(/[ìíîï]/g),"i")
											.replace(new RegExp(/ñ/g),"n")
											.replace(new RegExp(/[òóôõö]/g),"o")
											.replace(new RegExp(/œ/g),"oe")
											.replace(new RegExp(/[ùúûü]/g),"u")
											.replace(new RegExp(/[ýÿ]/g),"y")
											.replace(new RegExp(/\W/g),"")
											.includes(item)))
									&& (!year || (paper.date && paper.date[0] && paper.date[0].toString() === year))
									&& (!type || (paper.type && paper.type === type));
			        		}).map(({date,doi,content})=>{
			        			return (
			        				<div className="paper">
			        				    <div className="paper_date">
			        				        <h4>{date ? date[0] : ""}</h4>
			        				    </div>

			        				    <div className="paper_main">
			        				        <a rel="noopener noreferrer"  target="_blank" href={doi}>
			        				            <div className="paper_content">
			        				                <div className="paper_title">
			        				            	<h2 dangerouslySetInnerHTML={{__html: content}}></h2>
			        				                </div>
			        				            </div>
			        				        </a>
			        				    </div>
			        				</div>
			        			);
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
		fetch(process.env.PUBLIC_URL+"/assets/publications.json").then(res=>res.json()).then(papers=>this.setState({papers, loading: false}))
	}
}