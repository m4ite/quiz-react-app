import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Result.css";

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { total, pontuacao } = location.state || {};

  useEffect(() => {
    if (total === undefined || pontuacao === undefined) {
      navigate("/");
    }
  }, [total, pontuacao, navigate]);

  const erros = total - pontuacao;
  const porcentagem = Math.round((pontuacao / total) * 100);

  return (
    <div className="container text-center mt-5">
      <h2>Resultado do Quiz</h2>

      <div className="row justify-content-center mt-4">
        <div className="col-md-3">
          <div className="card card-score bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Total de Perguntas</h5>
              <p className="card-text display-6">{total}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card card-score bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">pontuacao</h5>
              <p className="card-text display-6">{pontuacao}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card card-score bg-danger text-white">
            <div className="card-body">
              <h5 className="card-title">Erros</h5>
              <p className="card-text display-6">{erros}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 d-flex justify-content-center">
        <div
          className="circle"
          style={{ "--percent": porcentagem } as React.CSSProperties}
        >
          <div className="inner-circle">
            <span>{porcentagem}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
