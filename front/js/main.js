function isMyScriptLoaded(url) {
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length; i--;) {
        if (scripts[i].getAttribute('src') === url) return true;
    }
    return false;
}

function dinamicEvent () {
	let eventElement = document.querySelector('.dinEvent');
		let devent = eventElement.getAttribute('data-event');
		switch (devent) {
			case 'click' : eventElement.click(); 
			break;
			case 'focus' : eventElement.blur(); eventElement.focus();
			break;
		}
		eventElement.classList.remove('dinEvent');

	
}

function addScript(event) {
	let scriptSrc = event.currentTarget.getAttribute('data-addscript');
	if (scriptSrc) {
		event.preventDefault();
		event.currentTarget.classList.add('dinEvent');
				
		document.querySelectorAll('[data-addscript="'+scriptSrc+'"]').forEach(function(el) {
			el.removeAttribute('data-addscript');
		});
		let script = document.createElement('script');
		script.src = scriptSrc;
		script.async = false;
		script.onload = () => dinamicEvent();
		document.body.append(script);
	}		
}

function addStyle(event) {
	let styleSrc = event.currentTarget.getAttribute('data-addstyle');
	if (styleSrc) {
		document.querySelectorAll('[data-addstyle="'+styleSrc+'"]').forEach(function(el) {
			el.removeAttribute('data-addstyle');
		});
		let style = document.createElement('link');
		style.href = styleSrc;
		style.rel = "stylesheet";
		document.body.appendChild(style);
	}
}

function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

var initdinamikload = function(rod="body"){
	var roditel = document.querySelector(rod); 
	roditel.querySelectorAll('[data-addscript]').forEach(function(el) {
		el.addEventListener('click', addScript);
	});
	roditel.querySelectorAll('[data-addstyle]').forEach(function(el) {
		el.addEventListener('click', addStyle);	
	});
}
 
window.addEventListener('DOMContentLoaded', function() {

	initdinamikload();
	window.addEventListener('scroll', function() {
		if (window.pageYOffset > 300) {
			document.querySelector('body').classList.add('fix');
			if(document.querySelectorAll('.to_up').length === 0) {
				let button = document.createElement('button');
				button.classList.add("to_up");
				document.body.append(button);
				button.addEventListener('click', backToTop);
			}
	
		} else {
			document.querySelector('body').classList.remove('fix');
			if(document.querySelectorAll('.to_up').length === 1) {
				document.querySelector('.to_up').remove();
			}
		}
	  });


});

