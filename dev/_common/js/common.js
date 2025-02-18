import {olg} from "./proline"
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
	ease: "power3.out"
});

const {w, h} = size

const READ = {
	t1: 2.5,
	t2: 1.7,
	t3: 2.1,
}

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


function start_landscape(barOptions, barOptions2, vh={x:-size.w}){
	const tl = init()	
	tl.add("start")
	const barTL = barOptions.verHor==="h" ? animate_bars_vertical(barOptions, false) : animate_bars_horizontal(barOptions)
	
	
	tl.add(barTL, "start")	
	// return
	tl.from('.t1', stag(vh), "start+=.3");	
	tl.from('.logos', {opacity:0, duration:.3});	
	tl.to([".hero", ".t1", "#bars", ".logos"], {duration:.3, opacity:0}, `+=${READ.t1}`)
	
	const barTL2 =barOptions2.verHor==="h" ? animate_bars_vertical(barOptions2) : animate_bars_horizontal(barOptions2)
	tl.add(barTL2, "end")	
	tl.from('.t2', stag(vh), "end+=.3");		
	if(universalBanner.size==="728x90" || universalBanner.size==="320x50"){
		tl.to(".t2", {duration:.3, opacity:0}, `+=${READ.t2}`)	
	}else{
		tl.to(".t2", {duration:.3, y:0, scale:.5, x:0, top:0, left:0}, `+=${READ.t2}`)		
	}
	
	tl.from([".cta", ".legalBtn",  ".logos_big", ".playsmart"], {duration:.3, opacity:0})
	tl.add(olg())
}

function start(barOptions, barOptions2, vh={x:-size.w}){
	
	const tl = init()	
	tl.from('.playa', {x:"+=150", y:"+=100", scale:"-=.3",  duration:.4,ease:"power3.out"});	
	tl.add("start")
	// const barTL = barOptions.verHor==="h" ? animate_bars_vertical(barOptions, false) : animate_bars_horizontal(barOptions)

	// tl.add(barTL, "start")	

	tl.from('.t1', stag(vh), "start");	
	tl.to([".hero",".playa", ".bars", ".t1", "#bars", ".logos"], {duration:.3, opacity:0}, `+=${READ.t1}`)
	
	const barTL2 =barOptions2.verHor==="h" ? animate_bars_vertical(barOptions2) : animate_bars_horizontal(barOptions2)
	tl.add(barTL2, "end")	
	tl.from('.t2', stag(vh), "end+=.3");		

	if(universalBanner.size==="970x250"){
		tl.to(".t2", {duration:.3, y:0, scale:.5, x:0, top:0, left:0}, `+=${READ.t2}`)	
		tl.from([".cta", ".legalBtn", ".playsmart", ".logos_big"], {duration:.3, opacity:0}, "+=.3")
	}else{
		tl.from('.logos_big', {opacity:0}, "-=.1");		
		tl.from([".cta", ".legalBtn", ".playsmart"], {duration:.3, opacity:0}, "+=.4")
	}
	
	
	tl.add(olg())
}


function animate_bars_horizontal(barOptions){
	const {
		TOTAL,
		WIDTH,
		HEIGHT,
		GAP,
		id,
		colors,
		startColor
	} = barOptions  
	const bars = document.getElementById(id)	
	for(let i=0;i<TOTAL;i++){
		const barItem = document.createElement("div")
		const height = HEIGHT-(i * GAP)		
		
		TweenLite.set(barItem, {
			transformOrigin:"0% 100%",
			className: `bar bar_${i}`,
			width:WIDTH, 
			height,  
			
			scale: 1, 
			x: WIDTH*i,
			y: HEIGHT-height,
			backgroundColor:`#${colors[i]}`
		})
		
		bars.appendChild(barItem)
	}

	const tl = new TimelineMax()
	tl.from(`#${id} .bar`, {
		scaleY: 0,
		stagger: 0.06
	});
	return tl
}

function animate_bars_vertical(barOptions, animate=true){
	const {
		TOTAL,
		WIDTH,
		HEIGHT,
		GAP,
		id,
		colors,
	} = barOptions  
	const bars = document.getElementById(id)	
	for(let i=0;i<TOTAL;i++){

		const barItem = document.createElement("div")
		TweenLite.set(barItem, {
			className: `bar bar_${i}`,
			height:HEIGHT, 
			width:WIDTH-(i * GAP),  
			y:HEIGHT*i, 
			backgroundColor:`#${colors[i]}`
		})
		
		bars.appendChild(barItem)
	}

	const tl = new TimelineMax()
	if(animate){
		tl.from(`#${id} .bar`, {
			width: 0,
			stagger: 0.06
		});	
	}
	
	return tl



}

export {size, init, start, start_landscape}



