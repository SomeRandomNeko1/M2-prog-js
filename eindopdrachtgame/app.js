let canvas = document.getElementById("canvasID");
let g = canvas.getContext("2d");

class App
{

    runApplication()
    {   
        g.beginPath()//achterground
        g.fillStyle = "#268017";
        g.moveTo(1600,0); 
        g.lineTo(1600,900); 
        g.lineTo(0,900); 
        g.lineTo(0,0); 
        g.closePath();
        g.stroke();
        g.fill();

        
        g.beginPath()//straat
        g.fillStyle = "#4E4E4E";
        g.moveTo(0,500); 
        g.lineTo(1600,500); 
        g.lineTo(1600,400);
        g.lineTo(0,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.font = "40px Sans-Serif"
        g.fillStyle = "#FFFB00"
        g.fillText("Happy birthday", 650, 100);;
        g.closePath();

    }
    runLijn(x,y)
    {
        g.beginPath()
        g.fillStyle = "white";
        g.lineTo(x + 0,y + 445);
        g.lineTo(x + 40,y + 445);
        g.lineTo(x + 40,y + 455);
        g.lineTo(x + 0,y + 455);
        g.closePath();
        g.stroke();
        g.fill();
    }

    runboom(x,y)
    {
        g.beginPath()
        g.fillStyle = "#0B5921";
        g.arc(x,y,45,0,2 * Math.PI, false);
        g.stroke();
        g.closePath();
        g.fill();

        g.beginPath();
        g.fillStyle= "brown";
        g.moveTo(x + 0,y + 100); 
        g.lineTo(x + 10,y + 100);
        g.lineTo(x + 10,y + 45);
        g.lineTo(x + 0,y + 45);
        g.closePath();
        g.stroke();
        g.fill();
 
    }

    runHuis(x,y)
    {
        g.beginPath()//huis
        g.fillStyle = "black";
        g.moveTo(x + 75,y + 25); 
        g.lineTo(x + 175,y + 50); 
        g.lineTo(x + 150,y + 100); 
        g.lineTo(x + 50,y + 75); 
        g.lineTo(x + 75,y + 25); 
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(x + 175,y + 50); 
        g.lineTo(x + 215,y + 75); 
        g.lineTo(x + 150,y + 100); 
        g.closePath();
        g.stroke();
        g.fill();


        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(x + 50,y + 75);
        g.lineTo(x + 50,y + 150);
        g.lineTo(x + 150,y + 175);
        g.lineTo(x + 150,y + 100);
        g.lineTo(x + 50,y + 75);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(x + 150,y + 100);
        g.lineTo(x + 150,y + 175);
        g.lineTo(x + 215,y + 150);
        g.lineTo(x + 215,y + 75);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(x + 165,y + 140);
        g.lineTo(x + 165,y + 170);
        g.lineTo(x + 175,y + 165);
        g.lineTo(x + 175,y + 135);
        g.lineTo(x + 165,y + 140);
        g.closePath();
        g.stroke();
        g.fill();


        g.beginPath()
        g.fillStyle = "yellow";
        g.moveTo(x + 65,y + 115);
        g.lineTo(x + 100,y + 120);
        g.lineTo(x + 100,y + 140);    
        g.lineTo(x + 65,y + 130)
        g.closePath();
        g.stroke();
        g.fill();
        console.log(canvas)
    }

    AddMoreStuff()
    {
        this.runHuis(200,600)
        this.runHuis(950,150)
        this.runHuis(990,520)
        this.runHuis(320,200)
        this.runHuis(610,200)
        this.runHuis(1000,0)
        this.runHuis(1300,150)
        this.runHuis(600,500)
        this.runLijn(100,0)
        this.runLijn(200,0)
        this.runLijn(300,0)
        this.runLijn(400,0)
        this.runLijn(500,0)
        this.runLijn(600,0)
        this.runLijn(700,0)
        this.runLijn(800,0)
        this.runLijn(900,0)
        this.runLijn(1000,0)
        this.runLijn(1100,0)
        this.runLijn(1200,0)
        this.runLijn(1300,0)
        this.runLijn(1400,0)
        this.runLijn(1500,0)
        this.runboom(230,660)
        this.runboom(600,660)
        this.runboom(200,260)
        this.runboom(1000,100)
        this.runboom(1410,55)
        this.runboom(1400,504)

    }
}


let app = new App();
app.runApplication();
app.runHuis(20,20);
app.AddMoreStuff();
app.runLijn(0,0);
app.runboom(410,55);