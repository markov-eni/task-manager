# Scan repo
trivy repository ./task-manager/ > tools/trivy-repository-scan
# Sbom
trivy fs --format table -o tools/sbom-report.cdx ./task-manager
