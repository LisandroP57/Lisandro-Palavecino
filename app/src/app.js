const express = require("express");
const path = require("path");
const PORT = 7777;

/* Express */
const app = express();

/* Template engine */
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));

/* Middlewares */
/* app.use(express.json());
app.use(express.urlencoded({ extended: false })); */
app.use(express.static(path.join(__dirname, '../public')));

/* Routes  */
const indexRouter = require("./routes");

/* Routes Middlewares */
app.use("/", indexRouter);

/* Error 404 */
app.use((req, res, next) => {
    res.status(404).render('not-found')
})

/* Listen port */
app.listen(PORT, () => console.log(`Server listen in port ${PORT} - Click next ->\nhttp://localhost:${PORT}`));