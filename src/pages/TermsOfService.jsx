import { Link } from 'react-router-dom'

const styles = {
  wrap: { maxWidth: 720, margin: '0 auto', padding: '40px 20px 80px', lineHeight: 1.7 },
  h1: { marginBottom: 4 },
  h2: { marginTop: 32, fontSize: '1.2rem' },
  muted: { color: '#52606d', marginTop: 0 },
}

function TermsOfService() {
  return (
    <div style={styles.wrap}>
      <h1 style={styles.h1}>Terms of Service</h1>
      <p style={styles.muted}>Last updated: 25 October 2026</p>

      <p>
        By using Eduzyra, you agree to these terms. If you do not agree, please
        do not use the app.
      </p>

      <h2 style={styles.h2}>1. The service</h2>
      <p>
        Eduzyra is an education platform. We may change, suspend or discontinue
        any part of the service at any time.
      </p>

      <h2 style={styles.h2}>2. Your account</h2>
      <p>
        You are responsible for keeping your account secure and for all
        activity under it.
      </p>

      <h2 style={styles.h2}>3. Acceptable use</h2>
      <p>
        You agree not to use Eduzyra for anything unlawful, to harm others, to
        disrupt or attempt to break the security of the app, or to access it
        without authorisation.
      </p>

      <h2 style={styles.h2}>4. Content and intellectual property</h2>
      <p>
        The design, code and content of Eduzyra belong to us or our licensors.
        You keep the rights to content you provide, and you give us permission
        to store and process it as needed to run the service.
      </p>

      <h2 style={styles.h2}>5. Disclaimer</h2>
      <p>
        Eduzyra is provided "as is". We do not promise that it will always be
        available or free of errors.
      </p>

      <h2 style={styles.h2}>6. Limitation of liability</h2>
      <p>
        To the extent allowed by law, Eduzyra is not liable for indirect or
        consequential losses arising from your use of the service.
      </p>

      <h2 style={styles.h2}>7. Termination</h2>
      <p>
        We may suspend or close accounts that break these terms. You may stop
        using Eduzyra at any time.
      </p>

      <h2 style={styles.h2}>8. Changes to these terms</h2>
      <p>
        We may update these terms. If you keep using Eduzyra after a change, you
        accept the updated terms.
      </p>

      <h2 style={styles.h2}>9. Contact us</h2>
      <p>
        <a href="mailto:eduzyra65@gmail.com">eduzyra65@gmail.com</a>
      </p>

      <p style={{ marginTop: 32 }}>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </p>
    </div>
  )
}

export default TermsOfService
