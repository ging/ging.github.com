import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Spinner from './Spinner';
export default class Tools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tools: [],
            loading: true
        };
    }
    render(){
        return (
            <div className="tools">
                <Header route="/projects"/>
                <main>
                    <section className="our_tools">
                        {this.state.loading ? <Spinner/> : this.state.tools.map(({title, description, route, author})=>{
                            return (<div className="tool">
                                    <div className="tool_title">
                                        <a href={route}>
                                            <h2>{title}</h2>
                                        </a>
                                    </div>

                                    <div className="tool_main">
                                        <a target="_blank" href={process.env.PUBLIC_URL + route} rel="noopener noreferrer">
                                            <div className="tool_content">
                                                <div className="tool_description description">
                                                    <h3>{description}</h3>
                                                </div>
                                            </div>
                                        </a>
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
        fetch(process.env.PUBLIC_URL+"/assets/tools.json").then(res=>res.json()).then(tools=>this.setState({tools, loading: false}))
    }
}