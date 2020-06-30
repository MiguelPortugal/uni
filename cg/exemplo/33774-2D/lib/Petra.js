function friso_1(f){
    f.beginPath();
        f.moveTo(2,0.2);//rectângulo grande
        f.lineTo(2,1);
        f.lineTo(0,1);
        f.lineTo(0,0.2);
        f.lineTo(2,0.2);
        f.moveTo(0,0.2);//losango por cima do rectâgulo
        f.lineTo(-0.03,0.05);
        f.lineTo(2.03,0.05);
        f.lineTo(2,0.2);
        f.lineTo(0,0.2);
    f.closePath();
    f.lineWidth = 0.008;
    f.fillStyle = '#FFF8DC';
    f.strokeStyle ='black';
    f.fill();
    f.stroke();
}

/*function friso_2(f){
    f.beginPath();
        f.moveTo(0.3,1);//triângulo
        f.lineTo(1,0);
        f.lineTo(1.7,1);
        f.lineTo(0.3,1);
        f.moveTo(0.45,0.9);//triângulo dentro do triângulo
        f.lineTo(1,0.2);
        f.lineTo(1.55,0.9);
        f.lineTo(0.45,0.9);
    f.closePath();
    f.lineWidth = 0.008;
    f.fillStyle = '#FFF8DC';
    f.strokeStyle ='black';
    f.fill();
    f.stroke();
}

function friso_3(f){
    f.beginPath();
        f.moveTo(-0.06,0.80);//losango esquerdo
        f.lineTo(0.2,0.80);
        f.lineTo(0.14,1.26);
        f.lineTo(0,1.26);
        f.lineTo(-0.06,0.80);
        f.moveTo(1.8,0.80);//losango direito
        f.lineTo(2.06,0.80);
        f.lineTo(2,1.26);
        f.lineTo(1.86,1.26);
        f.lineTo(1.8,0.80);
        f.moveTo(-0.01,1.26);//linha horizontal
        f.lineTo(1.6,1.26);
        f.moveTo(1.86,1.26);//linha horizontal
        f.lineTo(1.6,1.26)
        f.moveTo(0.3,1);//losango por baixo do triângulo
        f.lineTo(1.7,1);
        f.lineTo(1.6,1.26);
        f.lineTo(0.4,1.26);
        f.lineTo(0.3,1);
    f.closePath();
    f.lineWidth = 0.008;
    f.fillStyle = '#FFF8DC';
    f.strokeStyle ='black';
    f.fill();
    f.stroke();
}

function friso_4(f){
    f.beginPath();
        f.moveTo(0,1);//rectângulo de baixo
        f.lineTo(2,1);
        f.lineTo(2,1.9);
        f.lineTo(0,1.9);
        f.lineTo(0,1);
        f.moveTo(0.14,1.26);//linha vertical
        f.lineTo(0.14,1.9);
        f.moveTo(0.4,1.26);//linha vertical
        f.lineTo(0.4,1.9);
        f.moveTo(1.6,1.26);//linha vertical
        f.lineTo(1.6,1.9);
        f.moveTo(1.86,1.26);//linha vertical
        f.lineTo(1.86,1.9);
        f.moveTo(0,1.7);//losango pequeno esquerda
        f.lineTo(-0.02,1.61);
        f.lineTo(0.16,1.61);
        f.lineTo(0.14,1.7);
        f.lineTo(0,1.7);
        f.moveTo(1.86,1.7);//losango pequeno direito
        f.lineTo(1.84,1.61);
        f.lineTo(2.02,1.61);
        f.lineTo(2,1.7);
        f.lineTo(1.83,1.7);
        f.moveTo(0.14,1.61);//linha horizontal
        f.lineTo(0.4,1.61);
        f.moveTo(0.14,1.7);//linha horizontal
        f.lineTo(0.4,1.7);
        f.moveTo(1.6,1.61);//linha horizontal
        f.lineTo(1.83,1.61);
        f.moveTo(1.6,1.7);//linha horizontal
        f.lineTo(1.83,1.7);
        f.moveTo(0.4,1.7);//losango central
        f.lineTo(0.38,1.61);
        f.lineTo(1.62,1.61);
        f.lineTo(1.6,1.7);
    f.closePath();
    f.lineWidth = 0.008;
    f.fillStyle = '#FFF8DC';
    f.strokeStyle ='black';
    f.fill();
    f.stroke();    
}
*/
function friso (f){

    var figuras = [
        
        {x: 0, y: 0, sx: 1, sy:1, r:0, fn: friso_4},
        {x: 0, y: 0, sx: 1, sy:1, r:0, fn: friso_1},
        {x: 0, y: 0, sx: 1, sy:1, r:0, fn: friso_2},
        {x: 0, y: 0, sx: 1, sy:1, r:0, fn: friso_3},

    ];

    draw(f, figuras);
}

function coluna_base(c){
    c.beginPath();
        c.moveTo(-0.5,3.1);//losango grande
        c.lineTo(-0.3,3.2);
        c.lineTo(14.68,3.2);
        c.lineTo(14.88,3.1);
        c.lineTo(-0.5,3.1);
        c.moveTo(-0.3,3.2);//losango grande
        c.lineTo(-0.5,3.3);
        c.lineTo(14.88,3.3);
        c.lineTo(14.68,3.2);
        c.moveTo(-2,3.3);
        c.lineTo(20,3.3);
    c.closePath();
    c.lineWidth = 0.013;
    c.fillStyle = '#FFF8DC';
    c.strokeStyle ='black';
    c.fill();
    c.stroke();
}

function porta(f){
    f.beginPath();
        f.moveTo(0.38,-1.1);//rectângulo preto
        f.lineTo(0.38,-1.5);
        f.lineTo(0.72,-1.5);
        f.lineTo(0.72,-1.1);
        f.moveTo(0,0);
        f.lineTo(1,0);
        f.lineTo(1,4);
        f.lineTo(0,4);
        f.lineTo(0,0);
    f.closePath();
    f.lineWidth = 0.009;
    f.fillStyle = 'black';
    f.strokeStyle ='black';
    f.fill();
    f.stroke();
}

function fundo_de_baixo_porta(f){
    f.beginPath();
        f.moveTo(0,0);//rectâgulo à volta da porta
        f.lineTo(1,0);
        f.lineTo(1,4);
        f.lineTo(0,4);
        f.lineTo(0,0);
        f.moveTo(0,0.35);//linha
        f.lineTo(1,0.35);
    f.closePath();
    f.lineWidth = 0.015;
    f.fillStyle = '#EECFA1';
    f.strokeStyle ='black';
    f.fill();
    f.stroke();
}

function linha(l){
    l.beginPath();
        l.moveTo(0,0);
        l.lineTo(5,0);
        l.moveTo(0,1);
        l.lineTo(5,1);
    l.closePath();
    l.lineWidth = 0.09;
    l.fillStyle = '#FFF8DC';
    l.strokeStyle ='black';
    l.fill();
    l.stroke();
}

function parte_inferior(p){

    var figuras = [
       
        {x: 120, y: 380, sx: 45, sy: 5,r:0, fn: linha},
        {x: 206, y: 410, sx: 66, sy: 30,r:0, fn: fundo_de_baixo_porta},
        {x: 212, y: 430, sx: 52, sy: 23,r:0, fn: porta},
        
        ];
        
        draw(p, figuras);
}

function arco_fundo(a){
    a.beginPath();
        a.moveTo(80,80);
        a.quadraticCurveTo(115, 50, 150, 80);
    a.lineWidth = 0.6;
    a.fillStyle = '#FFF8DC';
    a.stroke();
    a.fill();
    a.closePath();
}

function parte_de_trás_superior(p){
    p.beginPath();
        p.moveTo(1,1);
        p.lineTo(1,2);
        p.lineTo(3,2.9);
        p.lineTo(3,1);
        p.lineTo(2.4,0.5);
        p.moveTo(1,1);
        p.lineTo(3,2.1);
    p.closePath();
    p.lineWidth = 0.04;
    p.fillStyle = '#FFF8DC';
    p.strokeStyle ='black';
    p.fill();
    p.stroke();
}

function parte_trás_superior_1(p){
    p.beginPath();
        p.moveTo(0,0);
        p.lineTo(2,0);
        p.lineTo(2,1);
        p.lineTo(0,1);
        p.lineTo(0,0);
        p.moveTo(0,0.5);
        p.lineTo(1.7,0.5);
    p.closePath();
    p.lineWidth = 0.015;
    p.fillStyle = '#FFF8DC';
    p.strokeStyle ='black';
    p.fill();
    p.stroke();
}

function topo(t){
    t.beginPath();
        t.moveTo(1,1);//losango
        t.lineTo(1.1,1.5);
        t.lineTo(1.9,1.5);
        t.lineTo(2,1);
        t.lineTo(1.9,1);
    t.closePath();
    t.lineWidth = 0.012;
    t.fillStyle = '#FFF8DC';
    t.strokeStyle ='black';
    t.fill();
    t.stroke();

    t.beginPath();
        t.moveTo(1,1);//triângulo
        t.lineTo(1.9,1);
        t.lineTo(1.9,-1);
        t.lineTo(1,1);
    t.closePath();
    t.lineWidth = 0.012;
    t.fillStyle = '#FFF8DC';
    t.strokeStyle ='black';
    t.fill();
    t.stroke();

    t.beginPath();
        t.moveTo(1.1,1);//linhas
        t.lineTo(1.9,-0.7);
        t.moveTo(1.2,1);//linhas
        t.lineTo(1.9,-0.4);
        t.moveTo(1.3,1);//linhas
        t.lineTo(1.9,-0.1);
        t.moveTo(1.4,1);//linhas
        t.lineTo(1.9,0.2);
    t.closePath();
    t.lineWidth = 0.012;
    t.fillStyle = '#FFF8DC';
    t.strokeStyle ='black';
    t.fill();
    t.stroke();

    t.beginPath();
        t.moveTo(1.1,1.5);//quadrado
        t.lineTo(1.1,2.7);
        t.lineTo(1.9,2.7);
        t.lineTo(1.9,1.5);
    t.closePath();
    t.lineWidth = 0.012;
    t.fillStyle = '#FFF8DC';
    t.strokeStyle ='black';
    t.fill();
    t.stroke();

    t.beginPath();
        t.moveTo(1.1,2.2);//losango no quadrado
        t.lineTo(1.05,2);
        t.lineTo(1.95,2);
        t.lineTo(1.9,2.2);
        t.lineTo(1.1,2.2);
    t.closePath();
    t.lineWidth = 0.012;
    t.fillStyle = '#FFF8DC';
    t.strokeStyle ='black';
    t.fill();
    t.stroke();
}

function parte_de_cima_de_todas(p){
    p.beginPath();
        p.moveTo(-0.2,0);
        p.lineTo(0.3,-3);
        p.lineTo(1.7,-3);
        p.lineTo(2,0);
    p.closePath();
    p.lineWidth = 0.012;
    p.fillStyle = '#FFF8DC';
    p.strokeStyle ='black';
    p.fill();
    p.stroke();
}

function estatua(e){
    e.beginPath();
        e.moveTo(-0.3,0);
        e.lineTo(-0.2,0.4);
        e.lineTo(-0.7,1.4);
        e.lineTo(0.7,1.4);
        e.lineTo(0.2,0.4);
        e.lineTo(0.3,0);
    e.closePath();
    e.lineWidth = 0.02;
    e.fillStyle = '#FFF8DC';
    e.strokeStyle ='black';
    e.fill();
    e.stroke();
}

function circulo(c){
    c.beginPath();
        c.arc(373, 66, 20, 0, 2 * Math.PI, false);
    c.closePath();
    c.lineWidth = 0.6;
    c.fillStyle = '#FFF8DC';
    c.strokeStyle ='black';
    c.fill();
    c.stroke();
}

function parte_superior(p){
    
    var figuras = [
        
        {x: 129, y: 85, sx: 8, sy: 30,r:0, fn: parte_de_trás_superior},
        {x: 355, y: 85, sx: -8, sy: 30,r:0, fn: parte_de_trás_superior},   
        {x: 152, y: 115, sx: 22, sy: 56.5,r:0, fn: parte_trás_superior_1},
        {x: 331, y: 115, sx: -22, sy: 56.5,r:0, fn: parte_trás_superior_1},
        {x: 48, y:100, sx:45, sy:33.1, r:0, fn: parte_de_cima_de_todas},
        {x: 435, y:100, sx:-45, sy:33.1, r:0, fn: parte_de_cima_de_todas},
        {x: 68, y: -25, sx: 1.5, sy: 1.8,r:0, fn: arco_fundo},
        {x: 68, y: -17, sx: 1.5, sy: 1.8,r:0, fn: arco_fundo},
        {x: 68, y: -9, sx: 1.5, sy: 1.8,r:0, fn: arco_fundo},
        {x: 68, y: -1, sx: 1.5, sy: 1.8,r:0, fn: arco_fundo},
        {x: 68, y: 7, sx: 1.5, sy: 1.8,r:0, fn: arco_fundo},
        {x: 68, y: 15, sx: 1.5, sy: 1.8,r:0, fn: arco_fundo},
        {x: -97, y: 76, sx: 123, sy: 25,r:0, fn: topo},
        {x: 580, y: 76, sx: -123, sy: 25,r:0, fn: topo},
        {x: 242, y: 92, sx: 23, sy: -25,r:0, fn: estatua},
        {x: 0, y: 0, sx: 0.65, sy: 0.65,r:0, fn: circulo},
        ];
        
        draw(p, figuras);
}

function coluna(c){
    c.beginPath();
        c.moveTo(0,0);//coluna 1
        c.lineTo(1,0);
        c.lineTo(1,3);
        c.lineTo(0,3);
        c.lineTo(0,0);
        c.moveTo(0,0.3);//losango 1
        c.lineTo(-0.20,0);
        c.lineTo(1.20,0);
        c.lineTo(1,0.3);
        c.lineTo(0,0.3);
        c.moveTo(0,3);//losango 1 baixo
        c.lineTo(-0.1,3.1);
        c.lineTo(1.1,3.1);
        c.lineTo(1,3);
    c.closePath();
    c.lineWidth = 0.02;
    c.fillStyle = '#FFF8DC';
    c.strokeStyle ='black';
    c.fill();
    c.stroke();
}

function colunas(c2d){
    
    var figuras = [
        
        {x: 35, y: 370, sx: 28.5, sy: 60,r:0, fn: coluna},//baixo
        {x: 116, y: 370, sx: 28.5, sy: 60,r:0, fn: coluna},
        {x: 180, y: 370, sx: 28.5, sy: 60,r:0, fn: coluna},
        {x: 277, y: 370, sx: 28.5, sy: 60,r:0, fn: coluna},
        {x: 335, y: 370, sx: 28.5, sy: 60,r:0, fn: coluna},
        {x: 416.5, y: 370, sx: 28.5, sy: 60,r:0, fn: coluna},
        {x: 35, y: 370, sx: 28.5, sy: 60,r:0, fn: coluna_base},
        {x: 39, y: 144, sx: 20, sy: 46,r:0, fn: coluna},//cima
        {x: 118, y: 144, sx: 20, sy: 46,r:0, fn: coluna},
        {x: 349, y: 144, sx: 20, sy: 46,r:0, fn: coluna},
        {x: 421, y: 144, sx: 20, sy: 46,r:0, fn: coluna},
        {x: 204, y: 144, sx: 20, sy: 46,r:0, fn: coluna},
        {x: 255, y: 144, sx: 20, sy: 46,r:0, fn: coluna},
        {x: 184, y: 162, sx: 15, sy: 40,r:0, fn: coluna},//cima atrás
        {x: 295, y: 162, sx: -15, sy: 40,r:0, fn: coluna}
        
        ];
        
        draw(c2d, figuras);
}

function sombra(s){
    s.beginPath();
        s.moveTo(0,0);
        s.lineTo(1,0);
        s.lineTo(1,1);
        s.lineTo(0,1);
        s.lineTo(0,0);
    s.closePath();
    s.lineWidth = 0.0001;
    s.fillStyle = '#CDAF95';
    s.strokeStyle ='black';
    s.fill();
    s.stroke();
}

function gradiente_colunas1(c2d) {
    var g = c2d.createLinearGradient(10,0,250,40);
    g.addColorStop(0, "white");
    g.addColorStop(1, "#FFEFDB");
    c2d.fillStyle = g;
    c2d.fillRect(82,154,64,64);  
}

function gradiente_colunas2(c2d) {
    var g = c2d.createLinearGradient(10,0,250,40);
    g.addColorStop(0, "white");
    g.addColorStop(1, "#FFEFDB");
    c2d.fillStyle = g;
    c2d.fillRect(272,154,64,64);  
}

function gradiente_colunas3(c2d) {
    var g = c2d.createLinearGradient(10,0,250,40);
    g.addColorStop(0, "white");
    g.addColorStop(1, "#FFEFDB");
    c2d.fillStyle = g;
    c2d.fillRect(420,154,64,64);  
}

function gradiente_colunas4(c2d) {
    var g = c2d.createLinearGradient(10,0,250,40);
    g.addColorStop(0, "white");
    g.addColorStop(1, "#FFEFDB");
    c2d.fillStyle = g;
    c2d.fillRect(647,154,64,64);  
}

function gradiente_colunas5(c2d) {
    var g = c2d.createLinearGradient(10,0,250,40);
    g.addColorStop(0, "white");
    g.addColorStop(1, "#FFEFDB");
    c2d.fillStyle = g;
    c2d.fillRect(780,154,64,64);  
}

function gradiente_colunas6(c2d) {
    var g = c2d.createLinearGradient(10,0,250,200);
    g.addColorStop(0, "white");
    g.addColorStop(1, "#FFEFDB");
    c2d.fillStyle = g;
    c2d.fillRect(970,154,64,64);  
}

function gradiente(c2d){
    
    var figuras = [
        
        {x: 0, y: 0, sx:0.43, sy: 2.52, r:0, fn: gradiente_colunas1},
        {x: 0, y: 0, sx:0.43, sy: 2.52, r:0, fn: gradiente_colunas2},
        {x: 0, y: 0, sx:0.43, sy: 2.52, r:0, fn: gradiente_colunas3},
        {x: 0, y: 0, sx:0.43, sy: 2.52, r:0, fn: gradiente_colunas4},
        {x: 0, y: 0, sx:0.43, sy: 2.52, r:0, fn: gradiente_colunas5},
        {x: 0, y: 0, sx:0.43, sy: 2.52, r:0, fn: gradiente_colunas6},
    
    ];

    draw(c2d,figuras);
}

function figura(c, x, y, sx, sy, r, fn) {
    c.save();
        c.translate(x,y);
        c.scale(sx,sy);
        c.rotate(r);
        fn(c);
    c.restore();
}

function draw(c, figures) {    
    
    for(var i in figures)
    {
        var fig = figures[i];
        figura(c, 
            fig.x, 
            fig.y, 
            fig.sx, 
            fig.sy, 
            fig.r, 
            fig.fn);
    }
}

function textura_1(c2d, ob){ 
    return function(){
        
        var p = c2d.createPattern(ob, "repeat");

        c2d.save();
            c2d.translate(57,145);//quadrado
            c2d.scale(30,35.5);
            c2d.rotate(0);
            
            c2d.beginPath();
                c2d.moveTo(0,0);
                c2d.lineTo(2,0);
                c2d.lineTo(2,4);
                c2d.lineTo(0,4);
                c2d.moveTo(0,0);   
            c2d.closePath();

        c2d.lineWidth = 0.000000001; 
        c2d.stroke();
        c2d.restore();
        c2d.fillStyle = p;
        c2d.save();
        c2d.translate(235,376);//imagem
        c2d.scale(0.285,0.285);
        c2d.fill();
        c2d.restore();
    }
}

function textura_2(c2d, ob){ 
    return function(){

        var p = c2d.createPattern(ob, "repeat");

        c2d.save();
            c2d.translate(157,145);//quadrado
            c2d.scale(30,35);
            c2d.rotate(0);
            
            c2d.beginPath();
                c2d.moveTo(0,0);
                c2d.lineTo(2,0);
                c2d.lineTo(2,4);
                c2d.lineTo(0,4);
                c2d.moveTo(0,0);   
            c2d.closePath();

        c2d.lineWidth = 0.000000001; 
        c2d.stroke();
        c2d.restore();
        c2d.fillStyle = p;
        c2d.save();
        c2d.translate(240,352);//imagem
        c2d.scale(0.5,0.5);
        c2d.fill();
        c2d.restore();
    }
}

function main() {
    var c2d = document.getElementById("acanvas").getContext("2d");

    var ob = new Image();//cima
    ob.src = "./media./2.png";
    ob.onload = textura_1(c2d, ob);

    var ob = new Image();//baixo
    ob.src = "./media./1.png";
    ob.onload = textura_2(c2d, ob);

    c2d.fillStyle="#ffefd5";
    c2d.fillRect(0,0,481,600);
 
    var figuras = [
        {x: 145, y: 370, sx:190, sy:185, r:0, fn: sombra},
        {x: 0, y: 0, sx: 1, sy: 1,r:0, fn: parte_inferior},
        {x: 35, y: 284, sx: 205, sy: 45,r:0, fn: friso},
        {x: 0, y: 0, sx: 1, sy: 1,r:0, fn: parte_superior},
    	{x: 0, y: 0, sx: 1, sy: 1,r:0, fn: colunas},
        {x: 0, y: 0, sx:1, sy: 1, r:0, fn: gradiente},
                
        ];
        
        draw(c2d, figuras);

}       