// var submit = document.getElementById("submit");
// submit.addEventListener("click", getData, false);
//
// function getData(e){
//   e.preventDefault();
//   var name = document.getElementById("contactName");
//   var phone = document.getElementById("contactPhone");
//   var email = document.getElementById("contactEmail");
//   var message = document.getElementById("message");
//   var error = document.querySelector('.error');
//
//   var today = new Date();
//   var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
//   var time = today.getHours() + ":" + today.getMinutes();
//   var dateTime = date+'  '+time;
//
//   var link = "mailto:a.garciarodriguez@hotmail.com"
//            + "?cc=" + email.value
//            + "&subject=" + encodeURI("Web contact message _ " + name.value)
//            + "&body=" + encodeURI("Hi! My name is " + name.value + ", " + "\n \n") + encodeURI(message.value) + encodeURI( "\n \n \n" + name.value+ "\n" + email.value + "\n" + phone.value + "\n \n")
//            + encodeURI (dateTime + "\n" + Intl.DateTimeFormat().resolvedOptions().timeZone)
//   ;
//
//   if (name.validity.valueMissing == false && phone.validity.valueMissing == false && email.validity.valueMissing == false && message.validity.valueMissing == false && email.validity.typeMismatch == false) {
//     window.location.href = link;
//   }
//
//
//   if(name.validity.valueMissing == true){
//       name.classList.add('error');
//   }
//   else{
//     name.classList.remove('error');
//     if(phone.validity.valueMissing == true) {
//       phone.classList.add('error');
//     }
//     else{
//       phone.classList.remove('error');
//       if(email.validity.valueMissing == true || email.validity.typeMismatch == true) {
//         email.classList.add('error');
//       }
//       else {
//         email.classList.remove('error');
//         if(message.validity.valueMissing == true) {
//           message.classList.add('error');
//         }
//         else{
//           message.classList.remove('error');
//         }
//       }
//     }
//   }
// }
// window.addEventListener("scroll", function(event){
//
//   var top = this.pageYOffset;
//
//   var layers = document.getElementsByClassName("parallax");
//   var layer, speed, yPos;
//   for (var i = 0; i < layers.length; i++) {
//     layer = layers[i];
//     speed = layer.getAttribute('data-speed');
//     var yPos = -(top * speed / 100);
//     layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
//
//   }
// });
//
//
//
// var slideIndex = 1;
// var timer;
// var next = document.querySelector('.next');
// var prev = document.querySelector('.prev');
//
// showSlides(slideIndex);
//
// next.addEventListener('click', moveF, false);
// prev.addEventListener('click', moveB, false);
//
// function moveF() {
//   clearTimeout(timer);
//  showSlides(slideIndex += 1);
// }
// function moveB(){
//   showSlides(slideIndex += -1);
//   clearTimeout(timer);
// }
//
// function showSlides(n)
// {
//   var slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {slideIndex = 1;}
//   else if (n < 1) {slideIndex = slides.length;}
//
//   for(var i = 0; i < slides.length; i++){
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
//   timer = setTimeout (moveF, 2000);
// }
//
// var modal = document.getElementById("myModal");
//
// function onClick(element) {
//   var img = document.getElementById("img01");
//   var name = document.getElementById("name");
//   var what = document.getElementById ("what");
//   var c = element.childNodes[1];
//   img.src = c.src;
//   what.innerHTML = c.alt;
//   name.innerHTML = c.title;
//   modal.style.display = "block";
// };
//
// var close = document.querySelector(".close");
//
// close.addEventListener('click', closeM, false);
//
// function closeM (e){
//   modal.style.display = "none";
// };
//
// var par = document.getElementById("main__parallax");
// var news = document.getElementById("main__news");
// var work = document.getElementById("main__Work");
// var abtMe = document.getElementById("main__AboutMe");
// var contact = document.getElementById("main__Contact");
// var dots = document.getElementsByClassName("dot");
//
// window.onscroll = function() {navDots()};
//
// function navDots()
// {
//   for(var i = 0; i < dots.length; i++)
//   {
//     dots[i].classList.remove("active");
//   }
//   if(document.documentElement.scrollTop < par.offsetHeight/2)
//   {
//     dots[0].classList.add("active");
//   }
//   else if (document.documentElement.scrollTop > par.offsetHeight/2 && document.documentElement.scrollTop < news.offsetHeight+par.offsetHeight/2)
//   {
//   dots[1].classList.add("active");
//   }
//   else if (document.documentElement.scrollTop > news.offsetHeight+par.offsetHeight/2 && document.documentElement.scrollTop < news.offsetHeight+par.offsetHeight/2+work.offsetHeight)
//   {
//   dots[2].classList.add("active");
//   }
//   else if (document.documentElement.scrollTop > news.offsetHeight+par.offsetHeight/2+work.offsetHeight && document.documentElement.scrollTop < news.offsetHeight+par.offsetHeight/2+work.offsetHeight+abtMe.offsetHeight)
//   {
//   dots[3].classList.add("active");
//   }
//   else if (document.documentElement.scrollTop > news.offsetHeight+par.offsetHeight/2+work.offsetHeight+abtMe.offsetHeight)
//   {
//   dots[4].classList.add("active");
//   }
// }

// https://perishablepress.com/vanilla-javascript-scroll-anchor/

(function() {
	scrollTo();
})();

function scrollTo() {
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		if ((link.href && link.href.indexOf('#') != -1) && ((link.pathname == location.pathname) || ('/' + link.pathname == location.pathname)) && (link.search == location.search)) {
			link.onclick = scrollAnchors;
		}
	}
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}

var ThreeDeeWork = document.getElementsByClassName("3D_Work");
var TwoDeeWork = document.getElementsByClassName("2D_Work");
var WebWork = document.getElementsByClassName("Web_Work");
var All = document.querySelector('.AllWork');
var ThreeDee = document.querySelector('.ThreeDWork');
var TwoDee = document.querySelector('.TwoDWork');
var Web = document.querySelector('.WebWork');

All.addEventListener('click', ShowAll, false);
ThreeDee.addEventListener('click', Show3D, false);
TwoDee.addEventListener('click', Show2D, false);
Web.addEventListener('click', ShowWeb, false);

function ShowAll() {
  ThreeDeeWork.classList.remove("work_inactive");
	TwoDeeWork.classList.remove("work_inactive");
	WebWork.classList.remove("work_inactive");

	All.classList.add("active");
	ThreeDee.classList.remove("active");
	TwoDee.classList.remove("active");
	Web.classList.remove("active");
}

function Show3D() {
  ThreeDeeWork.classList.remove("work_inactive");
	TwoDeeWork.classList.add("work_inactive");
	WebWork.classList.add("work_inactive");

	All.classList.remove("active");
	ThreeDee.classList.add("active");
	TwoDee.classList.remove("active");
	Web.classList.remove("active");
}
function Show2D() {
  ThreeDeeWork.classList.add("work_inactive");
	TwoDeeWork.classList.remove("work_inactive");
	WebWork.classList.add("work_inactive");

	All.classList.remove("active");
	ThreeDee.classList.remove("active");
	TwoDee.classList.add("active");
	Web.classList.remove("active");

	console.log("Estoy Dentro");
}
function ShowWeb() {
  ThreeDeeWork.classList.add("work_inactive");
	TwoDeeWork.classList.add("work_inactive");
	WebWork.classList.remove("work_inactive");

	All.classList.remove("active");
	ThreeDee.classList.remove("active");
	TwoDee.classList.remove("active");
	Web.classList.add("active");
}



// var burger = document.getElementById("burger");
// var mobileNav = document.getElementById("mobile__nav");
//
// var buttonNav = document.getElementsByClassName("nav_Item");
//
// burger.addEventListener("click", control, false);
//
// for(var i = 0; i < buttonNav.length; i++)
// {
//   buttonNav[i].addEventListener("click", control, false);
// }
// function control(e){
//   e.preventDefault;
//   mobileNav.classList.toggle("openNav");
// }
