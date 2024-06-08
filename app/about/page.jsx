import About from "../../components/About";
import Head from "next/head";
export default function AboutPage() {
    return (
        <>
          <Head>
              <title>About</title>
              <meta name="description" content="This is my About Page." />
    </Head>
            
            <About />
        </>
    )
}