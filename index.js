document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("mainCanvas")
    let ctx = canvas.getContext("2d")

    ctx.fillStyle = 'rgb(200, 0, 0)';
    //fill rect (x,y,width,height)
    ctx.fillRect(20, 30, 100, 100);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(40, 50, 100, 100);
})