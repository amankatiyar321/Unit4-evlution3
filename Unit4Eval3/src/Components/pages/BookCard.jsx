import React from "react";
import { Link } from "react-router-dom";
import styled  from "styled-components";
export const Flex = styled.div`
//  add required style
border:1px solid black;
border-radius:10px;
margin:10px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const BookCard = (props) => {
  const { id, title, isbn, thumbnailUrl } = props.item;

  return (
    <>
    <Link to = {`/books/${id}`}>
      <Flex >
        <img src={thumbnailUrl} alt={title} height = "200px" width={"200px"} />
        <h3>{title}</h3>
        <h4>{isbn}</h4>
      </Flex>
    </Link>
    </>
  );
};
