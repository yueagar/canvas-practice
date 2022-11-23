((w, d) => {
    "use strict"
    console.log("iife called, proving that your browser is not from stone age");
    d.title = "Canvas Tryout 001 - Drawing Shapes";
    class thecanvas {
        static init() {
            this.project = {
                "name": "The Canvas Class Controller",
                "version": "1.0.0",
                "author": "YueAgar_c",
                "copyright": "\u00A9"
            };
            $("body").append(`<canvas id="canvas" width="${w.innerWidth}" height="${w.innerHeight}"></canvas>`);
            w.onresize = () => {
                this.resize();
            };
            this.draw();
        };
        static draw() {
            let canvas = document.getElementById("canvas");
            if (canvas.getContext) {
                let ctx = canvas.getContext("2d");
                //rectangle(square)
                ctx.fillRect(20, 20, 100, 100);
                ctx.clearRect(45, 45, 50, 50);
                ctx.strokeRect(55, 55, 30, 30);
                //lineTo, path of triangle
                ctx.beginPath(),
                ctx.moveTo(400, 20),
                ctx.lineTo(400, 200),
                ctx.lineTo(200, 200),
                ctx.fill();
                //path, moveTo, smile
                ctx.beginPath(),
                ctx.arc(600, 150, 120, 0, Math.PI*2, true),
                ctx.moveTo(680, 150),
                ctx.arc(600, 150, 80, 0, Math.PI, false), // true 是逆時針，false 是順時針，這裡如果使用true，弧形便會向上拉開
                ctx.moveTo(570, 100),
                ctx.arc(550, 100, 20, Math.PI*2, 0, true),
                ctx.moveTo(670, 100),
                ctx.arc(650, 100, 20, Math.PI*2, 0, true),
                ctx.stroke();
                //lineTo, path of triangle 2, fill + stroke
                ctx.beginPath(),
                ctx.moveTo(20, 300),
                ctx.lineTo(20, 500),
                ctx.lineTo(200, 500),
                ctx.fill();
                ctx.beginPath(),
                ctx.moveTo(300, 300),
                ctx.lineTo(100, 300),
                ctx.lineTo(300, 500),
                ctx.closePath(),
                ctx.stroke();
                //arc 2
                for (let i=0; i<4; i++) {
                    for (let j=0; j<3; j++) {
                        let x = 50 + j * 100;
                        let y = 600 + i * 100;
                        let radius = 40;
                        let startAngle = Math.PI + (Math.PI*j)/2;
                        let endAngle = 0
                        let anticlockwise = i % 2 ? false : true;

                        ctx.beginPath(),
                        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

                        i > 1 ? ctx.fill() : ctx.stroke();
                    };
                };
                //quadratic curve and bezier curve ( in Photoshop and Adobe Illustrator 筆形工具 ) NOT RECOMMENDED TO USE SINCE IT'S TOO HARD!!
                ctx.beginPath(),
                ctx.moveTo(400, 300),
                ctx.quadraticCurveTo(600, 700, 800, 300),
                ctx.stroke();
                ctx.beginPath(),
                ctx.moveTo(400, 600),
                ctx.bezierCurveTo(500, 800, 600, 800, 700, 600),
                ctx.stroke();
                //path 2D, recommend to use because it can reduce the amount of repetitive codes
                let rectangle = new Path2D();
                rectangle.rect(900, 300, 200, 200),
                ctx.stroke(rectangle);
                let circle = new Path2D();
                circle.moveTo(1000, 700),
                circle.arc(1000, 700, 100, Math.PI*2, 0, true),
                ctx.fill(circle);
                //fill text
                ctx.font = "36px Verdana",
                ctx.fillStyle = "red",
                ctx.fillText("<---- Coldsmile", 750, 150);
                //copyright
                ctx.font = "16px Verdana",
                ctx.fillStyle = "black",
                ctx.fillText(`${this.project.copyright} ${this.project.name} v${this.project.version} by ${this.project.author}`, w.innerWidth-430, w.innerHeight-10);
            };
        };
        static resize() {
            let canvas = document.getElementById("canvas");
            canvas.width = w.innerWidth,
            canvas.height = w.innerHeight,
            this.draw();
        };
    };
    thecanvas.init();
    window.thecanvas = thecanvas;
})(window, document)