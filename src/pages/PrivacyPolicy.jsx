import { Link } from 'react-router-dom'

const styles = {
  wrap: { maxWidth: 720, margin: '0 auto', padding: '40px 20px 80px', lineHeight: 1.7 },
  h1: { marginBottom: 4 },
  h2: { marginTop: 32, fontSize: '1.2rem' },
  muted: { color: '#52606d', marginTop: 0 },
}

function PrivacyPolicy() {
  return (
    <div style={styles.wrap}>
      <h1 style={styles.h1}>Privacy Policy</h1>
      <p style={styles.muted}>Last updated: 25 October 2026</p>

      <p>
        Eduzyra ("we", "our", "us") respects your privacy. This policy explains
        what information we collect when you use Eduzyra, how we use it, and the
        choices you have.
      </p>

      <h2 style={styles.h2}>1. Information we collect</h2>
      <p>
        When you sign in with Google, we receive your name, email address and
        profile picture. We also store the information you provide while using
        the app, such as content you create.
      </p>

      <h2 style={styles.h2}>2. How we use your information</h2>
      <ul>
        <li>To create your account and sign you in</li>
        <li>To provide, maintain and improve Eduzyra</li>
        <li>To contact you about your account or the service when needed</li>
      </ul>

      <h2 style={styles.h2}>3. Sharing of information</h2>
      <p>
        We do not sell or rent your personal information. We only share it with
        service providers that help us run the app (for example, hosting
        providers and Google sign-in), or when the law requires it.
      </p>

      <h2 style={styles.h2}>4. Google user data</h2>
      <p>
        Eduzyra uses information received from Google only to provide the
        features described above. Our use of information received from Google
        APIs adheres to the{' '}
        <a href="https://developers.google.com/terms/api-services-user-data-policy">
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>

      <h2 style={styles.h2}>5. Data security</h2>
      <p>
        We take reasonable steps to protect your information. No method of
        transmission over the internet is completely secure, so we cannot
        guarantee absolute security.
      </p>

      <h2 style={styles.h2}>6. Your rights</h2>
      <p>
        You can ask us to access, correct or delete your data at any time. You
        can also remove Eduzyra's access to your Google account from your Google
        Account settings. To make a request, email{' '}
        <a href="mailto:eduzyra65@gmail.com">eduzyra65@gmail.com</a>.
      </p>

      <h2 style={styles.h2}>7. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Changes will be posted on
        this page with a new "Last updated" date.
      </p>

      <h2 style={styles.h2}>8. Contact us</h2>
      <p>
        Questions about this policy:{' '}
        <a href="mailto:eduzyra65@gmail.com">eduzyra65@gmail.com</a>
      </p>

      <p style={{ marginTop: 32 }}>
        <Link to="/terms-of-service">Terms of Service</Link>
      </p>
    </div>
  )
}

export default PrivacyPolicy
