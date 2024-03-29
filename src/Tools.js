import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Spinner from './Spinner';
import {Link} from "react-router-dom";

import {useState, useEffect} from 'react';
import {useLocation } from "react-router-dom";
import {mytools} from "./constants/tools.js";

export default function Tools(props) {

    const location = useLocation();
	const [tools, setTools] = useState(mytools);

    useEffect(() => {
		window.scrollTo(0,0);		
	}, []);
    
	    return (
            <div className="tools">
                <Header route="/projects"/>
                <main>
                    <section className="our_tools">
                        {tools.map(({title, description, route, logo})=>{
                            return (<div className="tool">
                                    <div className="tool_logo">
                                        <CreateLink route={route}><img alt={"Project Logo"} src={process.env.PUBLIC_URL+logo} /></CreateLink>
                                    </div>

                                    <div className="tool_main">
                                        <CreateLink route={route}>
                                            <div className="tool_content">
                                                <div className="tool_title">
                                                    <h2>{title}</h2>
                                                </div>
                                                <div className="tool_description">
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