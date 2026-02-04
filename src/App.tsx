import './App.css'
import { useState } from 'react'

export default function App() {

  const [contacts, setContatcs] = useState<String[]>([
    'Explorar cidades',
    'Jogar Lego City',
    'Comer feijão'
  ])

  return (

    <main>
      <nav>
        <div className="nav-img">
          <img src="./src/img/contacts_icon.png" alt="contats_icon" />
        </div>
        <p className="nav-title">Painel de Contatos</p>
      </nav>

      <menu>
        <section>
          <header className="header-section">
            <p className="section-title">Gerenciamento de Base</p>

            <div className="section-filtros">
              <img src="./src/img/list_filter.png" alt="filtro" />
              <p className="filter-title">Filtros</p>
            </div>
          </header>

          <div className="table-contact">
            <table>
                <tr>
                  <th>CONTATO</th>
                  <th>E-MAIL</th>
                  <th>TELEFONE</th>
                  <th>AÇÕES</th>
                </tr>
                <tr>
                  <td><p className="name-list">João Silva</p></td>
                  <td>joão@gmail.com</td>
                  <td>(11) 98888-7777</td>
                  <td>
                    <div className="table-img">
                      <button>
                        <img src="./src/img/edit_icon.png" alt="edit"/>
                      </button>
                      <button>
                        <img src="./src/img/delete_icon.png" alt="delete"/>
                      </button>
                    </div>
                    </td>
                </tr>
              </table>
          </div>

          {/*<div className="nav-section">
            <p>CONTATO</p>
            <p>E-MAIL</p>
            <p>TELEFONE</p>
            <p>AÇÕES</p>
          </div>*/}

          {/*<div className='list-section'>
            <p className='name-section'>João Silva</p>
            <p>joão@gmail.com</p>
            <p>(11) 98888-7777</p>
            <div className="img-list">
              <img src="./src/img/edit_icon.png" alt="edit" />
              <img src="./src/img/delete_icon.png" alt="delete" />
            </div>
          </div>*/}
          

          {/*contacts.map((item) => (
            <p>{item}</p>
          ))*/}

          
        </section>

        <aside>
          <header className="header-aside">
            <p className="aside-title">Novo contato</p>
          </header>

          <p className="aside-paragraph">Adicione um novo contato a sua lista</p>

          <hr />
          <p className="aside-subparagraph">Nome Completo</p>
          <input
            type="text"
            name="name"
            id="name"
            className="input-aside"
            placeholder="Ex: Juan Riquelmi Santos Taveira"
          />
          <p className="aside-subparagraph">Email </p>
          <input
            type="email"
            name="email"
            id="email"
            className="input-aside"
            placeholder="usuario@gmail.com"
          />
          <p className="aside-subparagraph">Telefone </p>
          <input
            type="text"
            name="telefone"
            id="telefone"
            className="input-aside"
            placeholder="(00) 00000-0000 "
          />

          <button className="button-add" title="add">
            <img src="./src/img/user_add.png" alt="add" className="button-img" />
            <p className="button-text">Salvar Contato</p>
          </button>

          <button className="aside-clean">Limpar os campos</button>

          

        </aside>
      </menu>
    </main>
  )
}

