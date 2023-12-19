const count = document.querySelector(".countainer");
const map = document.getElementById("map");
var canvas = {
  element: document.getElementById("canvas"),
  width: 400, //600,
  height: 400, //400,
  initialize: function () {
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";

    count.prepend(this.element);
  },
};

var Ball = {
  create: function ( dx, dy, name) {
    var newBall = Object.create(this);
    newBall.dx = dx;
    newBall.dy = dy;
    newBall.width = 60;
    newBall.height = 60;
    newBall.element = document.createElement("div");
    newBall.element.style.width = newBall.width + "px";
    newBall.element.style.height = newBall.height + "px";
    newBall.element.className += " ball";
    newBall.width = parseInt(newBall.element.style.width);
    newBall.height = parseInt(newBall.element.style.height);
    canvas.element.appendChild(newBall.element);



    newBall.textElement = document.createElement('div');
    newBall.textElement.innerText = name;
    newBall.element.appendChild(newBall.textElement);

    canvas.element.appendChild(newBall.element);

    // Add mouseover event listener
    newBall.element.addEventListener("mouseover", function () {
      // Check the current ID of the map element
      var currentMapId = map.id;

      // Toggle between map and map2
      if (currentMapId === "map") {
        map.id = "map2";
      } else if (currentMapId === "map2") {
        map.id = "map";
      }
    });

    return newBall;
  },

  moveTo: function (x, y) {
    this.element.style.left = x + "px";
    this.element.style.top = y + "px";
  },
  changeDirectionIfNecessary: function (x, y) {
    if (x < 0 || x > canvas.width - this.width) {
      this.dx = -this.dx;
    }
    if (y < 0 || y > canvas.height - this.height) {
      this.dy = -this.dy;
    }
  },
  draw: function (x, y) {
    this.moveTo(x, y);
    var ball = this;
    setTimeout(function () {
      ball.changeDirectionIfNecessary(x, y);
      ball.draw(x + ball.dx, y + ball.dy);
    }, 1000 / 60);
  },
};
canvas.initialize();
//var ball1 = Ball.create("blue", 4, 3);
var ball2 = Ball.create( 1, 3, "طوفان");
var ball3 = Ball.create( 2, 2, "الأقصى");
//ball1.draw(70, 0);
ball2.draw(20, 200);
ball3.draw(300, 330);
