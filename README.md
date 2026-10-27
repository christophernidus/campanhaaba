# Campanha ABA 2026

Propostas de redesign do site da [Ação Beneficente da ABA 2026](https://campanhaaba.com.br/), a campanha de bilhetes da Associação Beneficente dos Funcionários do Grupo Allianz Seguros.

| Rota | Conteúdo |
| --- | --- |
| `/` | Página de escolha com a prévia ao vivo das duas propostas |
| `/proposta-1` | Tema geométrico: formas da paleta oficial e linha do tempo da campanha |
| `/proposta-2` | Tema bilhete: o site como um bilhete destacável |

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Estrutura

- `lib/campanha.ts`: links, datas, prêmios e relatórios, compartilhados pelas duas propostas.
- `lib/faq.tsx`: as perguntas frequentes (texto oficial).
- `components/concreto/` e `components/bilhete/`: componentes de cada proposta.
- `app/proposta-*/`: rota e CSS de cada proposta.
- `PRODUCT.md`: fatos da campanha e restrições de marca.

Feito com Next.js, Tailwind CSS e shadcn/ui.

## Pendências

- O link do regulamento (`REGULAMENTO_URL` em `lib/campanha.ts`) aponta para uma página que retorna 404 no site atual.
- Os relatórios 2019-2021, 2022-2023 e a versão em inglês de 2024-2025 ainda não têm PDF.
