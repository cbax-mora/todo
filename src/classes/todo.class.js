export class Todo {
  static fronJson ({tarea, id, completado, creado}){

    const tempTodo = new Todo(Todo.tarea) 
    tempTodo.id = Todo.id
    tempTodo.completado = Todo.completado
    tempTodo.creado = Todo.creado
  
    return tempTodo
  }

  constructor(tarea) {
    this.tarea = tarea

    this.id = new Date().getTime() //12845657985 repre de fecha
    this.completado = false
    this.creado = new Date()
  }
}
