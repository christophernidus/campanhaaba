# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dois públicos, confirmados pelo dono: colaboradores e corretores do Grupo Allianz, que compram e divulgam a campanha, e o público geral que recebe o link (redes sociais, WhatsApp), muitas vezes no celular. O trabalho de ambos: entender a campanha em segundos, confiar que é séria e comprar um ou mais bilhetes.

## Product Purpose

Ação Beneficente da ABA 2026: campanha anual de bilhetes da ABA (Associação Beneficente dos Funcionários do Grupo Allianz Seguros). Cada bilhete de R$ 70,00 (PIX) financia os projetos sociais da ABA e dá números da sorte para um sorteio único de prêmios. Sucesso = cliques no botão Participe, que leva ao checkout externo em participecampanhaaba.com.br.

## Positioning

É solidariedade com recompensa, organizada por uma associação de funcionários de uma seguradora grande: a seriedade da Allianz somada à causa social da ABA, que completa 30 anos (banner do relatório 2024-2025).

## Operating Context

- Checkout fica fora do site (participecampanhaaba.com.br/s/r7KwANWj); o site só informa e encaminha.
- Participação de 18/10/2026 a 17/12/2026; sorteio único pela Loteria Federal de 20/12/2026; apuração em 21/12/2026; resultados publicados no site por até 15 dias.
- Contato: WhatsApp +55 11 91727-0720 e sustentabilidade@allianz.com.br.
- Exige Certificado de Autorização SPA/ME e regulamento completo (o link atual do regulamento retorna 404 e precisa ser substituído pelo dono).

## Capabilities and Constraints

- Next.js (App Router) + Tailwind v4 + shadcn/ui; página única com âncoras; redirects dos caminhos antigos.
- Somente maiores de 18 anos, pessoas físicas residentes no Brasil.
- Prêmios: 1º Toyota Corolla Cross XR 2.0 Flex; 2º Notebook Dell Inspiron 15 (13ª geração Intel Core i5); 3º kit Samsung Galaxy A56 5G e Echo Show 8 (3ª geração); 4º Smart TV Philips 50” 4K; 5º Smart TV AOC 40” Roku TV.
- FAQ, texto legal e disclaimers são texto oficial e não são reescritos.

## Brand Commitments

- Paleta do site oficial campanhaaba.com.br (pedido explícito do dono): vinho #890E43, celeste #0096CB, azul Allianz #003886, rosas #F1CAE1 e #EEC2DB, verde #54C126 e a faixa colorida do rodapé.
- Logos Allianz e ABA (public/img), coloridos para fundo claro.
- Tom pedido: institucional e sóbrio, mas moderno; o dono rejeitou a primeira versão por parecer "site de 2010".

## Evidence on Hand

- public/img/premios-podio.png (pódio com todos os prêmios, fundo transparente) e public/img/corolla-cross.png (carro isolado), fornecidos pelo dono.
- Fotos isoladas dos prêmios 2º a 5º (PNG transparente), ícones dos 3 passos, banner do relatório 2024-2025 (ilustração dos 30 anos da ABA), faixa colorida.
- public/files/Relatorio-Bianual-ABA20242025.pdf.
- Ausentes, nunca inventar: fotos de pessoas atendidas, números de impacto da ABA, depoimentos, quantidade de bilhetes vendidos, ganhadores (só após 21/12/2026), PDFs dos relatórios 2019-2021, 2022-2023 e versão em inglês.

## Product Principles

1. A ação (Participe) está sempre a um toque, no celular inclusive.
2. Confiança vem de fatos oficiais visíveis: datas, preço, Loteria Federal, autorização.
3. A causa e o prêmio andam juntos; nenhum dos dois apaga o outro.
4. Nada inventado: só fatos e imagens fornecidos pela campanha.

## Accessibility & Inclusion

Público amplo e majoritariamente mobile: contraste AA, alvos de toque de 44px, texto mínimo de 16px, respeito a prefers-reduced-motion.
