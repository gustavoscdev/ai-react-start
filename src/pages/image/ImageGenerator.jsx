import { useState } from "react";
import api from "../../services/api";

function ImageGenerator() {

    const [prompt, setPrompt] = useState("");
    const [imageBase64, setImageBase64] = useState("");

    const askAi = async () => {

        try {
            const response = await api.get('create-image', {
                params: { prompt, height: 1024, width: 1024 }
            })

            const data = await response.data;

            setTimeout(() => {
                console.log(data)
                setImageBase64(data);
            }, 1000);

        } catch (error) {
            console.error("Error asking AI:", error);
            setImageBase64("Sorry, there was an error communicating with the AI.");
        }
    }

    return (
        <div>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Create an image..."
            />

            <button onClick={askAi}>
                Image Generator
            </button>
            <div className="image-grid">
                {
                    imageBase64 && imageBase64.map((img, index) => (
                        <img
                            key={index}
                            src={`data:image/png;base64,${img}`}
                            alt="Generated"
                            style={{ maxWidth: "100%" }}
                        />
                    ))
                }
                {
                    [...Array(4 - imageBase64.length)].map((_, index) => (
                        <div
                            key={index + imageBase64.length} className="empty-image-slot"
                        />
                    ))
                }

            </div>
        </div>
    );
}

export default ImageGenerator;