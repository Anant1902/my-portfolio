import Head from "next/head";
import MyApp from '../components/MyApp';

export default function Home() {
  return (
    <>
      <Head>
        <title>Anant Shanker | Software Engineer</title>
        <meta
          name="description"
          content="Recent NUS Computer Science graduate passionate about high-quality code, systems, AI, backend engineering, and practical technology that helps teams move faster."
        />
        <meta property="og:title" content="Anant Shanker | Software Engineer" />
        <meta
          property="og:description"
          content="Recent NUS Computer Science graduate with SWE experience at JPMorgan Chase, GovTech Singapore, International Baccalaureate, and Tradesocio."
        />
      </Head>
      <MyApp />
    </>
  )
}
