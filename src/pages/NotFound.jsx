import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="not-found">
      <p>/ 404</p>
      <h1>Ez az oldal még nem létezik.</h1>
      <Link to="/">← Vissza a főoldalra</Link>
    </main>
  )
}
