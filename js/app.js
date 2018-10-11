var spriteEnemy = "images/enemy-bug.png";
class Generic {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.speed = speed;
    }
}
// Inimigos que nosso jogador deve evitar

class Enemy extends Generic {
    // As variáveis aplicadas a nossas instâncias entram aqui.
    // Fornecemos uma a você para que possa começcar.

    // A imagem/sprite de nossos inimigos, isso usa um
    // ajudante que é fornecido para carregar imagens
    // com facilidade.
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
        this.x += speed * dt;
    }
    // Você deve multiplicar qualquer movimento pelo parâmetro
    // dt, o que garantirá que o jogo rode na mesma velocidade
    // em qualquer computador.
}





// Agora, escreva sua própria classe de jogador
// Esta classe exige um método update(), 
// um render() e um handleInput().


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
