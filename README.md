# EchoJournal: Journal for Caretakers of Austistic Patients
## #HackNYU2018
### Accessibility & Assistive Technology


## How to run app?
Tested react app working with 

```sh
$ git clone https://github.com/myy233/HackNYU2018.git
$ cd mana
$ npm install
$ npm start
```
### Requirements

* Atom, Sublime, VS Code, or any modern text editor
* Node.js and npm

## How Do I Perform Tone Analysis?
Tested working with Python2 and pip 9.0.1

### Requirements

* Python2 or Python3
* Pip
* SciPy
* Vokatori SDK https://developers.vokaturi.com/downloads/sdk

### How to run the Tone Analysis
You need Vokaturi to get this to work.

```sh
$ git clone https://github.com/myy233/HackNYU2018.git
$ sudo pip install scipy
$ cd api
$ python tone-analyzer.py hello.wav mac
```

#### Mac

```sh
$ python tone-analyzer.py hello.wav mac
```

#### Linux

```sh
$ python tone-analyzer.py hello.wav linux
```

#### Windows

```sh
$ python tone-analyzer.py hello.wav windows
```

## How Do I Use A Different Audio File?

* Just record some audio and save it as a `.wav` file in the `api` folder
