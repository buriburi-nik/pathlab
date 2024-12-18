const images = [
            'url("./src/2.jpeg")',
            'url("./src/1.jpeg")',
            'url("./src/3.jpeg")',
            'url("./src/4.jpeg")'
        ];

        let currentIndex = 0;

        function changeBackgroundImage() {
            document.querySelector('.banner').style.backgroundImage = images[currentIndex];
            currentIndex = (currentIndex + 1) % images.length; 
        }

        setInterval(changeBackgroundImage, 4000);
        function resizeBackgroundImage(size) {
                document.querySelector('.banner').style.backgroundSize = size;
            }
        resizeBackgroundImage('100% 100%'); 
        changeBackgroundImage();