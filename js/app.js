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
        if (this.x >= 404) {
            this.x = 0;
        }
    }
    reset() {

    }
}
var allEnemies = [
    new Enemy(0, 130, 60, 'images/enemy-bug.png'),
    new Enemy(0, 230, 20, 'images/enemy-bug.png'),
    new Enemy(0, 330, 30, 'images/enemy-bug.png'),

];
/**
 * Você deve multiplicar qualquer movimento pelo parâmetro
dt, o que garantirá que o jogo rode na mesma velocidade
em qualquer computador.
 */
class Player extends Generic {
    constructor(x, y, sprite) {
        super(x, y, sprite);
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // Atualize a posição do inimigo, método exigido pelo jogo
    // Parâmetro: dt, um delta de tempo entre ticks
    update() {

    }
    handleInput(key) {

        if (key === "up" && this.y >= 8 && this.y >= -70) {
            this.y -= 100;

        }
        if (key === "down" && this.y < 410) {
            this.y += 100;
        }
        if (key === "right" && this.x >= -2 && this.x <= 380) {
            this.x += 101;
        }
        if (key === "left" && this.x >= 5) {
            this.x -= 101;
        }

    }
    reset() {
        this.x = 200;
        this.y = 420;
    }

    checkCollisions() {
        allEnemies.forEach(function (enemy) {
            if (enemy.y === player.y) {
                for (var i = 0; i <= 20; i++) {
                    if ((enemy.x.toFixed(0)) == player.x - i || (enemy.x.toFixed(0)) == player.x + i) {
                        player.reset();
                        alert("YOU LOSE");
                        location.reload();
                    }
                }
            }
        });
    }
}
var player = new Player(200, 430, 'images/char-boy.png');
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
