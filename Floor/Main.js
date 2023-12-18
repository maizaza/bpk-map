window.onload = function(){

    const container = document.querySelector(".container")
    const char = document.querySelector(".char")

    async function displaySmoke(){
        let smokeElement = document.getElementById("smoke")
        smokeElement.style.display = "inline"
        await new Promise(resolve => setTimeout(resolve, 300));
        smokeElement.style.display = 'none'
        char.style.display = 'inline'
    }

    async function Walk(speed=1, floor=1){
        displaySmoke()
        let topEndList = [
            null, // LEAVE BLANK
            -75,
            -230,
            -340,
            -450
        ]
        let leftEnd = -450
        let topEnd = topEndList[floor]

        let currentTopPoint = -75
        let currentLeftPoint = -1050

        char.style.left = currentLeftPoint+"px"

        while (currentLeftPoint != leftEnd) {
            if ((currentLeftPoint + speed) > leftEnd){
                currentLeftPoint = leftEnd
            }
            else {
                currentLeftPoint += speed
            }
            char.style.left = currentLeftPoint+"px"
            await new Promise(resolve => setTimeout(resolve, 1));
        }

        while (currentTopPoint != topEnd) {
            if ((currentTopPoint - speed) < topEnd){
                currentTopPoint = topEnd
            }
            else {
                currentTopPoint -= speed
            }
            char.style.top = currentTopPoint+"px"
            await new Promise(resolve => setTimeout(resolve, 1));
        }
        //effect()
        await new Promise(resolve => setTimeout(resolve, 500));
        setupFloorPage(floor)
    }

    async function Animation(speed=500) {
        let img = [
            "../image/fly1.png",
            "../image/fly2.png",
        ]
        let imgIndex = 0;
        function updateImage() {
            char.src = img[imgIndex];
            imgIndex = (imgIndex + 1) % img.length;
        }
    
        setInterval(updateImage, speed);

    }

    Animation(150)

}