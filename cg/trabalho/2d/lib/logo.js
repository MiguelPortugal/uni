function enter(ctx, dx, dy, sx, sy) {
    ctx.save();
    ctx.translate(dx,dy);
    ctx.scale(sx,sy);
}

function leave(ctx, fs, ss) {
    ctx.restore();
    ctx.fillStyle = fs;
    ctx.strokeStyle = ss;
    ctx.fill();
    ctx.stroke();
}

function leave_width(ctx, fs, ss, w) {
	ctx.restore();
	ctx.fillStyle = fs;
	ctx.strokeStyle = ss;
	ctx.lineWidth = w;
	ctx.fill();
	ctx.stroke();
	ctx.lineWidth = 0;
}

function retangulo(ctx){
	ctx.beginPath();
		ctx.rect(-1,-1,1,1)						//criar retangulo
	ctx.closePath();

}

function r(ctx){
	ctx.beginPath();
	ctx.moveTo(-0.954,0.06);
	ctx.bezierCurveTo(-0.9602,-0.0747,-0.9415,-0.0611,-0.9173,-0.0829);
	ctx.bezierCurveTo(-0.18,-0.52,-0.164,-0.037,-0.5315,0.196);
	ctx.lineTo(-0.5318,0.28084);
	ctx.lineTo(-0.2612,0.4132);
	ctx.bezierCurveTo(-0.251,0.423,-0.2735,0.471,-0.3076,0.4752);
	ctx.lineTo(-0.531,0.3706);
	ctx.lineTo(-0.5315,0.4439);
	ctx.bezierCurveTo(-0.5335,0.4589,-0.594,0.489,-0.599,0.4868);
	ctx.lineTo(-0.5997,0.3338);
	ctx.lineTo(-0.7138,0.27895);
	ctx.lineTo(-0.6015,0.2003);
	ctx.lineTo(-0.6038,-0.11837);
	ctx.bezierCurveTo(-0.5531,-0.148,-0.5483,-0.1529,-0.5363,-0.1445);
	ctx.lineTo(-0.5369,0.13355);
	ctx.quadraticCurveTo(-0.5171,0.1432,-0.4943,0.1243);
	ctx.bezierCurveTo(-0.27,-0.0536,-0.339,-0.19,-0.4254,-0.2048);
	ctx.bezierCurveTo(-0.5644,-0.2097,-0.735,-0.0987,-0.9464,0.0614);
	ctx.lineTo(-0.954,0.06);
	ctx.closePath();

}

function a(ctx){
	ctx.beginPath();
	ctx.moveTo(-0.31,0.15);
	ctx.bezierCurveTo(-0.3574,0.142,-0.4074,0.175,-0.4244,0.2724);
	ctx.bezierCurveTo(-0.4136,0.352,-0.3593,0.3247,-0.3055,0.2513);
	ctx.bezierCurveTo(-0.302,0.2417,-0.285,0.2318,-0.2818,0.257);
	ctx.bezierCurveTo(-0.261,0.308,-0.227,0.2863,-0.1895,0.2276);
	ctx.lineTo(-0.1994,0.2074);
	ctx.bezierCurveTo(-0.2506,0.2457,-0.2323,0.1412,-0.2577,0.1287);
	ctx.bezierCurveTo(-0.275,0.1243,-0.287,0.1332,-0.3093,0.1503);
	ctx.closePath();

}

function aHole(ctx){
	ctx.beginPath();
	ctx.moveTo(-0.369,0.2593);
	ctx.bezierCurveTo(-0.351,0.3137,-0.309,0.22,-0.2996,0.2027);
	ctx.bezierCurveTo(-0.2948,0.178,-0.3255,0.146,-0.369,0.2593);
	ctx.closePath();

}

function y(ctx){
	ctx.beginPath();
	ctx.moveTo(-0.1994,0.2074);
	ctx.lineTo(-0.152,0.102);
	ctx.bezierCurveTo(-0.1314,0.079,-0.118,0.11,-0.1243,0.118);
	ctx.lineTo(-0.115,0.1706);
	ctx.bezierCurveTo(-0.086,0.2039,-0.083,0.1312,-0.0293,0.06);
	ctx.lineTo(-0.0203,0.0597);
	ctx.lineTo(-0.0194,0.4985);
	ctx.lineTo(-0.0732,0.4985);
	ctx.lineTo(-0.0732,0.208);
	ctx.lineTo(-0.088,0.2065);
	ctx.bezierCurveTo(-0.0955,0.2365,-0.153,0.2927,-0.163,0.2264);
	ctx.bezierCurveTo(-0.1647,0.2048,-0.1819,0.21,-0.1895,0.2276);
	ctx.closePath();


}

function ponto(ctx){
	ctx.beginPath();
	ctx.moveTo(0.085,0.0302);
	ctx.bezierCurveTo(0.0017,0.0642,0.0211,0.1656,0.125,0.0994);
	ctx.bezierCurveTo(0.1598,0.0537,0.1404,0.0133,0.087,0.0302);
	ctx.closePath();
}

function b(ctx){
	ctx.beginPath();
	ctx.moveTo(0.1993,0.143);
	ctx.lineTo(0.198,-0.291);
	ctx.bezierCurveTo(0.314,-0.678,0.697,-0.451,0.3065,-0.1585);
	ctx.bezierCurveTo(0.297,-0.1326,0.3684,-0.1128,0.429,-0.053);
	ctx.bezierCurveTo(0.4993,0.028,0.367,0.1074,0.2698,0.273);
	ctx.lineTo(0.2334,0.2266);
	ctx.bezierCurveTo(0.2266,0.186,0.2435,0.1656,0.2552,0.163);
	ctx.lineTo(0.3627,0.0193);
	ctx.bezierCurveTo(0.3736,-0.0267,0.389,-0.0283,0.2916,-0.1136);
	ctx.bezierCurveTo(0.2704,-0.1393,0.271,-0.1716,0.3014,-0.1954);
	ctx.bezierCurveTo(0.516,-0.4253,0.312,-0.5905,0.256,-0.3114);
	ctx.lineTo(0.267,0.0915);
	ctx.bezierCurveTo(0.2402,0.1344,0.2176,0.152,0.1993,0.143);
	ctx.closePath();
}

function n(ctx){
	ctx.beginPath();
	ctx.moveTo(0.68,-0.0508);
	ctx.bezierCurveTo(0.71,-0.1233,0.753,-0.2257,0.776,-0.1526);
	ctx.bezierCurveTo(0.7722,-0.1314,0.7722,-0.0738,0.8123,-0.1756);
	ctx.bezierCurveTo(0.841,-0.221,0.8628,-0.2122,0.8805,-0.1375);
	ctx.bezierCurveTo(0.897,-0.0942,0.8957,-0.077,0.931,-0.1018);
	ctx.bezierCurveTo(0.9378,-0.1099,0.9581,-0.0943,0.9019,-0.0452);
	ctx.bezierCurveTo(0.8787,-0.0185,0.8338,-0.0354,0.833,-0.0946);
	ctx.bezierCurveTo(0.81863,-0.134,0.803,-0.119,0.7668,-0.026);
	ctx.bezierCurveTo(0.7366,0.0066,0.7254,0.0054,0.7188,-0.02);
	ctx.bezierCurveTo(0.7224,-0.0309,0.7141,-0.0632,0.6957,-0.0291);
	ctx.closePath();
}


function logo(ctx){
	enter(ctx,450,450,450,450);
	retangulo(ctx);
	leave(ctx,'red','red');
	
	enter(ctx,225,225,225,225);
	r(ctx);
	leave(ctx,'white','white');

	enter(ctx,225,225,225,225);
	a(ctx);
	leave(ctx,'white','white');

	enter(ctx,225,225,225,225);
	aHole(ctx);
	leave(ctx,'red','red');

	enter(ctx,225,225,225,225);
	y(ctx);
	leave(ctx,'white','white');

	enter(ctx,225,225,225,225);
	ponto(ctx);
	leave(ctx,'white','white');

	enter(ctx,225,225,225,225);
	b(ctx);
	leave(ctx,'white','white');


	enter(ctx,424,166.5,225,225);
	a(ctx);
	leave(ctx,'white','white');

	enter(ctx,424,166.5,225,225);
	aHole(ctx);
	leave(ctx,'red','red');

	enter(ctx,225,225,225,225);
	n(ctx);
	leave(ctx,'white','white');

}

function random(max) {								//Função gere valores random entre o 0 e o máximo
  return (Math.random() * (max+1));
}

function tweenToRandomColor(ctx) {
		TweenLite.to(ctx, 1, {colorProps:{fillStyle:"rgb(" + random(255) + "," + random(255) + "," + random(255) + ")"}, onUpdate:retangulo, onComplete:tweenToRandomColor,onCompleteParams:[ctx]});
		//Esta função é a que vai fazer a mudança de cores atraves dos valores random gerados, 
		//o ColorProps faz tween das cores definidas o onUpdate é o que indica quala função a ser modificada
		//onComplete indica a função a iniciar depois depois de esta se realizar
		//o valor 1 indica o tempo que tween demora a ser realizado.
		//on complete params indica qual o paramentro que a função de onComplete vai receber.
}


function main(){
	const canvas = document.getElementById("acanvas");
	const ctx= canvas.getContext("2d");
	logo(ctx);
	tweenToRandomColor(ctx);
	


}
