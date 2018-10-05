import * as actionTypes from "./actionTypes";
import axios from "axios";
import {fromJS} from "immutable";

const changeHomeData=(result)=>({
	type:actionTypes.CHANGE_HOME_DATA,
	topicList:result.topicList,
	articleList:result.articleList,
	recommendList:result.recommendList,

})

const changeHomeData2=()=>({
	type:actionTypes.CHANGE_HOME_DATA2,
})

const addHomeList = (list,nextPage)=>({
	type:actionTypes.ADD_ARTICLE_LIST,
	list:fromJS(list),
	nextPage
})



export const getHomeInfo=()=>{
	return (dispatch)=>{
		axios.get("/api/home.json").then((res)=>{
			const result=res.data.data;
			const action=changeHomeData(result)
			dispatch(action)
		})
	}
}

export const getMoreList=(page)=>{
	return (dispatch)=>{
		axios.get("/api/homeList.json?page="+page).then((res)=>{
			console.log(res.data.data.length/2)
			if(page>res.data.data.length/2){
				dispatch(changeHomeData2())
			}else{
				const result=res.data.data.slice((page-1)*2,2*page);
				dispatch(addHomeList(result,page+1))
			}
			
		})
	}
}

export const toggleTopShow=(show)=>({
	type:actionTypes.TOGGLE_SCROLL_TOP,
	show
})