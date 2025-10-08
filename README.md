# FullStack_best_practices
Learning the backend.

#git things to node
if you make a commit locally and on remote some change has been made so git push will not work it will show error

so use
#solution 1
#fetch the changes on remote in local repo with your changes but before commit your changes
#now push them 

#commands
git pull origin main --allow-unrelated-histories
git push origin main


#solution 2
#you don't care about the other changes made by others on remote you want to remove it and just put your changes and commits of local repo

#commands
git push origin main --force


#Normal git commands
1)git init
2)git add .
3)git commit -m "msg"
4)git branch -M main -> for naming the branch
5)git remote add origin "repo-url" -> for pushing local branch to github
6)git push -u origin main

#About the Backend,Frontend

#Folder struture
backend folder->
  node_modules folder
  package-lock.json
  package.json
  server.js
fronedend folder->
  node_modules
  public
  src folder->
      assets
      App.css
      App.jsx
      index.css
      main.jsx
  .gitignore
  eslint.config.js
  index.html
  package-lock.json
  package.json
  README.md
  vite.config.js
.gitignore
README.md


# Things learned
1)Use of npm i express
2)modern js and old js
(type:module or commonjs)
3)npm i axios
4)CORS-> Cross Origin Resourse Sharing
5)proxy to resolve CORS
other methods -> whiteindexing of the url 