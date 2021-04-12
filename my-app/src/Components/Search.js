import React from 'react';
import '../App.js';
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
                if (searchTerm == "") {
                    return
                }
                else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return <div className="title" key={key}>
                    <p>{val.title}</p>
                </div>
            })}
        </div>
    )
}

export default Search