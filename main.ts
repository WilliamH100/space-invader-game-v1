input.onButtonPressed(Button.A, function () {
    sprite1.change(LedSpriteProperty.X, -1)
    Player_X = sprite1.get(LedSpriteProperty.X)
})
input.onButtonPressed(Button.AB, function () {
    Sprite3 = game.createSprite(Player_X, 4)
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        Sprite3.change(LedSpriteProperty.Y, -1)
        if (Sprite3.isTouching(Sprite2)) {
            Sprite2.delete()
            Sprite3.delete()
            Sprite2 = game.createSprite(randint(0, 4), 0)
            speed += -50
            break;
        }
    }
    Sprite3.delete()
})
input.onButtonPressed(Button.B, function () {
    sprite1.change(LedSpriteProperty.X, 1)
    Player_X = sprite1.get(LedSpriteProperty.X)
})
let Movement = 0
let Sprite3: game.LedSprite = null
let Player_X = 0
let Sprite2: game.LedSprite = null
let sprite1: game.LedSprite = null
game.resume()
sprite1 = game.createSprite(0, 4)
Sprite2 = game.createSprite(randint(0, 4), 0)
let lives = 5
let speed = 2000
basic.forever(function () {
    Movement = randint(1, 2)
    if (Movement == 1) {
        Sprite2.change(LedSpriteProperty.X, -1)
    } else {
        Sprite2.change(LedSpriteProperty.X, 1)
    }
    basic.pause(speed)
    Sprite2.change(LedSpriteProperty.Y, 1)
})
basic.forever(function () {
    if (Sprite2.get(LedSpriteProperty.Y) == 4) {
        lives += -1
        if (lives == 0) {
            basic.clearScreen()
            game.pause()
            basic.showString("Game Over")
        } else {
            Sprite2.delete()
            Sprite2 = game.createSprite(randint(0, 4), 0)
        }
    }
})
