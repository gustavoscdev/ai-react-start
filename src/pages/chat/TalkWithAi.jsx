import { useState } from "react";
import api from "../../services/api";

function TalkWithAi() {
  const [prompt, setPrompt] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  const askAi = async () => {

    try {
      const response = await api.get('ask-ai', {
        params: { prompt }
      })

      const data = await response.data;

      setTimeout(() => {
        console.log(data)
        setChatResponse(data);
      }, 1000);

    } catch (error) {
      console.error("Error asking AI:", error);
      setChatResponse("Sorry, there was an error communicating with the AI.");
    }
  }


  return (
    <div>
      <h1>Talk with AI</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={askAi}>
        Ask AI
      </button>
      <div className="output">
        <p>{chatResponse}</p>
      </div>
    </div>
  );
}

export default TalkWithAi;