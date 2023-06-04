document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task  d-flex align-items-center h-50px ">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="edit h-100 position-absolute">
                <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button class="delete h-100 position-absolute">
               
                <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll("#taskname");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        var t_tasks = document.querySelectorAll(".edit");
        var t=document.querySelectorAll("#taskname") 
        for(var i=0; i<t_tasks.length; i++){
            t_tasks[i].onclick = function(){
                edit=prompt("Enter Update tesk")
                this.parentNode.firstElementChild.innerText=edit
               
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}