document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            sidebarLinks.forEach(function (l) {
                l.classList.remove('is-active');
            });
            this.classList.add('is-active');
        });
    });
});
window.addEventListener('resize', function () {
    if (window.innerWidth > 1090) {
        document.querySelector('.sidebar').classList.remove('collapse');
    } else {
        document.querySelector('.sidebar').classList.add('collapse');
    }
});
window.dispatchEvent(new Event('resize'));

const allVideos = document.querySelectorAll('.video');
allVideos.forEach(function (v) {
    v.addEventListener('mouseover', function () {
        const video = v.querySelector('video');
        video.play();
    });
    v.addEventListener('mouseleave', function () {
        const video = v.querySelector('video');
        video.pause();
    });
});

document.querySelectorAll('.logo, .logo-expand, .discover').forEach(function (el) {
    el.addEventListener('click', function (e) {
        document.querySelector('.main-container').classList.remove('show');
        document.querySelector('.main-container').classList.remove('show2');
        document.querySelector('.main-container').classList.remove('show1');
        document.querySelector('.main-container').classList.remove("show3");
        document.querySelector('.main-container').scrollTop = 0;
    });
});

document.querySelectorAll('.trending, .video').forEach(function (el) {
    el.addEventListener('click', function (e) {
        document.querySelector('.main-container').classList.remove('show1');
        document.querySelector('.main-container').classList.remove("show2");
        document.querySelector('.main-container').classList.remove("show3");
        document.querySelector('.main-container').classList.add('show');
        document.querySelector('.main-container').scrollTop = 0;
        document.querySelectorAll('.sidebar-link').forEach(function (link) {
            link.classList.remove('is-active');
        });
        document.querySelector('.trending').classList.add('is-active');
    });
});


document.querySelectorAll('.streaming').forEach(function (el) {
    el.addEventListener('click', function (e) {
        document.querySelector('.main-container').classList.remove("show");
        document.querySelector('.main-container').classList.remove("show2");
        document.querySelector('.main-container').classList.remove("show3");
        document.querySelector('.main-container').classList.add("show1");
        document.querySelector('.main-container').scrollTop = 0;
        document.querySelectorAll('.sidebar-link').forEach(function (link) {
            link.classList.remove('is-active');
        });
        document.querySelector('.streaming').classList.add('is-active');
    });
});


document.querySelectorAll('.playlist').forEach(function (el) {
    el.addEventListener('click', function (e) {
        document.querySelector('.main-container').classList.remove("show");
        document.querySelector('.main-container').classList.remove("show1");
        document.querySelector('.main-container').classList.remove("show3");
        document.querySelector('.main-container').classList.add("show2");
        document.querySelector('.main-container').scrollTop = 0;
        document.querySelectorAll('.sidebar-link').forEach(function (link) {
            link.classList.remove('is-active');
        });
        document.querySelector('.playlist').classList.add('is-active');
    });
});

document.querySelectorAll('.bookmark').forEach(function (el) {
    el.addEventListener('click', function (e) {
        document.querySelector('.main-container').classList.remove("show");
        document.querySelector('.main-container').classList.remove("show1");
        document.querySelector('.main-container').classList.remove("show2");
        document.querySelector('.main-container').classList.add("show3");
        document.querySelector('.main-container').scrollTop = 0;
        document.querySelectorAll('.sidebar-link').forEach(function (link) {
            link.classList.remove('is-active');
        });
        document.querySelector('.bookmark').classList.add('is-active');
    });
});

const streamingActive = document.querySelector('.streaming')
streamingActive.addEventListener("click", () => {
    console.log(1);
})

document.querySelectorAll('.video').forEach(function (v) {
    v.addEventListener('click', function () {
        const source = v.querySelector('source').getAttribute('src');
        const title = v.querySelector('.video-name').textContent;
        const person = v.querySelector('.video-by').textContent;
        const img = v.querySelector('.author-img').getAttribute('src');
        document.querySelector('.video-stream video').pause();
        document.querySelector('.video-stream source').setAttribute('src', source);
        document.querySelector('.video-stream video').load();
        document.querySelector('.video-p-title').textContent = title;
        document.querySelector('.video-p-name').textContent = person;
        document.querySelector('.video-detail .author-img').setAttribute('src', img);
    });
})




const buttonHideImage = document.querySelector('.button-hidden-image')
buttonHideImage.addEventListener('click', function () {
    const loadingImage = document.querySelector('.loading')
    const counterTimeImage = document.querySelector('.counter')
    loadingImage.style.display = 'block'
    counterTimeImage.style.display = 'block'
    imageStreaming()
})

function imageStreaming() {

    const imagePaths = [
        './image/image1.jpg',
        './image/image2.jpg',
        './image/image3.jpg',
        './image/image4.jpg',
        './image/image5.jpg',
        './image/image6.jpg',

        './image/image7.jpg',
        './image/image8.jpg',
        './image/image9.jpg',
        './image/image10.jpg',
        './image/image11.jpg',
        './image/image12.jpg',
        './image/image13.jpg',
        './image/image14.jpg',
        './image/image15.jpg',
        './image/image16.jpg',

        './image/image17.jpg',
        './image/image18.jpg',
        './image/image19.jpg',
        './image/image20.jpg',
        './image/image21.jpg',
        './image/image22.jpg',
        './image/image23.jpg',
        './image/image24.jpg',
        './image/image25.jpg',
        './image/image26.jpg',

        './image/image27.jpg',
        './image/image28.jpg',
        './image/image29.jpg',
        './image/image30.jpg',
        './image/image31.jpg',
        './image/image32.jpg',
        './image/image33.jpg',
        './image/image34.jpg',
        './image/image35.jpg',
        './image/image36.jpg',

        './image/image37.jpg',
        './image/image38.jpg',
        './image/image39.jpg',
        './image/image40.jpg',
        './image/image41.jpg',
        './image/image42.jpg',
        './image/image43.jpg',
        './image/image44.jpg',
        './image/image46.jpg',

        './image/image47.jpg',
        './image/image48.jpg',
        './image/image49.jpg'
    ];

    class Utilities {
        static norm(value, min, max) {
            return (value - min) / (max - min);
        }

        static lerp(norm, min, max) {
            return (max - min) * norm + min;
        }

        static map(value, sourceMin, sourceMax, destMin, destMax) {
            return this.lerp(this.norm(value, sourceMin, sourceMax), destMin, destMax);
        }

        static clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        }

        static distance(x0, y0, x1, y1) {
            const dx = x1 - x0;
            const dy = y1 - y0;

            return Math.sqrt(dx * dx + dy * dy);
        }

        static randomRange(min, max) {
            return min + Math.random() * (max - min);
        }

        static randomInt(min, max) {
            return Math.floor(min + Math.random() * (max - min + 1));
        }

        static randomDist(min, max, iterations) {
            let total = 0;

            for (let i = 0; i < iterations; i++) {
                total += this.randomRange(min, max);
            }

            return total / iterations;
        }

        static degreesToRads(degrees) {
            return degrees / 180 * Math.PI;
        }

        static radsToDegrees(radians) {
            return radians * 180 / Math.PI;
        }

        static roundToPlaces(value, places) {
            const mult = Math.pow(10, places);

            return Math.round(value * mult) / mult;
        }

        static roundNearest(value, nearest) {
            return Math.round(value / nearest) * nearest;
        }
    }

    class Loading {
        constructor() {
            this.load = document.getElementsByClassName('loading')[0];
            this.line = document.getElementsByClassName('line')[0];
            this.counter = document.getElementsByClassName('counter')[0];
            this.imagePaths = imagePaths;
            this.loadedNumber = 1;
            this.percentage = 0;
            this.num = 0;


        }

        initialize() {
            return new Promise((resolve, reject) => {
                this.loadImages(resolve, reject);
            });
        }

        loadImages(resolve, reject) {
            for (let i = 0; i < this.imagePaths.length; i++) {
                const path = this.imagePaths[i];
                const image = new Image();

                image.src = path;
                image.crossOrigin = "anonymous";

                image.addEventListener('load', () => {
                    this.percentage = this.getPercentage(this.loadedNumber++);
                });
            }

            this.drawPercentage(resolve, reject);
        }

        getPercentage(num) {
            return Math.floor(num / this.imagePaths.length * 100);
        }

        drawPercentage(resolve, reject) {
            if (this.num < this.percentage) {
                this.num++;
            }

            this.line.style.width = this.num + '%';
            this.counter.textContent = this.num + '%';

            if (this.num === 100) {
                this.cancelDrawLoopCounterNumber(resolve, reject);

                return;
            }

            this.animationID = requestAnimationFrame(this.drawPercentage.bind(this, resolve, reject));
        }

        cancelDrawLoopCounterNumber(resolve, reject) {
            cancelAnimationFrame(this.animationID);

            this.addClass(resolve, reject);
        }
        addClass(resolve, reject) {
            this.delay(2)
                .then(() => {
                    this.load.classList.add('loaded');
                    this.line.classList.add('loaded');
                    this.counter.classList.add('loaded');
                    resolve();
                });
        }

        delay(time) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, time);
            });
        }
    }

    class FullScreen {
        constructor() {
            this.setupEvents();
            this.initialize();
        }

        initialize() {
            const vh = window.innerHeight * 0.01;

            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        setupEvents() {
            window.addEventListener('resize', this.onResize.bind(this), false);
        }

        onResize() {
            this.initialize();
        }
    }

    class DrawMainImage {
        constructor(ctx, width, height) {
            this.ctx = ctx;
            this.width = width;
            this.height = height;

            this.initialize();
        }

        initialize() {
            this.canvas = document.createElement('canvas');
            this.ctx2 = this.canvas.getContext('2d');
            this.image = null;
            this.stopWatch = new Stopwatch();
            this.dataArr = [];
        }

        drawImage(src) {
            this.isLoaded = false;
            this.image = new Image();
            this.image.src = src;
            this.image.crossOrigin = "anonymous";

            this.image.addEventListener('load', () => {
                this.stopWatch.initialize();

                let imageWidth, ratio, imageHeight;

                if (this.image.width >= this.image.height) {
                    imageWidth = Math.min(this.width * 0.9, this.image.width);
                    ratio = this.image.width / this.image.height;
                    imageHeight = imageWidth / ratio;
                } else {
                    imageHeight = Math.min(this.height * 0.9, this.image.height);
                    ratio = this.image.height / this.image.width;
                    imageWidth = imageHeight / ratio;

                    if (imageWidth >= this.width * 0.9) {
                        imageWidth = Math.min(this.width * 0.9, this.image.width);
                        ratio = this.image.width / this.image.height;
                        imageHeight = imageWidth / ratio;
                    }
                }

                this.canvas.width = imageWidth;
                this.canvas.height = imageHeight;

                this.ctx2.clearRect(0, 0, imageWidth, imageHeight);
                this.ctx2.drawImage(this.image, 0, 0, imageWidth, imageHeight);

                this.getImageData();
                this.isLoaded = true;
            });
        }

        getImageData() {
            this.dataArr = [];

            let preHeight = 0, addHeight = 0;
            for (let i = 0; i < this.canvas.height; i += addHeight) {
                const obj = {};

                addHeight = Utilities.randomInt(5, 20);

                if (preHeight + addHeight > this.canvas.height) {
                    addHeight = Math.floor(this.canvas.height - preHeight);
                }

                if (addHeight === 0) return;

                const image = this.ctx2.getImageData(
                    0,
                    preHeight,
                    this.canvas.width,
                    addHeight
                );

                obj.image = image;
                obj.height = preHeight;
                obj.width = Math.random() * this.width * 0.5 - this.width * 0.25;

                this.dataArr.push(obj);

                preHeight += addHeight;
            }
        }

        addImage(t) {
            if (!this.isLoaded) return;

            for (let i = 0; i < this.dataArr.length; i++) {
                this.ctx.putImageData(
                    this.dataArr[i].image,
                    this.width / 2 - this.canvas.width / 2 + this.dataArr[i].width,
                    this.height / 2 - this.canvas.height / 2 + this.dataArr[i].height
                );
            }

            this.moveImage();
        }

        moveImage() {
            this.stopWatch.calculateTime();

            const t = 1.0 - Math.min(this.stopWatch.getElapsedTime() * 0.0002, 1.0);

            this.e = this.ease(t);

            for (let i = 0; i < this.dataArr.length; i++) {
                this.dataArr[i].width *= this.e;
            }
        }

        deleteImage(t) {
            if (!this.isLoaded) return;

            for (let i = 0; i < this.dataArr.length; i++) {
                this.ctx.putImageData(
                    this.dataArr[i].image,
                    this.width / 2 - this.canvas.width / 2 + this.dataArr[i].width + Math.tan(t * 0.01 + this.dataArr[i].height / Math.PI) * 100,
                    this.height / 2 - this.canvas.height / 2 + this.dataArr[i].height
                );
            }
        }

        ease(x) {
            return 1 - Math.sqrt(1 - Math.pow(x, 2));
        }
    }


    class Sketch {
        constructor() {
            this.setupCanvas();
            this.setupEvents();
            this.initialize();
        }

        setupCanvas() {
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');

            this.canvas.ariaLabel = 'This is images gallery.';
            this.canvas.role = 'img';

            this.canvas.style.position = 'fixed';
            this.canvas.style.top = '0';
            this.canvas.style.left = '0';
            this.canvas.style.width = '100%';
            this.canvas.style.minHeight = '100vh';
            this.canvas.style.minHeight = 'calc(var(--vh, 1vh) * 100)';
            this.canvas.style.display = 'none';
            this.canvas.style.background = '#01012A';
            this.canvas.style.zIndex = '5';
            var loadingImage1 = document.querySelector('.loading')
            var counterTimeImage1 = document.querySelector('.counter')
            var clickStreaming = document.querySelector('.streaming')
            clickStreaming.addEventListener('click', () => {
                loadingImage1.style.display = 'block'
                counterTimeImage1.style.display = 'block'
                if (loadingImage1.style.display = 'block') {
                    this.canvas.style.display = 'block';
                    this.canvas.style.zIndex = '5';
                }
            })
            document.body.appendChild(this.canvas);
        }

        setupEvents() {
            window.addEventListener('resize', this.onResize.bind(this), false);
            window.addEventListener('wheel', this.onWheel.bind(this), false);
            document.body.addEventListener('click', this.onClick.bind(this), false);
            document.body.addEventListener('mousemove', this.onMousemove.bind(this), false);
            document.body.addEventListener('touchstart', this.onTouchstart.bind(this), false);
            document.body.addEventListener('touchmove', this.onTouchmove.bind(this), false);
        }

        onMousemove(e) {
            this.touchInfos.mouse.x = (e.clientX / this.width) * this.width - this.width / 2;
            this.touchInfos.mouse.y = (e.clientY / this.height) * this.height - this.height / 2;
        }

        onTouchstart(e) {
            const t = e.targetTouches[0];

            this.touchInfos.fing.start.x = t.pageX;
            this.touchInfos.fing.start.y = t.pageY;
        }

        onTouchmove(e) {
            const t = e.targetTouches[0];

            this.touchInfos.mouse.x = (t.pageX / this.width) * this.width - this.width / 2;
            this.touchInfos.mouse.y = (t.pageY / this.height) * this.height - this.height / 2;

            this.touchInfos.fing.move.x = t.pageX;
            this.touchInfos.fing.move.y = t.pageY;

            this.touchInfos.fing.end.x = this.touchInfos.fing.start.x - this.touchInfos.fing.move.x;
            this.touchInfos.fing.end.y = this.touchInfos.fing.start.y - this.touchInfos.fing.move.y;

            this.touchInfos.delta.x += this.touchInfos.fing.end.x * 0.0003;
            this.touchInfos.delta.y += this.touchInfos.fing.end.y * 0.0003;
        }

        onResize() {
            if (this.preWidth === window.innerWidth) {
                this.height = this.canvas.height = window.innerHeight;

                return;
            }

            this.initialize();
        }

        onWheel(e) {
            this.touchInfos.delta.x += e.deltaX * 0.0005;
            this.touchInfos.delta.y += e.deltaY * 0.0005;
        }

        onClick(e) {
            if (this.isDisplayed) {
                this.isDeleating = true;

                setTimeout(() => {
                    this.isDeleating = false;
                    this.isDisplayed = false;
                }, 160);

                return;
            } else {
                this.isDisplayed = false;
            }

            const x = this.touchInfos.mouse.x = (e.clientX / this.width) * this.width - this.width / 2;
            const y = this.touchInfos.mouse.y = (e.clientY / this.height) * this.height - this.height / 2;

            for (let i = 0; i < this.shapes.length; i++) {
                const s = this.shapes[i];

                if (this.isHovered(s, x, y)) {
                    this.isDisplayed = true;
                    this.M.drawImage(s.image.src);

                    return;
                }
            }
        }

        initialize() {
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
            }

            this.paths = imagePaths;
            this.isDisplayed = false;

            this.hasHover = window.matchMedia('(hover: hover)').matches;

            this.setupSizes();
            this.setupShapes();

            this.focus = {
                x: 0,
                y: 0,
                s: this.size
            };

            this.touchInfos = {
                mouse: {
                    x: 0,
                    y: 0
                },
                delta: {
                    x: 0,
                    y: 0
                },
                fing: {
                    start: {
                        x: null,
                        y: null
                    },
                    move: {
                        x: null,
                        y: null
                    },
                    end: {
                        x: null,
                        y: null
                    }
                }
            };

            this.G = new Glitch(this.ctx, this.width, this.height, 50, 200);
            this.M = new DrawMainImage(this.ctx, this.width, this.height);

            this.render(0);
        }

        setupSizes() {
            this.width = this.preWidth = this.canvas.width = window.innerWidth;
            this.height = this.canvas.height = window.innerHeight;
        }

        setupShapes() {
            const edge = Math.max(this.width, this.height);
            //const edge = Math.sqrt(this.width * this.width + this.height * this.height);

            this.radius = edge / 2;
            this.numberOfShape = 16;
            this.size = this.radius / (this.numberOfShape / 6);
            this.shapes = [];

            let index = 0;
            for (let x = 0; x < this.numberOfShape; x++) {
                for (let y = 0; y < this.numberOfShape; y++) {
                    const params = {
                        x: x,
                        y: y,
                        i: index++,
                        c: this.ctx,
                        s: this.size,
                        r: this.radius,
                        n: this.numberOfShape,
                        p: this.paths[Math.floor(Math.random() * (this.paths.length - 1))]
                    };
                    const s = new Shape(params);

                    this.shapes.push(s);
                }
            }
        }

        drawFocus(s, hover) {
            if (hover === false) {
                this.focus.s += (0 - this.focus.s) * 0.16;
                this.focus.x += (this.touchInfos.mouse.x - this.focus.x) * 0.16;
                this.focus.y += (this.touchInfos.mouse.y - this.focus.y) * 0.16;

                this.ctx.save();
                this.ctx.strokeStyle = '#FE296D';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(this.focus.x - this.focus.s / 2, this.focus.y - this.focus.s / 2, this.focus.s, this.focus.s);
                this.ctx.restore();
            } else {
                this.focus.s += (this.size * s.ratio - this.focus.s) * 0.16;
                this.focus.x += (s.x - this.focus.x) * 0.16;
                this.focus.y += (s.y - this.focus.y) * 0.16;

                this.ctx.save();
                this.ctx.strokeStyle = '#FE296D';
                //this.ctx.globalCompositeOperation = 'lighter'; 
                this.ctx.lineWidth = 5 * s.ratio;
                this.ctx.strokeRect(this.focus.x - this.focus.s / 2, this.focus.y - this.focus.s / 2, this.focus.s, this.focus.s);
                this.ctx.restore();
            };
        }

        isHovered(shape, x, y) {
            if (
                shape.displayed === true &&
                x > shape.x - this.size / 2 * shape.ratio &&
                x < shape.x + this.size / 2 * shape.ratio &&
                y > shape.y - this.size / 2 * shape.ratio &&
                y < shape.y + this.size / 2 * shape.ratio
            ) {
                return true;
            }
        }

        resetParams() {
            this.hover = false;
            document.body.style.cursor = 'initial';
        }

        render(t) {
            this.resetParams();

            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.save();
            this.ctx.translate(this.width / 2, this.height / 2);

            let hoveredIndex;
            for (let i = 0; i < this.shapes.length; i++) {
                const s = this.shapes[i];

                this.shapes[i].draw(this.touchInfos);

                if (this.isHovered(s, this.touchInfos.mouse.x, this.touchInfos.mouse.y)) {
                    document.body.style.cursor = 'zoom-in';
                    this.hover = true;
                    hoveredIndex = i;
                }
            }

            this.drawFocus(this.shapes[hoveredIndex], this.hover);

            if (Math.random() < 0.01) {
                this.G.draw(t);
            }

            if (this.isDisplayed && this.isDeleating !== true) {
                this.ctx.globalAlpha = 0.8;
                this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
                this.M.addImage(t);
            }

            if (this.isDeleating) {
                this.M.deleteImage(t);
            }

            this.ctx.restore();

            this.animationId = requestAnimationFrame(this.render.bind(this));
        }
    }

    class Shape {
        constructor(params) {
            this.ctx = params.c;
            this.xIndex = params.x;
            this.yIndex = params.y;
            this.index = params.i;
            this.radius = params.r;
            this.numberOfShape = params.n;
            this.size = params.s;
            this.image = new Image();
            this.image.crossOrigin = "anonymous";
            this.image.src = params.p;
            this.ratio = 0;
            this.displayed = true;
            this.initialize();
        }

        initialize() {
            this.xRadian = Math.PI * 2 / this.numberOfShape * this.xIndex;
            this.yRadian = Math.PI * 2 / this.numberOfShape * this.yIndex;
        }

        updateParams(infos) {
            this.x = Math.sin(this.xRadian + infos.delta.x) * this.radius;
            this.y = Math.cos(this.yRadian + infos.delta.y) * this.radius;

            this.ratio = this.getNormalizedDist(infos);
        }

        getNormalizedDist(infos) {
            let tmp;
            tmp = Math.sqrt(this.x * this.x + this.y * this.y) / this.radius;
            tmp = this.ease(tmp);
            tmp = 1 - Math.min(tmp, 1);

            return tmp;
        }

        ease(t) {
            return t * t * t;
        }

        draw(infos) {
            this.updateParams(infos);

            if (Math.sin(this.yRadian + infos.delta.y) > 0 || Math.cos(this.xRadian + infos.delta.x) > 0) {
                this.displayed = false;

                return;
            }

            this.displayed = true;

            this.ctx.save();
            this.ctx.translate(this.x, this.y);
            this.ctx.scale(this.ratio, this.ratio);
            this.ctx.translate(-this.x, -this.y);

            this.ctx.globalAlpha = this.ratio;
            this.ctx.drawImage(
                this.image,
                this.image.width / 2 - this.size / 2,
                this.image.height / 2 - this.size / 2,
                this.size,
                this.size,
                this.x - this.size / 2,
                this.y - this.size / 2,
                this.size,
                this.size
            );

            this.ctx.restore();
        }
    }

    class Glitch {
        constructor(ctx, width, height, min, max) {
            this.ctx = ctx;
            this.width = width;
            this.height = height;
            this.min = min;
            this.max = max;
            this.dataArr = [];
        }

        getImageData() {
            let preHeight = 0, addHeight = 0;
            for (let i = 0; i < this.height; i += addHeight) {
                const obj = {};

                addHeight = Utilities.randomInt(this.min, this.max);

                if (preHeight + addHeight > this.height) {
                    addHeight = Math.floor(this.height - preHeight);
                }

                if (addHeight === 0) {
                    return;
                }

                const image = this.ctx.getImageData(0, preHeight, this.width, preHeight + addHeight);

                obj.image = image;
                obj.height = preHeight;

                this.dataArr.push(obj);

                preHeight += addHeight
            }
        }

        addImage(t) {
            for (let i = 0; i < this.dataArr.length; i++) {
                if (Math.random() > 0.01) {
                    this.ctx.putImageData(
                        this.dataArr[i].image,
                        Math.tan(this.dataArr[i].height * 0.1 + t) * 10 * Math.random(),
                        this.dataArr[i].height
                    );
                } else {
                    this.ctx.putImageData(
                        this.dataArr[Math.floor(this.dataArr.length * Math.random())].image,
                        this.width * Math.random() - this.width / 2,
                        this.dataArr[i].height
                    );
                }
            }
        }

        draw(t) {
            this.dataArr = [];
            this.getImageData();
            this.addImage(t);
        }
    }

    class Stopwatch {
        constructor() {
            this.initialize();
        }

        initialize() {
            const time = Date.now();

            this.startTime = time;
            this.lastTime = time;
        }

        calculateTime() {
            const time = Date.now();

            this.elapsedTime = time - this.startTime;
            this.lastTime = time;
        }

        getElapsedTime() {
            return this.elapsedTime;
        }
    }

    window.addEventListener('load', () => {
        const F = new FullScreen();
        const L = new Loading();

        L.initialize()
            .then(() => {
                const S = new Sketch();
            });
    });
}


imageStreaming()

//jquery code clock screen

$(function(){
	mhnUI.setup();
});
mhnUI = {
    pattern: "",
    setup: function() {
        this.lock(), this.filter(), this.colors(), this.links.setup(), this.dialog.setup(), setInterval("mhnUI.datetime()", 1e3)
    },
    lock: function() {
        mhnUI.page.hide(), pattern = new PatternLock(".mhn-lock", {
            margin: 15
        }), $(".mhn-lock-title").html($(".mhn-lock-title").data("title")), pattern.checkForPattern("7415369", function() {
            $(".mhn-lock-title").html('<span class="mhn-lock-success">Yes! you unlocked pattern</span>'), $(".patt-holder").addClass("patt-success"), setTimeout(function() {
                pattern.reset(), mhnUI.message()
            }, 1e3), mhnUI.page.show()
        }, function() {
            $(".mhn-lock-title").html('<span class="mhn-lock-failure">Sai rồi,ý nghĩa là "MẸ"</span>'), $(".patt-holder").removeClass("patt-success"), setTimeout(function() {
                pattern.reset(), mhnUI.message()
            }, 2e3)
        })
    },
    message: function() {
        $(".mhn-lock-title span").fadeOut(), setTimeout(function() {
            $(".mhn-lock-title").html($(".mhn-lock-title").data("title")), $(".mhn-lock-title span").fadeIn()
        }, 500)
    },
    datetime: function() {
        var t = new Array("Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"),
            e = new Array("Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"),
            n = new Date,
            i = n.getYear();
        1e3 > i && (i += 1900);
        var a = n.getDay(),
            o = n.getMonth(),
            s = n.getDate();
        10 > s && (s = "0" + s);
        var h = n.getHours(),
            c = n.getMinutes(),
            u = n.getSeconds(),
            l = "Sáng";
        h >= 12 && (l = "Night"), h > 12 && (h -= 12), 0 == h && (h = 12), 9 >= c && (c = "0" + c), 9 >= u && (u = "0" + u), $(".mhn-ui-date-time .mhn-ui-day").text(t[a]), $(".mhn-ui-date-time .mhn-ui-date").text(e[o] + " " + s + ", " + i), $(".mhn-ui-date-time .mhn-ui-time").text(h + ":" + c + " " + l), $(".mhn-ui-app-time").text(h + ":" + c + ":" + u + " " + l)
    },
    page: {
        show: function(t) {
            t = t ? t : "page-home", $(".mhn-ui-page").hide(), $(".mhn-ui-page." + t).show()
        },
        hide: function(t) {
            t = t ? t : "page-lock", $(".mhn-ui-page").hide(), $(".mhn-ui-page." + t).show()
        }
    },
    filter: function() {
        $(".mhn-ui-filter .mhn-ui-btn").click(function() {
            $(this).toggleClass("active"), $(".mhn-ui-filter-list").toggle(100)
        }), $(".mhn-ui-filter-list>div").click(function() {
            var t = $(this).data("filter");
            $(this).siblings().removeAttr("class"), $(this).addClass("active");
            var e = function(t) {
                $(".mhn-ui-apps .mhn-ui-col").fadeOut(400), $('.mhn-ui-apps .mhn-ui-col[data-filter="' + t + '"]').fadeIn(400)
            };
            switch (t) {
                case "all":
                    $(".mhn-ui-apps .mhn-ui-col").fadeIn(400);
                    break;
                case "general":
                    e(t);
                    break;
                case "social":
                    e(t);
                    break;
                case "credits":
                    e(t)
            }
            $(".mhn-ui-filter-list").toggle(100), $(".mhn-ui-filter .mhn-ui-btn").removeClass("active"), $(".mhn-ui-page-title").text($(this).text())
        })
    },
    colors: function() {
        $(".mhn-ui-icon span").on("mouseover", function() {
            $(this).css("background", $(this).data("color"))
        }).on("mouseout", function() {
            $(this).removeAttr("style")
        })
    },
    links: {
        setup: function() {
            $(".mhn-ui-apps .mhn-ui-icon").click(function() {
                var t = $(this).data("href"),
                    e = $(this).data("open");
                t && mhnUI.links.href(t), e && mhnUI.page.show(e)
            })
        },
        href: function(t) {
            mhnUI.dialog.show(t)
        }
    },
    dialog: {
        setup: function() {
            $('.mhn-ui-dialog-wrap,.mhn-ui-dialog-wrap a[data-action="cancel"]').click(function() {
                mhnUI.dialog.hide()
            }), $(".mhn-ui-dialog").click(function(t) {
                t.stopPropagation()
            }), $('.mhn-ui-dialog a[data-action="confirm"]').click(function() {
                setTimeout(function() {
                    mhnUI.dialog.hide()
                }, 400)
            })
        },
        show: function(t) {
            $('.mhn-ui-dialog-wrap a[data-action="confirm"]').attr("href", t), $(".mhn-ui-dialog-wrap").show()
        },
        hide: function() {
            $('.mhn-ui-dialog-wrap a[data-action="confirm"]').removeAttr("href"), $(".mhn-ui-dialog-wrap").fadeOut(400)
        }
    }
};

!function(t,e,n,a){"use strict";function r(t){for(var e=t.holder,n=t.option,a=n.matrix,r=n.margin,i=n.radius,o=['<ul class="patt-wrap" style="padding:'+r+'px">'],s=0,l=a[0]*a[1];l>s;s++)o.push('<li class="patt-circ" style="margin:'+r+"px; width : "+2*i+"px; height : "+2*i+"px; -webkit-border-radius: "+i+"px; -moz-border-radius: "+i+"px; border-radius: "+i+'px; "><div class="patt-dots"></div></li>');o.push("</ul>"),e.html(o.join("")).css({width:a[1]*(2*i+2*r)+2*r+"px",height:a[0]*(2*i+2*r)+2*r+"px"}),t.pattCircle=t.holder.find(".patt-circ")}function i(t,e,n,a){var r=e-t,i=a-n;return{length:Math.ceil(Math.sqrt(r*r+i*i)),angle:Math.round(180*Math.atan2(i,r)/Math.PI)}}function o(){}function s(e,n){var a=this,i=a.token=Math.random(),h=p[i]=new o,u=h.holder=t(e);if(0!=u.length){h.object=a,n=h.option=t.extend({},s.defaults,n),r(h),u.addClass("patt-holder"),"static"==u.css("position")&&u.css("position","relative"),u.on("touchstart mousedown",function(t){d.call(this,t,a)}),h.option.onDraw=n.onDraw||l;var c=n.mapper;h.mapperFunc="object"==typeof c?function(t){return c[t]}:"function"==typeof c?c:l,h.option.mapper=null}}var l=function(){},p={},d=function(e,a){e.preventDefault();var r=p[a.token];if(!r.disabled){r.option.patternVisible||r.holder.addClass("patt-hidden");var i="touchstart"==e.type?"touchmove":"mousemove",o="touchstart"==e.type?"touchend":"mouseup";t(this).on(i+".pattern-move",function(t){h.call(this,t,a)}),t(n).one(o,function(){u.call(this,e,a)});var s=r.holder.find(".patt-wrap"),l=s.offset();r.wrapTop=l.top,r.wrapLeft=l.left,a.reset()}},h=function(e,n){e.preventDefault();var a=e.pageX||e.originalEvent.touches[0].pageX,r=e.pageY||e.originalEvent.touches[0].pageY,o=p[n.token],s=o.pattCircle,l=o.patternAry,d=o.option.lineOnMove,h=o.getIdxFromPoint(a,r),u=h.idx,c=o.mapperFunc(u)||u;if(l.length>0){var f=i(o.lineX1,h.x,o.lineY1,h.y);o.line.css({width:f.length+10+"px",transform:"rotate("+f.angle+"deg)"})}if(u){if(-1==l.indexOf(c)){var v,m=t(s[u-1]);if(o.lastPosObj){for(var g=o.lastPosObj,x=g.i,w=g.j,b=Math.abs(h.i-x),j=Math.abs(h.j-w);(0==b&&j>1||0==j&&b>1||j==b&&j>1)&&(w!=h.j||x!=h.i);){x=b?Math.min(h.i,x)+1:x,w=j?Math.min(h.j,w)+1:w,b=Math.abs(h.i-x),j=Math.abs(h.j-w);var M=(w-1)*o.option.matrix[1]+x,y=o.mapperFunc(M)||M;-1==l.indexOf(y)&&(t(s[M-1]).addClass("hovered"),l.push(y))}v=[],h.j-g.j>0?v.push("s"):h.j-g.j<0?v.push("n"):0,h.i-g.i>0?v.push("e"):h.i-g.i<0?v.push("w"):0,v=v.join("-")}m.addClass("hovered"),l.push(c);var P=o.option.margin,k=o.option.radius,C=(h.i-1)*(2*P+2*k)+2*P+k,O=(h.j-1)*(2*P+2*k)+2*P+k;if(1!=l.length){var D=i(o.lineX1,C,o.lineY1,O);o.line.css({width:D.length+10+"px",transform:"rotate("+D.angle+"deg)"}),d||o.line.show()}v&&(o.lastElm.addClass(v+" dir"),o.line.addClass(v+" dir"));var E=t('<div class="patt-lines" style="top:'+(O-5)+"px; left:"+(C-5)+'px"></div>');o.line=E,o.lineX1=C,o.lineY1=O,o.holder.append(E),d||o.line.hide(),o.lastElm=m}o.lastPosObj=h}},u=function(t,e){t.preventDefault();var n=p[e.token],a=n.patternAry.join("");n.holder.off(".pattern-move").removeClass("patt-hidden"),a&&(n.option.onDraw(a),n.line.remove(),n.rightPattern&&(a==n.rightPattern?n.onSuccess():(n.onError(),e.error())))};o.prototype={constructor:o,getIdxFromPoint:function(t,e){var n=this.option,a=n.matrix,r=t-this.wrapLeft,i=e-this.wrapTop,o=null,s=n.margin,l=2*n.radius+2*s,p=Math.ceil(r/l),d=Math.ceil(i/l),h=r%l,u=i%l;return p<=a[1]&&d<=a[0]&&h>2*s&&u>2*s&&(o=(d-1)*a[1]+p),{idx:o,i:p,j:d,x:r,y:i}}},s.prototype={constructor:s,option:function(t,e){var n=p[this.token],i=n.option;return e===a?i[t]:(i[t]=e,void(("margin"==t||"matrix"==t||"radius"==t)&&r(n)))},getPattern:function(){return p[this.token].patternAry.join("")},setPattern:function(t){var e=p[this.token],n=e.option,a=n.matrix,r=n.margin,i=n.radius;if(n.enableSetPattern){this.reset(),e.wrapLeft=0,e.wrapTop=0;for(var o=0;o<t.length;o++){var s=t[o]-1,d=s%a[1],u=Math.floor(s/a[1]),c=d*(2*r+2*i)+2*r+i,f=u*(2*r+2*i)+2*r+i;h.call(null,{pageX:c,pageY:f,preventDefault:l,originalEvent:{touches:[{pageX:c,pageY:f}]}},this)}}},enable:function(){var t=p[this.token];t.disabled=!1},disable:function(){var t=p[this.token];t.disabled=!0},reset:function(){var t=p[this.token];t.pattCircle.removeClass("hovered dir s n w e s-w s-e n-w n-e"),t.holder.find(".patt-lines").remove(),t.patternAry=[],t.lastPosObj=null,t.holder.removeClass("patt-error patt-success")},error:function(){p[this.token].holder.addClass("patt-error")},checkForPattern:function(t,e,n){var a=p[this.token];a.rightPattern=t,a.onSuccess=e||l,a.onError=n||l}},s.defaults={matrix:[3,3],margin:20,radius:25,patternVisible:!0,lineOnMove:!0,enableSetPattern:!1},e.PatternLock=s}(jQuery,window,document);

$(document).ready(function() {
 
    // Fakes the loading setting a timeout
      setTimeout(function() {
          $('body').addClass('loaded');
      }, 1200);
   
  });