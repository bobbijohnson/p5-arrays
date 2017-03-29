var numbers = [15, 22, 48, 37];
var habits = ["muse", "lyric", "music", "generic", "aries", "optimistic", "pessimist", "music is life"];
var j = 0;

function setup(){
    createCanvas(600,600);
    
}

function draw(){
    background(200, 135, 230);
    
    for(var i = 0; i < 4; i++){
        
        rect((i+1)*100,200,numbers[i],numbers[i]);
    }
    
    fill(255);
    textSize(50);
    text(habits[j],230,150);
}

function mousePressed(){
    j++;
    if(j==habits.length){
        j=0;
    }
}