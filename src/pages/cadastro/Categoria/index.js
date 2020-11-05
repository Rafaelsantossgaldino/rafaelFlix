import React from 'react';
import { Link } from 'react-router-dom';
import PagesDefault from '../../../components/PagesDefault';


function CadastroCategoria(){
    return (
      <PagesDefault>
        <h1>Cadastro de Categoria</h1>

        

        <Link to="/">
          Ir para a Home
        </Link>
      </PagesDefault>
    )
  }

  export default  CadastroCategoria;