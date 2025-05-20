import perfil from './perfil.jpg';
import './App.css';
import jimmy from './jimmy.png';
import vic from './vic.jpg';

function App() {
  return (
    <div className="App">

      <div id="box">
            <img src={vic} id="vic"/>
        </div>

      <header>
        <div id="perfil">
          <img src={perfil} id="img_cabecalho" alt="Foto de perfil" />
          <h3 id="nome_header">Lucas A. Miguel</h3>
        </div>

        <div id="btn_cbc">
          <button id="btn_home" className="btn_head">
            Home <i id="casa" className="fa-solid fa-house icon_header"></i>
          </button>
          <button id="btn_pesquisa" className="btn_head">
            Pesquisa <i id="lupa" className="fa-solid fa-magnifying-glass icon_header"></i>
          </button>
        </div>
      </header>

      <main>
        <img src={jimmy} id="img_mega" alt="Imagem do Jimmy" />

        <div id="txt">
          <h1 id="name">Lucas A. Miguel</h1>
          <p id="description">
            Sou programador junior em HTML, CSS, JavaScript, C. Além de programador sou músico, fã de
            Megadeth, Iron Maiden, Black Sabbath.
          </p>
        </div>

        <iframe
          id="mega_vd"
          src="https://www.youtube.com/embed/L4EjOPYOrNs?si=j8WYo47zjGq7eyIo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </main>

      <footer>
        <button
          className="btn_footer"
          onClick={() => window.location.href = 'https://github.com/lucasandre46'}
        >
          <i id="git_icon" className="fa-brands fa-github"></i>
        </button>
        <button className="btn_footer">
          <i id="insta_icon" className="fa-brands fa-instagram"></i>
        </button>
        <button className="btn_footer">
          <i id="steam_icon" className="fa-brands fa-steam"></i>
        </button>
      </footer>
    </div>
  );
}

export default App;
