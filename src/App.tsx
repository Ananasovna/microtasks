import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type Tasks = {
    [key: string]: TaskType[]
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<Tasks>({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "bread", isDone: true},
            {id: v1(), title: "butter", isDone: true},
            {id: v1(), title: "strawberry", isDone: false},
            {id: v1(), title: "milk", isDone: false},
        ]
    });

    function removeTask(taskId: string, todoId: string) {
        const filteredTasks = tasks[todoId].filter(t => t.id !== taskId);
        setTasks({...tasks, [todoId]: filteredTasks});
    }

    function addTask(title: string, todoId: string) {
        const task = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todoId]:[task, ...tasks[todoId]]});
    }

    function changeStatus(taskId: string, isDone: boolean, todoId: string) {
        const updatedTasks = tasks[todoId].map(el => el.id === taskId ? {...el, isDone: isDone} : el)
        setTasks({...tasks, [todoId]: updatedTasks});
    }


    function changeFilter(value: FilterValuesType, id: string) {
        setTodolists(
            todolists.map(el => {
                if (el.id === id) {
                    el.filter = value;
                }
                return el;
            })
        )
    }

    const removeTodolist = (todoId: string) => {
        const updatedTodolists = todolists.filter(el => el.id !== todoId);
        setTodolists(updatedTodolists);
        delete tasks[todoId];
        setTasks({...tasks});
    }


    return (
        <div className="App">
            {todolists.map(tl => {
                let tasksForTodolist = tasks[tl.id];

                if (tl.filter === "active") {
                    tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
                }
                if (tl.filter === "completed") {
                    tasksForTodolist = tasksForTodolist.filter(t => t.isDone);
                }

                return (
                    <Todolist key={tl.id}
                              id={tl.id}
                              title={tl.title}
                              tasks={tasksForTodolist}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeStatus}
                              filter={tl.filter}
                              removeTodolist={removeTodolist}
                    />
                )
            })}

        </div>
    );
}

export default App;
