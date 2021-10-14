import React, { useEffect } from 'react';
import Grid from '../elements/Grid';
import Image from '../elements/Image';
import Text from '../elements/Text';
import { useSelector, useDispatch } from 'react-redux';
import Mainpost from './Mainpost';
import { actionCreators as postActions } from '../redux/modules/post';

const MainPostList = (props) => {
  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);

  useEffect(() => {
    dispatch(postActions.getPostsDB());
  }, []);

  console.log(post_list);
  return (
    <React.Fragment>
      <Mainpost />
      {post_list.map((p, idx) => {
        return <Post key={p.id} {...p} />;
      })}
    </React.Fragment>
  );
};

export default MainPostList;
