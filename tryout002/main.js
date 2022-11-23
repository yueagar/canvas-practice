((w, d) => {
    "use strict"
    console.log("iife called, proving that your browser is not from stone age");
    d.title = "Canvas Tryout 002 - Applying styles and colors";
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
                //fillstyle applying rgb colors
                for (let i=0; i<6; i++) {
                    for (let j=0; j<6;j ++) {
                        ctx.fillStyle = `rgb(${~~(255-42.5*i)}, ${~~(255-42.5*j)}, 0)`,
                        ctx.fillRect(i*50, j*50, 50, 50);
                    };
                };
                //strokestyle applying rgb colors
                for (let i=0; i<6; i++) {
                    for (let j=0; j<6; j++) {
                        ctx.strokeStyle = `rgb(${~~(255-42.5*i)}, ${~~(255-42.5*j)}, 0)`,
                        ctx.beginPath(),
                        ctx.arc((25+i*50), (350+j*50), 20, Math.PI*2, 0, true),
                        ctx.stroke();
                    };
                };
                //globalAlpha transparency
                ctx.fillStyle = "black", // background
                ctx.fillRect(350, 0, 300, 300);
                ctx.globalAlpha = 0.2, // set the transparency and color
                ctx.fillStyle = "white";
                for (let i=0; i<6; i++) {
                    ctx.beginPath(),
                    ctx.arc(500, 150, (25+25*i), Math.PI*2, 0, true),
                    ctx.fill();
                };
                //rgba transparency
                ctx.fillStyle = "black", // background
                ctx.globalAlpha = 1,
                ctx.fillRect(350, 330, 300, 300);
                ctx.fillStyle = "white"; // set the color
                for (let i=0; i<12; i++) {
                    ctx.fillStyle = `rgba(255, 255, 255, ${i/12})`,
                    ctx.fillRect((350+i*25), 330, 25, 300);
                };
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