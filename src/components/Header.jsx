const Header = props => {
  // props è un oggetto che OGNI componente riceve, magari vuoto.
  // In questo caso avrà una proprietà corrispondente all'attributo logoProp che abbiamo passato da fuori al componente
  console.log("PROPS", props);
  return (
    <header className="App-header">
      <img src={props.logoProp} className="App-logo" alt="logo" />
      <p style={{ backgroundColor: "red" }}>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {props.stefano.toUpperCase()}, Learn React!
      </a>
    </header>
  );
};

export default Header;
