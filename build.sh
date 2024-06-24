#!/usr/bin/env bash
set -euo pipefail

CURR_DIR=$PWD

# install global depedencies
npm install -g live-server

# install local dependencies and build from source
if [[ -d vscode ]]; then

    echo "------------------------------"
    echo "-- Fetching VS Code ----------"
    echo "------------------------------"

    cd vscode &&
	git checkout main &&
        cd $CURR_DIR;
    

    if [[ -d html-insider ]]; then
	echo "------------------------------"
        echo "-- Building html-insider -----"
        echo "------------------------------"

        cd html-insider &&
	    git checkout main &&
	    npm i &&
	    npm run build &&
            cd $CURR_DIR;

    else
        echo "html-insider directory not found. Did you initialize the submodules?";
    fi;

    echo "------------------------------"
    echo "-- Building VS Code ----------"
    echo "------------------------------"

    cd vscode;
    yarn;
    yarn compile;   

else
    echo "vscode directory not found. Did you initialize the submodules?";
fi;


cd $CURR_DIR;
