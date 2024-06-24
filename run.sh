#!/usr/bin/env bash
set -euo pipefail

CURR_DIR=$PWD;

if [[ -d vscode ]]; then
    cd vscode;
else
    echo "Please navigate to the root of the Unfold repository before running this script.";
    exit 1;
fi;

./scripts/code.sh;

cd $CURR_DIR;
