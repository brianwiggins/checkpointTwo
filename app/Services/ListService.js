import List from "../Models/List.js";
import _store from "../store";
import Task from "../Models/Task.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  addList(newList){
    newList = new List(newList);
    _store.State.lists.push(newList);
  }
  constructor(){
    console.log("List service is live")
  }

}

const SERVICE = new ListService();
export default SERVICE;
