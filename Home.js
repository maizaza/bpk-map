window.onload = function(){

    const container = document.querySelector(".container")
    const floor1_button = document.getElementById("f1")
    const floor2_button = document.getElementById("f2")
    const floor3_button = document.getElementById("f3")
    const floor4_button = document.getElementById("f4")
    const char = document.getElementById("char")

    function setupFloorPage(page=1){
        let floor = [ // HTML PAGE
            null, // LEAVE BLANK
            "./Floor/F1.html", // Floor 1
            "./Floor/F2.html", // Floor 2
            "./Floor/F3.html", // Floor 3
            "./Floor/F4.html", // Floor 4
        ]
        if (floor[page]) {
            window.location.href = floor[page]
        }
        else{
            console.log("Floor page not found.")
        }
    }

    function effect() {
        let circle = document.createElement("div")
        container.appendChild(circle)

        circle.style.backgroundColor = "Black"
        circle.style.borderRadius = "100%"
        circle.style.zIndex = 10
        circle.style.position = "relative"
        circle.style.top = char.style.top
        circle.style.left = char.style.left
        circle.style.width = "500px"
        circle.style.height = "500px"
    }

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

    function Animation(speed=500) {
        let img = [
            "./image/fly1.png",
            "./image/fly2.png",
        ]
        let imgIndex = 0;
        function updateImage() {
            char.src = img[imgIndex];
            imgIndex = (imgIndex + 1) % img.length;
        }
        setInterval(updateImage, speed);
    }

    Animation(150)
    floor1_button.addEventListener('click', function(event) { 
        Walk(2,1)
    });

    floor2_button.addEventListener('click', function(event) { 
        Walk(2,2)
    });

    floor3_button.addEventListener('click', function(event) { 
        Walk(2,3)
    });

    floor4_button.addEventListener('click', function(event) { 
        Walk(2,4)
    });

}