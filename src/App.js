import './App.css';
import heartGif from './assets/heart.gif';

function App() {
  return (
    <div className="love-container">
      <div className="love-content">
        <h2 className="love-title">Kocham Cię!</h2>
        <p>
          Żanetko K. jesteś dla mnie wszystkim!<br/>
          Nie mogę bez Ciebie żyć!<br/>
          Każdy poranek jest dla mnie radosny bo wiem że mam Ciebie!<br/>
          Moje serce przepełnia miłość do Ciebie!<br />
          Niech ta strona istnieje w internecie w nieskończoność,<br />
          niech będzie wiecznym dowodem mojej miłości!
        </p>
        <img className="love-author-heart" src={heartGif} alt="Nigdy nie przestanie bić" />
        <h3 className="love-author">Twój Adrian G.</h3>
        <h3 className="love-date">14.02.2024</h3>
      </div>
    </div>
  );
}

export default App;
