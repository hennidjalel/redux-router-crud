import {
  Button,
  ButtonGroup,
} from "react-bootstrap";

import { Link } from "react-router-dom";


const PostListItem = ({ data, deletePost }) => {

  // const handelDelete = (item) => { deletePost(item.id) }

  const postList = data.length > 0 ? data.map((item, index) => {
    return (
      <tr key={item.id}>
        <td>#{++index}</td>
        <td><Link to={`post/${item.id}`}>{item.title}</Link> </td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button variant="success"

            >Edit</Button>
            <Button variant="danger"
              onClick={() => {
                deletePost(item)
                console.log(item)
              }}
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    )
  }) : "There is no post available";


  return (
    <>
      {postList}
    </>
  )
}

export default PostListItem