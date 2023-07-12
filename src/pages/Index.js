import { useCallback, useEffect, useState } from "react";

import PostList from "../components/PostList";
import { getPosts, deletePosts } from "../redux/postSlice";
// redux
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";

const Index = () => {
  const dispatch = useDispatch();
  const { records, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const deletePost = useCallback(
    (data) => {
      dispatch(deletePosts(data));
      console.log(data);
    },
    [dispatch]
  );



  return (
    <Loading isLoading={isLoading} error={error}>
      <PostList data={records} deletePost={deletePost} dispatch={dispatch} />
    </Loading>
  );
};

export default Index;
