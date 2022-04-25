import React from "react";
import { useEffect, useState } from "react";
// import {nanoid} from "nanoid";

import { BookCard } from "./BookCard";
import styled from "styled-components";

export const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(2,300px);
  grid-template-rows:repeat(auto,250px)
  grid-gap:50px;
  justify-content:center;
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    const getData = async () => {
      try {
        let res = await fetch("http://localhost:8080/books")
        let data = await res.json();
        setData(data)
        
      } catch (error){ 
        
      }
    }
    getData()
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {
          // map thorugh the data and use <BookCard/> component to display each book
          data.map((item) => {
            return (
              <>
                <BookCard item={item} key={item.id }/>
              </>
            )
           }) 
          }
      </Grid>
    </>
  );
};
export default Books;