let todo_array=[];
let summary=document.querySelector("#summary");
let complete=0;
function count(){
    complete=0;
    for(let i=0;i<todo_array.length;i++){
        if(todo_array[i].done){
            complete++;
        }
    }
}
summary.innerHTML=`Total tasks: ${todo_array.length} | tasks done: ${complete} | tasks pending: ${todo_array.length-complete}`;
function add(){
    let task=document.querySelector("#task_adder").value;
    let time=document.querySelector("#time_date").value;
    todo_array.push({task,time});

    todo_array.sort(function(a, b){
    return new Date(a.time) - new Date(b.time);});


    display();
}
function display(){
    let todo_list=document.querySelector("#todo_list");
    todo_list.innerHTML = "";
    for(let i=0;i<todo_array.length;i++){
        checkattribute="";
        if(todo_array[i].done){
            checkattribute="checked";
        }
        else{
            checkattribute="";
        }
        todo_list.innerHTML+=`<div class="todo_item">
        <input type="checkbox" class="checkbox" ${checkattribute}
        onchange="
        if(this.checked==true){
            todo_array[${i}].done=true;
        }
        else{
            todo_array[${i}].done=false;
        }
        count();
        summary.innerHTML=\`Total tasks: \${todo_array.length} | tasks done: \${complete} | tasks pending: \${todo_array.length-complete}\`;
        "
        >
        <div class="task">${todo_array[i].task}</div>
        <div class="time">${todo_array[i].time}</div>
        <div class="delete" onclick="todo_array.splice(${i},1); 
        display();">🗑</div>
        </div>`;
    }
    count();
    summary.innerHTML=`Total tasks: ${todo_array.length} | tasks done: ${complete} | tasks pending: ${todo_array.length-complete}`;

}
