class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createInput("Code1");
        this.access1.position(100,90);
        this.access1.style('background', 'white');

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');

        this.access1 = createInput("Code1");
        this.access1.position(100,290);
        this.access1.style('background', 'white');

        this.button1 = createButton('Check');
        this.button1.position(100,320);
        this.button1.style('background', 'lightgrey');

        this.access1 = createInput("Code1");
        this.access1.position(700,195);
        this.access1.style('background', 'white');

        this.button1 = createButton('Check');
        this.button1.position(700,225);
        this.button1.style('background', 'lightgrey');


        this.button1.mousePressed(()=> {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        })
    }
    authenticate(actualCode,enteredCode) {
        if(actualCode === enteredCode) 
            return true
        else
            return false
    }

    display(){

        // Add code to make the buttons function as expected


    }
}