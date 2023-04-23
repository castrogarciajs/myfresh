import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>MyFresh</title>
        <link rel="stylesheet" href="/App.css" />
      </Head>
      <Component />
    </>
  );
}

export default App;
