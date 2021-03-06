/**
 * Contains scene classes.
 * Every scene is a level that can update and render.
 */


/**
 * Base class for scenes.
 * Handles user input, updates game state and renderes entities.
 */
SB.Scene = function() {
	// this.entityManager = new SB.EntityManager(this);
};

SB.Scene.prototype.add = function (entity) {
	// this.entityManager.add(entity);
};

SB.Scene.prototype.mouseDown = function (x, y, event) {
};

SB.Scene.prototype.mouseMove = function (x, y) {
};

SB.Scene.prototype.mouseUp = function (x, y, event) {
};

SB.Scene.prototype.keyDown = function (code) {
};

SB.Scene.prototype.keyUp = function (code) {
};

SB.Scene.prototype.tick = function (delta) {
	// this.entityManager.tick(delta);
};

SB.Scene.prototype.render = function (ctx) {
	// this.entityManager.render(ctx);
};

SB.SceneFall = function() {
	SB.Scene.call(this);

	// this.add(this.player = new SB.Player(this, 0, 0));

	// Create POC dummy entity
	this.testCircle = {
		radius: 10,
		x: SB.canvas.width/2,
		y: 0,
		tick: function (delta) {
			this.y += delta/2;

		},
		render: function (ctx) {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
			ctx.fillStyle = 'red';
			ctx.fill();
		}
	}
};

SB.SceneFall.prototype = Object.create(SB.Scene.prototype);
SB.SceneFall.prototype.superClass = SB.Scene.prototype;

SB.SceneFall.prototype.keyDown = function (code) {
	// if (code === 65 || code === 37)
	// 	this.player.keys.a = true;
	// else if (code === 68 || code === 39)
	// 	this.player.keys.d = true;
	// else if (code === 87 || code === 38)
	// 	this.player.keys.w = true;
	// else if (code === 83 || code === 40)
	// 	this.player.keys.s = true;
};

SB.SceneFall.prototype.keyUp = function (code) {
	// if (code === 65 || code === 37)
	// 	this.player.keys.a = false;
	// else if (code === 68 || code === 39)
	// 	this.player.keys.d = false;
	// else if (code === 87 || code === 38)
	// 	this.player.keys.w = false;
	// else if (code === 83 || code === 40)
	// 	this.player.keys.s = false;
};

SB.SceneFall.prototype.tick = function (delta) {
	this.superClass.tick.call(this, delta);

	// this.camera.moveTowards(this.player);

	this.testCircle.tick(delta);
};

SB.SceneFall.prototype.render = function (ctx) {
	ctx.save();

	// this.camera.applyTransform(ctx);

	this.superClass.render.call(this, ctx);

	this.testCircle.render(ctx);

	ctx.restore();
};