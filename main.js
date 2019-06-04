new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        playerBar: {
            width: '100',
            health: 100
        },
        monsterBar: {
            width: '100',
            health: 100
        },
        battleLog: []
    },
    methods: {
        startGame: function() {
            this.gameStarted = !this.gameStarted
            this.playerBar.health = 100
            this.playerBar.width = '100%'
            this.monsterBar.health = 100
            this.monsterBar.width = '100%'
            this.battleLog = []
        },
        attack: function() {
            let pBar = this.playerBar
            let mBar = this.monsterBar
            let pAttack = Math.floor(Math.random()*(15-5) + 5);
            let mAttack = Math.floor(Math.random()*(15-5) + 5);
            pBar.health -= mAttack
            pBar.width = pBar.health + '%'
            mBar.health -= pAttack
            mBar.width = mBar.health + '%'

            this.battleLog.push({name: 'PLAYER',
            target: 'MONSTER', action: 'ATTACKS', hp: pAttack})
            this.battleLog.push({name: 'MONSTER', target: 'PLAYER', action: 'ATTACKS', hp: mAttack})

            if(mBar.health && pBar.health <= 0){
                alert('You and the monster have both fallen...')
                return this.gameStarted = !this.gameStarted
            }else if(mBar.health <= 0) {
                alert('You defeated the monster!!!')
                return this.gameStarted = !this.gameStarted
            } else if(pBar.health <= 0) {
                alert('The monster killed you!!')
                return this.gameStarted = !this.gameStarted
            }

        },
        specialAttack: function() {
            let pBar = this.playerBar
            let mBar = this.monsterBar
            let pAttack = Math.floor(Math.random()*(35-20) + 20);
            let mAttack = Math.floor(Math.random()*(35-20) + 20);
            pBar.health -= mAttack
            pBar.width = pBar.health + '%'
            mBar.health -= pAttack
            mBar.width = mBar.health + '%'

            this.battleLog.push({name: 'PLAYER',
            target: 'MONSTER', action: 'USES A SPECIAL ATTACK ON', hp: pAttack})
            this.battleLog.push({name: 'MONSTER', target: 'PLAYER', action: 'USES A SPECIAL ATTACK ON', hp: mAttack})

            if(mBar.health && pBar.health <= 0){
                alert('You and the monster have both fallen...')
                return this.gameStarted = !this.gameStarted
            }else if(mBar.health <= 0) {
                alert('You defeated the monster!!!')
                return this.gameStarted = !this.gameStarted
            } else if(pBar.health <= 0) {
                alert('The monster killed you!!')
                return this.gameStarted = !this.gameStarted
            }
        },
        heal: function() {
            let pBar = this.playerBar
            let pHeal = Math.floor(Math.random()*(40-30) + 30);
            let mAttack = Math.floor(Math.random()*(30-15) + 15);
            pBar.health += pHeal - mAttack
            pBar.width = pBar.health + '%'

            this.battleLog.push({name: 'PLAYER', action: 'HEALS', hp: pHeal})
            this.battleLog.push({name: 'MONSTER', target: 'PLAYER', action: 'ATTACKS', hp: mAttack})
        }
    }
})