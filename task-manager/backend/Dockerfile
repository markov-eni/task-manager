FROM python:3.13
LABEL version=0.1.0

WORKDIR /app
COPY . /app/

# Avoid root user by creating a user
RUN useradd appuser \
  && chown -R appuser:appuser /app \
  && pip install --no-cache-dir .

USER appuser

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:8000/health || exit 1

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
