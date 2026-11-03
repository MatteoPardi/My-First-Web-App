# My first web app

Visualizzatore interattivo di una sinusoide. Pagina statica composta da `index.html`, `style.css` e `script.js`: nessun bundler, nessun package manager e nessuna dipendenza da installare.

## Sviluppo

### Installazione

Non ci sono dipendenze da installare. Per servire i file in locale basta Python 3, presente sulla maggior parte dei sistemi.

### Avvio

Dalla root del repository:

```bash
python3 -m http.server 8000
```

Apri [http://127.0.0.1:8000](http://127.0.0.1:8000). Lo slider **Frequenza** ridisegna la sinusoide sul canvas.

### Test, build e lint

Il progetto non include test automatici, script di build né configurazione di lint.

Controllo di sintassi del JavaScript (richiede Node.js):

```bash
node --check script.js
```

Verifica che il server risponda (con il server già avviato sulla porta 8000):

```bash
curl -fsS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8000/
curl -fsS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8000/script.js
curl -fsS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8000/style.css
```

Atteso: `node --check` termina con codice 0 e ogni `curl` stampa `200`.
