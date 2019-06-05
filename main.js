const vi = new Vue({
        el: '#app',
        data: {
                gameStarted: false,
                playerBar: {
                        width: '100',
                        health: 100,
                },
                monsterBar: {
                        width: '100',
                        health: 100,
                },
                battleLog: [],
        },
        methods: {
                startGame() {
                        this.gameStarted = true;
                        this.playerBar.health = 100;
                        this.playerBar.width = '100%';
                        this.monsterBar.health = 100;
                        this.monsterBar.width = '100%';
                        this.battleLog = [];
                },
                attack() {
                        const pBar = this.playerBar;
                        const mBar = this.monsterBar;
                        const pAttack = this.playerAttack(10, 20);
                        const mAttack = this.monsterAttack(10, 20);
                        mBar.health -= pAttack;
                        mBar.width = `${mBar.health}%`;
                        this.battleLog.unshift({
                                name: 'MONSTER',
                                target: 'PLAYER',
                                action: 'ATTACKS',
                                hp: mAttack,
                        });
                        this.battleLog.unshift({
                                name: 'PLAYER',
                                target: 'MONSTER',
                                action: 'ATTACKS',
                                hp: pAttack,
                        });

                        if (mBar.health <= 0) {
                                if (confirm('You defeated the monster!!! Would you like to play again?')) {
                                        return this.startGame();
                                }
                                return (this.gameStarted = false);
                        }
                        pBar.health -= mAttack;
                        pBar.width = `${pBar.health}%`;

                        if (pBar.health <= 0) {
                                if (confirm('The monster killed you!! Would you like to play again?')) {
                                        return this.startGame();
                                }
                                return (this.gameStarted = false);
                        }
                },
                specialAttack() {
                        const pBar = this.playerBar;
                        const mBar = this.monsterBar;
                        const pAttack = this.playerAttack(20, 30);
                        const mAttack = this.monsterAttack(20, 30);
                        mBar.health -= pAttack;
                        mBar.width = `${mBar.health}%`;
                        this.battleLog.unshift({
                                name: 'MONSTER',
                                target: 'PLAYER',
                                action: 'USES A SPECIAL ATTACK ON',
                                hp: mAttack,
                        });
                        this.battleLog.unshift({
                                name: 'PLAYER',
                                target: 'MONSTER',
                                action: 'USES A SPECIAL ATTACK ON',
                                hp: pAttack,
                        });

                        if (mBar.health <= 0) {
                                if (confirm('You defeated the monster!!! Would you like to play again?')) {
                                        return this.startGame();
                                }
                                return (this.gameStarted = false);
                        }
                        pBar.health -= mAttack;
                        pBar.width = `${pBar.health}%`;

                        if (pBar.health <= 0) {
                                if (confirm('The monster killed you!! Would you like to play again?')) {
                                        return this.startGame();
                                }
                                return (this.gameStarted = false);
                        }
                },
                heal() {
                        const pBar = this.playerBar;
                        let pHeal = 20;
                        const mAttack = this.monsterAttack(5, 20);
                        if (pBar.health < 80) {
                                pBar.health += 20;
                        } else {
                                pHeal = 100 - pBar.health;
                                pBar.health = 100;
                        }
                        pBar.health -= mAttack;
                        pBar.width = `${pBar.health}%`;

                        this.battleLog.unshift({ name: 'MONSTER', target: 'PLAYER', action: 'ATTACKS', hp: mAttack });
                        this.battleLog.unshift({ name: 'PLAYER', action: 'HEALS', hp: pHeal });
                },
                monsterAttack(min, max) {
                        return Math.floor(Math.random() * (max - min) + min);
                },
                playerAttack(min, max) {
                        return Math.floor(Math.random() * (max - min) + min);
                },
        },
});
