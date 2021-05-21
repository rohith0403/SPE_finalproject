import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
 addBook
} from "../../features/userSlice";
import axios from 'axios';
import "./AddBook.css";
import AuthContext from "../../context/AuthContext";
import {Link } from "react-router-dom";
import { useHistory } from "react-router-dom"; 

export var userId;

function AddBook() {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [summary, setSummary] = useState("");
    const [img, setImg] = useState("");
    const [link, setLink] = useState("");
    const dispatch = useDispatch();
    const { getLoggedIn } = useContext(AuthContext);
    
    const history = useHistory();
    
    async function addbook(e) {
        e.preventDefault();

        try {
            const bookData = {
                title,
                genre,
                summary,
                img,
                link
            };
            // dispatch()
            await axios.post("http://localhost:5000/books/add", bookData);
            dispatch(addBook(bookData));
        } catch (err) {
            console.error(err);
        }        
    }
    
    
    return (
        <div className="book">
        <form className="book__form" onSubmit={addbook}>
          <h1>Add book details</h1>
          <input
            type="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="genre"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <input
            type="Summary"
            placeholder="Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          <input
            type="img"
            placeholder="Image URL"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <input
            type="link"
            placeholder="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button type="submit" className="submit__btn">
            Enter
          </button>
        </form>
      </div>
);
}


export default AddBook;