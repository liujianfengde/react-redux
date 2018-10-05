import React,{Component} from 'react';

import {ListItem,ListInfo,LoadMore} from '../style';
import {connect} from "react-redux";
import {actionCreators} from "../store";
import { Link } from "react-router-dom"

class List extends Component{
	render(){
		const {list,getMoreList,page,add} =this.props;
		return(
			<div>
				{
					list.map((item,index)=>{
						return (
							<Link key={index} to={'/detail/' + item.get('id')}>
							<ListItem >
								<img className="list_img" src={item.get("imgUrl")} alt=""/>
								<ListInfo >
									<h3 className="title" style={{"color":"#000"}}>{item.get("title")}</h3>
									<p className="desc">{item.get("desc")}</p>
								</ListInfo>
							</ListItem>
							</Link>
						)
					})
				}
			<LoadMore onClick={()=>getMoreList(page)}>{add}</LoadMore>
			</div>
		)
	}
}


const mapState =(state)=>({
	// list:state.get('home').get('articleList')
	list:state.getIn(["home","articleList"]),
	page:state.getIn(["home","articlePage"]),
	add:state.getIn(["home","add"]),
})

const mapDispatch=(dispatch)=>({
	getMoreList(page){
		dispatch(actionCreators.getMoreList(page))
	}
})

export default connect(mapState,mapDispatch,null)(List);

