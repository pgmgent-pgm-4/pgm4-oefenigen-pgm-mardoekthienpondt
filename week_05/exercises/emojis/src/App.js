import logo from './logo.svg';
import './App.css';
import EmojiList from './components/EmojiList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Emoji List</h1>
          <EmojiList />
      </header>
    </div>
  );
}

export default App;
