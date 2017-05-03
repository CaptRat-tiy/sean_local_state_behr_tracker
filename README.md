This project is in fulfillment of TIY's curriculum.  

It tracks particular (imaginary) students' disruptive/maladaptive behaviors in class in an elegant expeditious gesture-format, rather than paperwork -- freeing teacher's time and attention back onto the "problem child", instead of the damn paperwork! ; )

To start:

run npm init in project directory

run npm install in project directory

(Opens in localhost:8080 at present)

Scripts:

npm start = "node server.js"

npm run dev = "webpack -d && cp src/index.html dist/index.html && cp -R src/app/img dist/app && webpack-dev-server --content-base src/ --inline --hot"

npm run postinstall = "webpack -p && cp src/index.html dist/index.html && cp -R src/app/img dist/app"
