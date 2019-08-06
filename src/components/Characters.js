import React from 'react';
import {connect} from 'react-redux';
import {getCharacters} from '../actions';
import '../styles/page.css';

class Characters extends React.Component {
    componentDidMount() {
        this.props.getCharacters();
    };

    render() {
        const {characters} = this.props;
        const charactersList = characters.map(character=>{
            return(
                <div className="card" key={character.name} style={{width: '350px'}}>
                    <img src={character.image} className="card-img-top" alt="character"/>
                    <div className="card-body">
                        <h5 className="card-title">{`${character.name} `}<span class="badge badge-secondary">{character.species}</span></h5>
                        <h6>{`House: ${character.house} `}<span class="badge badge-secondary">{character.hogwartsStudent ? 'student' : 'staff'}</span></h6>
                        <h6>{character.dateOfBirth}</h6>
                        <p className="card-text">Patronus: {character.patronus}</p>
                        <p className="card-text">Actor: {character.actor}</p>
                    </div>
                </div>
            );
        });
        return(
            <div>
                <div className="container">
                <div className="page-header">
                    <h2>Characters</h2>
                </div>
                <div className="page-list">
                    {charactersList}
                </div>
            </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {characters: state.characters}
};

export default connect(mapStateToProps, {getCharacters}) (Characters);
