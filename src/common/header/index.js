import React,{Component} from 'react';
import { Icon } from 'antd';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from "./store"
import { actionCreators as loginActionCreators }  from "../../pages/login/store"

import { Link } from "react-router-dom";

import { 
	HeaderWrapper, 
	Logo, 
	Nav , 
	NavItem  ,
	NavSearch,
	Addition,
	Button ,
	SearchItem,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList,
} from './style.js';

class Header extends Component{
	getListArea(){
		const{focused,list,page,mouseIn,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage}=this.props;
		const newList=list.toJS();
		const pageList=[];
		if(newList.length){
			for(let i=(page-1)*10;i<page*10;i++){
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}
		if(focused || mouseIn){
			return(
				<SearchInfo onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
					<SearchInfoTitle>
						热门搜索{page}
						<SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}> 
						   <div ref={ (icon) => {this.spinIcon=icon} }  className="spin">变</div>
						   换一换
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null;
		}
	}

	render(){
		const{handleInputFocus,focused,list,login,logout}=this.props;

		return(
 			<HeaderWrapper>
 				<Link to='/'>
		      		<Logo />
		      	</Link>
		      	<Nav>
		      		<NavItem className="left active">首页</NavItem>
		      		<NavItem className="left">下载</NavItem>
		      		{login ? 
		      			<NavItem onClick={logout} className="right">退出</NavItem>:
		      			<Link to="/login"><NavItem className="right">登录</NavItem></Link>}
		      		<NavItem className="right">Aa</NavItem>
		      		
			      	<SearchItem>
			      		<CSSTransition
			      			in={focused}
			      			timeout={200}
			      			classNames="slide"
						>
			      			<NavSearch className={focused ? "focused" : ""}
			      			 onFocus={()=>handleInputFocus(list)}
			      			 onBlur={this.props.handleInputBlur}></NavSearch>
						</CSSTransition>
						<Icon type="search" theme="outlined" className={focused ? "focused search" : "search"} />
						{this.getListArea()}
					</SearchItem>

		      	</Nav>
		      	<Addition>
		      		<Link to="/write">
		      		<Button className="writting">写文章</Button>
		      		</Link>
		      		<Button className="reg">注册</Button>
		      	</Addition>
	        </HeaderWrapper>
		)
	}
}

// const Header = (props)=>{

// }




const mapStateToProps = (state)=>{
	return{
		focused:state.getIn(['header',"focused"]),
		list:state.getIn(["header","list"]),
		page:state.getIn(["header","page"]),
		mouseIn:state.getIn(["header","mouseIn"]),
		totalPage:state.getIn(["header","totalPage"]),
		login:state.getIn(['login',"login"]),
		// focused:state.get('header').get("focused")
	}
}

const mapDispathToProps = (dispatch)=>{
	return{
		handleInputFocus(list){
			(list.size === 0) && dispatch(actionCreators.getList())
			const action=actionCreators.searchFocus();
			dispatch(action)
		},
		handleInputBlur(){
			const action=actionCreators.searchBlur();
			dispatch(action)
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave())
		},
		handleChangePage(page,totalPage,spin){
			let originAngle=spin.style.transform.replace(/[^0-9]/ig,"")
			if(originAngle){
				originAngle=parseInt(originAngle,10)
			}else{
				originAngle=0
			}
			spin.style.transform='rotate('+(originAngle+360)+'deg)'
			// console.log(spin.style.transform)
			if(page<totalPage){
				dispatch(actionCreators.changePage(page+1))
			}else{
				dispatch(actionCreators.changePage(1))
			}
		},
		logout(){
			dispatch(loginActionCreators.logout())
		}
	}
}

export default connect(mapStateToProps,mapDispathToProps)(Header);