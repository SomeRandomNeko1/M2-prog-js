class App
{
    runApplication()
    {
        console.log("Hallo werld!")
        let appNaam = "game";
    	let versienummer = 0.1;
        let versiedatum = Date;
        let autheur = "Lihong";
        let copyright = "thecopytight";
        let distributeur = "idk";
        let darkmode = true;

        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}
let app = new App();
app.runApplication();