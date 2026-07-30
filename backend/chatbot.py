from backend.config import client, MODEL

def get_response(user_input: str) -> str:
    response = client.models.generate_content(
        model=MODEL,
        contents=user_input,
    )

    return response.text