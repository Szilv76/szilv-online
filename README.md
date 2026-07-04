# szilv.online

Modern, reszponzív React landing page Vite alapon.

## Fejlesztés

```bash
npm install
npm run dev
```

## Ellenőrzés

```bash
npm run lint
npm run build
```

## Új oldal hozzáadása

1. Hozz létre egy komponenst a `src/pages` mappában.
2. Importáld a `src/App.jsx` fájlba.
3. Adj hozzá egy új `<Route>` elemet.

## Deploy

A projekt közvetlenül importálható Vercelbe. A `vercel.json` gondoskodik arról, hogy a kliensoldali React Router útvonalak közvetlen megnyitáskor is működjenek. Build parancs: `npm run build`, kimeneti mappa: `dist`.
