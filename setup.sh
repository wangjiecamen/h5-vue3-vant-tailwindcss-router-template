#!/bin/bash

set -e

if [ -d "faas/views" ]; then
  rm -rf faas/views
fi

if [ -d "faas/static" ]; then
  rm -rf faas/static
fi

pnpm install --registry http://172.18.7.16:4873 --no-frozen-lockfile
pnpm run build:$1

mkdir -p faas/views
mkdir -p faas/static

cp -r dist/* ./faas/static
mv ./faas/static/index.html ./faas/index.html

cd ./faas

scf deploy --stage $1 --profile cg
