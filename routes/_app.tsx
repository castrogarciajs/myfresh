import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Header from "@/components/Header.tsx";

function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>MyFresh</title>
        <link rel="stylesheet" href="/App.css" />
      </Head>
      <Header />
      <Component />
    </>
  );
}

export default App;
