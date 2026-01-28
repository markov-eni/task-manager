# Use a small, secure nginx base image
FROM nginxinc/nginx-unprivileged:alpine3.22-perl
LABEL version=0.1.0

USER root
# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy static files
COPY src/index.html src/app.js /usr/share/nginx/html/

# Switch to non-root user
USER appuser

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:8080/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
