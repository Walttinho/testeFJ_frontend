# Sistema de Gerenciamento de Clientes

Este projeto é uma aplicação web frontend construída com React, projetada para gerenciar clientes, calcular rotas e realizar outras tarefas relacionadas. A aplicação fornece uma interface amigável para interagir com um servidor backend, permitindo a gestão eficiente de clientes para empresas de limpeza.

## Tecnologias Utilizadas

- **React**: Uma biblioteca JavaScript para construção de interfaces de usuário.
- **Axios**: Uma biblioteca popular para fazer requisições HTTP.
- **Tailwind CSS**: Um framework CSS de utilidade-primeiro para estilização rápida da aplicação.
- **Web Vitals**: Uma biblioteca para medir métricas de desempenho web.

## Estrutura do Projeto
```src/
├── App.js
├── components/
│   ├── Home.js
│   ├── ListarClientes.js
│   ├── CadastrarClientes.js
│   └── CalcularRota.js
├── index.js
public/
├── index.html
└── ...
package.json
README.md
.gitignore
postcss.config.js
tailwind.config.js
```



## Como Executar o Projeto

1. Clone o repositório para sua máquina local.
2. Navegue até a pasta do projeto.
3. Instale as dependências com `npm install` ou `yarn install`.
4. Inicie o servidor de desenvolvimento com `npm start` ou `yarn start`.
5. Acesse `http://localhost:3000` no seu navegador para ver a aplicação em funcionamento.

## Funcionalidades

- **Home**: A página inicial que permite navegar para outras funcionalidades do sistema.
- **Listar Clientes**: Permite listar todos os clientes cadastrados, com opções de filtragem.
- **Cadastrar Clientes**: Interface para cadastrar novos clientes.
- **Calcular Rota**: Funcionalidade para calcular a rota mais eficiente entre os clientes.

## Contribuição

Contribuições são bem-vindas! Por favor, leia o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes sobre como contribuir para este projeto.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.