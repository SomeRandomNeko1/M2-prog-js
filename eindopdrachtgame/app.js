class App
{
    runApplication()
    {
        
        let canvas = document.getElementById("canvasID");
        let g = canvas.getContext("2d");
        

        // g.beginPath()
        // g.fillStyle = "green";
        // let x =50
        // let y =0
        // g.moveTo(x,y); 
        // g.lineTo(x+50,y+50); 
        // g.lineTo(x-50,y+50);  
        // g.closePath();
        // g.stroke();
        // g.fill();



        g.beginPath()//achterground
        g.fillStyle = "green";
        g.moveTo(1600,0); 
        g.lineTo(1600,900); 
        g.lineTo(0,900); 
        g.lineTo(0,0); 
        g.closePath();
        g.stroke();
        g.fill();

        
        g.beginPath()//straat
        g.fillStyle = "black";
        g.moveTo(0,500); 
        g.lineTo(1600,500); 
        g.lineTo(1600,400);
        g.lineTo(0,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()//line
        g.fillStyle = "white";
        g.lineTo(0,445);
        g.lineTo(40,445);
        g.lineTo(40,455);
        g.lineTo(0,455);
        g.closePath();
        g.stroke();
        g.fill();
    
        g.beginPath()//huis
        g.fillStyle = "black";
        g.moveTo(75,25); 
        g.lineTo(175,50); 
        g.lineTo(150,100); 
        g.lineTo(50,75); 
        g.lineTo(75,25); 
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(175,50); 
        g.lineTo(215,75); 
        g.lineTo(150,100); 
        g.closePath();
        g.stroke();
        g.fill();


        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(50,75);
        g.lineTo(50,150);
        g.lineTo(150,175);
        g.lineTo(150,100);
        g.lineTo(50,75);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(150,100);
        g.lineTo(150,175);
        g.lineTo(215,150);
        g.lineTo(215,75);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(165,140);
        g.lineTo(165,170);
        g.lineTo(175,165);
        g.lineTo(175,135);
        g.lineTo(165,140);
        g.closePath();
        g.stroke();
        g.fill();


        g.beginPath()
        g.fillStyle = "yellow";
        g.moveTo(65,115);
        g.lineTo(100,120);
        g.lineTo(100,140);    
        g.lineTo(65,130)
        g.closePath();
        g.stroke();
        g.fill();
        console.log(canvas)
        


        g.font = "40px Sans-Serif"

        g.fillText("Merry Christmas", 650, 100)

    }
}


let app = new App();
app.runApplication();

