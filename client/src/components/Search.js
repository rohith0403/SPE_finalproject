// import React from 'react';
import React, { useState, useEffect } from "react";
import '../App.css';
import Card from "./Card.js";
import axios from "axios";
import { connect } from "react-redux";
import { addBook,getBooks } from "../features/userSlice";
// import {userId} from "../features/userSlice";
// import { userId } from "./auth/Login";


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      books:this.props.books
    };
    // this.JSONDATA = JSONDATA;
  }
  componentDidMount() {
    const getUserId = this.props.userId;
    axios
      .get("http://localhost:5000/books")
      .then((response) => {
        if (response.data) {
          // this.JSONDATA = response.data;
          // this.setState({
          //   books: response.data,
          // });
          this.props.getBooks(response.data);
        } else {
          // this.JSONDATA = [];
        }
      });
  }

  render() {
    return  this.state.books.length
        ?
      <div className="Search">
        <input
          class="input"
          type="text"
          placeholder="Search for the book here ......."
          onChange={(event) => {
           this.setState({searchTerm:event.target.value});
          }}
        />
        {this.state.books.filter((val) => {
          if (this.state.searchTerm === "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div class="column" key={key}>
              <Card
                className="card"
                img={val.img}
                title={val.title}
                summary={val.summary}
                link={val.link}
              />
            </div>
          );
        })}
      </div>
    : null;
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.userDetails.value,
    books: state.userDetails.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    addBook: (book) => dispatch(addBook(book)),
    getBooks: (books) => dispatch(getBooks(books)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Search)