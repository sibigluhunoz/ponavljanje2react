import { Component } from 'react';

class KlasnaKomponenta extends Component {
    render() {
        const { name, age } = this.props
        return (
            <div>
                <h2>Klasna komponenta</h2>
                <p>Zovem se {name} i imam {age} godina</p>
            </div>
        );
    }
};

export default KlasnaKomponenta;