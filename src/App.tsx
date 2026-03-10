import './App.css'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'


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
  

  const dadosVazios = input.nome.trim() !== '' && (input.telefone.trim() === '' && input.email.trim() === '')
  const inputVazio = Object.values(input).every(valor => valor.trim() === '');
  const emailInvalido = !input.email.includes("@") && input.email.trim() !== ''


  function Salvar(){

    if (inputVazio) {
      toast.error("Preencha os campos existentes!")
    } 
    else if (dadosVazios) {
       toast.error("Preencha pelo menos um campo para contato!")
    } 
    else if (emailInvalido) {
      toast.error("O email deve conter @ !")
    }
    else {
      toast.success("Dados salvos!")
      setContacts(contacts => [...contacts, input])
    }
}

  function Limpar(){

    if (inputVazio) {
      toast.error("Campos já limpos")
    } else {
      toast.success("Campos apagados")
      setInput({
      nome: '',
      email: '',
      telefone: ''
  })}
  
}

  function Proximo(){
  setCurrentPage( page => page + 1)
}

  function Anterior(){
  setCurrentPage( page => page - 1)
}

  return (
    <>
    <div>
      <Toaster
      position='top-right'
      toastOptions={
        {
          duration: 2000,
          style: {
            fontFamily : "Inter"
          }
        }
      }
      />
    </div>
      <nav>
        <div className="nav-img">
          <img src="./src/img/contacts_icon.png" alt="contats_icon" />
        </div>
        <h1 className="nav-title">Painel de Contatos</h1>
      </nav>
      <menu>
        <section>
          <header className="header-section">
            <h2 className="section-title">Gerenciamento de Base</h2>

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
                <tbody>
                {currentContacts.map( (contacts, index) => (
                    <tr key={index}>
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
                ))}
              </tbody>
              </table>
             </div>
              <div className="navigation-section">
                <p className='page-count'>Mostrando página <strong>{currentPage}</strong> de {totalPages == 0 ? '1' : `${totalPages}`} </p>
                <div className="navigation-btn">
                  <button
                  type='button'
                  disabled={currentPage === 1}
                  onClick={Anterior}><img src="./src/img/arrow_left_icon.png" alt="left"/></button>
                  <button
                  type='button'
                  disabled={currentPage === totalPages || contacts.length == 0}
                  onClick={Proximo}><img src="./src/img/arrow_right_icon.png" alt="right"/></button>
                </div>
              </div>
        </section>
        <aside>
          <header className="header-aside">
            <h2 className="aside-title">Novo contato</h2>
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
            required
          />
          <p className="aside-subparagraph">Email </p>
          <input
            value={input.email}
            onChange={e => setInput({...input, email: e.target.value})}
            type="email"
            name="email"
            className="input-aside"
            placeholder="usuario@gmail.com"
            required
          />
          <p className="aside-subparagraph">Telefone </p>
          <input
            value={input.telefone}
            onChange={e => setInput({...input, telefone: e.target.value})}
            type="text"
            name="telefone"
            className="input-aside"
            placeholder="(00) 00000-0000"
          />
          <button className="button-add" title="add" onClick={Salvar}>
            <img src="./src/img/user_add.png" alt="add" className="button-img" />
            <p className="button-text">Salvar Contato</p>
          </button>
          <button className="aside-clean" onClick={Limpar}>Limpar os campos</button>
        </aside>
      </menu>
  
    </>
  )
}

