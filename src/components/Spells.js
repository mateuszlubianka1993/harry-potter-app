import React from 'react';
import {connect} from 'react-redux';
import {getSpells} from '../actions';
import '../styles/page.css';
import '../styles/Spells.css';

class Spells extends React.Component {

    componentDidMount() {
        this.props.getSpells();
    };

    render() {
        const {spells} = this.props;
        const spellsList = spells.map(spell=>{
            return(
                <div className="card spell-card" key={spell._id}>
                    <div className="card-body">
                        <h5 className="card-title spell-name">{spell.spell}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Type: {spell.type}</h6>
                        <p className="card-text">Effect: {spell.effect}</p>
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
