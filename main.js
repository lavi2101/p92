
// obteremos a referência do canvas usando fabric.Canvas() e a armazenaremos dentro de uma variável chamada canvas.
var canvas = new fabric.Canvas('myCanvas'); //complete o paranteses entre as ' com o  id 'myCanvas'

player_x = 10; //defina a coordenada x do jogador
player_y = 10; //defina a coordenada y do jogador

block_image_width = 30;   //defina a  largura do  bloco como 30
block_image_height = 30;  // defina a altura do  bloco como  30

var player_object = "";
var block_image_object = "";

function player_update() {
	fabric.Image.fromURL("jogador.png", function (Img) {//defina a imagem como jogador.png
		player_object = Img;
		player_object.scaleToWidth(150);
		player_object.scaleToHeight(140);
		player_object.set({ top: player_y, left: player_x });
		canvas.add(player_object);
	});
}

function new_image(get_image)//coloque a váriavel get_image entre parenteses para que ela carregue a peça de acordo com a  tecla pressionada

{
	fabric.Image.fromURL(get_image, function (Img) { //defina a biblioteca fabric antes do ponto.Image
		block_image_object = Img; //armaze Img na  váriavel
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({ top: player_y, left: player_x });//defina as coodrnada da img top:player_y,left:player_x
		canvas.add(block_image_object); //adicione a função canvas.add
	});

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (e.shiftKey == true && keyPressed == '67') {
		console.log("C e Shift pressionado ao mesmo tempo");
		block_image_width = block_image_width + 10;
		block_image_height = block_image_height + 10;
		document.getElementById("currentWidth").innerHTML = block_image_width;
		document.getElementById("currentHeight").innerHTML = block_image_height;

	}
	if (e.shiftKey == true && keyPressed == '68') {
		if (block_image_height && block_image_width > 10) {
			console.log("D e Shift pressionado ao mesmo tempo");
			block_image_width = block_image_width - 10;
			block_image_height = block_image_height - 10;
			document.getElementById("currentWidth").innerHTML = block_image_width;
			document.getElementById("currentHeight").innerHTML = block_image_height;

		}
		else {
			console.log("Tamanho minimo alcançavél 10 px");
		}
	}
	if (keyPressed = '38') {
		up();
		console.log("Cima");
	}
	if (keyPressed = '40') {
		down();
		console.log("Baixo");
	}
	if (keyPressed = '37') {
		left();
		console.log("Esquerda");
	}
	if (keyPressed = '39') {
		right();
		console.log("Direita");
	}
	if (keyPressed = '80') {
		new_image("parede.jpg");
		console.log("p");
	}
	if (keyPressed = '71') {
		new_image("grama.png");
		console.log("g");
	}
	if (keyPressed = '86') {
		new_image("verde_claro.png");
		console.log("v");
	}
	if (keyPressed = '77') {
		new_image("madeira_tronco.jpg");
		console.log("m");
	}
	if (keyPressed = '84') {
		new_image("telhado.jpg");
		console.log("t");
	}
	if (keyPressed = '65') {
		new_image("parede_amarela.png");
		console.log("a");
	}
	if (keyPressed = '69') {
		new_image("verde_escuro.png");
		console.log("e");
	}
	if (keyPressed = '85') {
		new_image("unico.png");
		console.log("u");

	}
	if (keyPressed = '78') {
		new_image("nuvem.jpg");
		console.log("n");
	}
}
function up() {
	if (player_y >= 0) {
		player_y = player_y - block_image_height;
		console.log("altura da imagem do bloco= " + block_image_height);
		console.log("quando seta pra cima e pressionada,x= " + player_x + " y= " + player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function down() {
	if (player_y <= 500) {
		player_y = player_y + block_image_height;
		console.log("altura da imagem do bloco= " + block_image_height);
		console.log("quando seta pra cima e pressionada,x= " + player_x + " y= " + player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function left() {
	if (player_x > 0) {
		player_x = player_x - block_image_width;
		console.log("altura da imagem do bloco= " + block_image_width);
		console.log("quando seta pra cima e pressionada,x= " + player_x + " y= " + player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function right() {
	if (player_y <= 850) {
		player_x = player_x + block_image_width;
		console.log("altura da imagem do bloco= " + block_image_width);
		console.log("quando seta pra cima e pressionada,x= " + player_x + " y= " + player_y);
		canvas.remove(player_object);
		player_update();
	}
}
