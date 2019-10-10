document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("mainCanvas")
    let ctx = canvas.getContext("2d")

    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // //fill rect (x,y,width,height)
    // ctx.fillRect(20, 30, 100, 100);

    // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    //     ctx.fillRect(40, 50, 100, 100);

    // ctx.fillStyle= 'rgb(177,155,223)';
    //     ctx.strokeRect(50,70,100,100);
    // ctx.beginPath()
    // ctx.moveTo(10,10)
    // ctx.lineTo(300,75)
    // ctx.lineTo(100,25)
    // ctx.fill()

    // ctx.beginPath()
    // ctx.moveTo(100,100)
    // ctx.lineTo(10,100)
    // ctx.lineTo(10,40)
    // ctx.fill()

    ctx.beginPath()
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
})