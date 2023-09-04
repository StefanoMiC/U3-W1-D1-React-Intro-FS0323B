import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import MyComponent from "./components/MyComponent";
import ImageSection from "./components/ImageSection";
import ClassComponent from "./components/ClassComponent";
// questo è un react component, nella sua forma più basilare: una funzione che ritorna del JSX
// JSX ha una struttura HTML-like (simil-html) che ci permette l'inserimento di codice dinamico: variabili, funzioni, condizionali, cicli ecc...

// l'unica accortezza iniziale è cambiare tutti gli attributi "class" in "className" per evitare conflitti con la keyword "class" che in JS ci creerebbe una nuova Classe
// ci possono essere altri attributi che cambiano nel nome: for di una label diventa htmlFor,
// tag autoconclusivi hanno bisogno necessariamente della slash / prima della fine del tag, es: <img />, <input />, <hr />, <br />
// gli eventi inline passano da "onclick" a "onClick" (quindi in camelCase!)

// IMPORTANTE: un componente DEVE tornare un singolo elemento (div, o altro)

function App() {
  return (
    <div className="App">
      {/* sto renderizzando il contenuto di Header, che mi verrà scompattato nell'elemento che ritorna all'interno (un header) */}

      {/* possiamo passarci delle Prop, per far fluire un valore dal genitore al figlio, in questo caso la variabile logo */}
      {/* applicare attributi su un componente, significa creare una Prop (chiave-valore dentro all'oggetto delle props) */}
      <Header logoProp={logo} stefano="Stefano Miceli" />
      <ClassComponent mainTitle="Hello Epicode, Classes are Awesome!!" />
      {/* <ClassComponent mainTitle="Hello Epicoders!" /> */}
      <MyComponent title="Nuovo Titolo della pagina" btnText="aggiungi titolo" />
      <MyComponent title="Nuova Sezione" btnText="aggiungi sezione" />
      <MyComponent title="Nuovo Elemento" btnText="aggiungi elemento" />
      <MyComponent title="Nuova Lista" btnText="aggiungi lista" />

      <ImageSection
        src="https://images.unsplash.com/photo-1683009427590-dd987135e66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="lone persone standing in desert"
        title="lone persone standing in desert"
        btnText="Lookup NEOM"
        style={{ marginBottom: "3rem", border: "3px solid coral", padding: "60px" }}
        className="First-Img-Section"
      />
      <ImageSection
        src="https://images.unsplash.com/photo-1693298661836-1206649639ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80"
        alt="croatian street"
        title="croatian street"
        btnText="Lookup Jan Kopřiva"
      />
    </div>
  );
}

export default App;
