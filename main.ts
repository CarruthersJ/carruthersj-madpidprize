namespace SpriteKind {
    export const PLayerTwo = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.player1.changeScoreBy(1)
    PlayerOne.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    PlayerTwo.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    Fruit.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    info.startCountdown(5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PLayerTwo, function (sprite, otherSprite) {
    info.player2.changeScoreBy(1)
    PlayerOne.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    PlayerTwo.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    info.startCountdown(5)
})
let PlayerTwo: Sprite = null
let Fruit: Sprite = null
let PlayerOne: Sprite = null
info.startCountdown(5)
scene.setBackgroundColor(9)
PlayerOne = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . c c c c c . . . 
. . . . . . c c 5 5 5 5 5 c . . 
. . . . . c 5 5 5 5 5 5 5 5 c . 
. . . . c b b b b b b 5 5 5 c . 
. . . . c 1 1 b b 1 b b c c . . 
. . . c 1 1 1 b b 1 1 1 c . . . 
. . . c 1 1 1 1 b 1 1 1 c . c c 
. . . c d 1 1 1 b 1 1 1 b b 5 c 
. . c c d 1 c 1 b 1 b 1 5 5 5 c 
. c c d d 1 1 1 1 1 b 1 b b 5 c 
f d d d 1 1 1 1 1 b b 1 f . c c 
f f f 1 1 1 1 1 1 b b b f . . . 
. . . f f 1 1 1 b b b 5 5 f . . 
. . . . . f f f 5 5 5 5 5 f . . 
. . . . . . . . f f f f f f . . 
`, SpriteKind.Player)
Fruit = sprites.create(img`
. 8 8 . . . . . 
. 8 6 8 . . . . 
. . 8 6 8 . . . 
. . . 8 6 8 . . 
. . . 8 6 6 . . 
. . . 8 6 7 6 . 
. . 6 7 6 5 6 . 
. 6 5 6 7 5 8 . 
6 5 7 7 5 8 6 8 
6 5 6 5 6 8 6 8 
8 7 6 7 8 8 6 8 
8 7 6 7 8 6 6 8 
8 7 6 7 7 6 6 8 
8 7 7 6 7 6 8 . 
. 8 7 6 7 8 . . 
. . 8 7 6 8 . . 
`, SpriteKind.Food)
PlayerTwo = sprites.create(img`
. . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . . . . c c c 
. . . . f f f f f f c c c c c c f f . . . . . . . . . c c b b c 
. . f f b b b b b b b b b b b b b c f f f . . . . . c d b b c . 
f f b b b b b b b b b c b c b b b b c c c f f . . c d d b b f . 
f b c b b b b b f f b b c b c b b b c c c c c f f f d b b f . . 
f b b b 1 1 1 1 f f 1 b c b c b b b c c c c c c c b b b c f . . 
. f b 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c b c c f . . 
. . f c c c 3 3 c c 1 1 b b b b c c c c c c c c f f f b b c f . 
. . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . . f b b f . 
. . . . f 3 3 c 1 1 1 c b b b f d d d d d c c . . . . . f b b f 
. . . . . f f 1 1 1 1 f b d b b f d d c c . . . . . . . . f f f 
. . . . . . . c c c c c f b d b b f c . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.PLayerTwo)
PlayerOne.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
PlayerTwo.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
Fruit.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
controller.moveSprite(PlayerOne, 100, 100)
controller.player2.moveSprite(PlayerTwo)
PlayerOne.setFlag(SpriteFlag.StayInScreen, true)
PlayerTwo.setFlag(SpriteFlag.StayInScreen, true)
Fruit.setFlag(SpriteFlag.StayInScreen, true)
