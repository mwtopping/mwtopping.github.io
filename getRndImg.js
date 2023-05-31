var ImgList = ["ae7.gif", "BigBangGangnam.gif", "BigBangShirtless1.gif","BigBangShirtless2.gif","BigBangShirtless3.gif","BigBangShirtless4.gif","BigBangShirtless5.gif"];

function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}