import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrusselsSupport() {
  return (
    <section className="section-dark support-page">
      <div className="page-width support-page-inner">
        <Link
          to="/"
          className="button button-outline support-back-button"
        >
          <ArrowLeft size={18} />
          Terug
        </Link>

        <div className="support-page-content">
          <img
            src="/assets/partners/bxl-ville-de-stad.svg"
            alt="Brussel - La Ville / De Stad"
            className="support-page-logo"
          />

          <span className="eyebrow">
            MET DE STEUN VAN
          </span>
          <p>
            Met de steun van Faouzia Hariche, schepen van Jeugd van de Stad Brussel
          </p>
        </div>
      </div>
    </section>
  );
}