FROM nginx:alpine
LABEL version=0.1.0

RUN useradd -m appuser

COPY ./src/ /usr/share/nginx/html

USER appuser

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD nginx -t || exit 1
