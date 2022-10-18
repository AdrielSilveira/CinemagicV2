import './App.css'
import '../../index.css';

function NavBar() {
  return (
        <nav className='navBar'>
        <ul className="menu">
          <li><a href="http://127.0.0.1:5173">&nbsp;&nbsp;Home&nbsp;&nbsp;</a></li>
          <li><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Filmes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>                  
                  <ul>
                          <li><a href="/Filmes">Cadastro</a></li>
                          <li><a href="#">Listagem</a></li>
                  </ul></li>
          <li><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;Gêneros&nbsp;&nbsp;&nbsp;&nbsp;</a>
                  <ul>
                  <li><a href="FormGender">Cadastro</a></li>
                  <li><a href="#">Listagem</a></li>
                  </ul>
            </li>
          <li><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;Sessões&nbsp;&nbsp;&nbsp;&nbsp;</a>
                  <ul>
                  <li><a href="#">Cadastro</a></li>
                  <li><a href="#">Listagem</a></li>
                  </ul></li>
          <li><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;Usuários&nbsp;&nbsp;&nbsp;</a>
                  <ul>
                  <li><a href="#">Cadastro</a></li>
                  <li><a href="#">Listagem</a></li>
                  </ul>
          </li>
          <li>
                <a href="/Login">Login</a>
          </li>
      </ul>
      </nav>
  )
}

export default NavBar
