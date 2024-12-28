import "./App.css";
import UpdatePlayerStats from "./UpdatePlayerStats";
import Page from "./Use";

function App() {
  return (
    <>
      <Page />
      <UpdatePlayerStats />
      <live-score-ticker match-id="12345" />
    </>
  );
}

export default App;
