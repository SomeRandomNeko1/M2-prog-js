class App {
    runApplication() {
        let arr = ["Biffly Clyro", "Blink182", "Third Eye Blinnd" , "Taylor Swift"];
        for (let i = 0; i < arr.length; i++) {
            let Artiesten = (arr[i]);
            console.log(Artiesten);
        }
    }
}

let app = new App();
app.runApplication();