/**
 * [ToDo description]
 * singleton class maintaining Todo
 */
class ToDo(){
static todo = null;
constructor(){
  this.tasks = []
}
getToDo(){
  //return the static member todo of the ToDo
  if(this.todo == null){
    this.todo = new ToDo();
  }
  return this.todo;
}
}
