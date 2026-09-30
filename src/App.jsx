import "./App.css";

function App() {
  const siteTitle = "Reactの基礎を学ぼう";
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header>
        <nav>
          <h1>{siteTitle}</h1>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>本教材について</h2>
          <p>本教材では、Reactの基本的な文法や概念について</p>
          <p>各章で段階的に実装を進め、Reactアプリを作っていきます。</p>
          <p>本教材を通して、Reactの基本をしっかりと身につけましょう。</p>
        </section>
      </main>
      <footer>
        <p>
          &copy; {currentYear} {siteTitle}
        </p>
      </footer>
    </>
  );
}

export default App;
