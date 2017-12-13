import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';
// import SearchResults from './searchresults';

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
            searchResults: this.props.characters
        }
    }

    currentInput(input) {
        const filteredResults = this.props.characters.filter(character => {
            let characterName = character.name.toLowerCase();
            let inputName = input.toLowerCase()
            //looks for substring --> return index of input; if values isnt -1 it's a match
            return characterName.indexOf(inputName) > -1
        })
        this.setState({
            inputValue: input,
            searchResults: filteredResults 
        })
    }

    results(list) {
        this.setState({searchResults: list})
    }

    render() {
        return (
        <main className='live-search'>
            <SearchForm onChange={userInput => this.currentInput(userInput)}/>
            <CharacterCount count={this.state.searchResults.length} />
            {/* <SearchResults results={this.state.searchResults} /> */}
            {/* <CharacterList onChange={filtered => this.results(filtered)} /> */}
            <CharacterList  characters={this.state.searchResults} />
        </main>
        )
    }
}

//renders searchform component