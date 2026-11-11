# SEO local: Copacabana e Zona Sul do Rio

## O que foi implementado

- Página de entrada local: `/copacabana/`, com conteúdo próprio para a consulta por perfumes Jequiti em Copacabana e Zona Sul.
- Cinco páginas de produto detalhadas e indexáveis em `/perfumes/{produto}/`, com conteúdo exclusivo, links internos e perguntas frequentes.
- Titles, meta descriptions, canonical, Open Graph/Twitter, breadcrumbs e dados JSON-LD alinhados ao conteúdo visível.
- Sitemap atualizado com apenas URLs canônicas indexáveis; fragmentos `#top5`, `#faq` e semelhantes não são entradas independentes de sitemap.
- Links do Top 5 para cada detalhe e ligações de retorno entre páginas, página local e início.
- WhatsApp `+55 21 99701-1711` nos CTAs; as mensagens permitem consultar preço, estoque e opções para bairro/CEP.
- Imagens reais dos produtos, texto alternativo e desempenho móvel sem dependências externas de interface.

## Precisão local e limites importantes

A página usa Copacabana e bairros da Zona Sul como **intenção de busca e área para consulta**, sem inventar endereço, horário, loja física, frete grátis, cobertura garantida ou entrega no mesmo dia. O texto orienta o cliente a informar bairro/CEP e confirmar possibilidade, preço, prazo e custo antes da compra. Não foi adicionado um `LocalBusiness`/endereço ou coordenadas às páginas: endereço e operação presencial não foram informados. O JSON-LD `LocalBusiness` incompleto e os dados antigos de telefone/horário da home foram removidos; a home identifica a organização e o contato de WhatsApp, sem fingir uma unidade física.

Isso é deliberado. O Google explica que a classificação local depende principalmente de relevância, distância e destaque, e que não há como pedir ou pagar por uma posição melhor. O Perfil da Empresa deve representar dados reais. Crie/gerencie um Perfil somente se a operação atender aos critérios de interação presencial do Google (loja que recebe clientes ou serviço que vai ao cliente); se houver loja, informe endereço verdadeiro; se for uma operação de área de serviço elegível, siga as regras do Google para ocultar/definir a área. Não use endereço virtual, palavras-chave no nome da empresa ou vários perfis para bairros diferentes.

## Plano de publicação e rastreamento

1. Trocar `https://jequiti.example.com/` pelo domínio definitivo em canonical, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt` e `llms.txt`.
2. Confirmar que cada página e imagem abre em HTTPS; enviar o sitemap atualizado no Google Search Console.
3. Inspecionar a home, `/copacabana/` e as cinco páginas de produto no Search Console; pedir indexação após publicação, corrigir canonical/404 e revisar relatórios de páginas indexadas e experiência móvel.
4. Se houver Perfil da Empresa elegível, preencher nome real (sem acrescentar “Copacabana” ao nome se isso não for o nome comercial real), categoria principal precisa, telefone controlado, horário verdadeiro, site, fotos próprias e endereço/área segundo a operação. Manter os dados iguais aos canais oficiais.
5. Pedir avaliações somente a clientes reais, sem recompensa, texto roteirizado ou filtro de avaliações negativas; responder com cuidado e sem expor dados do cliente.
6. Medir no Search Console impressões, cliques e consultas contendo “Copacabana”, “Zona Sul”, “Rio de Janeiro” e os nomes dos cinco perfumes. Com Analytics/Tag Manager, adicionar medição dos cliques em WhatsApp somente após receber os IDs de propriedade e configurar consentimento conforme necessário.
7. Revisar preço, disponibilidade, notas e rotas sempre que o catálogo mudar. Não criar páginas quase idênticas para cada bairro; manter uma página local útil e páginas de produto realmente distintas.

## Consultas cobertas

- Comprar/consultar perfume Jequiti em Copacabana, Rio de Janeiro.
- Perfume Cebolinha, Patricia Abravanel Essence, Eliana Cristal, Adriane Galisteu ou Bem-Me-Quer Euforia em Copacabana.
- Perfumes Jequiti na Zona Sul, com bairros citados de forma natural: Copacabana, Leme, Ipanema, Leblon, Botafogo, Flamengo, Laranjeiras, Gávea, Lagoa e Urca.
- Consultar catálogo, preço atual, estoque e opções de atendimento/entrega via WhatsApp.

## Fontes oficiais Google

- [Melhorar classificação local no Google](https://support.google.com/business/answer/7091?hl=pt-BR) — informação completa, relevância, distância e destaque; não há garantia de posição.
- [Diretrizes para representar a empresa no Google](https://support.google.com/business/answer/3038177?hl=pt-BR) — identidade real, endereço/área de cobertura corretos e política de perfil.
- [Dados estruturados de empresa local](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=pt-br) — requisitos e validação para `LocalBusiness`; só incluir atributos verificáveis e correspondentes ao conteúdo da página.
