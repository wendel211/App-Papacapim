
## O projeto Papacapim (versão front-end) 
Foi desenvolvido com foco em simplicidade e escalabilidade, utilizando tecnologias modernas que permitem fácil manutenção e futuras expansões. As principais ferramentas utilizadas são:

- **React Native**: Escolhido por sua capacidade de criar aplicações mobile nativas usando uma única base de código JavaScript. Isso facilita o desenvolvimento para plataformas Android e iOS simultaneamente.
  
Papacapim - Rede Social (Versão Inicial)
Este repositório contém a versão inicial do aplicativo Papacapim, uma rede social inspirada no Twitter, desenvolvida como parte da disciplina de Desenvolvimento Mobile. Nesta versão, o projeto contém apenas o Design da Interface (Parte 1), sem integração com a API, utilizando dados criados pelo Figma para prototipação.

## Tecnologias Utilizadas
Nesta seção, detalhamos as principais tecnologias utilizadas no desenvolvimento do front-end do Papacapim e por que elas foram escolhidas para essa etapa do projeto.

1. React Native
Descrição: Framework JavaScript open-source que permite a criação de aplicativos nativos para Android e iOS com uma única base de código.
Justificativa: O React Native foi escolhido por sua flexibilidade, desempenho e capacidade de criar apps multiplataforma com um único código. Isso reduz o tempo de desenvolvimento e manutenção, mantendo uma experiência nativa.
2. Expo
Descrição: Plataforma e conjunto de ferramentas que simplificam o desenvolvimento com React Native, facilitando o deploy e testes.
Justificativa: O Expo facilita a prototipação rápida, permitindo rodar e testar o app em diferentes dispositivos sem a necessidade de configurações complicadas de ambiente. Para a fase inicial do projeto, onde o foco está na prototipação da interface, o Expo oferece uma solução ideal.
3. @react-navigation
Descrição: Biblioteca de navegação para React Native, usada para gerenciar a transição entre telas e a navegação do aplicativo.
Justificativa: A escolha do @react-navigation se deu pela sua ampla adoção na comunidade React Native e sua capacidade de criar navegações complexas (stack, tab, drawer) com facilidade. A navegação é fluida e suporta transições suaves entre as telas de login, feed, perfil e criação de postagens.
4. StyleSheet.create
Descrição: API do React Native para criar e aplicar estilos diretamente nos componentes, utilizando uma sintaxe semelhante ao CSS.
Justificativa: O uso do StyleSheet.create possibilita uma melhor otimização de performance e oferece uma forma nativa de aplicar estilizações consistentes em diferentes plataformas. O código fica mais organizado, e os estilos são reusáveis.


- **Expo**: O uso do Expo permite desenvolvimento rápido e fácil, sem a necessidade de configurar ambientes de build complexos. Também oferece APIs poderosas para interações com sensores, câmera, notificações, etc.

- **@react-navigation**: Esta biblioteca foi essencial para a criação da navegação entre as telas do Papacapim, como a tela de login, feed de postagens e perfil de usuário. Ela possibilita navegação fluida e organizada, com suporte para navegações em stack e tabs.

- **StyleSheet.create**: Utilizado para a estilização dos componentes de forma nativa, ajudando na performance e na consistência visual entre as plataformas.

Memória atualizada
Aqui está uma versão detalhada do README para o projeto Papacapim (Parte 1: Design de Interface), com foco em destacar as tecnologias de front-end e os elementos que tornam a documentação completa e bem vista por avaliadores:

Papacapim - Rede Social (Versão Inicial)
Este repositório contém a versão inicial do aplicativo Papacapim, uma rede social inspirada no Twitter, desenvolvida como parte da disciplina de Desenvolvimento Mobile. Nesta versão, o projeto contém apenas o Design da Interface (Parte 1), sem integração com a API, utilizando dados fictícios para prototipação.

Funcionalidades
A versão atual do aplicativo inclui as seguintes telas e simulações:

Tela de Login: Interface para o usuário inserir e-mail e senha. Ao clicar no botão "Entrar", o app simula um login bem-sucedido e redireciona para o feed de postagens.

Tela de Cadastro: Permite simular a criação de uma conta. O usuário insere nome, e-mail e senha, e, ao finalizar, é redirecionado para o feed.

Feed de Postagens: Exibe postagens fictícias, simulando a experiência de um feed de rede social.

Tela de Perfil: Exibe dados fictícios do usuário logado, permitindo que o usuário visualize suas informações.

Tela de Criação de Postagem: Simula a criação de uma nova postagem, redirecionando o usuário para o feed após a criação.

Observação: As telas nesta versão não realizam operações reais de backend. A navegação entre telas e funcionalidades é apenas simulada.

Estrutura de Diretórios
A estrutura do projeto foi organizada de forma a separar as diferentes responsabilidades dentro do código. Isso garante que o projeto seja fácil de manter e escalar no futuro.

Instalação e Execução
Siga as etapas abaixo para rodar o projeto localmente:

Pré-requisitos
Antes de iniciar, certifique-se de que você tenha o Node.js instalado em sua máquina. Além disso, instale o Expo CLI globalmente, caso ainda não tenha:

bash
Copiar código
npm install -g expo-cli
Passo a passo para rodar o projeto
Clone este repositório:
bash
Copiar código
git clone https://github.com/wendel211/App-Papacapim.git
Navegue até o diretório do projeto:
bash
Copiar código
cd papacapim
Instale as dependências:
bash
Copiar código
npm install
Inicie o projeto:
bash
Copiar código
expo start
Escaneie o QR code com o aplicativo Expo Go em seu dispositivo móvel ou utilize um emulador Android/iOS.
Funcionalidades Futuras
Esta versão contém apenas a parte inicial do desenvolvimento, focada no design da interface. Futuras implementações incluem:

Integração com a API Papacapim para gerenciamento de contas (login, registro e edição de perfil).
Postagens reais: Enviar postagens e visualizá-las em tempo real com a API.
Busca de perfis e postagens: Implementar uma busca funcional dentro da rede social.
Curtidas e comentários: Permitir que usuários interajam com postagens.
Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Contato
Desenvolvido por Wendel Muniz.
