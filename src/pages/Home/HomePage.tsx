import { useNavigate } from "react-router-dom";
import './Home.css';

function HomePage() {
  const navigate = useNavigate();

  const EscolherCategoria = (categoria: string) => {
    navigate('/quiz', { state: { categoria } }); // redireciona para a página do quiz e envia junto qual a categoria escolhida
  };

  return (
    <div className="homepage">
      <h1>Bem vindo ao Quiz!</h1>
      <h3>Para iniciar, escolha uma categoria</h3>

      <div className="button-grid">
        <button
          className="categoria curiosidades"
          onClick={() => EscolherCategoria('Curiosidades e Fatos Inusitados')}
        >
          <i className="bi bi-lightbulb-fill icon"></i>
          Curiosidades
        </button>

        <button
          className="categoria tecnologia"
          onClick={() => EscolherCategoria('Tecnologia e Inovação')}
        >
          <i className="bi bi-cpu-fill icon"></i>
          Tecnologia e Inovação
        </button>

        <button
          className="categoria entretenimento"
          onClick={() => EscolherCategoria('Entretenimento')}
        >
          <i className="bi bi-film icon"></i>
          Entretenimento
        </button>

        <button
          className="categoria gerais"
          onClick={() => EscolherCategoria('Conhecimentos Gerais')}
        >
          <i className="bi bi-globe2 icon"></i>
          Conhecimentos Gerais
        </button>
      </div>
    </div>
  );
}

export default HomePage;
