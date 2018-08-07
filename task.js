/**
 * [Task description]
 * Task class for making the task class
 */
class Task {
  constructor(list_name='default',description){
    this.list_name = list_name;
    this.description = description;
  }
  
  get_task(){
    //function to return the task
    return {
      list_name:this.list_name,
      description:this.description,
    }
  }
}
