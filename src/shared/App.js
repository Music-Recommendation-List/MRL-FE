import logo from "../logo.svg";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      첫페이지입니다!
      <div className="App">
        {post &&
          post.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            );
          })}
        <div>
          <input type="text" onChange={(e) => TextInput(e, setTitle)} />
          <br />
          <input type="text" onChange={(e) => TextInput(e, setSubTtitle)} />
          <br />
          <button onClick={CreatePost}>작성하기</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
