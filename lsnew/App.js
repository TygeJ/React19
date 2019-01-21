const App = () => (
  <div>
  <BasicButton />
  <BasicInput />
  <Header />

    const BasicButton = () => {
      return <button>Click Me</button>;
    };

    const BasicInput = () => {
      return <input type="text" placeholder="some test" />;
    };

    const Header = () => {
      return <h1> hi </h1>;
    };

    const myElement = (
      <div>
        <h1>Hello 1</h1>
      </div>
  );

  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
