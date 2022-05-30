import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
      <h1>Wat moet je doen</h1>
      <p>Deze dingen moet je doen om aan het werk te kunnen als vrije werker:</p>
    </header>

  <section>
    <div class="image" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));">
      <div style="display: flex;
      align-items: center;
      justify-content: center;">
    <img src="Page1.png" alt="Test">
    </div>
    <div style="display: inline-flex;
    flex-direction: column;">
    <h3>1. Diensten pakken</h3>
    <p>Nadat je je hebt aangemeld, maakt jouw contactpersoon een account voor je aan in onze app.</p>
    <p>Hierna krijg je een melding als er een open dienst beschikbaar is. Je pakt zelf de diensten die jij wilt werken.</p>
    <p>Soms belt een contactpersoon je om te vragen of je wilt werken</p>
    </div>
  </section>


    <a href="" class="Terug">Terug</a>

    <a href="Page2.html" class="Verder">Verder</a>

    </div>
  );
}
