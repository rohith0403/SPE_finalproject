import React from 'react'
import PersistentEditor from './PersistentEditor'

async function makeCard(e){
    e.preventDefault();
    
}
export default function Editor() {
    return (
        <div>
            <PersistentEditor/>
            <button onClick=''>Save</button>
        </div>
    )
}
