import React,{Component} from 'react';
import {RecommonedWrapper,RecommonedItem} from '../style';
import {connect} from "react-redux";


class Recommoned extends Component{
	render(){
		const {list} =this.props;
		return(
			<RecommonedWrapper>
			{
				list.map((item)=>{
					return (
						<RecommonedItem alt=""  key={item.get("id")} imgUrl={item.get("imgUrl")}/>
					)
				})
			}
			</RecommonedWrapper>
		)
	}
}

const mapState =(state)=>({
	list:state.getIn(["home","recommendList"])
})

export default connect(mapState,null)(Recommoned);
