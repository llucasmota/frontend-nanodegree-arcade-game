class Generic {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
    }
}
// Inimigos que nosso jogador deve evitar
class Enemy extends Generic {
    constructor(x, y, speed, sprite) {
        super(x, y, sprite);
        this.speed = speed;

    }
    // Desenhe o inimigo na tela, método exigido pelo jogo
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // Atualize a posição do inimigo, método exigido pelo jogo
    // Parâmetro: dt, um delta de tempo entre ticks
    update(dt) {
        this.x += this.speed * dt;
        if(this.x >= 404)   {
            this.x = 0;
        }
        

    }
    reset() {

    }
}
var allEnemies = [
    new Enemy(0, 80, 50, 'images/enemy-bug.png'),
    new Enemy(0, 160, 50, 'images/enemy-bug.png'),
    new Enemy(0, 240, 60, 'images/enemy-bug.png'),
    new Enemy(0, 80, 80, 'images/enemy-bug.png'),
    new Enemy(0, 160, 90, 'images/enemy-bug.png'),
    new Enemy(0, 240, 90, 'images/enemy-bug.png'),
];



/**
 * Você deve multiplicar qualquer movimento pelo parâmetro
dt, o que garantirá que o jogo rode na mesma velocidade
em qualquer computador.
 */
class Player extends Generic {
    constructor(x, y, sprite) {
        super(x, y, sprite);
        this.actX = 70;
        this.actY = 410;
        this.act = '';
        //this.speed  speed;
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // Atualize a posição do inimigo, método exigido pelo jogo
    // Parâmetro: dt, um delta de tempo entre ticks
    update() {

    }
    handleInput(key) {
        console.log("este é o x: " + this.x, "este é o y: " + this.y);
        if (key === "up" && this.y >= 8 && this.y >= -70) {
            this.y -= 98;
        }
        if (key === "down" && this.y < 410) {
            this.y += 99;
        }
        if (key === "right" && this.x >= 0 && this.x <= 380) {
            this.x += 100;
        }
        if (key === "left" && this.x >= 5) {
            this.x -= 100;
        }

    }
}

let player = new Player(200, 420, 'images/char-boy.png');
// Agora, escreva sua própria classe de jogador
// Esta classe exige um método update(), 
// um render() e um handleInput()2.


// Represente seus objetos como instâncias.
// Coloque todos os objetos inimgos numa array allEnemies
// Coloque o objeto do jogador numa variável chamada jogador.


// Isto reconhece cliques em teclas e envia as chaves para seu
// jogador. método handleInput(). Não é preciso mudar nada.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
