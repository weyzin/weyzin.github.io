# Tsumanuma Tech Solutions — site

Portfólio pessoal/profissional de **Alexandre Tsumanuma** (weyzin) — Dev · Engenharia · IA · Cibersegurança.
Site estático (HTML/CSS/JS puro), pronto pra GitHub Pages.

## Estrutura

```
tsumanuma-tech/
├── index.html      # conteúdo e seções
├── styles.css      # tema escuro + acento neon
├── script.js       # nav, reveal, progresso de scroll
└── assets/         # coloque aqui foto, favicon, imagens de projetos
```

## Editar o conteúdo

Procure por `[EDITAR]` no `index.html` — marcam tudo que você deve preencher:

- **Projetos** — troque os placeholders pelos seus projetos reais.
- **E-mail** — confirme o e-mail público (hoje: `contato@tsumanuma.tech`).
- **LinkedIn** — confirme a URL.
- **og:url** — a URL final quando publicar.

## Ver localmente

```bash
cd tsumanuma-tech
python3 -m http.server 8000
# abra http://localhost:8000
```

## Publicar no GitHub Pages

### Opção A — site de usuário (`weyzin.github.io`)

1. Crie um repositório chamado **exatamente** `weyzin.github.io`.
2. Coloque estes arquivos na **raiz** do repositório (não numa subpasta).
3. Push para o branch `main`.
4. Em **Settings → Pages**, defina Source = `Deploy from a branch`, branch `main` / `/ (root)`.
5. Fica no ar em `https://weyzin.github.io/`.

### Opção B — repositório de projeto

1. Crie um repo (ex: `site`) e faça push destes arquivos.
2. **Settings → Pages** → branch `main` / root.
3. Fica em `https://weyzin.github.io/site/`.

> Domínio próprio (ex: `tsumanuma.tech`)? Adicione um arquivo `CNAME` com o domínio e configure o DNS.
