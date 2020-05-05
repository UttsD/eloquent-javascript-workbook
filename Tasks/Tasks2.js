var line = "#";

for (var i=0; i<7; i++)
{
    console.log(line);
    line+="#";
}

for (var line = "#"; line.length<8; line+="#")
{
    console.log(line);
}


var line = ""
var size = 8
for (var x = 0; x <size; x++)
{
    
    for (var i = 0; i<size; i++)
    {
        if ((x+i)%2 == 0){
            line+= "#" 
        }
        else line+= " "
        
    }
    line+="\n"
    
    
}

console.log(line );