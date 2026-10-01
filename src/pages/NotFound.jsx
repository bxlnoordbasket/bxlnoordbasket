import { ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="page-width not-found-content">
        <span className="not-found-code">
          404
        </span>

        <span className="eyebrow">
          PAGINA NIET GEVONDEN
        </span>

        <h1>
          HIER IS GEEN
          <br />
          <span>WEDSTRIJD.</span>
        </h1>

        <p>
          De pagina die je zoekt bestaat niet, is verplaatst
          of de link is niet meer geldig.
        </p>

        <div className="not-found-actions">
          <Link
            className="button button-green"
            to="/"
          >
            <ArrowLeft size={18} />
            Terug naar home
          </Link>

          <Link
            className="button button-outline"
            to="/contact"
          >
            <Mail size={18} />
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}