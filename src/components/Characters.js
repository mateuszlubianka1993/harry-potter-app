import React from 'react';
import {connect} from 'react-redux';
import {getCharacters} from '../actions';

class Characters extends React.Component {
    componentDidMount() {
        this.props.getCharacters();
    };
    render() {
        return(
            <div>
                <div className="container">
                <div className="page-header">
                    <h2>Characters</h2>
                </div>
                <div className="page-list">
                    
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
