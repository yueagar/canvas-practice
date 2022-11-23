(($, _win) => {
    const drawer = new class {
        init() {
            console.log("Drawer | Initializing...");
            this.canvas = document.getElementById("canvas");
            this.ctx = this.canvas.getContext("2d");
            _win.onresize = this.resize;
            this.resize();
        };
        draw() {
            console.log("Drawer | Drawing...");
            const _canvas = document.createElement("canvas");
            const _ctx = _canvas.getContext("2d");
            _canvas.width = 800,
            _canvas.height = 800;
            _ctx.strokeStyle = "#ff0000",
            _ctx.shadowBlur = 20,
            _ctx.shadowColor = "#1100bb",
            _ctx.lineWidth = 20;
            for (let i=0; i<5; i++) {
                _ctx.strokeRect(40, 40, 140, 140);
            };
            drawer.cache(_canvas);
        };
        cache(shape) {
            console.log("Drawer | Caching...");
            const canvas = this.canvas;
            const ctx = this.ctx;
            let angle = 0;
            let lastTime = 0;
            ctx.translate(canvas.width/2, canvas.height/2);
            function rotate(time) {
                let fps = ~~(1000/(time-lastTime));
                lastTime = time;
                let s = performance.now();
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                angle += 0.01;
                ctx.rotate(angle * Math.PI / 180);
                ctx.drawImage(shape, 0, 0);
                ctx.drawImage(shape, 20, 20);
                ctx.drawImage(shape, 40, 40);
                ctx.drawImage(shape, 60, 60);
                ctx.drawImage(shape, 80, 80);
                ctx.drawImage(shape, 100, 100);
                _win.requestAnimationFrame(rotate);
                let e = performance.now();
                $("#latency").html(`Latency: ${(e - s).toFixed(2)}ms`);
                $("#fps").html(`FPS: ${fps}`);
            };
            _win.requestAnimationFrame(rotate);
        };
        resize() {
            console.log("Drawer | Resizing...");
            canvas.width = _win.innerWidth,
            canvas.height = _win.innerHeight;
            $("#canvas").css({
                height: _win.innerHeight,
                width: _win.innerWidth
            });
            drawer.draw();
        };
    };
    drawer.init();
    _win.drawer = drawer;
})(window.jQuery, window);