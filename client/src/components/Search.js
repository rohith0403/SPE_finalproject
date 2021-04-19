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

export default Search