# Organizzazione cartella, 3 siti

Ultimo riordino: maggio 2026.

## Architettura deploy (IMPORTANTE)

Ci sono **2 progetti Vercel distinti** dentro questa repo:

1. **Cashback per Tutti + Network Energetico** → progetto Vercel con Root Directory = **questa cartella root**. Serve DUE domini (`cashbackpertutti.com` + `networkenergetico.com`) dagli stessi file. Per questo i file `.html` dei due siti **devono restare alla root**: il `vercel.json` fa i rewrite `/rete`, `/cashback` ecc. verso file alla root. NON spostarli in sottocartelle senza riconfigurare Vercel.
2. **metodoalcontrario** → progetto Vercel separato con Root Directory = `metodoalcontrario/`. Completamente isolato.

---

## Sito 1 — metodoalcontrario.com (ATTIVO)

Tutto dentro `metodoalcontrario/` (vedi struttura lì). Logo: `metodoalcontrario/logo metodoalcontrario rinnovato.png`.

## Sito 2 — Cashback per Tutti (ATTIVO) — `cashbackpertutti.com`

| File | Ruolo |
|---|---|
| `cashback.html` | Landing principale (`/cashback`) |
| `thankyoucashback.html` | Pagina ringraziamento + redirect WA |
| `privacy.html` | Privacy (brand Cashback) |
| `termini.html` | Termini (brand Cashback) |
| `cashback-mascot-logo.png` | Logo mascotte |
| `favicon.ico` / `favicon-32.png` / `apple-touch-icon.png` | Favicon set |

## Sito 3 — Network Energetico (FERMO) — `networkenergetico.com`

| File | Ruolo |
|---|---|
| `rete.html` | Landing principale con calcolatore MLM (`/rete`, default `/`) |
| `network.html` | Variante community (`/network`) |
| `thankyou.html` | Ringraziamento per rete |
| `thankyounetwork.html` | Ringraziamento per network |
| `network-energetico-logo.png` | Logo |
| `leadership png.png` | Immagine usata in network.html |
| `style.css` | CSS (solo pagine Network) |
| `script.js` | JS (solo pagine Network) |

## Condivisi / sistema

| File | Ruolo |
|---|---|
| `404.html` | Pagina 404 |
| `vercel.json` | Routing progetto Cashback+Network |
| `.vercelignore` | Esclude `_archive/`, doc e workspace dal deploy |
| `loghi/` | Loghi sorgente originali (mascotte Cashback, logo Network) |
| `CLAUDE.md` / `SKILL.md` | Documentazione agente (NON parte dei siti) |

## `_archive/` (asset non più usati, non deployati)

Spostati qui perché non referenziati da nessuna pagina attuale. Recuperabili se servono:
- `loghi brand/` — 11 loghi marketplace (Amazon, Conad, Decathlon, Ikea, ecc.)
- `video/` — 2 video testimonianze
- `stars-4.5 (1).jpg` — immagine recensioni
- `vercel.json.backup` — vecchio backup config
- `copy-analysis-network.txt` — note analisi copy Network
