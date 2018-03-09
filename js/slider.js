var canvas = document.getElementById('can'),
    context = canvas.getContext('2d');
var img = document.createElement('img');
var canvas_link = document.getElementById('canvas-link');

/*function changeImage()
{
        var url = 'url(' + imgs[i] + ')';
        if(imgs[i] !== undefined){
            $("#home-header").css("background-image", url);
        }
        i++;

        if(i >= imgs.length){
            i = 0;
        }
        setTimeout("changeImage()", 5000);
}*/

function changeText()
{
    var url = 'url(' + imgs[j] + ')';
    if(imgs[j] !== undefined){
        $("#home-header").css("background-image", url);
    }
        addRibbon();
        updateDots();
        if(header[j] !== undefined && text[j] !== undefined){
            document.getElementById("slide-title").innerHTML = header[j];
            document.getElementById("slide-text").innerHTML = text[j];
        }
        j++;

        if(j >= header.length){
            j = 0;
        }
        setTimeout("changeText()", 5000);
}

function addRibbon()
{
    if(j < ribbons.length){
        img.onload = function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(this,0,0, 150, 150);
        };
        if(ribbons[j] == '')
            context.clearRect(0, 0, canvas.width, canvas.height);
        else {
            img.src = ribbons[j];
            canvas_link.href = ribbonLinks[j];
        }
    }
}

function updateDots(){
    var dots = document.getElementsByClassName("dot");
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     dots[j].className += " active";
}

//'img/header/japan.jpg',
var imgs = ['img/header/cosi.jpg', 'img/header/brain.jpg',  'img/header/fmri.jpg'];
var ribbonLinks = ['', 'events.html', 'index.html#recent-events'];
var ribbons = ['', 'img/ribbons/upcoming_events.png', 'img/ribbons/recent_news.png'];
var header = ['Welcome to SLAM Lab!', 'Traumatic Brain Injury Summit', "New Members"];
var text = ['We are the auditory neuroscience lab at the Ohio State University\'s Department of Speech & Hearing Science. We study the connection between speech, language, and music in the brain.',
'March 14 - Yune Lee, Jon Godbout, and Lise Worthen-Chaudhari are presenting their work on traumatic brain injury at the Brain Injury Association of Ohio’s 2018 TBI Summit, sponsored by CBI. <a href="https://www.biausa.org/find-bia/states/events/2018-ohio-brain-injury-summit"><i class="fa fa-link"></i> MORE</a>',
'SLAM Lab welcomes new members, Kristen McCormack and Parris Miller!'
];

var j = 0;

setTimeout("changeText()", 100);