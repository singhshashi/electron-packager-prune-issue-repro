# electron-packager-prune-issue-repro
Repro issue with prune when using electron packager. 

There are two branches in this repo. THe main branch where the code works as expected and the bugWithPackager branch where the issue exists. 


For working code: Run npm install. This will install the electron-unhandled package. After packaging the app, when you run the packaged app you get the Hello from electron and no errors are thrown. 


For bug: Switch the branch to bugWithPackager. This branch has an additional dependency of mac-screen-capture-permissions. When you run this without packaging, it works fine. But after packaging, it throws an error that the node-module new-github-issue-url cannot be found. Inspecting the node_modules of the packaged app, one finds that this node_module was not copied even though it is listed as a dependency in electron-util which is used by mac-screen-capture-permissions.
