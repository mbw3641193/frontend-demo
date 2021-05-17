import React from 'react';
import { getCats, ICat } from '../../api';
import '../../App.css';
import { Sex } from '../../enums';

interface IState {
    catsList: ICat[]
}

class Cats extends React.Component {
    state: IState = {
        catsList: []
    }
    componentDidMount = async () => {
        let catsList = await getCats();
        this.setState({
            catsList
        })
    }
    render() {
        const { catsList } = this.state;
        return <>
            <h1>这是 class component</h1>
            <ul>
                <h2>Male</h2>
                {
                    catsList.filter(cat => cat.gender === Sex.MALE).map(cat => cat.name).sort().map((name, index) => <li key={index}>{name}</li>)
                }
            </ul>
            <ul>
                <h2>Female</h2>
                {
                    catsList.filter(cat => cat.gender === Sex.FEMALE).map(cat => cat.name).sort().map((name, index) => <li key={index}>{name}</li>)
                }
            </ul>
        </>
    }
}

export default Cats;