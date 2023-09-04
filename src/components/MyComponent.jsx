// questo è un file pronto per diventare un componente React
// il modo più semplice per creare un componente React è utilizzare una funzione
// questa funzione dovrà ritornare del codice JSX

// versione di componente funzionale con return esplicito
// const MyComponent = props => {
//   console.log("PROPS", props);
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <button>{props.btnText}</button>
//     </div>
//   );
// };

// per buona prassi chiamate la funzione esattamente come il file,
// con tanto di nomenclatura PascalCase

// versione di componente funzionale abbreviato (return implicito)
const MyComponent = props => (
  // props è un OGGETTO
  // avrà come proprietà TUTTE le prop che io ho passato all'invocazione del componente
  // props.title
  // props.btnText

  <>
    {/* <></> questo è un React.Fragment, serve a ritornare un unico elemento dalla funzione, senza renderizzarlo nella pagina finale */}
    <h3>{props.title}</h3>
    <button>{props.btnText}</button>
  </>
);

export default MyComponent;
// questa riga è fondamentale, e permette al vostro componente
// di essere importato da qualche parte!
