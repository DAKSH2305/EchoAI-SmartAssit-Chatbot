# 🤖 EchoAI SmartAssist

**EchoAI SmartAssist** is a Retrieval-Augmented Generation (RAG) chatbot that delivers context-aware responses by retrieving relevant information from custom documents before generating answers with a Large Language Model (LLM). It combines semantic search with Google Gemini to provide more accurate and grounded responses.

---

## 🚀 Features

* 📄 Chat with custom PDF documents
* 🔍 Retrieval-Augmented Generation (RAG)
* 🧠 Semantic search using FAISS Vector Database
* 🤖 Google Gemini LLM integration
* ⚡ FastAPI backend for efficient API handling
* 🌐 Responsive web interface built with HTML, CSS, and JavaScript
* ✂️ Automatic document chunking and embedding generation
* 🎯 Context-aware responses with reduced hallucinations

---

## 🛠️ Tech Stack

### Backend

* Python
* FastAPI
* LangChain
* Google Gemini API

### AI & NLP

* Retrieval-Augmented Generation (RAG)
* FAISS Vector Database
* Hugging Face Embeddings
* Prompt Engineering

### Frontend

* HTML
* CSS
* JavaScript

### Tools

* Git
* GitHub
* Jupyter Notebook

---

## 🏗️ Project Workflow

1. Upload one or more PDF documents.
2. Extract and preprocess document text.
3. Split text into semantic chunks.
4. Generate embeddings for each chunk.
5. Store embeddings in a FAISS vector database.
6. Convert user queries into embeddings.
7. Retrieve the most relevant document chunks.
8. Send the retrieved context along with the user's query to Google Gemini.
9. Return an accurate, context-aware response through the web interface.

---

## 📂 Project Structure

```
EchoAI-SmartAssist/
│── backend/
│   ├── app.py
│   ├── rag_pipeline.py
│   ├── vector_store/
│   ├── uploads/
│   └── requirements.txt
│
│── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
│── .env
│── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/EchoAI-SmartAssist.git
cd EchoAI-SmartAssist
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Configure environment variables

Create a `.env` file and add your API key:

```env
GOOGLE_API_KEY=your_api_key_here
```

### Run the backend

```bash
uvicorn app:app --reload
```

### Open the frontend

Launch `index.html` in your browser or serve it using any local web server.

---

## 🎯 Future Improvements

* Multi-document support
* Conversation memory
* User authentication
* Streaming responses
* Voice input/output
* Citation and source highlighting
* Support for DOCX, TXT, and web URLs
* Cloud deployment using Docker and AWS

---

## 📸 Demo

Add screenshots or a GIF demonstrating the chatbot interface here.

---

## 📄 License

This project is intended for educational and portfolio purposes.

---

### ⭐ If you found this project useful, consider giving it a star!
