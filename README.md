# Gerador de cartas aleatórias

Projeto do curso Full Stack da 4Geeks Academy, desenvolvido a partir do repositório oficial [vanillajs-hello](https://github.com/4GeeksAcademy/vanillajs-hello).

## Executar localmente

Requer Node.js 20 ou superior.

```sh
npm install
npm start
```

Abra o endereço mostrado no terminal. Para gerar a versão de produção, execute `npm run build` e, para visualizá-la, `npm run preview`.

## Funcionalidades

- Carta aleatória ao carregar a página, com um dos quatro naipes e um dos 13 valores: 2–10, J, Q, K e A.
- Copas e ouros em vermelho; espadas e paus em preto.
- Botão para sortear uma nova carta.
- Sorteio automático a cada 10 segundos, com opção de desativar.
- Campos para ajustar a largura (180–440 px) e altura (240–600 px).
- Layout adaptável à tela e controles acessíveis pelo teclado.

Cada sorteio é independente; a mesma carta pode aparecer novamente, como em um sorteio com reposição. Em telas estreitas, a largura se limita ao espaço disponível.

## Organização

- `src/index.html`: estrutura e controles.
- `src/style.css`: aparência da carta e layout.
- `src/card.js`: valores, naipes e sorteio.
- `src/app.js`: atualização do DOM, eventos e temporizador.

O sorteio usa `Math.floor(Math.random() * tamanho)` para escolher um índice válido em cada lista. A inicialização ocorre em `window.onload`, conforme o exercício.

Enunciado: [Generador de Cartas Aleatorias](https://learn.4geeks.com/es/syllabus/spain-fs-pt-139/project/random-card-es#readme).
