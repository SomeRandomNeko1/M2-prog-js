class Dino
{

    constructor(naam, vleeseter, leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
    }   

}

class App
{
    runApplication()
    {


        
    }
}



let app = new App();
app.runApplication();
let trex = new Dino("Trex",true,10);
console.log(trex);