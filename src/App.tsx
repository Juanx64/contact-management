import './App.css'
import { useState } from 'react'



export default function App() {


type contactsProps = {
  nome: string
  email: string
  telefone: string
}

const [contacts, setContacts] = useState<contactsProps[]>([])
const [currentPage, setCurrentPage] = useState(1)
const contactsPerPage = 5
const totalPages = Math.ceil(contacts.length / contactsPerPage)
const startIndex = (currentPage - 1) * contactsPerPage
const endIndex = startIndex + contactsPerPage
const currentContacts = contacts.slice(startIndex, endIndex)


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

  function Proximo(){
  setCurrentPage( page => page + 1)
}

  function Anterior(){
  setCurrentPage( page => page - 1)
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
                {currentContacts.map( (contacts, index) => (
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

              <div className="navigation-section">
                <p className='pag-count'>Mostrando página {currentPage} de {totalPages == 0 ? '1' : `${totalPages}`} </p>
                <div className="navigation-btn">
                  <button
                  type='button'
                  disabled={currentPage === 1}
                  onClick={Anterior}
                  className='anterior-btn'> Anterior </button>
                  <button
                  type='button'
                  disabled={currentPage === totalPages || contacts.length == 0}
                  onClick={Proximo}
                  className='proximo-btn'> Próximo </button>
                </div>
              </div>

              
              
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

