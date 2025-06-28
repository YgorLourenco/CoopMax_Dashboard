# CoopMax Dashboard: Seu Amigo Cooperativo Inteligente 🤝

## O que é o CoopMax Dashboard? 🌟

Pense no CoopMax Dashboard como um assistente super inteligente para sua cooperativa\! Ele te ajuda a entender melhor seus cooperados (membros da cooperativa), ver quais produtos eles já usam, quais produtos estão disponíveis e, o mais legal, sugere produtos que podem ser perfeitos para cada um deles. Tudo isso de um jeito fácil e visual, como um painel de controle de um carro.

Ele mostra informações como:

  * **Quem é o cooperado?** Dados como nome, CPF/CNPJ, tipo (se é pessoa física, jurídica ou rural), idade, telefone e profissão.
  * **O que ele já tem?** Uma lista dos produtos que o cooperado já contratou, como conta corrente, poupança, cartões, etc., com a data de contratação e o status.
  * **O que podemos oferecer?** Uma lista de todos os produtos que a cooperativa tem disponíveis, separados por categorias como Crédito, Investimentos, Seguros e Serviços.
  * **Sugestões inteligentes\!** O sistema analisa o perfil do cooperado e mostra quais produtos ele tem mais "chance" de querer ou precisar, dando até um "script" (uma fala) para o atendente usar.
  * **Métricas gerais:** No rodapé, você encontra dados importantes sobre o desempenho geral, como o IAP (Índice de Aproveitamento de Produtos) atual e potencial, e a oportunidade de receita.

Basicamente, é uma ferramenta para ajudar a cooperativa a crescer e a atender seus cooperados de forma mais personalizada\!

## Tecnologias e Dependências Utilizadas 🛠️

Este projeto foi construído usando algumas das ferramentas mais modernas e poderosas para criar sites e aplicativos. Pense nelas como os "blocos de montar" e as "ferramentas de construção" que os desenvolvedores usam:

  * **Next.js:** É como um "super-construtor" para sites React. Ele ajuda a criar páginas muito rápidas e que funcionam bem, tanto para quem usa (você, no navegador) quanto para quem desenvolve.
  * **React:** É a "linguagem" principal para construir a interface visual do dashboard – tudo o que você vê e clica na tela.
  * **TypeScript:** Pense nele como um "verificador de receitas" para o código JavaScript. Ele ajuda a evitar erros antes mesmo de o programa começar a rodar, tornando tudo mais seguro e organizado.
  * **Tailwind CSS:** É como um "kit de tintas e pincéis" que torna super fácil e rápido estilizar o visual do dashboard, aplicando cores, tamanhos e layouts de forma eficiente.

### Principais "Peças" (Dependências npm) Usadas:

As "peças" são pequenos pacotes de código que adicionam funcionalidades específicas. Algumas das mais importantes são:

  * `@radix-ui/react-*`: Um conjunto de "blocos de montar" prontos para criar componentes interativos como menus, popovers, caixas de seleção, etc.
  * `lucide-react`: Uma biblioteca de ícones bonitos e fáceis de usar no dashboard.
  * `recharts`: Usado para criar os gráficos e visualizações de dados que você vê no dashboard.
  * `react-hook-form` e `zod`: Ajudam a lidar com formulários e a garantir que as informações digitadas estejam corretas.
  * `tailwind-merge` e `class-variance-authority`: Ferramentas que trabalham com Tailwind CSS para criar estilos de forma mais flexível.

## Como Colocar o CoopMax Dashboard Para Rodar no Seu Computador (Windows) 💻

Não se preocupe se você não entende de programação\! Vou explicar passo a passo, como se estivesse explicando para uma criança de 5 anos.

### 1\. O que você precisa ter instalado no seu computador (As Ferramentas Mágicas) 🛠️

Para o CoopMax Dashboard funcionar, ele precisa de algumas "ferramentas mágicas" instaladas no seu computador. Imagine que são os ingredientes para fazer uma receita\!

  * **Git e GitHub Desktop:**

      * **O que é o Git?** É como um "caderno de anotações" para programadores. Ele guarda todas as mudanças que são feitas no código do programa.
      * **O que é o GitHub Desktop?** É um aplicativo que torna o Git muito mais fácil de usar, com botões e menus, sem precisar digitar comandos complicados. É o jeito mais fácil de "pegar" o código do CoopMax Dashboard da internet para o seu computador.
      * **Como conseguir:** Baixe e instale o GitHub Desktop neste link: [Download GitHub Desktop](https://desktop.github.com/). Siga as instruções de instalação.

  * **Node.js e npm (Node Package Manager):**

      * **O que é o Node.js?** É como um "motor" que permite que o computador entenda e rode o código JavaScript do CoopMax Dashboard.
      * **O que é o npm?** É como uma "loja de aplicativos" para o Node.js. Ele baixa todas as "peças" (chamadas dependências ou pacotes) que o CoopMax Dashboard precisa para funcionar.
      * **Como conseguir:** Baixe e instale o Node.js (ele já vem com o npm junto\!) neste link: [Download Node.js](https://nodejs.org/en/download/). Recomendo a versão LTS (Long Term Support), que é a mais estável. Siga as instruções de instalação.

  * **Visual Studio Code (VS Code):**

      * **O que é?** É um "editor de texto inteligente" para programadores. Você vai usá-lo para "abrir a receita" do CoopMax Dashboard (os arquivos do programa).
      * **Como conseguir:** Baixe e instale o VS Code neste link: [Download Visual Studio Code](https://code.visualstudio.com/download). Siga as instruções de instalação.

### 2\. Baixando o Projeto para o Seu Computador (Pegando a Receita) 📥

Agora que você tem as ferramentas, vamos "pegar a receita" do CoopMax Dashboard:

1.  **Abra o GitHub Desktop:** Inicie o aplicativo GitHub Desktop que você instalou.
2.  **Clone o repositório:**
      * No GitHub Desktop, clique em `File` (Arquivo) no canto superior esquerdo e depois em `Clone repository...` (Clonar repositório...).
      * Na janela que aparece, clique na aba `URL`.
      * No campo `Repository URL` (URL do repositório), cole o seguinte endereço: `https://github.com/ygorlourenco/CoopMax_Dashboard`
      * No campo `Local Path` (Caminho local), escolha onde você quer salvar a pasta do projeto no seu computador (por exemplo, `C:\Users\SeuUsuario\Documentos\CoopMax_Dashboard`).
      * Clique no botão `Clone` (Clonar).
      * Pronto\! O GitHub Desktop vai baixar todos os arquivos do projeto para a pasta que você escolheu.

### 3\. Abrindo o Projeto no VS Code (Lendo a Receita) 📖

Depois de baixar os arquivos, vamos abri-los no VS Code:

1.  **Abra o VS Code:** Inicie o aplicativo Visual Studio Code.
2.  **Abra a pasta do projeto:**
      * No VS Code, clique em `File` (Arquivo) no canto superior esquerdo e depois em `Open Folder...` (Abrir Pasta...).
      * Navegue até a pasta `CoopMax_Dashboard` que você baixou no passo anterior e clique em `Select Folder` (Selecionar Pasta).
      * Agora você verá todos os arquivos do projeto no lado esquerdo do VS Code.

### 4\. Instalando as "Peças" do Projeto (Preparando os Ingredientes) 📦

O CoopMax Dashboard precisa de algumas "peças" adicionais para funcionar. O `npm` vai baixá-las para você:

1.  **Abra o Terminal no VS Code:** No VS Code, vá no menu superior em `Terminal` e clique em `New Terminal` (Novo Terminal). Uma janela preta vai aparecer na parte de baixo do VS Code.
2.  **Instale as dependências:** Na janela do terminal, digite o seguinte comando e pressione Enter:
    ```bash
    npm install
    ```
    Espere um pouco. O npm vai baixar um monte de coisas. Quando terminar, você verá uma mensagem parecida com `added X packages` (adicionados X pacotes).

### 5\. Rodando o CoopMax Dashboard (Cozinhando a Receita) ▶️

Quase lá\! Agora vamos "ligar" o Dashboard:

1.  **Inicie o projeto:** No mesmo terminal do VS Code, digite o seguinte comando e pressione Enter:

    ```bash
    npm run dev
    ```

    Você verá algumas mensagens. Procure por uma linha que diga algo como:
    `Local: http://localhost:3000` (o número pode ser diferente, como `5173` ou `8080`).

2.  **Abra no navegador:** Abra seu navegador de internet (Chrome, Firefox, Edge, etc.) e digite o endereço que apareceu no terminal (por exemplo, `http://localhost:3000`).

Parabéns\! O CoopMax Dashboard deve estar funcionando no seu navegador\! Agora você pode selecionar um cooperado de exemplo na caixa de busca para ver as informações.

## Acesse o Protótipo Online\! ▶️

Você também pode ver o CoopMax Dashboard funcionando online, sem precisar instalar nada\! Acesse por este link: [CoopMax Dashboard Online](https://coop-max-dashboard.vercel.app/)