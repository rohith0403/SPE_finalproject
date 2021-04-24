import React from 'react';
import '../App.css';
import JSONDATA from "../BOOK_DATA.json";
import { useState } from "react";
import Card from "./Card.js"

function Search(){
    const [searchTerm, setSearchTerm] = useState("")
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
                        {console.log(val.img)}
                        <Card className="card" img={val.img} title={val.title} summary={val.summary} />
                    </div>
                )
            })}
        </div>
    )
}

export default Search