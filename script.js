const myImage = new Image();
myImage.src =  "thumb-1920-899795.jpg";


myImage.addEventListener('load', function () {
        const canvas = document.getElementById('canvas1');
        const ctx = canvas.getContext('2d');
        canvas.width = 500;
        canvas.height = 706;

        ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

        let particlesArray = [];
        const numberOfParticles = 5000;

        class Particle {
            constructor() {
                this.x = Math.random();
                this.y = 0;
                this.speed = 0;
                this.velocity = Math.random() * 0.5;
                this.size = Math.random() * 1.5 + 1;
            }

            update() {
                this.y+= this.velocity;
                if (this.y >= canvas.height) {
                    this.y = 0;
                    this.y = Math.random() * canvas.width;
                }
            }

            draw(){ 
                ctx.beginPath();
                ctx.fillStyle = 'white';
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill()
            }
        }
        function init() {
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle);
            }
        }
        init();
        function animate() {
            ctx.globalAplha = 0.05;
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
        }
});