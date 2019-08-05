import React from 'react';
import {connect} from 'react-redux';
import {getSpells} from '../actions';

class Spells extends React.Component {

    componentDidMount() {
        this.props.getSpells();
    };

    render() {
        const {spells} = this.props;
        const spellsList = spells.map(spell=>{
            return(
                <div class="card" key={spell._id}>
                    <div class="card-body">
                        <h5 class="card-title">{spell.spell}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Type: {spell.type}</h6>
                        <p class="card-text">Effect: {spell.effect}</p>
                    </div>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="page-header">
                    <h2>List of spells</h2>
                </div>
                <div className="page-list">
                    {spellsList}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return{
        spells: state.spells
    }
};

export default connect(mapStateToProps, {getSpells}) (Spells);
