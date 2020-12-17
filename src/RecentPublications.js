import React from 'react';
import Spinner from "./Spinner";

export default class RecentPublications extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            team: [],

            loading: true
        };
    }
    render(){
        return <div className="_pubications _recent_publications">
            {this.state.loading ? <Spinner/> : this.state.papers
                .filter(paper => {
                    return (
                        paper.type === "article-journal"
                    );
                })
                .filter((i, index) => (index < 3))
                .map(({doi, content}) => {
                    return (
                        <a href={doi} target="_blank" rel="noopener noreferrer">
                            <p style={{ color: "black" }}dangerouslySetInnerHTML={{__html: content}}></p>
                        </a>
                     );
                 })}
            </div>


    }

    componentDidMount(){
        window.scrollTo(0,0);
        fetch(process.env.PUBLIC_URL+"/assets/publications.json").then(res=>res.json()).then(papers=>this.setState({papers, loading: false}))
    }
}