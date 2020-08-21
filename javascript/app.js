function convert(){
    var clear = document.getElementById("output").innerText = "";
    console.log("running");
    var data = document.getElementById("data").value;
    console.log(data);
    for(let i = 0;i<data.length;i++)
    {
        if(data[i] == "\n")
        {   
            console.log("new Line");
            var br = document.createElement("br");
            var div = document.getElementById("output").appendChild(br);
            
        }
        else
        {
            if(data[i] == " ")
            {
                console.log("spaceeee");
                var space = document.createElement("span");
                space.innerHTML ="&nbsp &nbsp&nbsp";
                var div = document.getElementById("output").appendChild(space);
            
            }
            else{
                var image = document.createElement("img");
                image.setAttribute("src","letter/"+data[i]+".png");
                image.setAttribute("heigth","42");
                var div = document.getElementById("output").appendChild(image);
            
            }
             
            
        }
            
    }
}

function live()
{
     
    var clear = document.getElementById("output").innerText = "";
    console.log("running");
    var data = document.getElementById("data").value;
    console.log(data);
    for(let i = 0;i<data.length;i++)
    {
        if(data[i] == "\n")
        {   
            console.log("new Line");
            var br = document.createElement("br");
            var div = document.getElementById("output").appendChild(br);
        }
        else
        {
            console.log(data[i]);
            var image = document.createElement("img");
            image.setAttribute("src","letter/"+data[i]+".png");
            //image.setAttribute("width","42");
            var div = document.getElementById("output").appendChild(image);
        }
    }
}