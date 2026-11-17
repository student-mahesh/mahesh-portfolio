import { Helmet } from 'react-helmet-async'
import ErrorBoundary from '../components/common/ErrorBoundary'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Certifications from '../sections/Certifications'
import Contact from '../sections/Contact'
import { PROFILE } from '../data/nav'

const SECTIONS = [Hero, About, Skills, Projects, Experience, Certifications, Contact]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{`${PROFILE.name} — ${PROFILE.title}`}</title>
        <meta name="description" content={PROFILE.intro} />
        <meta property="og:title" content={`${PROFILE.name} — ${PROFILE.title}`} />
        <meta property="og:description" content={PROFILE.intro} />
        <meta property="og:type" content="website" />
      </Helmet>

      {SECTIONS.map((Section, i) => (
        <ErrorBoundary key={i}>
          <Section />
        </ErrorBoundary>
      ))}
    </>
  )
}
