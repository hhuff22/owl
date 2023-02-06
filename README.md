## System Requirements
- [Latest LTS version of Node](https://nodejs.org/en/download/)
- [Java 8](https://www.java.com/en/download/manual.jsp)

## Getting Started

Clone this repo `git clone https://github.com/TopBloc/qa-code-challenge.git`

Run the frontend code within the `/client` folder:

```bash
cd client
npm install
npm run start
```
We are aware of a couple of intermittent issues in the challenge. 
  - If you receive a conflicting peer dependency issue when installing running `npm install`, use the legacy dependencies flag: `npm install --legacy-peer-deps`. 
  - Depending on your environment, you may also run into an error stating that digital envelope routines are unsupported when trying to run the client. You can solve this by   running `export NODE_OPTIONS=--openssl-legacy-provider` in bash.
  - When running the server, you receive an error related to logging in the console. This is actually the web framework throwing an error - we don't have logging implemented for this challenge, but the server is running.


After running previous commands, you should see a website with instructions at `http://localhost:3000`.

Open the `/server` folder as a Maven project within a Java IDE and run the project. We suggest using IntelliJ IDEA. In order to get the backend running, you will need to run `Main.java` in IntelliJ.

## Submission

1. Create a new repository within GitHub and name it as your favorite animal (ex. Sloth, Zebra)
2. Set the remote origin of this cloned project to your newly created GitHub repository:
```
git remote set-url --push origin https://github.com/<github_username>/<favorite_animal>
```
3. Push your completed code challenge!
