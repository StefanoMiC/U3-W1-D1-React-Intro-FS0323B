import React from "react";
// in React possiamo anche creare componenti come CLASSI
// i componenti a Classe hanno una sintassi più corposa, ma offrono anche più funzionalità
// una fra tutte è la gestione di una memoria interna (che vedremo), e ciclo di vita

// Component è il componente a classe più originario e generico possibile,
// definito nella libreria di React
class ClassComponent extends React.Component {
  // questa classe è un componente React
  render() {
    // senza render() il componente a classe non funziona!
    console.log("CLASS PROPS", this.props);

    return <h1>{this.props.mainTitle}</h1>;
  }
}

export default ClassComponent;
