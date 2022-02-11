const express = require("express");
const pool = require("./db");
const cors = require("cors");
const app = express();
const PORT = 5002;


// Middleware for enabling communication between front-end and back-end
app.use(cors()); // 

// Allows access to req.body to get data from the client-side/ front-end
app.use(express.json());

// ROUTES

// read all todos
app.get("/perntodos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todos ORDER BY todo_id");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Cannot connect to database...")
    }
});

// read a todo
app.get("/perntodos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT description FROM todos WHERE todo_id = $1", [id]);
        res.json(todo.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Cannot connect to database...")
    }
});


// create a todo
app.post("/perntodos", async (req, res) => {
    try {
        const { description } = req.body;
        if (description !== null){
            const newTodo = await pool.query("INSERT INTO todos (description) VALUES ($1) RETURNING *", [description]);
            res.json(newTodo.rows);
        } 
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Cannot connect to database...")
    }
});

// update a todo
app.put("/perntodos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todos SET description = $1 WHERE todo_id = $2", [description, id]);

        res.json("Todo list updated...");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Cannot connect to database...")
    }
});

// delete a todo
app.delete("/perntodos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todos WHERE todo_id = $1", [id]);

        res.json("Todo deleted...");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Cannot connect to database...")
    }
});






// Listen Port 
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}...`);
});

