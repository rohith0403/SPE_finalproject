/*
import React from 'react';
import './Search.css';
import JSONDATA from "../MOCK_DATA.json";
import { useState } from "react";

function Search(){
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div className="Search">
            <input class="input" type="text"
                placeholder="Search for the book here ......."
                onChange={event => { setSearchTerm(event.target.value) }} />
            {JSONDATA.filter((val) => {
                // if (searchTerm === "") {
                //     // eslint-disable-next-line
                //     return;
                // }
                // else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                //     return val
                // }
                return searchTerm === "" ? null : val.title.toLowerCase().includes(searchTerm.toLowerCase()) ? val : null;
            }).map((val, key) => {
                return <div className="title" key={key}>
                    <p>{val.title}</p>
                </div>
            })}
        </div>
    )
}

export default Search*/
import React from 'react';
import '../App.css';
import JSONDATA from "../BOOK_DATA.json";
import { useState } from "react";
import Card from "./Card.js";



function Search(){
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="Search">
            <input class="input" type="text"
                placeholder="Search for the book here ......."
                onChange={event => { setSearchTerm(event.target.value) }} />
            {JSONDATA.filter((val) => {
                if (searchTerm === "") {
                    return val
                }
                else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <div class="column" key={key}>
                        <Card className="card" img={val.img} title={val.title} summary={val.summary} link={val.link} />
                    </div>
                )
            })}
        </div>
    )
}

export default Search