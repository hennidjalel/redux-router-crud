import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../redux/postSlice";

const usePostDetails = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { isLoading, error, record } = useSelector((state) => state.posts);
  console.log(record);
  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  return { isLoading, error, record };
};

export default usePostDetails;
