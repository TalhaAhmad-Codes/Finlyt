from fastapi import FastAPI

app = FastAPI(
    title="Expense Tracker AI Service",
    description="AI and analytics services for the expense tracker.",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "expense-tracker-ai",
    }
