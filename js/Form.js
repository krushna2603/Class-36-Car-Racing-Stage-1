class Form {
    constructor() {
      
    }
  
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(530, 180);
      
      var input = createInput("Name");
      var button = createButton('Play');
      
      input.position(430, 260);
      button.position(450, 300);
  
      button.mousePressed(function(){
        input.hide();
        button.hide();
  
        var name = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);

        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(630, 360)
      });
  
    }
  }