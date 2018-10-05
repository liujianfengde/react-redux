import { fromJS } from "immutable"
import * as actionTypes from "./actionTypes";

const defaultState=fromJS({
	topicList:[],
	articleList:[],
	recommendList:[],
	articlePage:1,
	add:"点击加载",
	showScroll:false,
});

const changeHomeData=(state,action)=>{
	return state.merge({
		topicList:fromJS(action.topicList),
		articleList:fromJS(action.articleList),
		recommendList:fromJS(action.recommendList)
	})
}

export default (state=defaultState,action)=>{
	switch(action.type){
		case actionTypes.CHANGE_HOME_DATA:
			return changeHomeData(state,action)
		case actionTypes.ADD_ARTICLE_LIST:
			return state.merge({
				"articleList":state.get("articleList").concat(action.list),
				"articlePage":action.nextPage
			})
		case actionTypes.CHANGE_HOME_DATA2:
			return state.set("add","加载完成")
			// return state.set("articleList",state.get("articleList").concat(action.list))
		case  actionTypes.TOGGLE_SCROLL_TOP:
			return state.set("showScroll",action.show)
		default:
			return state;
	}
}


