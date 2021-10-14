import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import Card from "../components/Card";
import {Text,Input,Image,Grid,Button,Upload,DropDown,} from "../elements";

import { history } from "../redux/configureStore";



const PostList = (props) => {
  const dispatch= useDispatch();

  const post_list = useSelector((state) => state.post.list);
  // console.log(post_list);

  return (
    <React.Fragment> 
      <Text is_main>장르, 기분, 계절</Text>
      <Button _onClick={()=>{
        history.push('/addpost')
      }}>추가하기</Button>
      
      {post_list.map((p, idx) => {
        return <Card key={p.id} {...p} />;
      })}
    </React.Fragment>
  );
};

export default PostList;

