var k = 0;
var j = 0;


function HideUnhide(inpId,lblId){

    var Input =  inpId;
    var Label = lblId;
    
    if(Input.checked==true){
            Label.style.textDecoration="line-through";
            Label.style.color="#C2C2C2";
            
    }

    else{
        Label.style.textDecoration="none";
        Label.style.color="black";
    }
}



function CreateBox( heading , items){
    
   
    var BoxChild=document.createElement("div");

    BoxChild.className="box";
    BoxChild.id= `box${k}`;
    

    var arr=new Array();

    var count = 1;

    for(var i=0;i<items;i++){
        
        arr[i]=prompt("ENTER " + (count) + "th ELEMENT");

                if(arr[i] == ""){
                    items--;
                    i--;
                }

        count++;
    }
    


    

        
        BoxChild.innerHTML+=  `<h2 > ${heading} </h2> `;
        BoxChild.innerHTML+=  `<button id="btnbox${k}"  class="btnEdit"   onclick="EditBox( ${BoxChild.id} ) "  > Add Items </button>`;
            
        BoxChild.innerHTML+= ` <hr>`



        


    for(var i=0;i<items;i++){

        BoxChild.innerHTML   +=
            
            
                `<h4 class="headingBox">

                    <br>

                    <input type="checkbox"  id="check${j}"   onclick="HideUnhide( check${j} , label${j} )" class="checkBox">
                    <label class="LabelText"  for="check${j}"  id="label${j}"> ${arr[i]} </label>    


                </h4>`

                j++;

    }
    

    var MainDiv=document.getElementById("box-div");

    MainDiv.appendChild(BoxChild);

    k++;

}



function EditBox(boxid){
    
    
        var items = Number(prompt("Enter Number of Tasks "));
        
        var arr1 = new Array();

        for (var i = 0; i < items; i++) {
            arr1[i] = prompt("ENTER " + (i + 1) + " ELEMENT");
        }


        for (var i = 0; i < items; i++) {

            if (arr1[i] != "") {
                
                boxid.innerHTML += 
                
                `<h4 class= "headingBox"> 
                
                            <br>
                            
                            <input type="checkbox"  id="check${j}"   onclick="HideUnhide( check${j} , label${j} )" class="checkBox">
                            <label class="LabelText"  for="check${j}"  id="label${j}"> ${arr1[i]} </label>    
           
                </h4>`;

                j++;

            }


        }   // for loop 


}  // Edit Box   function closed  ... 

    





var click = 0;

    var heading="";

    function Task(){
 
        
        if(click ==0){
        
                heading = document.getElementById("MainInput").value;
                document.getElementById("MainInput").value = "";


                document.getElementById("MainInput").placeholder = "Enter No of Tasks";
                document.getElementById("MaininputAddBtn").innerHTML = "Enter";
        
                click++;
        }

        else{

                const Num= document.getElementById("MainInput").value;
            
                if(heading != "" && Num >0){

                    CreateBox(heading , Num);

                    document.getElementById("modale").style.visibility = "hidden";


                    document.getElementById("MainInput").value = "";
                    document.getElementById("MaininputAddBtn").innerHTML = "+ Add Task";
                    document.getElementById("MainInput").placeholder = "Add a new Task";
    
                }

                    else{
                        document.getElementById("modale").style.visibility = "hidden";
                    }

                    click=0;

        }

    
    }



    function AddNewTask(){
        document.getElementById("modale").style.visibility = "visible";
    }


    
    function Cross(){
        document.getElementById("modale").style.visibility = "hidden";
    }
