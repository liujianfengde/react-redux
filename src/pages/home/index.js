import React,{Component} from 'react';
import { connect } from "react-redux"
import Topic from "./components/Topic"
import Writer from "./components/Writer"
import Recommed from "./components/Recommed"
import List from "./components/List"
import { actionCreators } from "./store"
import {BackTop} from "./style"

import { 
	HomeWrapper, 
	HomeLeft,
	HomeRight
} from './style.js';

class Home extends Component{
	handleScrollTop(){
		var timer = setInterval(function(){
            var osTop = document.documentElement.scrollTop;
            var speed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            if(osTop === 0){
                clearInterval(timer);
            }
        },30);
		// window.scrollTo(0,0)
	}

	render(){
		return(
			<HomeWrapper>
				<HomeLeft>
					<img alt="" className="banner_img" src="https://upload.jianshu.io/admin_banners/web_images/4479/ae6b245924326d3fce832a682033255b862dea88.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommed />
					<Writer />
				</HomeRight>
				{this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:"" }
			</HomeWrapper>
		)
	}
	componentDidMount(){
		this.props.changeHomeData();
		this.bindEvents()
	}
	componentWillMount(){
		window.removeEventListener("scroll",this.props.changeScrollTopShow)
	}
	bindEvents(){
		window.addEventListener("scroll",this.props.changeScrollTopShow)
	}
}

const mapState=(state)=>({
	showScroll:state.getIn(["home","showScroll"])
})

const mapDispatch=(dispatch)=>({
	changeHomeData(){
		const action = actionCreators.getHomeInfo()
		dispatch(action)
	},
	changeScrollTopShow(){
		if(document.documentElement.scrollTop>1){
			dispatch(actionCreators.toggleTopShow(true))
		}else{
			dispatch(actionCreators.toggleTopShow(false))
		}
		// console.log(document.documentElement.scrollTop)
	}

})

export default connect(mapState,mapDispatch)(Home);
