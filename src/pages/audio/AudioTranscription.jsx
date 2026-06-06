import { useState } from "react";
import api from "../../services/api";

function AudioTranscription() {

    const [file, setFile] = useState(null);
    const [transcription, setTranscription] = useState("");
    console.log("8nit")


    const askAiAudio = async () => {

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await api.post('transcribe-audio', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            const data = await response.data;

            setTimeout(() => {
                console.log(data)
                setTranscription(data);
            }, 1000);

        } catch (error) {
            console.error("Error asking AI:", error);
            setTranscription("Sorry, there was an error communicating with the AI.");
        }
    }


    return (
        <div className="container">
            <h2>Audio Transcription</h2>

            <div className="file-input"> </div>
            <input
                type="file"
                accept="audio/*"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <button onClick={askAiAudio}>
                Transcribe Audio
            </button>
            <div>

                <p>{transcription}</p>

            </div>
        </div>
    );
}


export default AudioTranscription;