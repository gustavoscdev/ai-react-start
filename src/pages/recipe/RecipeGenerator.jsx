import { useState } from "react";
import ReactMarkDown from "react-markdown";
import api from "../../services/api";

function RecipeGenerator() {
    const [ingredientes, setIngredientes] = useState("");
    const [cuisine, setCuisine] = useState("Any");
    const [dietaryRestrictions, setDietaryRestrictions] = useState("");

    const [chatResponse, setChatResponse] = useState("");
    //{{url_request}}/create-recipe?ingredients=garlic, butter, pasta, salt&cuisine=baked&dietaryRestrictions=shrimp

    const askAi = async () => {

        try {
            const response = await api.get('create-recipe', {
                params: { prompt: ingredientes, cuisine, dietaryRestrictions }
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
            <h1>Recipe Generator</h1>
            <input
                type="text"
                value={ingredientes}
                onChange={(e) => setIngredientes(e.target.value)}
                placeholder="Enter ingredients..."
            />

            <input
                type="text"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder="Enter cuisine..."
            />

            <input
                type="text"
                value={dietaryRestrictions}
                onChange={(e) => setDietaryRestrictions(e.target.value)}
                placeholder="Enter dietary restrictions..."
            />

            <button onClick={askAi}>
                Ask AI
            </button>
            <div className="output">
                <ReactMarkDown>{chatResponse}</ReactMarkDown>
            </div>
        </div>
    );
}

export default RecipeGenerator;