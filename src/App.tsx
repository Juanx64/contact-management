import './App.css'
import { useState } from 'react'


export default function App() {

  const [contacts, setContacts] = useState([
    {nome: 'Jhon Doe', email: 'jhondoe@gmail.com', telefone: '(21) 98129-0049'},
    {nome: 'Maria Insane', email: 'mariaInsane@gmail.com', telefone: '(21) 99149-4349'}
])

  const [input, setInput] = useState({
    nome: '',
    email: '',
    telefone: ''
  })
  

  function Salvar(){
    setContacts(contacts => [...contacts, input])
  }

  function Limpar(){
    setInput({
    nome: '',
    email: '',
    telefone: ''
  })
  }

  return (

    <>
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
                <thead>
                  <tr>
                    <th>CONTATO</th>
                    <th>E-MAIL</th>
                    <th>TELEFONE</th>
                    <th>AÇÕES</th>
                  </tr>
                </thead>
                {contacts.map( (contacts, index) => (
                  <tbody key={index}>
                    <tr>
                      <td><p className="name-list">{contacts.nome}</p></td>
                      <td>{contacts.email}</td>
                      <td>{contacts.telefone}</td>
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
                  </tbody>
                ))}
              </table>
          </div>

        </section>

        <aside>
          <header className="header-aside">
            <p className="aside-title">Novo contato</p>
          </header>

          <p className="aside-paragraph">Adicione um novo contato a sua lista</p>

          <hr />
          <p className="aside-subparagraph">Nome Completo</p>
          <input
            value={input.nome}
            onChange={e => setInput({...input, nome: e.target.value})}
            type="text"
            name="name"
            className="input-aside"
            placeholder="Ex: Juan Riquelmi Santos Taveira"
          />
          <p className="aside-subparagraph">Email </p>
          <input
            value={input.email}
            onChange={e => setInput({...input, email: e.target.value})}
            type="email"
            name="email"
            className="input-aside"
            placeholder="usuario@gmail.com"
          />
          <p className="aside-subparagraph">Telefone </p>
          <input
            value={input.telefone}
            onChange={e => setInput({...input, telefone: e.target.value})}
            type="text"
            name="telefone"
            className="input-aside"
            placeholder="(00) 00000-0000 "
          />

          <button className="button-add" title="add" onClick={Salvar}>
            <img src="./src/img/user_add.png" alt="add" className="button-img" />
            <p className="button-text" >Salvar Contato</p>
          </button>

          <button className="aside-clean" onClick={Limpar}>Limpar os campos</button>

          

        </aside>
      </menu>
    </>
  )
}

