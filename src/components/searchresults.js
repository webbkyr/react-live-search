import React from 'react';
// import LiveSearch from './livesearch'

export default function searchResults(props) {
    const results = props.results.map(item => {
        return <div>{item.name}</div>
    })
    return (
        <div>{results}</div>
    )
}