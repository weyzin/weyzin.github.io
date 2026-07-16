# Alexandre Tsumanuma — Tsumanuma Tech Solutions

Portfólio pessoal de **Alexandre Tsumanuma** (weyzin) — Arquiteto de Cibersegurança e Engenheiro de Software.
Site estático (HTML/CSS/JS puro, sem build), **bilíngue PT/EN**, hospedado no GitHub Pages.

🔗 **No ar:** https://weyzin.github.io/

## Stack do site

- HTML5 + CSS puro (sem framework, sem build)
- JavaScript vanilla (i18n, animações, navegação)
- Fontes: Space Grotesk · Inter · JetBrains Mono (Google Fonts)
- Deploy: GitHub Pages (branch `main`, raiz)

## Estrutura

```
.
├── index.html            # conteúdo e todas as seções
├── styles.css            # identidade "console/SOC" (ink + ciano + âmbar)
├── script.js             # i18n PT/EN, nav, reveal, painel animado, CV por idioma
├── .nojekyll             # desativa processamento Jekyll
├── assets/
│   ├── favicon.png/.svg  # monograma T.T
│   ├── og-image.png/.svg # preview social (1200×630)
│   ├── cv-pt.pdf         # CV em português (download)
│   └── cv-en.pdf         # CV em inglês (download)
└── cv/
    ├── cv-pt.html        # fonte do CV (PT) — imprima p/ gerar o PDF
    └── cv-en.html        # fonte do CV (EN) — imprima p/ gerar o PDF
```

## Seções

`Expertise` · `Trajetória/Experience` · `Projetos/Work` · `Idiomas/Languages` · `Stack` · `Processo/Process` · `Contato`

## Recursos

- **Bilíngue PT/EN** — toggle no menu; persiste no `localStorage` e detecta o idioma do navegador.
  Todo texto traduzível usa `data-i18n="chave"`; as traduções ficam no objeto `I18N` em `script.js`.
- **Painel `system.status`** animado no hero (medidores + linha de terminal com efeito máquina de escrever).
- **Download de CV por idioma** — o botão troca entre `assets/cv-pt.pdf` e `assets/cv-en.pdf`
  conforme o idioma ativo (objeto `CV` em `script.js`).
- **OG image** para preview em LinkedIn/WhatsApp.
- Respeita `prefers-reduced-motion`.

## ⚠️ Cache-busting (importante ao editar CSS/JS)

O GitHub Pages/navegador cacheiam `styles.css` e `script.js`. Ao alterar qualquer um deles,
**incremente a versão** nas duas referências do `index.html` para forçar atualização:

```html
<link rel="stylesheet" href="styles.css?v=7" />
<script src="script.js?v=7"></script>
```

(Basta subir o número `?v=N`. Atual: `v=7`.)

## Editar conteúdo

- **Textos** → edite as chaves no objeto `I18N` (PT e EN) em `script.js`. Os valores no `index.html`
  são apenas o estado inicial antes do JS rodar; mantenha os dois em sincronia.
- **CV** → edite `cv/cv-pt.html` / `cv/cv-en.html`, gere o PDF (ver abaixo) e substitua em `assets/`.
- **OG image** → edite `assets/og-image.svg` e re-renderize (ver abaixo).
- Procure por `[EDITAR]` no `index.html` para pontos pendentes (ex: ferramentas de SIEM/SOC).

### Gerar o PDF do CV (navegador)

Abra `cv/cv-pt.html` (ou `-en`) e use **Imprimir → Salvar como PDF** (`Cmd+P`):
- **Desmarque** "Cabeçalhos e rodapés" (senão sai data/URL/nº de página)
- **Mantenha** "Gráficos de segundo plano" ligado (preserva o acento e o T.T)

### Re-renderizar imagens (macOS, sem dependências)

```bash
cd assets
# favicon (quadrado, 1:1)
qlmanage -t -s 512 -o . favicon.svg && mv favicon.svg.png favicon.png
# og-image: renderiza quadrado e recorta a faixa central p/ 1200×630
qlmanage -t -s 1200 -o . og-image.svg && mv og-image.svg.png og-image.png
sips -c 630 1200 og-image.png
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
