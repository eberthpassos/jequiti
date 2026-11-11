# Landing page Jequiti — Top 5 perfumes e SEO local no Rio

Site estático para apresentar cinco colônias Jequiti, detalhar o perfil olfativo de cada uma e iniciar atendimento pelo WhatsApp. Inclui páginas individuais dos produtos e uma página de consulta com foco em Copacabana/Zona Sul do Rio. É uma revenda independente, não o site oficial da Jequiti.

## Páginas
| Rota/arquivo | Conteúdo |
|---|---|
| `index.html` | Landing page principal, Top 5, quiz, comparativo, FAQ e links internos |
| `copacabana/index.html` | Página de consulta local para Copacabana e Zona Sul — sem inventar endereço ou prometer entrega |
| `perfumes/cebolinha-jequiti/index.html` | Cebolinha 25 ml: perfil Fougère Refrescante |
| `perfumes/patricia-abravanel-essence/index.html` | Patricia Abravanel Essence 25 ml: Oriental Elegante |
| `perfumes/eliana-cristal/index.html` | Eliana Cristal 25 ml: Floral Sensual |
| `perfumes/adriane-galisteu/index.html` | Adriane Galisteu 25 ml: Chypre Vibrante |
| `perfumes/bem-me-quer-euforia/index.html` | Bem-Me-Quer Euforia 25 ml: Floral Vibrante |

## Recursos SEO/GEO/local
- Metadados individuais por página, canonical, Open Graph/Twitter, titles/descriptions e breadcrumbs.
- JSON-LD Product, BreadcrumbList, FAQPage, ItemList e WebPage, sem preço, review ou estoque inventados.
- `sitemap.xml`, `robots.txt`, `llms.txt` e links internos entre a home, páginas locais e páginas de produto.
- Menu móvel acessível com botão hambúrguer, estado expandido anunciado e fechamento por toque, Escape ou navegação.
- Conteúdo local para consultas de Copacabana e bairros da Zona Sul, com confirmação de disponibilidade por bairro/CEP.
- WhatsApp informado: `+55 21 99701-1711` (`5521997011711`), configurado na home e nos detalhes.
- Packshots em `assets/products/`; fontes documentadas em `FONTES-IMAGENS.md`.

## Rodar localmente
Na raiz do projeto:
```bash
python3 -m http.server 8000 --bind 0.0.0.0
```
Acesse `/`, `/copacabana/` e as rotas de cada produto.

## Antes de publicar
1. Substitua `https://jequiti.example.com/` pelo domínio real em canonical, metadados, JSON-LD, `sitemap.xml`, `robots.txt` e `llms.txt`.
2. Confirme que opções de atendimento/entrega mencionadas correspondem à operação real; as páginas pedem consulta por bairro/CEP e não prometem cobertura sem confirmação.
3. Envie o sitemap ao Google Search Console após publicar e use a inspeção de URL para solicitar rastreamento.
4. Configure o Perfil da Empresa no Google apenas se a operação atender às regras de elegibilidade; não use endereço, horário, coordenadas ou nome comercial fictícios.
5. Confirme licença para uso comercial das imagens de terceiros antes de veicular a página.

## Documentação
- `ESTRATEGIA-SEO-GEO.md` — pesquisa e estratégia da landing page.
- `SEO-LOCAL-COPACABANA.md` — estratégia de SEO local e checklist de indexação.
- `FONTES-IMAGENS.md` — fontes, dimensões e observações sobre direitos de imagem.

> Preços, catálogo, estoque, prazo e custo de entrega mudam. Confirme no WhatsApp antes de concluir a compra.
