trivy image --format spdx-json --output spdx.json markoveni/task-manager:frontend-2e3a7e32
trivy sbom spdx.json
