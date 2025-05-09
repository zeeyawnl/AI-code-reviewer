import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import axios from 'axios'
import './App.css';

function App() {
  const [ count, setCount] = useState(0)
  const [ code, setCode] = useState(`function sum() {
    return 1 + 1;
    }`)
    const [review, setReview] = useState(""); // <-- this line is missing


  useEffect(()=>{
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    try {
      const response = await axios.post(`https://your-backend-name.onrender.com/ai/get-response`, { prompt: code });
      console.log("✅ Response:", response.data);
      setReview(response.data);
    } catch (err) {
      console.error("❌ Error from backend:", err);
    }
  }
  

  return (  
    <>
    <main>
      <div className="left">
      <div className="code">
       <Editor 
       value={code}
       onValueChange={code => setCode(code)}
       highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
       padding={10}
       style={{
        fontFamily: '"Fira code", "Fira Mono", "monospace"',
        fontSize: 17,
        border: "1px solid #ddd",
        borderRadius: "5px",
        height: "100%",
        width: "100%",

       }}
       />

      </div>
      <div 
      onClick={reviewCode}
      className="review">review</div>
      </div>
      <div className="right">
  <h2>Code Review Output:</h2>
  <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{review}</pre>
</div>

    </main>
      
    </>
  )
}

export default App
