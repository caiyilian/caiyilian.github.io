// 游戏管理器模块
(function() {
    'use strict';

    // 游戏选择器HTML
    function injectGameSelectorHTML() {
        var selectorHTML = `
        <div class="game-selector-modal" id="game-selector-modal">
            <div class="game-selector-window">
                <div class="game-selector-header">
                    <h2 class="game-selector-title">🎮 选择游戏</h2>
                    <button class="game-close" id="selector-close">×</button>
                </div>
                
                <div class="game-selector-content">
                    <div class="game-option" id="select-2048">
                        <div class="game-icon">🔢</div>
                        <h3>2048</h3>
                        <p>合并数字方块，挑战2048！</p>
                    </div>
                    
                    <div class="game-option" id="select-flappy">
                        <div class="game-icon">🐦</div>
                        <h3>Flappy Bird</h3>
                        <p>控制小鸟穿越管道障碍！</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', selectorHTML);
    }

    // Flappy Bird游戏HTML
    function injectFlappyBirdHTML() {
        var flappyHTML = `
        <div class="game-modal" id="flappy-modal">
            <div class="flappy-game-window">
                <div class="game-header">
                    <h2 class="game-title">🐦 Flappy Bird</h2>
                    <button class="game-close" id="flappy-close">×</button>
                </div>

                <div class="flappy-info">
                    <div class="score-container">
                        <div class="score-label">分数</div>
                        <div class="score-value" id="flappy-score">0</div>
                    </div>
                    <div class="score-container">
                        <div class="score-label">最高分</div>
                        <div class="score-value" id="flappy-best-score">0</div>
                    </div>
                </div>

                <div class="flappy-game-area">
                    <canvas id="flappy-canvas" width="400" height="600"></canvas>
                    <div class="flappy-game-over" id="flappy-game-over">
                        <div class="game-over-text" id="flappy-game-over-text">游戏结束!</div>
                        <div class="flappy-final-score" id="flappy-final-score">得分: 0</div>
                        <button class="game-btn" id="flappy-restart">重新开始</button>
                    </div>
                    <div class="flappy-start-screen" id="flappy-start-screen">
                        <div class="start-text">点击或按空格键开始</div>
                        <div class="start-instruction">点击屏幕或按空格键控制小鸟飞行</div>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', flappyHTML);
    }

    // Flappy Bird游戏逻辑
    var flappyGame = {
        canvas: null,
        ctx: null,
        bird: { x: 50, y: 300, velocity: 0, size: 20 },
        pipes: [],
        score: 0,
        bestScore: 0,
        gameState: 'start', // 'start', 'playing', 'gameOver'
        gravity: 0.5,
        jumpStrength: -8,
        pipeWidth: 60,
        pipeGap: 150,
        pipeSpeed: 2,
        animationId: null
    };

    function initFlappyBird() {
        flappyGame.canvas = document.getElementById('flappy-canvas');
        if (!flappyGame.canvas) return;
        
        flappyGame.ctx = flappyGame.canvas.getContext('2d');
        flappyGame.bestScore = parseInt(localStorage.getItem('flappy-best-score') || '0');
        
        resetFlappyGame();
        updateFlappyDisplay();
        
        // 绑定事件
        flappyGame.canvas.addEventListener('click', flappyJump);
        document.addEventListener('keydown', function(e) {
            var modal = document.getElementById('flappy-modal');
            if (modal && modal.style.display === 'flex') {
                if (e.code === 'Space') {
                    e.preventDefault();
                    flappyJump();
                } else if (e.code === 'Escape') {
                    closeFlappyBird();
                }
            }
        });
    }

    function resetFlappyGame() {
        flappyGame.bird = { x: 50, y: 300, velocity: 0, size: 20 };
        flappyGame.pipes = [];
        flappyGame.score = 0;
        flappyGame.gameState = 'start';
        
        // 生成初始管道
        for (var i = 0; i < 3; i++) {
            generatePipe(400 + i * 200);
        }
    }

    function generatePipe(x) {
        var gapY = Math.random() * (flappyGame.canvas.height - flappyGame.pipeGap - 100) + 50;
        flappyGame.pipes.push({
            x: x,
            topHeight: gapY,
            bottomY: gapY + flappyGame.pipeGap,
            passed: false
        });
    }

    function flappyJump() {
        if (flappyGame.gameState === 'start') {
            flappyGame.gameState = 'playing';
            document.getElementById('flappy-start-screen').style.display = 'none';
            gameLoop();
        }
        
        if (flappyGame.gameState === 'playing') {
            flappyGame.bird.velocity = flappyGame.jumpStrength;
        }
    }

    function gameLoop() {
        if (flappyGame.gameState !== 'playing') return;
        
        updateFlappyGame();
        drawFlappyGame();
        
        flappyGame.animationId = requestAnimationFrame(gameLoop);
    }

    function updateFlappyGame() {
        // 更新小鸟
        flappyGame.bird.velocity += flappyGame.gravity;
        flappyGame.bird.y += flappyGame.bird.velocity;
        
        // 检查边界碰撞
        if (flappyGame.bird.y <= 0 || flappyGame.bird.y >= flappyGame.canvas.height - flappyGame.bird.size) {
            gameOver();
            return;
        }
        
        // 更新管道
        for (var i = flappyGame.pipes.length - 1; i >= 0; i--) {
            var pipe = flappyGame.pipes[i];
            pipe.x -= flappyGame.pipeSpeed;
            
            // 检查碰撞
            if (pipe.x < flappyGame.bird.x + flappyGame.bird.size && 
                pipe.x + flappyGame.pipeWidth > flappyGame.bird.x) {
                if (flappyGame.bird.y < pipe.topHeight || 
                    flappyGame.bird.y + flappyGame.bird.size > pipe.bottomY) {
                    gameOver();
                    return;
                }
            }
            
            // 计分
            if (!pipe.passed && pipe.x + flappyGame.pipeWidth < flappyGame.bird.x) {
                pipe.passed = true;
                flappyGame.score++;
                updateFlappyDisplay();
            }
            
            // 移除离开屏幕的管道
            if (pipe.x + flappyGame.pipeWidth < 0) {
                flappyGame.pipes.splice(i, 1);
            }
        }
        
        // 生成新管道
        if (flappyGame.pipes.length > 0 && 
            flappyGame.pipes[flappyGame.pipes.length - 1].x < flappyGame.canvas.width - 200) {
            generatePipe(flappyGame.canvas.width);
        }
    }

    function drawFlappyGame() {
        var ctx = flappyGame.ctx;
        
        // 清空画布
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(0, 0, flappyGame.canvas.width, flappyGame.canvas.height);
        
        // 绘制管道
        ctx.fillStyle = '#228B22';
        for (var i = 0; i < flappyGame.pipes.length; i++) {
            var pipe = flappyGame.pipes[i];
            // 上管道
            ctx.fillRect(pipe.x, 0, flappyGame.pipeWidth, pipe.topHeight);
            // 下管道
            ctx.fillRect(pipe.x, pipe.bottomY, flappyGame.pipeWidth, 
                        flappyGame.canvas.height - pipe.bottomY);
        }
        
        // 绘制小鸟
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(flappyGame.bird.x, flappyGame.bird.y, 
                    flappyGame.bird.size, flappyGame.bird.size);
    }

    function gameOver() {
        flappyGame.gameState = 'gameOver';
        
        if (flappyGame.score > flappyGame.bestScore) {
            flappyGame.bestScore = flappyGame.score;
            localStorage.setItem('flappy-best-score', flappyGame.bestScore.toString());
        }
        
        updateFlappyDisplay();
        
        var gameOverElement = document.getElementById('flappy-game-over');
        var finalScoreElement = document.getElementById('flappy-final-score');
        
        if (gameOverElement) gameOverElement.style.display = 'flex';
        if (finalScoreElement) finalScoreElement.textContent = '得分: ' + flappyGame.score;
        
        if (flappyGame.animationId) {
            cancelAnimationFrame(flappyGame.animationId);
        }
    }

    function updateFlappyDisplay() {
        var scoreElement = document.getElementById('flappy-score');
        var bestScoreElement = document.getElementById('flappy-best-score');
        
        if (scoreElement) scoreElement.textContent = flappyGame.score;
        if (bestScoreElement) bestScoreElement.textContent = flappyGame.bestScore;
    }

    function restartFlappyBird() {
        document.getElementById('flappy-game-over').style.display = 'none';
        document.getElementById('flappy-start-screen').style.display = 'flex';
        resetFlappyGame();
        updateFlappyDisplay();
    }

    function openFlappyBird() {
        var modal = document.getElementById('flappy-modal');
        if (modal) {
            modal.style.display = 'flex';
            initFlappyBird();
        }
    }

    function closeFlappyBird() {
        var modal = document.getElementById('flappy-modal');
        if (modal) {
            modal.style.display = 'none';
            if (flappyGame.animationId) {
                cancelAnimationFrame(flappyGame.animationId);
            }
        }
    }

    // 游戏选择器功能
    function openGameSelector() {
        var modal = document.getElementById('game-selector-modal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    function closeGameSelector() {
        var modal = document.getElementById('game-selector-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // 事件绑定
    function bindEvents() {
        // 游戏选择器事件
        var selectorClose = document.getElementById('selector-close');
        var select2048 = document.getElementById('select-2048');
        var selectFlappy = document.getElementById('select-flappy');
        var selectorModal = document.getElementById('game-selector-modal');

        if (selectorClose) selectorClose.addEventListener('click', closeGameSelector);
        if (select2048) {
            select2048.addEventListener('click', function() {
                closeGameSelector();
                if (window.Game2048) {
                    window.Game2048.openGame();
                }
            });
        }
        if (selectFlappy) {
            selectFlappy.addEventListener('click', function() {
                closeGameSelector();
                openFlappyBird();
            });
        }

        // 点击背景关闭选择器
        if (selectorModal) {
            selectorModal.addEventListener('click', function(e) {
                if (e.target === selectorModal) {
                    closeGameSelector();
                }
            });
        }

        // Flappy Bird事件
        var flappyClose = document.getElementById('flappy-close');
        var flappyRestart = document.getElementById('flappy-restart');
        var flappyModal = document.getElementById('flappy-modal');

        if (flappyClose) flappyClose.addEventListener('click', closeFlappyBird);
        if (flappyRestart) flappyRestart.addEventListener('click', restartFlappyBird);

        // 点击背景关闭Flappy Bird
        if (flappyModal) {
            flappyModal.addEventListener('click', function(e) {
                if (e.target === flappyModal) {
                    closeFlappyBird();
                }
            });
        }
    }

    // 初始化
    function init() {
        injectGameSelectorHTML();
        injectFlappyBirdHTML();
        bindEvents();
    }

    // 公开API
    window.GameManager = {
        init: init,
        openGameSelector: openGameSelector,
        closeGameSelector: closeGameSelector,
        openFlappyBird: openFlappyBird,
        closeFlappyBird: closeFlappyBird
    };

    // 自动初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();