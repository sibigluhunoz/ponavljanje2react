const DrugaFunkcijskaKomponenta = ({ name, age, children }) => {
    
    return (
        <div>
            <h2>Druga funkcijska komponenta</h2>
            <p>Zovem se {name} i imam {age} godina</p>
            <p>{children}</p>
        </div>
    );
};

export default DrugaFunkcijskaKomponenta;