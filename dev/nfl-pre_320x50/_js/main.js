

import {init, start_landscape, size} from '../../_common/js/common.js'




const colors = [	
	"00c748", 
	"17cc46", 
	"2ed145", 
	"46d442", 
	"5eda40", 
	"76de3d", 
	"8de23b",
	"a4e739",	
	"bbeb37",	
	
	]

const barOptions  ={
	colors,
	verHor:"v",
	TOTAL: 9,
	WIDTH: 8,
	HEIGHT: 360,
	GAP: 10,
	id:"bars",
	
}

const barOptions2  ={
	...barOptions,
	id:"bars2"
}


start_landscape({y:size.h})





module.exports = {};

