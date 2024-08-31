const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

btn.addEventListener("click",()=>{
    if(input.value === ""){
        alert("Input field is empty")
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        li.style.fontSize = "20px";
        li.style.fontWeight = "500";
        li.style.lineHeight = "35px";
        list.appendChild(li);
        input.value = "";

        // edit button
        const editbtn = document.createElement("button");
        editbtn.classList = "text-[21px] absolute right-[32px]"
        editbtn.innerHTML = "<i class='fa-solid fa-edit'></i>"
        li.appendChild(editbtn);

        editbtn.addEventListener("click",(e)=>{
           e.preventDefault();
           const newtask = prompt("Edit your task",li.textContent);
        if(newtask != null && newtask.trim() != "")
            li.textContent = newtask.trim();


         // edit button
        const editbtn = document.createElement("button");
        editbtn.classList = "text-[21px] absolute right-[32px]"
        editbtn.innerHTML = "<i class='fa-solid fa-edit'></i>"
        li.appendChild(editbtn);

          // delete button
        const deletebtn = document.createElement("button");
        deletebtn.classList = "text-[20px] absolute right-[2px]"
        deletebtn.innerHTML = "<i class='fa-solid fa-trash'></i>"
        li.appendChild(deletebtn);

        deletebtn.addEventListener("click",()=>{
            li.remove(li.value);
        })
    })

        // // delete button
        const deletebtn = document.createElement("button");
        deletebtn.classList = "text-[20px] absolute right-[2px]"
        deletebtn.innerHTML = "<i class='fa-solid fa-trash'></i>"
        li.appendChild(deletebtn);

        deletebtn.addEventListener("click",()=>{
            li.remove(li.value);
        })
    }
    }
)

    
