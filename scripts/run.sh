ROOT=$(dirname "$(dirname "${BASH_SOURCE[@]}")")
ROOT_ABS=$(realpath "$ROOT" | sed "s/^\/\([a-z]\{1\}\)\//\1:\//")

echo "building installer..."
"$ROOT/bin/binarycreator.exe" \
  --config "$ROOT/dist/config/config.xml" \
  -p "$ROOT/dist/packages" \
  "$ROOT/dist/swsuite-installer.exe"