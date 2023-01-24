const tabs = document.querySelectorAll(".profile-menu-link")
const contents = document.querySelectorAll(".timeline-right")

tabs.forEach((tab,index) => {
    tab.addEventListener("click", () => {
        // tab
        tabs.forEach(tab =>
            tab.classList.remove("active"))
        tab.classList.add("active")
        //content
        contents.forEach(content =>
               content.classList.remove("active") 
        )
        contents[index].classList.add("active")
    })
})

function openImageSocials(){


const imagePaths = [
    'https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/241535878_964753350766659_7487814559075683729_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=-Z3zcPaDOHUAX8R3T7g&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfBGX_hVzROOByomwwsgJf82Bhb3HzoiqCbMmcnHQb8v8w&oe=63D40B76',
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/292091078_1154118271830165_7491015852669925202_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=2lhVxgEo814AX9OcRLB&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfDcWHD-Fx8rwNw3tSyuNLZwp3F8bMWkygChlWvS0U7nLw&oe=63D32BC0',
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/307763632_1212646185977373_9161786053439862849_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=IHhN54qnknUAX830ZWy&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCorWlNM6H_SyPt8l5EWBzaFXuqXOSfnM7yx8NczWPtPg&oe=63D426FB',
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/121776550_1773667582790076_1551206943747615497_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oNLgUcvKeFgAX-ofeRh&tn=0CTlX4O3di43hF7x&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfDkS5Uxry65RVTq_QZ4meUNw6vLtfGcBWOCuL5hJqad_Q&oe=63F6181A',
    'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/44922918_510850319433569_1948400210044518400_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=3Gpr_uQwnGsAX8dZSSE&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCnXNJA824IYtMEcpZw3JRb5jO6LZ_FwBLO3ZAp5jCjXA&oe=63F6193B',
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/205948229_925904454651549_2472146814467678586_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LZ-aT1qQiHsAX8-NkOJ&tn=0CTlX4O3di43hF7x&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfAYrCUQiveu6fxa8kdo7WFhRWcaEx-ip7FdrJbjWnFz0w&oe=63F61421',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/172243623_876310139610981_3998637712621224597_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UDMWaCBa8J0AX_cqv4A&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCOHEtg8SmDLhbSKADpE5yCTFeYsUur8JSnMWNjvFHKFg&oe=63F60D04',
    'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/122396356_773570286551634_8791617548506518216_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ieJ-7mccl_cAX-2ev_w&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCh3ClKGFOIiRS9kXqdQeo93ZUDdkChqw7o4YJbvhAtTg&oe=63F60875',
    'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/122767858_773570273218302_7946490947424679766_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TLOnGLwOiM8AX_w98k3&tn=0CTlX4O3di43hF7x&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfAUvE76q7vTCZI4sWo9vIlHtFtbzkRzYlNT126GKP0G0A&oe=63F60546',
    'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/122045832_771139090128087_3565048904402936075_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=nlWPU5b30rUAX8QobR-&_nc_oc=AQkgL6aE9lvJg7hDxC2QKjFXO2_JS1kJq2rInjXCJosohopuovBorDtiZlLhXUJZi3g&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC-07-3gXD0vz4DTIEpRZQo5Y7-r1Ds6J78mRgsVi_1fg&oe=63F61AD6',
    'https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.6435-9/122131790_771139040128092_652910963500317564_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Oz8eRYnXOFEAX9n2xzd&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfACQqd84QmOqPoCG7Ds7I_fXuZsoDGLsiQ6pRXisBjAjg&oe=63F6281F',
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/120223162_755114278397235_4250437207450767631_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=SaqY1lRfip8AX9BtiKY&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfA7JW8YmOdJ6yMjUT9xku6gHgIowhqgrh8dhmBzapbylw&oe=63F5FBE7',
    'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/107760810_697144600860870_5844825121241819819_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-DMur0L7L3cAX_LG8QC&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCb38cyz3MEbh9ZbdZGPiftCaYUgXEne_ieszYdITwcWQ&oe=63F620E6',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/69139508_484953592079973_7807874979302735872_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=fv49VU3wciwAX-yUIGO&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA7AOs-8cL_XaibEzk-1dtq9BrluOOq_TIoAc0sKHrIRQ&oe=63F61D13',
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/61529903_433986213843378_7839118907876048896_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=F_5umIhClgQAX-L55Ga&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDj9GXK0S1qEqDYfaOvpGOfOh3DTdaBrqeQznktTd4GIw&oe=63F605F1',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/58599140_419795538595779_3703733531235581952_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zMQxynmiN_oAX8_A3aE&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDUo1rUyaCfLy17dhKQc1wjtgpZeTAe_1Ar1NI19L1G1w&oe=63F62698',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/53854741_397352804173386_7899847520648429568_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=aZiulniurmkAX-qPQoc&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBTUYfXDFU0gL3qLN71bDIXAINLnKLBi1KkZ7y_eZCy4w&oe=63F6125B',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/53456324_397352514173415_7050021591832330240_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=z_IHmc4gHyQAX-CFTfG&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfAq0R0seFc4hX9jkswsZsEXXzJidfFh1gOyqQhTogLdow&oe=63F605A4',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/54236693_397352370840096_3463005055290966016_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=qW_I2YzIW3MAX8yVaYd&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBomPrQOWs3Rg9L7Kraose8lTut2dD4q--_LnQTqrAsYw&oe=63F61A80',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/53930145_397352367506763_8332770985610575872_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=hJe6tGyljVwAX820Ocx&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBuNjpYpCMTAg95ogwKr6X20JbNL897tKwbg4vv1hdQhg&oe=63F62F21',
    'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/53692831_397078180867515_7697141986448375808_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rcveI_ZLD-8AX90wigJ&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAqQ7jGyvWI48LrTscI84xPg5pDmoXKwbRW5pRJyfp9YQ&oe=63F62AA6',
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/53032361_393648257877174_2492414404277043200_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fpvZGqi3L1kAX-JI1AS&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfD70UOMWPYB14a_KtQCczws6jk_5MxV0AgVORvpFhCPLg&oe=63F61B72',
    'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/52810379_393648227877177_7184992545426898944_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=g1kG3uWejUMAX-tNewa&_nc_oc=AQk2BIJuAUAXff1C-SFC7tSzEF_FOBZFap-HzeQxpPIHzB_RqvAk2pGeufsDzQauJmY&tn=0CTlX4O3di43hF7x&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfASYpgUlRmvVdd0lEl76X-EvPrvc263P9JsgoNdUsLYhQ&oe=63F611E4',
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/51184434_382781095630557_8161409972412874752_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cj4kdFmlYOAAX9wzZtc&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfBCvRRPysUV5xmYgb3PoW5eRS24fT9rUIdfVaZ8cToUzQ&oe=63F60B9E',
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/51140340_381297192445614_5014064861391355904_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8mMIXh3XxswAX_y6TBq&tn=0CTlX4O3di43hF7x&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCjG9tAVwo0YjwewgDKTtQeS2iCYeB2IZa5NKSskk_QPQ&oe=63F6082F',
    'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/49848582_372447239997276_8214677647171518464_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=BwKXTxHpklUAX_AceVQ&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBNkcPPxAAG7N9hC6pinX_8z0YzZef97u_-azr1Yr73Xg&oe=63F608B2',
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/49184651_368424547066212_2489403391684378624_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=VPZM9a-vdtoAX8sYMU5&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfBkc8C35CdyEqM7IzGjFCyOXXXiuDIqjub8lvK05oeTCw&oe=63F613DB',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/49612762_368009110441089_1644771590157631488_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=O_SQrPax30sAX8wgTOB&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfB9Xp82oZbDWVsTFbvzDAPJwtBT380IjxaNfIkZxXLHAQ&oe=63F60516',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/47197963_352962651945735_8471604472013914112_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TnEtvfODWVIAX98vB-7&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBvdkhUjg1_A4kzTRmHfr_GGrxtJXh9GLi8IhDVg2NzOQ&oe=63F601CB',
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/46508619_349948018913865_4326414204727721984_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=18KTAiBaQVkAX_lFO5b&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCjtRi7yOylA_U5ewG-box3TachOvKd6eVPrz1Yg1SmXQ&oe=63F62DB2',
    'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/46453265_347399642502036_5765699716037738496_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uMXP49oVJVMAX9prZ5N&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAbadLiMCMM9wNeV-3XslOfHC6Vih4XMeUfYe6iQe5c9w&oe=63F62F84',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/46104126_344313209477346_1726740864908132352_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6x-5MGsdmrMAX_Aj7nj&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfAaXPlZY-iTxTZUl0JTvnyxduLMXVLvMbA0nvpIFPiDgg&oe=63F62471',
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/44598623_335819806993353_4565311242192814080_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=yGd1VVvGMukAX8Smh4_&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfClreAkcv16AaWNg3lhi-kPZLk6O3Bmzulr5MGslQU1oQ&oe=63F60961',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/42828718_328053971103270_54094894049787904_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vFT4nqVvLaAAX_VrvL0&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCy0hsfJiBPzIAtoJdaehM7IXXBNLahvNjE56wS1MKvFw&oe=63F61F35',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/40512341_318169078758426_1666385965830111232_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XrFYRCrw8OQAX-iKKST&tn=0CTlX4O3di43hF7x&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfAnKys5IPrtlDp2O5OqIlwL-HQZwV2UO6UHgSArm_SMzQ&oe=63F61E7C',
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/39441681_309331116308889_3086239163897348096_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NzJA82BivEIAX8bw8Nl&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBDEaXvkjrYYPdkjBco3s2jEVhJJe0Acun1xTPPHWQkgw&oe=63F61C16',
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
      this.canvas.style.display = 'block';
      this.canvas.style.background = '#01012A';
      this.canvas.style.zIndex = '2';
      this.canvas.style.display = 'none';
    
      const openImage = document.querySelector(".album-image")
      openImage.addEventListener("click",()=>{
        this.canvas.style.display = 'block';
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
         ) 
      {
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
      for (let i = 0; i < this.dataArr.length ; i++) {
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
openImageSocials()


let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = "Exit Fullscreen";
    }
    else {
        fullscreen = false;
        document.exitFullscreen();
        fsEnter.innerHTML = "Go Fullscreen";
    }
});