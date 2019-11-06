import React from 'react';

export default class Filters extends React.Component {
	getYears(papers) {
		let yearSet = new Set()
		for (let i in papers) {
			try {
				const date = papers[i].date[0];
				yearSet.add(date.toString())
			} catch(e) {
			}
		}
		return Array.from(yearSet);
	}
	render(){
		let years = this.getYears(this.props.papers);
		return <div className="filters">
			<div className="filter">
				<label htmlFor="search">Search</label>
				<input key={" "} type={"text"} value ={this.props.search}
					   onChange={e => this.props.changeSearch(e.target.value === "" ? undefined: e.target.value)}
				/>
			</div>
			<div className="filter">
				<label for="publication">Filter by publication type</label>
				<select id="publication" name="publication" onChange={(e)=>this.props.changeType(e.target.value === "all" ? undefined: e.target.value)}>
					<option key={"all"} value={"all"}>All</option>
					<option key={"journal"} value={"article-journal"}>Journal article</option>
					<option key={"conference"} value={"paper-conference"}>Conference proceedings</option>
				</select>
			</div>
			<div className="filter">
				<label for="year">Filter by year</label>
				<select id="year" name="year" onChange={(e)=>this.props.changeYear(e.target.value === "all" ? undefined: e.target.value)}>
					<option key={"all"} value={"all"}>All</option>
					{years.map(y=><option key={y} value={y}>{y}</option>)}
				</select>
			</div>

		</div>
	}
}