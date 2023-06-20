import React from 'react' /* Pacote responsavel pelo core do react */
import ReactDOM from 'react-dom/client' /* Integração do core do react com a DOM (document object model), ou seja, aqui estamos fazendo com que o react funcione nos browsers*/
import { App } from './App'

//definindo o "root" como elemento raiz para puxa-lo no arquivo index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
)
