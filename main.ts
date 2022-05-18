namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const bOrb = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -160
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bOrb, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    mySprite = sprites.create(assets.image`sprite`, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 255
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    mySprite.setPosition(330, 3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    mySprite = sprites.create(assets.image`sprite`, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 255
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    mySprite.setPosition(330, 3)
})
let _10_coin: Sprite = null
let coin: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level5`)
mySprite = sprites.create(assets.image`sprite`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 255
mySprite.setPosition(22, 1)
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
    coin = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 5 5 5 5 5 5 5 1 1 1 1 
        1 1 1 5 2 2 2 2 2 2 2 5 1 1 1 
        1 1 5 2 5 5 5 5 5 5 5 4 5 1 1 
        1 5 2 5 4 4 4 4 4 4 4 5 4 5 1 
        1 5 2 5 4 4 4 5 4 4 4 5 4 5 1 
        1 5 2 5 4 4 4 5 4 4 4 5 4 5 1 
        1 5 2 5 4 4 4 5 4 4 4 5 4 5 1 
        1 5 2 5 4 4 4 5 4 4 4 5 4 5 1 
        1 5 2 5 4 4 4 5 4 4 4 5 4 5 1 
        1 5 2 5 4 4 4 4 4 4 4 5 4 5 1 
        1 1 5 2 5 5 5 5 5 5 5 4 5 1 1 
        1 1 1 5 4 4 4 4 4 4 4 5 1 1 1 
        1 1 1 1 5 5 5 5 5 5 5 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Coin)
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`myTile5`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
    _10_coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bOrb)
    tiles.placeOnTile(_10_coin, value)
    tiles.setTileAt(value, assets.tile`myTile5`)
}
