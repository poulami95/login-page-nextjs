import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/images/Logo.png" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to My Website
        </h1>

        <p className="description">
          Hello,I am <b>Poulami</b>. I'm a Software Developer mainly working in Web Development. As a part of my learning i am trying to build a simple login page with basics of <b>Next.js</b>.For this I have borrowed a simple design from <a style={{color:"#224885",fontWeight:"bold"}} target="_blank" href="https://dribbble.com/shots/15392711-Dashboard-Login-Sign-Up">this link</a> and build two simple screens. I have plans to integrate the same login pages with google authentication as a part of my learning. Please visit the links and let me know how it looks 
        </p>

        <div className="grid">
          <Link href="/login/sign-up">
          <a className="card">
            <h3>Sign Up &rarr;</h3>
            <p>Visit this page to sign-up if you are not an user yet.</p>
          </a>
          </Link>
          <Link href="/login/sign-in">
          <a className="card">
            <h3>Login &rarr;</h3>
            <p>Visit this page to login if you already have an account.</p>
          </a>
          </Link>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color:#6056f5;
          color:#fff;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
          width:70%
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #224885;
          border-color: #224885;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
