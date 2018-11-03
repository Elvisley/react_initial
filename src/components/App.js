import React from 'react';

import PlacarContainer from './PlacarContainer'

const dados = {
    partida:{
        estadio: "Maracana/RJ",
        data: "10/10/2015",
        hora: "19h",
    },
    casa: {
        nome: "Flamengo"
    },
    visitante: {
        nome: "Palmeiras"
    }
};

export default class App extends React.Component {

    render(){
        return (
            <PlacarContainer {... dados} />
        );
    }

}

/*
 <PlacarContainer partida={dados.partida}
                             casa={dados.casa}
                             visitante={dados.visitante} />
                              */
