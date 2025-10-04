#!/bin/bash

# Install TSUP in all packages that need it
packages=(
  "packages/shared/ui"
  "packages/shared/utils"
  "packages/shared/constants"
  "packages/shared/hooks"
  "packages/shared/config"
  "packages/api-client"
  "packages/theme"
)

for package in "${packages[@]}"; do
  echo "Installing TSUP in $package..."
  cd "$package"
  pnpm add -D tsup typescript
  cd -
done

echo "✅ TSUP installed in all packages!"