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
                    
                    <div class="game-option" id="select-snake">
                        <div class="game-icon">🐍</div>
                        <h3>贪吃蛇</h3>
                        <p>控制蛇吃食物，越来越长！</p>
                    </div>
                    
                    <div class="game-option" id="select-tetris">
                        <div class="game-icon">🧩</div>
                        <h3>俄罗斯方块</h3>
                        <p>旋转和移动方块，消除完整行！</p>
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

    // 贪吃蛇游戏HTML
    function injectSnakeHTML() {
        var snakeHTML = `
        <div class="game-modal" id="snake-modal">
            <div class="snake-game-window">
                <div class="game-header">
                    <h2 class="game-title">🐍 贪吃蛇</h2>
                    <button class="game-close" id="snake-close">×</button>
                </div>

                <div class="snake-info">
                    <div class="score-container">
                        <div class="score-label">分数</div>
                        <div class="score-value" id="snake-score">0</div>
                    </div>
                    <div class="score-container">
                        <div class="score-label">最高分</div>
                        <div class="score-value" id="snake-best-score">0</div>
                    </div>
                    <div class="score-container">
                        <div class="score-label">长度</div>
                        <div class="score-value" id="snake-length">1</div>
                    </div>
                </div>

                <div class="snake-game-area">
                    <canvas id="snake-canvas" width="400" height="400"></canvas>
                    <div class="snake-game-over" id="snake-game-over">
                        <div class="game-over-text" id="snake-game-over-text">游戏结束!</div>
                        <div class="snake-final-score" id="snake-final-score">得分: 0</div>
                        <button class="game-btn" id="snake-restart">重新开始</button>
                    </div>
                    <div class="snake-start-screen" id="snake-start-screen">
                        <div class="start-text">按方向键或WASD开始</div>
                        <div class="start-instruction">使用方向键或WASD控制蛇的移动</div>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', snakeHTML);
    }

    // 俄罗斯方块游戏HTML
    function injectTetrisHTML() {
        var tetrisHTML = `
        <div class="game-modal" id="tetris-modal">
            <div class="tetris-game-window">
                <div class="game-header">
                    <h2 class="game-title">🧩 俄罗斯方块</h2>
                    <button class="game-close" id="tetris-close">×</button>
                </div>

                <div class="tetris-info">
                    <div class="score-container">
                        <div class="score-label">分数</div>
                        <div class="score-value" id="tetris-score">0</div>
                    </div>
                    <div class="score-container">
                        <div class="score-label">最高分</div>
                        <div class="score-value" id="tetris-best-score">0</div>
                    </div>
                    <div class="score-container">
                        <div class="score-label">等级</div>
                        <div class="score-value" id="tetris-level">1</div>
                    </div>
                    <div class="score-container">
                        <div class="score-label">行数</div>
                        <div class="score-value" id="tetris-lines">0</div>
                    </div>
                </div>

                <div class="tetris-game-area">
                    <div class="tetris-main">
                        <canvas id="tetris-canvas" width="300" height="600"></canvas>
                        <div class="tetris-side">
                            <div class="tetris-next">
                                <div class="next-title">下一个</div>
                                <canvas id="tetris-next-canvas" width="80" height="80"></canvas>
                            </div>
                            <div class="tetris-controls">
                                <div class="controls-title">操作说明</div>
                                <div class="control-item">← → 移动</div>
                                <div class="control-item">↓ 快速下降</div>
                                <div class="control-item">↑ 旋转</div>
                                <div class="control-item">空格 暂停</div>
                                <div class="control-item">ESC 退出</div>
                            </div>
                        </div>
                    </div>
                    <div class="tetris-game-over" id="tetris-game-over">
                        <div class="game-over-text" id="tetris-game-over-text">游戏结束!</div>
                        <div class="tetris-final-score" id="tetris-final-score">得分: 0</div>
                        <button class="game-btn" id="tetris-restart">重新开始</button>
                    </div>
                    <div class="tetris-start-screen" id="tetris-start-screen">
                        <div class="start-text">按任意键开始</div>
                        <div class="start-instruction">
                            <div>← → 移动</div>
                            <div>↓ 快速下降</div>
                            <div>↑ 旋转</div>
                            <div>空格 暂停</div>
                        </div>
                    </div>
                    <div class="tetris-paused-screen" id="tetris-paused-screen">
                        <div class="paused-text">游戏已暂停</div>
                        <div class="paused-instruction">按空格键继续游戏</div>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', tetrisHTML);
    }

    // 俄罗斯方块游戏逻辑
    var tetrisGame = {
        canvas: null,
        ctx: null,
        nextCanvas: null,
        nextCtx: null,
        board: [],
        currentPiece: null,
        nextPiece: null,
        score: 0,
        bestScore: 0,
        level: 1,
        lines: 0,
        gameState: 'start', // 'start', 'playing', 'paused', 'gameOver'
        dropTime: 0,
        dropInterval: 1000,
        animationId: null,
        boardWidth: 10,
        boardHeight: 20,
        blockSize: 30
    };

    // 俄罗斯方块形状定义
    var tetrisPieces = {
        I: {
            shape: [
                [1, 1, 1, 1]
            ],
            color: '#00FFFF'
        },
        O: {
            shape: [
                [1, 1],
                [1, 1]
            ],
            color: '#FFFF00'
        },
        T: {
            shape: [
                [0, 1, 0],
                [1, 1, 1]
            ],
            color: '#800080'
        },
        S: {
            shape: [
                [0, 1, 1],
                [1, 1, 0]
            ],
            color: '#00FF00'
        },
        Z: {
            shape: [
                [1, 1, 0],
                [0, 1, 1]
            ],
            color: '#FF0000'
        },
        J: {
            shape: [
                [1, 0, 0],
                [1, 1, 1]
            ],
            color: '#0000FF'
        },
        L: {
            shape: [
                [0, 0, 1],
                [1, 1, 1]
            ],
            color: '#FFA500'
        }
    };

    // 俄罗斯方块键盘事件处理器
    var tetrisKeyHandler = null;
    
    function initTetrisGame() {
        tetrisGame.canvas = document.getElementById('tetris-canvas');
        tetrisGame.nextCanvas = document.getElementById('tetris-next-canvas');
        if (!tetrisGame.canvas || !tetrisGame.nextCanvas) return;
        
        tetrisGame.ctx = tetrisGame.canvas.getContext('2d');
        tetrisGame.nextCtx = tetrisGame.nextCanvas.getContext('2d');
        tetrisGame.bestScore = parseInt(localStorage.getItem('tetris-best-score') || '0');
        
        resetTetrisGame();
        updateTetrisDisplay();
        
        // 移除之前的键盘事件监听器
        if (tetrisKeyHandler) {
            document.removeEventListener('keydown', tetrisKeyHandler);
        }
        
        // 绑定新的键盘事件
        tetrisKeyHandler = function(e) {
            var modal = document.getElementById('tetris-modal');
            if (modal && modal.style.display === 'flex') {
                handleTetrisKeyPress(e);
            }
        };
        document.addEventListener('keydown', tetrisKeyHandler);
    }

    function resetTetrisGame() {
        // 初始化游戏板
        tetrisGame.board = [];
        for (var y = 0; y < tetrisGame.boardHeight; y++) {
            tetrisGame.board[y] = [];
            for (var x = 0; x < tetrisGame.boardWidth; x++) {
                tetrisGame.board[y][x] = 0;
            }
        }
        
        tetrisGame.score = 0;
        tetrisGame.level = 1;
        tetrisGame.lines = 0;
        tetrisGame.gameState = 'start';
        tetrisGame.dropTime = 0;
        tetrisGame.dropInterval = 1000;
        tetrisGame.currentPiece = null;
        tetrisGame.nextPiece = createRandomPiece();
    }

    function createRandomPiece() {
        var pieceTypes = Object.keys(tetrisPieces);
        var randomType = pieceTypes[Math.floor(Math.random() * pieceTypes.length)];
        var piece = tetrisPieces[randomType];
        
        return {
            type: randomType,
            shape: piece.shape.map(function(row) { return row.slice(); }),
            color: piece.color,
            x: Math.floor(tetrisGame.boardWidth / 2) - Math.floor(piece.shape[0].length / 2),
            y: 0
        };
    }

    function rotatePiece(piece) {
        var rotated = [];
        var rows = piece.shape.length;
        var cols = piece.shape[0].length;
        
        for (var i = 0; i < cols; i++) {
            rotated[i] = [];
            for (var j = 0; j < rows; j++) {
                rotated[i][j] = piece.shape[rows - 1 - j][i];
            }
        }
        
        var newPiece = {
            type: piece.type,
            color: piece.color,
            x: piece.x,
            y: piece.y,
            shape: rotated
        };
        return newPiece;
    }

    function isValidPosition(piece, offsetX, offsetY) {
        for (var y = 0; y < piece.shape.length; y++) {
            for (var x = 0; x < piece.shape[y].length; x++) {
                if (piece.shape[y][x]) {
                    var newX = piece.x + x + (offsetX || 0);
                    var newY = piece.y + y + (offsetY || 0);
                    
                    if (newX < 0 || newX >= tetrisGame.boardWidth || 
                        newY >= tetrisGame.boardHeight || 
                        (newY >= 0 && tetrisGame.board[newY][newX])) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    function placePiece(piece) {
        for (var y = 0; y < piece.shape.length; y++) {
            for (var x = 0; x < piece.shape[y].length; x++) {
                if (piece.shape[y][x]) {
                    var boardY = piece.y + y;
                    var boardX = piece.x + x;
                    if (boardY >= 0) {
                        tetrisGame.board[boardY][boardX] = piece.color;
                    }
                }
            }
        }
    }

    function clearLines() {
        var linesCleared = 0;
        
        for (var y = tetrisGame.boardHeight - 1; y >= 0; y--) {
            var isFullLine = true;
            for (var x = 0; x < tetrisGame.boardWidth; x++) {
                if (!tetrisGame.board[y][x]) {
                    isFullLine = false;
                    break;
                }
            }
            
            if (isFullLine) {
                tetrisGame.board.splice(y, 1);
                tetrisGame.board.unshift(new Array(tetrisGame.boardWidth).fill(0));
                linesCleared++;
                y++; // 重新检查当前行
            }
        }
        
        if (linesCleared > 0) {
            tetrisGame.lines += linesCleared;
            tetrisGame.score += linesCleared * 100 * tetrisGame.level;
            tetrisGame.level = Math.floor(tetrisGame.lines / 10) + 1;
            tetrisGame.dropInterval = Math.max(100, 1000 - (tetrisGame.level - 1) * 100);
        }
    }

    function handleTetrisKeyPress(e) {
        if (tetrisGame.gameState === 'start') {
            e.preventDefault();
            tetrisGame.gameState = 'playing';
            document.getElementById('tetris-start-screen').style.display = 'none';
            tetrisGame.currentPiece = tetrisGame.nextPiece;
            tetrisGame.nextPiece = createRandomPiece();
            tetrisGameLoop();
            return;
        }
        
        // 处理暂停/继续和退出键
        if (e.code === 'Space') {
            e.preventDefault();
            if (tetrisGame.gameState === 'playing') {
                tetrisGame.gameState = 'paused';
                if (tetrisGame.animationId) {
                    cancelAnimationFrame(tetrisGame.animationId);
                    tetrisGame.animationId = null;
                }
                // 显示暂停界面
                document.getElementById('tetris-paused-screen').style.display = 'flex';
            } else if (tetrisGame.gameState === 'paused') {
                tetrisGame.gameState = 'playing';
                tetrisGame.dropTime = Date.now(); // 重置下落时间
                // 隐藏暂停界面
                document.getElementById('tetris-paused-screen').style.display = 'none';
                tetrisGameLoop();
            }
            return;
        }
        
        if (e.code === 'Escape') {
            closeTetrisGame();
            return;
        }
        
        // 只有在游戏进行中才处理移动键
        if (tetrisGame.gameState !== 'playing') return;
        
        switch(e.code) {
            case 'ArrowLeft':
            case 'KeyA':
                e.preventDefault();
                if (isValidPosition(tetrisGame.currentPiece, -1, 0)) {
                    tetrisGame.currentPiece.x--;
                }
                break;
            case 'ArrowRight':
            case 'KeyD':
                e.preventDefault();
                if (isValidPosition(tetrisGame.currentPiece, 1, 0)) {
                    tetrisGame.currentPiece.x++;
                }
                break;
            case 'ArrowDown':
            case 'KeyS':
                e.preventDefault();
                if (isValidPosition(tetrisGame.currentPiece, 0, 1)) {
                    tetrisGame.currentPiece.y++;
                    tetrisGame.score += 1;
                }
                break;
            case 'ArrowUp':
            case 'KeyW':
                e.preventDefault();
                var rotated = rotatePiece(tetrisGame.currentPiece);
                if (isValidPosition(rotated, 0, 0)) {
                    tetrisGame.currentPiece = rotated;
                }
                break;
        }
        
        drawTetrisGame();
    }

    function tetrisGameLoop() {
        if (tetrisGame.gameState !== 'playing') return;
        
        var currentTime = Date.now();
        
        if (currentTime - tetrisGame.dropTime > tetrisGame.dropInterval) {
            if (isValidPosition(tetrisGame.currentPiece, 0, 1)) {
                tetrisGame.currentPiece.y++;
            } else {
                placePiece(tetrisGame.currentPiece);
                clearLines();
                
                tetrisGame.currentPiece = tetrisGame.nextPiece;
                tetrisGame.nextPiece = createRandomPiece();
                
                if (!isValidPosition(tetrisGame.currentPiece, 0, 0)) {
                    tetrisGameOver();
                    return;
                }
            }
            tetrisGame.dropTime = currentTime;
        }
        
        drawTetrisGame();
        updateTetrisDisplay();
        
        tetrisGame.animationId = requestAnimationFrame(tetrisGameLoop);
    }

    function drawTetrisGame() {
        var ctx = tetrisGame.ctx;
        
        // 清空画布
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, tetrisGame.canvas.width, tetrisGame.canvas.height);
        
        // 绘制游戏板
        for (var y = 0; y < tetrisGame.boardHeight; y++) {
            for (var x = 0; x < tetrisGame.boardWidth; x++) {
                if (tetrisGame.board[y][x]) {
                    ctx.fillStyle = tetrisGame.board[y][x];
                    ctx.fillRect(x * tetrisGame.blockSize, y * tetrisGame.blockSize, 
                               tetrisGame.blockSize - 1, tetrisGame.blockSize - 1);
                }
            }
        }
        
        // 绘制当前方块
        if (tetrisGame.currentPiece) {
            ctx.fillStyle = tetrisGame.currentPiece.color;
            for (var y = 0; y < tetrisGame.currentPiece.shape.length; y++) {
                for (var x = 0; x < tetrisGame.currentPiece.shape[y].length; x++) {
                    if (tetrisGame.currentPiece.shape[y][x]) {
                        var drawX = (tetrisGame.currentPiece.x + x) * tetrisGame.blockSize;
                        var drawY = (tetrisGame.currentPiece.y + y) * tetrisGame.blockSize;
                        ctx.fillRect(drawX, drawY, tetrisGame.blockSize - 1, tetrisGame.blockSize - 1);
                    }
                }
            }
        }
        
        // 绘制网格线
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 1;
        for (var x = 0; x <= tetrisGame.boardWidth; x++) {
            ctx.beginPath();
            ctx.moveTo(x * tetrisGame.blockSize, 0);
            ctx.lineTo(x * tetrisGame.blockSize, tetrisGame.canvas.height);
            ctx.stroke();
        }
        for (var y = 0; y <= tetrisGame.boardHeight; y++) {
            ctx.beginPath();
            ctx.moveTo(0, y * tetrisGame.blockSize);
            ctx.lineTo(tetrisGame.canvas.width, y * tetrisGame.blockSize);
            ctx.stroke();
        }
        
        // 绘制下一个方块
        drawNextPiece();
    }

    function drawNextPiece() {
        var ctx = tetrisGame.nextCtx;
        
        // 清空画布
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, tetrisGame.nextCanvas.width, tetrisGame.nextCanvas.height);
        
        if (tetrisGame.nextPiece) {
            ctx.fillStyle = tetrisGame.nextPiece.color;
            var blockSize = 15;
            var offsetX = (tetrisGame.nextCanvas.width - tetrisGame.nextPiece.shape[0].length * blockSize) / 2;
            var offsetY = (tetrisGame.nextCanvas.height - tetrisGame.nextPiece.shape.length * blockSize) / 2;
            
            for (var y = 0; y < tetrisGame.nextPiece.shape.length; y++) {
                for (var x = 0; x < tetrisGame.nextPiece.shape[y].length; x++) {
                    if (tetrisGame.nextPiece.shape[y][x]) {
                        ctx.fillRect(offsetX + x * blockSize, offsetY + y * blockSize, 
                                   blockSize - 1, blockSize - 1);
                    }
                }
            }
        }
    }

    function tetrisGameOver() {
        tetrisGame.gameState = 'gameOver';
        
        if (tetrisGame.score > tetrisGame.bestScore) {
            tetrisGame.bestScore = tetrisGame.score;
            localStorage.setItem('tetris-best-score', tetrisGame.bestScore.toString());
        }
        
        updateTetrisDisplay();
        
        var gameOverElement = document.getElementById('tetris-game-over');
        var finalScoreElement = document.getElementById('tetris-final-score');
        
        if (gameOverElement) gameOverElement.style.display = 'flex';
        if (finalScoreElement) finalScoreElement.textContent = '得分: ' + tetrisGame.score;
        
        if (tetrisGame.animationId) {
            cancelAnimationFrame(tetrisGame.animationId);
        }
    }

    function updateTetrisDisplay() {
        var scoreElement = document.getElementById('tetris-score');
        var bestScoreElement = document.getElementById('tetris-best-score');
        var levelElement = document.getElementById('tetris-level');
        var linesElement = document.getElementById('tetris-lines');
        
        if (scoreElement) scoreElement.textContent = tetrisGame.score;
        if (bestScoreElement) bestScoreElement.textContent = tetrisGame.bestScore;
        if (levelElement) levelElement.textContent = tetrisGame.level;
        if (linesElement) linesElement.textContent = tetrisGame.lines;
    }

    function restartTetrisGame() {
        document.getElementById('tetris-game-over').style.display = 'none';
        document.getElementById('tetris-paused-screen').style.display = 'none';
        document.getElementById('tetris-start-screen').style.display = 'flex';
        resetTetrisGame();
        updateTetrisDisplay();
        drawTetrisGame();
    }

    function openTetrisGame() {
        var modal = document.getElementById('tetris-modal');
        if (modal) {
            modal.style.display = 'flex';
            initTetrisGame();
            // 确保显示开始界面，隐藏其他界面
            document.getElementById('tetris-start-screen').style.display = 'flex';
            document.getElementById('tetris-game-over').style.display = 'none';
            document.getElementById('tetris-paused-screen').style.display = 'none';
            drawTetrisGame();
        }
    }

    function closeTetrisGame() {
        var modal = document.getElementById('tetris-modal');
        if (modal) {
            modal.style.display = 'none';
            
            // 停止游戏循环
            if (tetrisGame.animationId) {
                cancelAnimationFrame(tetrisGame.animationId);
                tetrisGame.animationId = null;
            }
            
            // 移除键盘事件监听器
            if (tetrisKeyHandler) {
                document.removeEventListener('keydown', tetrisKeyHandler);
                tetrisKeyHandler = null;
            }
            
            // 重置游戏状态
            tetrisGame.gameState = 'start';
        }
    }

    // 贪吃蛇游戏逻辑
    var snakeGame = {
        canvas: null,
        ctx: null,
        snake: [{ x: 10, y: 10 }],
        food: { x: 15, y: 15 },
        direction: { x: 0, y: 0 },
        score: 0,
        bestScore: 0,
        gameState: 'start', // 'start', 'playing', 'gameOver'
        gridSize: 20,
        tileCount: 20,
        animationId: null
    };

    function initSnakeGame() {
        snakeGame.canvas = document.getElementById('snake-canvas');
        if (!snakeGame.canvas) return;
        
        snakeGame.ctx = snakeGame.canvas.getContext('2d');
        snakeGame.bestScore = parseInt(localStorage.getItem('snake-best-score') || '0');
        
        resetSnakeGame();
        updateSnakeDisplay();
        
        // 绑定键盘事件
        document.addEventListener('keydown', function(e) {
            var modal = document.getElementById('snake-modal');
            if (modal && modal.style.display === 'flex') {
                handleSnakeKeyPress(e);
            }
        });
    }

    function resetSnakeGame() {
        snakeGame.snake = [{ x: 10, y: 10 }];
        snakeGame.food = generateFood();
        snakeGame.direction = { x: 0, y: 0 };
        snakeGame.score = 0;
        snakeGame.gameState = 'start';
    }

    function generateFood() {
        return {
            x: Math.floor(Math.random() * snakeGame.tileCount),
            y: Math.floor(Math.random() * snakeGame.tileCount)
        };
    }

    function handleSnakeKeyPress(e) {
        if (snakeGame.gameState === 'start') {
            // 只有按下方向键才开始游戏
            var validStart = false;
            switch(e.code) {
                case 'ArrowUp':
                case 'KeyW':
                    e.preventDefault();
                    snakeGame.direction = { x: 0, y: -1 };
                    validStart = true;
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    e.preventDefault();
                    snakeGame.direction = { x: 0, y: 1 };
                    validStart = true;
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    e.preventDefault();
                    snakeGame.direction = { x: -1, y: 0 };
                    validStart = true;
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    e.preventDefault();
                    snakeGame.direction = { x: 1, y: 0 };
                    validStart = true;
                    break;
                case 'Escape':
                    closeSnakeGame();
                    break;
            }
            
            if (validStart) {
                snakeGame.gameState = 'playing';
                document.getElementById('snake-start-screen').style.display = 'none';
                snakeGameLoop();
            }
        } else if (snakeGame.gameState === 'playing') {
            switch(e.code) {
                case 'ArrowUp':
                case 'KeyW':
                    e.preventDefault();
                    if (snakeGame.direction.y === 0) {
                        snakeGame.direction = { x: 0, y: -1 };
                    }
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    e.preventDefault();
                    if (snakeGame.direction.y === 0) {
                        snakeGame.direction = { x: 0, y: 1 };
                    }
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    e.preventDefault();
                    if (snakeGame.direction.x === 0) {
                        snakeGame.direction = { x: -1, y: 0 };
                    }
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    e.preventDefault();
                    if (snakeGame.direction.x === 0) {
                        snakeGame.direction = { x: 1, y: 0 };
                    }
                    break;
                case 'Escape':
                    closeSnakeGame();
                    break;
            }
        }
    }

    function snakeGameLoop() {
        if (snakeGame.gameState !== 'playing') return;
        
        updateSnakeGame();
        drawSnakeGame();
        
        snakeGame.animationId = setTimeout(snakeGameLoop, 150);
    }

    function updateSnakeGame() {
        var head = { x: snakeGame.snake[0].x + snakeGame.direction.x, y: snakeGame.snake[0].y + snakeGame.direction.y };
        
        // 检查边界碰撞
        if (head.x < 0 || head.x >= snakeGame.tileCount || head.y < 0 || head.y >= snakeGame.tileCount) {
            snakeGameOver();
            return;
        }
        
        // 检查自身碰撞
        for (var i = 0; i < snakeGame.snake.length; i++) {
            if (head.x === snakeGame.snake[i].x && head.y === snakeGame.snake[i].y) {
                snakeGameOver();
                return;
            }
        }
        
        snakeGame.snake.unshift(head);
        
        // 检查是否吃到食物
        if (head.x === snakeGame.food.x && head.y === snakeGame.food.y) {
            snakeGame.score += 10;
            snakeGame.food = generateFood();
            
            // 确保食物不生成在蛇身上
            while (snakeGame.snake.some(segment => segment.x === snakeGame.food.x && segment.y === snakeGame.food.y)) {
                snakeGame.food = generateFood();
            }
            
            updateSnakeDisplay();
        } else {
            snakeGame.snake.pop();
        }
    }

    function drawSnakeGame() {
        var ctx = snakeGame.ctx;
        
        // 清空画布
        ctx.fillStyle = '#2c3e50';
        ctx.fillRect(0, 0, snakeGame.canvas.width, snakeGame.canvas.height);
        
        // 绘制网格
        ctx.strokeStyle = '#34495e';
        ctx.lineWidth = 1;
        for (var i = 0; i <= snakeGame.tileCount; i++) {
            ctx.beginPath();
            ctx.moveTo(i * snakeGame.gridSize, 0);
            ctx.lineTo(i * snakeGame.gridSize, snakeGame.canvas.height);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(0, i * snakeGame.gridSize);
            ctx.lineTo(snakeGame.canvas.width, i * snakeGame.gridSize);
            ctx.stroke();
        }
        
        // 绘制蛇
        for (var i = 0; i < snakeGame.snake.length; i++) {
            var segment = snakeGame.snake[i];
            ctx.fillStyle = i === 0 ? '#27ae60' : '#2ecc71'; // 头部颜色稍深
            ctx.fillRect(segment.x * snakeGame.gridSize + 1, segment.y * snakeGame.gridSize + 1, 
                        snakeGame.gridSize - 2, snakeGame.gridSize - 2);
        }
        
        // 绘制食物
        ctx.fillStyle = '#e74c3c';
        ctx.fillRect(snakeGame.food.x * snakeGame.gridSize + 1, snakeGame.food.y * snakeGame.gridSize + 1, 
                    snakeGame.gridSize - 2, snakeGame.gridSize - 2);
    }

    function snakeGameOver() {
        snakeGame.gameState = 'gameOver';
        
        if (snakeGame.score > snakeGame.bestScore) {
            snakeGame.bestScore = snakeGame.score;
            localStorage.setItem('snake-best-score', snakeGame.bestScore.toString());
        }
        
        updateSnakeDisplay();
        
        var gameOverElement = document.getElementById('snake-game-over');
        var finalScoreElement = document.getElementById('snake-final-score');
        
        if (gameOverElement) gameOverElement.style.display = 'flex';
        if (finalScoreElement) finalScoreElement.textContent = '得分: ' + snakeGame.score;
        
        if (snakeGame.animationId) {
            clearTimeout(snakeGame.animationId);
        }
    }

    function updateSnakeDisplay() {
        var scoreElement = document.getElementById('snake-score');
        var bestScoreElement = document.getElementById('snake-best-score');
        var lengthElement = document.getElementById('snake-length');
        
        if (scoreElement) scoreElement.textContent = snakeGame.score;
        if (bestScoreElement) bestScoreElement.textContent = snakeGame.bestScore;
        if (lengthElement) lengthElement.textContent = snakeGame.snake.length;
    }

    function restartSnakeGame() {
        document.getElementById('snake-game-over').style.display = 'none';
        document.getElementById('snake-start-screen').style.display = 'flex';
        resetSnakeGame();
        updateSnakeDisplay();
    }

    function openSnakeGame() {
        var modal = document.getElementById('snake-modal');
        if (modal) {
            modal.style.display = 'flex';
            initSnakeGame();
            
            // 确保显示开始界面
            var startScreen = document.getElementById('snake-start-screen');
            var gameOverScreen = document.getElementById('snake-game-over');
            if (startScreen) startScreen.style.display = 'flex';
            if (gameOverScreen) gameOverScreen.style.display = 'none';
            
            // 绘制初始状态
            drawSnakeGame();
        }
    }

    function closeSnakeGame() {
        var modal = document.getElementById('snake-modal');
        if (modal) {
            modal.style.display = 'none';
            if (snakeGame.animationId) {
                clearTimeout(snakeGame.animationId);
            }
        }
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
        
        var selectSnake = document.getElementById('select-snake');
        if (selectSnake) {
            selectSnake.addEventListener('click', function() {
                closeGameSelector();
                openSnakeGame();
            });
        }
        
        var selectTetris = document.getElementById('select-tetris');
        if (selectTetris) {
            selectTetris.addEventListener('click', function() {
                closeGameSelector();
                openTetrisGame();
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

        // 贪吃蛇事件
        var snakeClose = document.getElementById('snake-close');
        var snakeRestart = document.getElementById('snake-restart');
        var snakeModal = document.getElementById('snake-modal');

        if (snakeClose) snakeClose.addEventListener('click', closeSnakeGame);
        if (snakeRestart) snakeRestart.addEventListener('click', restartSnakeGame);

        // 点击背景关闭贪吃蛇
        if (snakeModal) {
            snakeModal.addEventListener('click', function(e) {
                if (e.target === snakeModal) {
                    closeSnakeGame();
                }
            });
        }
        
        // 俄罗斯方块事件
        var tetrisClose = document.getElementById('tetris-close');
        var tetrisRestart = document.getElementById('tetris-restart');
        var tetrisModal = document.getElementById('tetris-modal');

        if (tetrisClose) tetrisClose.addEventListener('click', closeTetrisGame);
        if (tetrisRestart) tetrisRestart.addEventListener('click', restartTetrisGame);

        // 点击背景关闭俄罗斯方块
        if (tetrisModal) {
            tetrisModal.addEventListener('click', function(e) {
                if (e.target === tetrisModal) {
                    closeTetrisGame();
                }
            });
        }
    }

    // 初始化
    function init() {
        injectGameSelectorHTML();
        injectFlappyBirdHTML();
        injectSnakeHTML();
        injectTetrisHTML();
        bindEvents();
    }

    // 公开API
    window.GameManager = {
        init: init,
        openGameSelector: openGameSelector,
        closeGameSelector: closeGameSelector,
        openFlappyBird: openFlappyBird,
        closeFlappyBird: closeFlappyBird,
        openSnakeGame: openSnakeGame,
        closeSnakeGame: closeSnakeGame,
        openTetrisGame: openTetrisGame,
        closeTetrisGame: closeTetrisGame
    };

    // 自动初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();