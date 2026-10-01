import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <section className="section-light legal-page">
      <div className="page-width legal-page-inner">
        <Link
          to="/"
          className="legal-back-link"
        >
          <ArrowLeft size={18} />
          Terug naar home
        </Link>

        <span className="eyebrow">
          PRIVACY
        </span>

        <h1>
          PRIVACYVERKLARING
        </h1>

        <p className="legal-intro">
          Brussel Noord Basket vzw respecteert je privacy.
          In deze privacyverklaring leggen we uit welke
          persoonsgegevens we via deze website verwerken,
          waarom we dat doen en welke rechten je hebt.
        </p>

        <div className="legal-content">
          <section>
            <h2>1. Wie verwerkt je gegevens?</h2>

            <p>
  De verwerkingsverantwoordelijke is
  <strong> Brussel Noord Basket vzw</strong>.
</p>

<p>
  Maatschappelijke zetel: Antwerpselaan 40, 1000 Brussel
  <br />
  Ondernemingsnummer: <strong>1039.061.822</strong>
  <br />
  E-mail:{' '}
  <a href="mailto:bxlnoordbasket@gmail.com">
    bxlnoordbasket@gmail.com
  </a>
</p>
          </section>

          <section>
            <h2>2. Welke gegevens verzamelen we?</h2>

            <p>
              Wanneer je het contactformulier gebruikt, kunnen we
              de volgende gegevens verwerken:
            </p>

            <ul>
              <li>je naam;</li>
              <li>je e-mailadres;</li>
              <li>het onderwerp van je bericht;</li>
              <li>de inhoud van je bericht;</li>
              <li>
                technische gegevens die nodig zijn om het formulier
                veilig te verwerken.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Waarom verwerken we deze gegevens?</h2>

            <p>
              We gebruiken deze gegevens uitsluitend om je vraag
              of bericht te behandelen, je te antwoorden en
              eventuele verdere opvolging te doen.
            </p>

            <p>
              De verwerking gebeurt op basis van ons gerechtvaardigd
              belang om vragen en communicatie over de club te
              behandelen. Wanneer je bericht betrekking heeft op
              een mogelijke inschrijving of overeenkomst, kan de
              verwerking ook nodig zijn om stappen te nemen op jouw
              verzoek vóór het sluiten van een overeenkomst.
            </p>
          </section>

          <section>
            <h2>4. Contactformulier en Formspree</h2>

            <p>
              Ons contactformulier wordt technisch verwerkt via
              Formspree. Wanneer je het formulier verstuurt, worden
              de gegevens die je invult aan Formspree doorgegeven
              zodat het bericht aan ons kan worden bezorgd.
            </p>

            <p>
              Formspree host zijn diensten via Amazon Web Services
              in de Verenigde Staten en geeft aan voor doorgiften
              als verwerker gebruik te maken van Standard
              Contractual Clauses (SCC&apos;s).
            </p>
          </section>

          <section>
            <h2>5. Hoe lang bewaren we je gegevens?</h2>

            <p>
              We bewaren contactgegevens niet langer dan nodig is
              om je vraag te behandelen en eventuele noodzakelijke
              opvolging te doen. Wanneer gegevens langer bewaard
              moeten worden om te voldoen aan een wettelijke
              verplichting of voor een lopend dossier, worden ze
              alleen daarvoor bewaard.
            </p>
          </section>

          <section>
            <h2>6. Delen we je gegevens?</h2>

            <p>
              We verkopen je persoonsgegevens niet. Gegevens worden
              alleen gedeeld met dienstverleners wanneer dat nodig
              is om de website of het contactformulier te laten
              functioneren, of wanneer we daartoe wettelijk
              verplicht zijn.
            </p>
          </section>

          <section>
            <h2>7. Cookies en tracking</h2>

            <p>
              Deze website gebruikt momenteel geen
              analytics- of marketingcookies en bevat geen
              advertentietrackers. Als dit in de toekomst verandert,
              passen we deze privacyverklaring aan en voorzien we
              waar nodig een toestemmingsmechanisme.
            </p>
          </section>

          <section>
            <h2>8. Je rechten</h2>

            <p>
              Je kunt ons onder meer vragen om je persoonsgegevens
              in te kijken, te verbeteren, te wissen of de verwerking
              ervan te beperken. In bepaalde gevallen kun je ook
              bezwaar maken tegen de verwerking.
            </p>

            <p>
              Stuur daarvoor een e-mail naar{' '}
              <a href="mailto:bxlnoordbasket@gmail.com">
                bxlnoordbasket@gmail.com
              </a>.
            </p>

            <p>
              Je hebt daarnaast het recht om een klacht in te dienen
              bij de Belgische Gegevensbeschermingsautoriteit.
            </p>

            <a
              href="https://www.dataprotectionauthority.be/"
              target="_blank"
              rel="noreferrer"
            >
              Gegevensbeschermingsautoriteit
            </a>
          </section>

          <section>
            <h2>9. Wijzigingen</h2>

            <p>
              We kunnen deze privacyverklaring aanpassen wanneer
              onze website of gegevensverwerking verandert.
            </p>

            <p>
              Laatste update: 2 oktober 2026.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
