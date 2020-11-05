import React from 'react';
import { Link } from 'react-router-dom';
import PagesDefault from '../../../components/PagesDefault';


function CadastroVideo(){
    return (
      <PagesDefault>
        <h1>Cadastro de Video</h1>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PagesDefault>
    )
  }

  export default  CadastroVideo;