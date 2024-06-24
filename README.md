# Unfold
A live programming environment for JavaScript GUI apps.

## Table of Content
1. [About](#about)
2. [Prerequisites](#prerequisites)
3. [How to Build](#how-to-build)
4. [How to Run](#how-to-run)
5. [How to Use](#how-to-use)
6. [Architecture](#architecture)
7. [How to Cite](#how-to-cite)

## About
Unfold is a live programming environment for JavaScript-based GUI apps.

Unfold uses a modified version of [Visual Studio Code](https://github.com/microsoft/vscode), with the live programming visualization as a separate _contribution_ in the editor.

For any questions, please reach out to the leading author of the paper [Ruanqianqian (Lisa) Huang](mailto:r6huang+unfold@ucsd.edu), or create an issue [on GitHub](https://github.com/rlisahuang/unfold-artifact).

## Prerequisites
1. Node.js 16
2. yarn 1.22.x
3. Chrome browser

## How to Build

The simplest way to build and run Unfold is directly within the terminal. To do so:

1. (Mac users only) Open up a terminal, type `arch` to ensure that you are using a x86_64 architecture. M1 is currently not supported.
2. Navigate to the directory containing this README file.
3. Run `./build.sh`. This will install all the necessary dependencies and compile the tool from source.


## How to Run

1. Make sure your working directory is set to the root directory of this README. 
2. Run `./run.sh`. Note that you must [build](#how-to-build) Unfold _before_ running this script, otherwise you will run into errors.


## How to Use
1. Create or open a vanilla-JavaScript web application with an HTML file and a JavaScript file in Unfold. We have provided some examples (tasks used in our user study) that you could try out. 
2. In a terminal, navigate to the root directory of the opened web application. Run the following command:
`live-server`. This will start a process that live-watches changes to the web application while opening the application in your default browser. You can close the browser tab while keeping this process running in the background.
3. Back in Unfold, open the entire directory of the opened web application.
4. Will see a "View" button at the upper right corner in Unfold. Click and select the main HTML file of your web application for rendering when prompted. You will see the application rendered to the right of your screen.
5. Open up a JavaScript file for your application and start using Unfold as described in the paper.


## Architecture
In this repository, there are two submodules:
- `vscode` contains the source code of the VSCode instance upon which Unfold builds, and the implementations for the Unfold front-end. Unfold features are in `vscode/src/vs/editor/contrib/interactLive`.
- `html-insider` contains code that obtains runtime information for Unfold.


## How to Cite
Guidelines to follow after VL/HCC program becomes available.