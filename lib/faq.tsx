import { EMAIL } from "@/lib/campanha"

export const faq: [string, React.ReactNode][] = [
  [
    "Como faço para participar da Campanha ABA?",
    <>
      Para participar, acesse o site www.campanhaaba.com.br, clique em Participe. Você será redirecionado para outra página
      (www.participecampanhaaba.com.br), onde poderá preencher o cadastro com nome completo, CPF, telefone e e-mail válido.
      Selecione a quantidade de bilhetes que desejar, efetue o pagamento do bilhete via PIX.
    </>,
  ],
  [
    "Preciso fazer uma doação para participar?",
    "Não. A participação está vinculada à realização da compra de bilhetes da campanha. Cada bilhete tem valor de R$ 70,00 e pode ser pago via PIX.",
  ],
  ["Qual o período de participação da Campanha ABA?", "O período de participação será de 18 de outubro de 2026 a 17 de dezembro de 2026."],
  [
    "Comprei um ou mais números e não recebi a confirmação. O que aconteceu?",
    <>
      A confirmação da compra e a geração do(s) número(s) não são imediatas e podem levar até 24 horas para serem processadas.
      Após esse prazo, acesse novamente o sistema para consultar seu(s) número(s). Se o problema persistir, entre em contato
      com a organização através do e-mail <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
    </>,
  ],
  [
    "Não tenho endereço de e-mail, posso colocar o e-mail de uma terceira pessoa (pai, mãe, amigo etc.)?",
    "Não é recomendado. O participante deve informar um e-mail válido de sua própria utilização, pois ele será usado para comunicações oficiais da campanha, incluindo eventual contato em caso de contemplação. O uso de dados de terceiros pode resultar em dificuldades na validação da participação e até mesmo em desclassificação, caso sejam identificadas inconsistências cadastrais.",
  ],
  [
    "Menor de idade pode participar?",
    "Não. A campanha é destinada exclusivamente a pessoas físicas maiores de 18 anos, residentes e domiciliadas no território nacional.",
  ],
  [
    "Como será a divulgação dos contemplados?",
    "Os contemplados serão informados por telefone e/ou e-mail cadastrados na campanha. Além disso, os resultados serão divulgados no site www.campanhaaba.com.br, com os nomes dos contemplados e os respectivos números da sorte, permanecendo disponíveis por até 15 dias após a publicação.",
  ],
  [
    "Qual será a premiação?",
    <>
      <p>Serão distribuídos os seguintes prêmios:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>01 Toyota Corolla Cross XR 2.0 Flex;</li>
        <li>01 Notebook Dell Inspiron 15 (13ª geração Intel Core i5);</li>
        <li>01 kit composto por Samsung Galaxy A56 5G e Echo Show 8 (3ª geração);</li>
        <li>01 Smart TV Philips 50” 4K;</li>
        <li>01 Smart TV AOC 40” Roku TV.</li>
      </ul>
    </>,
  ],
  [
    "Quando ocorrerão os sorteios?",
    "Será realizado um único sorteio, com base na extração da Loteria Federal de 20 de dezembro de 2026. A apuração dos contemplados ocorrerá em 21 de dezembro de 2026.",
  ],
  [
    "Preciso do comprovante do pagamento do bilhete para concorrer?",
    "É necessário guardar o comprovante até o encerramento da campanha para eventual necessidade de comprovação.",
  ],
]
