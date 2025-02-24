import {olg} from "./proline"
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
	ease: "power3.out"
});

const {w, h} = size

const READ_PRE = {
	t1: 1.3,
	t2: 1.5,
	t3: 2.1,
}

const READ_POST = {
	t1: 1.5,
	t2: 1.5,
	t3: 2.1,
}

const READ = (universalBanner.name==="nfl-post") ? READ_POST : READ_PRE



function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	return tl
}



function stag(vh){
	return { duration:.3, opacity:0, stagger: .1, ...vh }
}


function start_landscape(barOptions, vh={x:-size.w}){
	let delay = .2
	
	

	const tl = init()	
	tl.add("start")
	// const barTL = barOptions.verHor==="h" ? animate_bars_vertical(barOptions, false) : animate_bars_horizontal(barOptions)
	
	
	// tl.add(barTL, "start")	
	// console.log(delay);

	tl.add("start", delay)
	

	tl.from('.t1', stag(vh), "start");	
	// tl.from('.logos', {duration:.3, opacity:0}, "end+=.3");		
	tl.to('.t1', {duration:.3, opacity:0}, `+=${READ.t1}`);		
	tl.from('.t2', stag(vh));	
	tl.to('.t2', {duration:.3, opacity:0}, `+=${READ.t2}`);		

	
	if(universalBanner.size==="300x250"){

		tl.add("bb")
		tl.to(".bars", {duration:.5, y:119}, "bb")
		tl.from(['.bar-bottom', '.bar-top'], {duration:.3, opacity:0}, "bb");		
	}else if(universalBanner.size==="728x90"){
		

		tl.add("bb")
		tl.to(".bars", {duration:.5, x:-350}, "bb")
		tl.from(['.bar-bottom', '.bar-top'], {duration:.3, opacity:0}, "bb");		
	
	}

	tl.from('.t3', stag(vh));	


	
	tl.from([".cta", ".legalBtn", ".playsmart"], {duration:.3, opacity:0}, "+=.4")
	
	
	tl.add(olg())
}




function start(vh={x:-size.w}){
	
	// TweenLite.to(".halo", {duration: .1, opacity:0, yoyo:true, repeat:3, repeatDelay:.1});

	const tl = init()	
	
	tl.add("start", .25)
	

	tl.from('.t1', stag(vh), "start");	
	// tl.from('.logos', {duration:.3, opacity:0}, "end+=.3");		
	tl.to('.t1', {duration:.3, opacity:0}, `+=${READ.t1}`);		
	tl.from('.t2', stag(vh));	
	tl.to('.t2', {duration:.3, opacity:0}, `+=${READ.t2}`);		

	if(universalBanner.size==="300x250"){

		tl.add("bb")
		tl.to([ ".bar-bottom", ".bars"], {duration:.4, y:"-=119"}, "bb")
		tl.from(['.bar-top'], {duration:.3, opacity:0}, "bb");		
		tl.to('.logos', {duration:.3, opacity:0}, `bb`);		

		tl.from('.t3', stag(vh));	
		tl.from('.logos_end', {duration:.3, opacity:0});		
	}else{
		tl.from('.t3', stag(vh));	
	}



	


	
	tl.from([".cta", ".legalBtn", ".playsmart"], {duration:.3, opacity:0}, "+=.4")
	
	
	tl.add(olg())
}




export {size, init, start, start_landscape}



