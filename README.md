# Alexandre Tsumanuma — Tsumanuma Tech Solutions

Portfólio pessoal de **Alexandre Tsumanuma** (weyzin) — Arquiteto de Cibersegurança e Engenheiro de Software.
Site estático (HTML/CSS/JS puro, sem build), bilíngue PT/EN, hospedado no GitHub Pages.

🔗 **No ar:** https://weyzin.github.io/

## Stack do site

- HTML5 + CSS puro (sem framework, sem build)
- JavaScript vanilla (i18n, animações, navegação)
- Fontes: Space Grotesk · Inter · JetBrains Mono (Google Fonts)
- Deploy: GitHub Pages (branch `main`, raiz)

## Estrutura

```
.
├── index.html          # conteúdo e todas as seções
├── styles.css          # identidade "console de arquiteto/SOC" (ink + ciano + âmbar)
├── script.js           # i18n PT/EN, nav, reveal, barra de progresso, troca de CV
├── .nojekyll           # desativa processamento Jekyll
└── assets/
    ├── favicon.png/.svg # monograma T.T
    ├── og-image.png/.svg# preview social (1200×630)
    ├── cv-pt.pdf        # CV em português (download)
    └── cv-en.pdf        # CV em inglês (download)
```

## Seções

`Expertise` · `Trajetória` · `Projetos` · `Idiomas` · `Stack` · `Processo` · `Contato`

## Recursos

- **Bilíngue PT/EN** — toggle no menu; persiste no `localStorage` e detecta o idioma do navegador.
  Todo texto traduzível usa `data-i18n="chave"`; as traduções ficam no objeto `I18N` em `script.js`.
- **Download de CV por idioma** — o botão troca entre `assets/cv-pt.pdf` e `assets/cv-en.pdf`
  conforme o idioma ativo (ver objeto `CV` em `script.js`).
- **Diagrama de arquitetura animado** no hero (SVG inline).
- **OG image** para preview em LinkedIn/WhatsApp.

## Editar conteúdo

- **Textos** → edite as chaves no objeto `I18N` (PT e EN) em `script.js`. Os valores no `index.html`
  são apenas o estado inicial antes do JS rodar; mantenha os dois em sincronia.
- **CV** → substitua `assets/cv-pt.pdf` e `assets/cv-en.pdf`.
- **OG image** → edite `assets/og-image.svg` e re-renderize (ver abaixo).
- Procure por `[EDITAR]` no `index.html` para pontos que dependem de você (ex: ferramentas de SIEM/SOC).

### Re-renderizar imagens (macOS, sem dependências)

```bash
cd assets
qlmanage -t -s 1200 -o . og-image.svg && mv og-image.svg.png og-image.png
sips -c 630 1200 og-image.png        # recorta a faixa central p/ 1200×630
```

## Rodar localmente

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Publicar

```bash
git add . && git commit -m "sua mensagem" && git push
```
O GitHub Pages reconstrói sozinho em ~1 min.

> Domínio próprio (ex: `tsumanuma.tech`)? Adicione um arquivo `CNAME` com o domínio e configure o DNS.
