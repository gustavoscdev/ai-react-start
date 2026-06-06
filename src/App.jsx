import { useState } from 'react'
import './App.css'
import TalkWithAi from './pages/chat/TalkWithAi'
import RecipeGenerator from './pages/recipe/RecipeGenerator'
import ImageGenerator from './pages/image/ImageGenerator'
import AudioTranscription from './pages/audio/AudioTranscription'

function App() {
  const [activeTab, setActiveTab] = useState("ask-ai")

  const handleTabChange = (tab) => {
    console.log(tab)
    setActiveTab(tab)
  }

  return (
    <>
      <div className="App">
        <button
          className={activeTab == 'ask-ai' ? 'active' : ''}
          onClick={() => handleTabChange("ask-ai")}>
          Talk with AI
        </button>

        <button
          className={activeTab == 'recipe-ai' ? 'active' : ''}
          onClick={() => handleTabChange("recipe-ai")}>
          Recipe
        </button>

        <button
          className={activeTab == 'image-ai' ? 'active' : ''}
          onClick={() => handleTabChange("image-ai")}>
          Image
        </button>

        <button
          className={activeTab == 'audio-ai' ? 'active' : ''}
          onClick={() => handleTabChange("audio-ai")}>
          Audio
        </button>

        <div>
          {activeTab === "ask-ai" && <TalkWithAi />}
          {activeTab === "recipe-ai" && <RecipeGenerator />}
          {activeTab === "image-ai" && <ImageGenerator />}
          {activeTab === "audio-ai" && <AudioTranscription />}
        </div>
      </div>
    </>
  )
}

export default App
