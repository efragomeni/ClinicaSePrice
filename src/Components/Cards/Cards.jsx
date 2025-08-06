import "./cards.css";

export const Cards = ({ frase, imagen, tema }) => {
  const estilo =
    tema === "especialidades"
      ? {
          backgroundImage: `url(${imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }
      : {};

  return (
    <div className="container">
      <div className={tema} style={estilo}>
        {tema === "especialidades" && <div className="overlay" />}
        <p className="frase">{frase}</p>
      </div>
      <div className="cardContainer">CARD 2</div>
    </div>
  );
};