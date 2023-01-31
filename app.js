     if (localStorage.getItem("todolist") === null) {
        localStorage.setItem("todolist", JSON.stringify([]));
      }
      
      function addTask() {
        
        let task = document.getElementById("task").value;
        if(task !== ""){
        let todolist = JSON.parse(localStorage.getItem("todolist"));
        todolist.push(task);
        localStorage.setItem("todolist", JSON.stringify(todolist));
        }
        else{
            alert("field is blank")
        }   
        location.reload();
     
        showTaskList();

        
      }
      document.getElementById("submit").addEventListener("click", ()=>{
        document.getElementById("task").innerHTML = '';
      })
      
      function removeTask(index) {
        let todolist = JSON.parse(localStorage.getItem("todolist"));
        
        todolist.splice(index, 1);
        localStorage.setItem("todolist", JSON.stringify(todolist));
        
        showTaskList();
      }
      
      function showTaskList() {
        let todolist = JSON.parse(localStorage.getItem("todolist"));
        
        let taskListHTML = "<ul>";
        for (let i = 0; i < todolist.length; i++) {
          taskListHTML += "<li>" + todolist[i] + " <button onclick='removeTask(" + i + ")'><i class='fa-solid fa-xmark'></i></button></li>";
          taskListHTML += "<hr color='rgb(41, 41, 41)'>"

        }
        taskListHTML += "</ul>";
        
        document.getElementById("taskList").innerHTML = taskListHTML;
      }
      
      window.onload = showTaskList;