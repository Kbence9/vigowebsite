# vigowebsite

Egyoldalas bemutatkozó weboldal a **Vigo Bausystem** számára: padlásterek és tetőterek
gipszkartonos kivitelezése. Az oldalon szolgáltatások, referenciaképek galériája és
ajánlatkérő űrlap található.

**Élő oldal:** <https://vigowebsite.vercel.app>

**Stack:** React 19 (Create React App) · React Bootstrap · AOS és react-scroll-parallax animációk · Formspree (űrlap) · Google reCAPTCHA

## Státusz

Élesben fut (v1.0.9), karbantartás alatt. A [VigoWeb](https://github.com/Kbence9/VigoWeb)
repó ennek az oldalnak a korábbi változata.

## Futtatás helyben

**Előfeltétel:** Node.js 18+

```bash
git clone https://github.com/Kbence9/vigowebsite.git
cd vigowebsite
npm install
npm start
```

Az oldal a <http://localhost:3000> címen nyílik meg.

| Parancs | Mit csinál |
| --- | --- |
| `npm start` | fejlesztői szerver |
| `npm run build` | éles build a `build/` mappába |
| `npm test` | tesztek |

## Ajánlatkérő űrlap

Az űrlap a Formspree szolgáltatásnak küldi el az adatokat, a spam ellen reCAPTCHA
véd. Mindkettő a `src/App.jsx` fájlban van beállítva; saját példányhoz a Formspree-
űrlap azonosítóját és a reCAPTCHA site key-t kell lecserélni.

## Mappák

```
src/App.jsx        az oldal szekciói és az ajánlatkérő űrlap
src/Pages/Main.jsx fő oldal
src/*.jpg          galéria- és hero-képek
pictures/          logóváltozatok
public/            index.html, manifest, meta-adatok
```

## Telepítés

A `main` ág a Vercelre települ.
