import { useNavigate } from "react-router-dom";
import { FaLightbulb, FaMicrochip, FaFilm, FaGlobe } from "react-icons/fa"; // importa os ícones
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
          <FaLightbulb className="icon" />
          Curiosidades
        </button>

        <button
          className="categoria tecnologia"
          onClick={() => EscolherCategoria('Tecnologia e Inovação')}
        >
          <FaMicrochip className="icon" />
          Tecnologia e Inovação
        </button>

        <button
          className="categoria entretenimento"
          onClick={() => EscolherCategoria('Entretenimento')}
        >
          <FaFilm className="icon" />
          Entretenimento
        </button>

        <button
          className="categoria gerais"
          onClick={() => EscolherCategoria('Conhecimentos Gerais')}
        >
          <FaGlobe className="icon" />
          Conhecimentos Gerais
        </button>
      </div>
    </div>
  );
}

export default HomePage;
