import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Quiz.css";

import Questao from "../../DTO/Questao"; // importa a interface das questões
import jsonQuestoes from "../../data/perguntas.json"; // importa as perguntas do arquivo

function QuizPage() {
  const arrayQuestoes: Questao[] = jsonQuestoes;
  const navigate = useNavigate(); // usado para navegação entre páginas
  const location = useLocation(); // para pegar o valor passado pela URL
  const categoria = location.state?.categoria; // pega da url o valor da categoria que escolhemos na home

  const [questoes, setQuestoes] = useState<Questao[]>([]); // cria a variável e a ação que vai colocar um valor nela
  const [currIndex, setCurrIndex] = useState(0); // cria a variável e a ação que vai colocar um valor nela
  const [pontuacao, setPontuacao] = useState(0); // guarda quantas respostas certas a pessoa tem
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(
    null
  ); // índice da alternativa escolhida pelo usuário

  // Função para embaralhar e pegar 5 perguntas
  const getQuestoesAleatorias = (list: Questao[], count: number) => {
    const embaralhadas = [...list].sort(() => 0.5 - Math.random()); // aleatoriza a ordem das questões
    return embaralhadas.slice(0, count); // pega de 0 até o número de questões desejadas
  };

  useEffect(() => {
    if (!categoria) {
      // se a categoria estiver vazia
      navigate("/"); // retorna para a página principal
      return;
    }

    const filtradas = arrayQuestoes.filter(
      // pegar só as questões da categoria escolhida
      (q: Questao) => q.categoria === categoria // passa por qual critério a lista vai ser filtrada
    );

    const escolhidas = getQuestoesAleatorias(filtradas, 5); // chama a função que escolhe 5 questões aleatórias
    setQuestoes(escolhidas); // salva o valor que a função retornou na lista de questões
  }, [categoria, navigate]);

  if (questoes.length === 0) {
    // enquanto não tiver nada na lista e questões
    return <div>Carregando perguntas...</div>; // mostra na tela que está carregando
  }

  const currQuestao = questoes[currIndex]; // questão que vai ser mostrada na tela

  // Função chamada quando usuário clica em uma alternativa
  const escolherAlternativa = (resp: string) => {
    setRespostaSelecionada(resp);
  };

  // Função para passar para a próxima questão
  const proximaQuestao = () => {
    if (!respostaSelecionada) return; // não faz nada se não selecionou nada

    // verifica se a resposta está correta e soma 1 na pontuação
    if (respostaSelecionada === currQuestao.resposta) {
      setPontuacao(pontuacao + 1);
    }

    setRespostaSelecionada(""); // limpa a resposta escolhida

    if (currIndex + 1 < questoes.length) {
      setCurrIndex(currIndex + 1); // passa para a próxima questão
    } else {
      navigate("/resultado", { state: { pontuacao, total: questoes.length } }); // leva pra página de resultado e passa como input quantas questões a pessoa acertou
    }
  };

  return (
    <>
      <div className="card">
        <h2>Categoria: {categoria}</h2>
        <p>
          Pergunta {currIndex + 1} de {questoes.length}
        </p>

        <h3>{currQuestao.enunciado}</h3>
        <ul>
          {currQuestao.alternativas.map((option, idx) => (
            <li key={idx}>
              <button
                onClick={() => escolherAlternativa(option)}
                className={
                  respostaSelecionada === option
                    ? "botao_alternativa selected"
                    : "botao_alternativa"
                }
              >
                {option}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={proximaQuestao}
          disabled={!respostaSelecionada}
          className="botao_next"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default QuizPage;
