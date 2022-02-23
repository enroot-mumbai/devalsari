import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <meta charSet="utf-8" />
      
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Muli%7CRubik:400,400i,500,700"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Commissioner&display=swap"
        rel="stylesheet"
      />

      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" 
      rel="stylesheet" />

      {/* ======= Bootstrap CSS ======= */}
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      {/* ======= Font Awesome CSS ======= */}
      <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
      {/* ======= Main Stylesheet ======= */}
      <link rel="stylesheet" href="/assets/css/style.css" />

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
      
    </Head>
  );
}
