import React from "react";
import { Text, Input, Image, Grid, Button, Upload } from "../../elements";
import CommentItem from "./CommentItem";

const CommentList = () => {
  return (
    <React.Fragment>
      <Grid width="50vw" margin="20px auto">
        <Grid>
          <CommentItem />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

