import styled from 'styled-components';

export const HomeWrapper=styled.div`
	overflow:hidden;
	width:960px;
	margin: 0 auto;
`;

export const HomeLeft=styled.div`
	margin-left:15px;
	padding-top:30px;
	width:625px;
	float:left;
	.banner_img{
		width:625px;
		height:240px;
	}
`;

export const HomeRight=styled.div`
	width:280px;
	float:right;
`;

export const TopicWrapper=styled.div`
	overflow:hidden;
	padding:20px 0 10px 0;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem=styled.div`
	float:left;
	background:#f7f7f7;
	height:32px;
	margin-right:18px;
	margin-bottom:15px;
	line-height:32px;
	font-size:14px;
	color:#333;
	border-radius:4px;
	padding-right:12px;
	border:1px solid #dcdcdc;
	.topic_img{
		width100px;
		height:32px;
		display:block;
		float:left;
		margin-right:10px;
		margin-bottom:20px;
	}
`;

export const ListItem=styled.div`
	overflow:hidden;
	padding:20px 0;
	border-bottom: 1px solid #dcdcdc;
	.list_img{
		display:block;
		width:125px;
		height:100px;
		float:right;
	}
`;

export const ListInfo=styled.div`
	width:500px;
	float:left;
	.title{
		line-height:18px;
		font-size:18px;
		font-weight:bold;
	}
	.desc{
		line-height:24px;
		font-size:14px;
		margin-top:5px;
		color:#999;
	}
`;

export const RecommonedWrapper=styled.div`
	margin:30px 0;
	width:280px;
	overflow:hidden;
`;

export const RecommonedItem=styled.div`
	margin-bottom:10px;
	width:280px;
	height:50px;
	background:url(${(props)=>props.imgUrl});
`;

export const WriterWrapper=styled.div`
	width:278px;
	height:300PX;
	line-height:300px;
	text-align:center;
	border:1px solid #dcdcdc;
	border-radius:3px;
`;

export const LoadMore=styled.div`
	width:100%;
	height:40PX;
	line-height:40px;
	margin:30px 0;
	background:#a5a5a5;
	text-align:center;
	color:#fff;
	border-radius:20px;
	cursor:pointer;
`;

export const BackTop=styled.div`
	position:fixed;
	right:100px;
	bottom:30px;
	width:100px;
	height:60PX;
	line-height:60px;
	border:1px solid #dcdcdc;
	text-align:center;
	border-radius:20px;
	cursor:pointer;
	background:#a5a5a5;
	color:#fff;
`;
