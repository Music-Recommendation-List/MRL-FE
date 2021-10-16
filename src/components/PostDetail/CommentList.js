import React from "react";
import { Text, Input, Image, Grid, Button, Upload } from "../../elements";
import CommentItem from "./CommentItem";

const CommentList = (props) => {

 const comment_list = props.comment_list

   return (
    <React.Fragment>
      <Grid width="50vw" margin="20px auto">
        <Grid>
          {comment_list.map((p,idx)=>{
            return <CommentItem key={p.commentId} {...p}/>
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

