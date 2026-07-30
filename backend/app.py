from fastapi import FastAPI
from backend.chatbot import get_response
from backend.models import ChatRequest, ChatResponse

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Chatbot API is running 🚀"
    }

@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):

    answer = get_response(request.message)

    return ChatResponse(
        response=answer
    )