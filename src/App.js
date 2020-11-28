import './App.css';
import InstagramEmbed from "react-instagram-embed";

function App() {
  return (
    <div className="App">
      <h1>Instagram Embed</h1>
      <div style={{display:"flex",justifyContent:"center"}}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CH9gbEEFqYj/"
          clientAccessToken='415948662920177|1e6b807a0033b7a76afc91317725c26b'
          maxWidth={500}
          hideCaption={false}
          containerTagName="div"
          injectScript
        />
      </div>
    </div>
  );
}

export default App;
