import lee from './leesin.png'
import './Home.css';

export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='Titulo'>
          Bem vindo Viajante, <br /> Este é o site oficial do Lee Sin
        </h1>
        <img src={lee} className="Lee-logo" alt="lee sin" />
        
        <div id='Botao-canal'>
          <a
            className="Canal-link"
            href="https://www.youtube.com/channel/UC6JcRg_JyLpZsg4TYFu7MEA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meu canal entre!
          </a>
        </div>
      </header>
    </div>
  );
}

