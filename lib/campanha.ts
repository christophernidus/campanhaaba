export const PARTICIPE_URL = "https://participecampanhaaba.com.br/s/r7KwANWj"
// Já retorna 404 no site antigo; trocar pelo PDF/URL oficial do regulamento.
export const REGULAMENTO_URL = "https://campanhaaba.com.br/index.php/regulamento"
export const WHATSAPP_URL =
  "https://wa.me/5511917270720?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
export const EMAIL = "sustentabilidade@allianz.com.br"
export const RELATORIO_ATUAL = "/files/Relatorio-Bianual-ABA20242025.pdf"

export const nav = [
  { href: "#como-participar", label: "Como participar" },
  { href: "#premios", label: "Prêmios" },
  { href: "#ganhadores", label: "Ganhadores" },
  { href: REGULAMENTO_URL, label: "Regulamento" },
  { href: "#duvidas", label: "Dúvidas" },
]

export const datas = [
  { label: "Participação", valor: "18/10 a 17/12/2026" },
  { label: "Sorteio pela Loteria Federal", valor: "20/12/2026" },
  { label: "Resultado", valor: "21/12/2026" },
]

export const passos = [
  { icon: "/img/icon-bilhetes.jpg", titulo: "Compre seus bilhetes", texto: "Um ou mais bilhetes de R$ 70,00, pelo botão Participe." },
  { icon: "/img/icon-cadastro.jpg", titulo: "Faça seu cadastro", texto: "Informe seus dados pessoais e pague via PIX." },
  { icon: "/img/icon-receba.jpg", titulo: "Receba seus números", texto: "Seus números da sorte chegam em até 24 horas." },
]

export const premios = [
  { img: "/img/notebook-sansung.png", w: 599, h: 509, nome: "Notebook Dell Inspiron 15", detalhe: "13ª geração Intel Core i5" },
  { img: "/img/premio-echo-e-samsung.png", w: 764, h: 468, nome: "Galaxy A56 5G e Echo Show 8", detalhe: "Echo Show 8 de 3ª geração" },
  { img: "/img/TV-50-Pol.png", w: 524, h: 497, nome: "Smart TV Philips 50”", detalhe: "4K" },
  { img: "/img/TV-40-Pol.png", w: 681, h: 569, nome: "Smart TV AOC 40”", detalhe: "Roku TV" },
]

// shortcut: só o relatório 2024-2025 tem arquivo no site antigo; adicionar `href` aos demais quando houver PDF.
export const relatorios: { label: string; href?: string }[] = [
  { label: "Relatório do Triênio 2019-2021" },
  { label: "Relatório Bianual 2022-2023" },
  { label: "Relatório Bianual 2024-2025", href: RELATORIO_ATUAL },
  { label: "Relatório Bianual 2024-2025, em inglês" },
]

export const sociais = [
  { href: "https://www.abaassociacao.org/", label: "Site da ABA", icon: "site" },
  { href: "https://www.facebook.com/abaassociacao/?locale=pt_BR", label: "Facebook da ABA", icon: "facebook" },
  { href: "https://www.instagram.com/abaassociacao/", label: "Instagram da ABA", icon: "instagram" },
] as const
