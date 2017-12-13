import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

// export default function LiveSearch(props) {
//     return (
//         <div className="live-search">
//             <SearchForm />
//             <CharacterCount count={props.characters.length} />
//             <CharacterList characters={props.characters} />
//         </div>
//     );
// }
// //make this stateful

export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            searchResults: []
        }
    }

    render() {
        return (
        <main>
            <SearchForm />
            <CharacterCount count={this.props.characters.length} />
            <CharacterList  characters={this.props.characters} />
        </main>
        )
    }
}

//renders searchform component