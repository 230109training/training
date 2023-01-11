# Node.js
Node.js (often just called Node), is a JavaScript runtime built on the V8 JavaScript engine (originally developed
for Google Chrome). It allow developers to write JavaScript code that will execute server-side, outside of a web browser.

Node provides an extensive set of built-in modules that allow you to perform various tasks such as creating a web server,
interacting with the file system (reading and writing files), and more. Additionally, you can use the Node Package Manager (npm), which is included with the installation of Node to install and use third-party modules in your Node.js-based apps.

Node.js has gained a lot of popularity in recent years, thanks to its ability to allow JS to run on the server-side. This allows developers to use the same language for both front-end and back-end development, which can make development more efficient and cohesive.

# Node Package Manager (npm)
npm is a package manager for Node.js applications. With npm, you can create projects and install third-party libraries that those projects can use. Npm has a command-line interface that enables us to perform operations such as installing dependencies, uninstalling dependencies, running scripts, etc. When using npm, it is important to understand the file/directory structure of the node project.

## package.json file
The `package.json` file is the standard file in a Node.js project that describes the project's dependencies and other metadata.
It is usually located in the root of the project directory

Here is an example of what a package.json file might look like:
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My awesome Node.js project",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.17.1",
    "body-parser": "^1.19.0"
  },
  "devDependencies": {
    "jest": "^26.4.2",
    "nodemon": "^2.0.4"
  }
}
```

The package.json file contains several sections, including:
1. scripts: This section allows you to define command-line scripts that can be run using npm. For example, we can use `npm run start` to run the "start" script, or `npm run test` to run the "test" script.
2. dependencies: This section lists the packages that the project depends on. These are the packages that are needed to actually run the application in production
3. devDependencies: This section lists the packages that are needed ONLY for development and testing, but are not necessary for production

## package-lock.json file
The `package-lock.json` file is a file that is generated automatically by npm when we run npm install and it doesn't already exist. It is there to ensure that the dependencies of your project are installed in a consistent and predictable way.

The `package-lock.json` file contains a detailed, versioned list of all the packages as well as the dependencies of those packages that are installed in the project, including the exact version numbers of each package and the version numbers
of their dependencies. The file also includes information about the resolved dependencies' locations. It helps to install
the same version of the package and its dependencies even if they have different versioning in the future.

It provides the ability to reproduce the exact same dependencies tree regardless of the environment in which it was installed. It is important to make sure to include this file when you are committing and pushing to GitHub, so that other collaborating developers can then install the exact same dependencies.

## node_modules directory
The `node_modules` folder is a directory where Node.js packages (libraries) that the project depends on are stored. If you don't have a node_modules folder, but have a `package.json` and `package-lock.json` file that contains dependencies, then all you need to do is run `npm install` to install all required dependencies in a `node_modules` folder that will be automatically created by npm.

The `node_modules` folder can get very large, as it can include many packages and their dependencies. Including the `node_modules` folder in version control would make the repository very large, and increase the time it takes to clone the repository.

It is considered best practice to include the `node_modules` folder in a `.gitignore` file, so it is never accidentally included in version control. Whenever other developers clone the repository, all they need to do is then run `npm install` to get everything that is required.

## npm commands
- `npm init`: Used to create a new node project and the initial information for the package.json file
- `npm install <dependency name>`: Used to install an npm package from the npm repository into our project
    - Update the package.json file
    - Update the package-lock.json file (or create it if it doesn't already exist)
- `npm install`: Used to install dependencies that we don't have locally based on what is inside of the `package.json` and/or `package-lock.json` file
- `npm install <dependency name> --save-dev`: Used to install a dependency as a devDependency
- `npm uninstall <dependency name>`: used to uninstall and remove a dependency from the `package.json` and `package-lock.json` files