import { memo } from "react";
import { Table } from "react-bootstrap";
import PostListItem from "./PostListItem";



const PostList = ({ data, deletePost }) => {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th style={{ width: "70%" }}>Title</th>
                    <th style={{ width: "10%" }}></th>
                </tr>
            </thead>
            <tbody>
                <PostListItem data={data} deletePost={deletePost} />
            </tbody>
        </Table>
    )
}

export default memo(PostList)