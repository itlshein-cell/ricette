import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Ricette Mie" },
      { name: "description", content: "Privacy Policy di Ricette Mie. Scopri come raccogliamo, utilizziamo e proteggiamo i tuoi dati." },
      { property: "og:title", content: "Privacy Policy — Ricette Mie" },
      { property: "og:description", content: "Privacy Policy di Ricette Mie. Scopri come raccogliamo, utilizziamo e proteggiamo i tuoi dati." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-bold md:text-4xl mb-4">
          Privacy Policy — Ricette Mie
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          <strong>Ultimo aggiornamento:</strong> maggio 2026
        </p>

        <article className="prose prose-sm max-w-none">
          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold mb-3">1. Introduzione</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Benvenuto su <strong>Ricette Mie</strong>. Questa Privacy Policy spiega come raccogliamo, utilizziamo e proteggiamo le informazioni degli utenti che visitano il nostro sito web.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>Titolare del sito:</strong> Abde Ssattar</li>
              <li><strong>Email di contatto:</strong> elmouakkit2017@gmail.com</li>
              <li><strong>Sito web:</strong> ricette-mie.vercel.app</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold mb-3">2. Dati raccolti</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Questo sito <strong>non raccoglie dati personali</strong> direttamente dagli utenti. Non è richiesta registrazione né inserimento di dati personali per navigare il sito.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Tuttavia, alcuni servizi di terze parti utilizzati dal sito potrebbero raccogliere dati in modo automatico (vedi sezione 4).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold mb-3">3. Cookie</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Questo sito utilizza cookie tecnici necessari al funzionamento del sito. Potrebbero essere utilizzati cookie di terze parti per la visualizzazione di annunci pubblicitari personalizzati tramite <strong>Google AdSense</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Puoi disabilitare i cookie nelle impostazioni del tuo browser in qualsiasi momento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold mb-3">4. Servizi di terze parti</h2>

            <div className="mb-5">
              <h3 className="font-semibold mb-2">Google AdSense</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Questo sito utilizza <strong>Google AdSense</strong> per la visualizzazione di annunci pubblicitari. Google potrebbe utilizzare cookie per mostrare annunci basati sulle tue visite precedenti. Puoi disattivare la pubblicità personalizzata visitando:{" "}
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  https://adssettings.google.com
                </a>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Per maggiori informazioni sulla Privacy Policy di Google:{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  https://policies.google.com/privacy
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Vercel</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Il sito è ospitato su <strong>Vercel</strong>, che potrebbe raccogliere dati tecnici come indirizzi IP per fini di sicurezza e analisi delle prestazioni.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Per maggiori informazioni:{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold mb-3">5. GDPR — Diritti degli utenti europei</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Se sei residente nell'Unione Europea, hai il diritto di:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-3">
              <li>Accedere ai tuoi dati personali</li>
              <li>Richiedere la cancellazione dei tuoi dati</li>
              <li>Opporti al trattamento dei tuoi dati</li>
              <li>Presentare un reclamo all'autorità di controllo</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Per esercitare questi diritti, contattaci a:{" "}
              <a href="mailto:elmouakkit2017@gmail.com" className="text-primary underline">
                elmouakkit2017@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold mb-3">6. Modifiche alla Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con la data di aggiornamento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold mb-3">7. Contatti</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Per qualsiasi domanda riguardante questa Privacy Policy:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>Email:</strong>{" "}
                <a href="mailto:elmouakkit2017@gmail.com" className="text-primary underline">
                  elmouakkit2017@gmail.com
                </a>
              </li>
              <li><strong>Sito:</strong> Ricette Mie</li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
