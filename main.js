nosex = 0;
nosey = 0;
mariox = 325;
marioy = 325;
img = "";


function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav")
mario_die = loadSound("mariodie.wav");
mario_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");
	poseNet = ml5.poseNet(video, modelloaded);
}

function draw() {
	game();
}

function modelloaded() {
	console.log("loaded");
	poseNet.on("pose", gotPoses);

}

function gotPoses(result) {
	if (result.length > 0) {
		nosex = result[0].pose.nose.x;
		nosey = result[0].pose.nose.y;
		console.log(result);
	}
}




