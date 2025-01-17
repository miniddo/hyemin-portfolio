import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold underline">Hello world!</h1>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
