// 游戏管理器模块
(function () {
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
                        <div class="game-icon">🔲</div>
                        <h3>俄罗斯方块</h3>
                        <p>旋转和移动方块，消除完整行！</p>
                    </div>
                    
                    <div class="game-option" id="select-sudoku">
                        <div class="game-icon">🧮</div>
                        <h3>数独</h3>
                        <p>填入数字，完成9x9数独谜题！</p>
                    </div>
                    
                    <div class="game-option" id="select-sliding-puzzle">
                        <div class="game-icon">🧩</div>
                        <h3>数字华容道</h3>
                        <p>移动数字方块，按顺序排列！</p>
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
                    <h2 class="game-title">🚁 Cyberpunk Flappy</h2>
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
                        <div class="game-over-text" id="flappy-game-over-text">SYSTEM FAILURE</div>
                        <div class="flappy-final-score" id="flappy-final-score">得分: 0</div>
                        <button class="game-btn" id="flappy-restart">重新开始</button>
                    </div>
                    <div class="flappy-start-screen" id="flappy-start-screen">
                        <div class="start-text">SYSTEM READY</div>
                        <div class="start-instruction">点击屏幕或按空格键控制赛博无人机穿越霓虹城市</div>
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
                    <h2 class="game-title">🔲 俄罗斯方块</h2>
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

    // 数独游戏HTML
    function injectSudokuHTML() {
        var sudokuHTML = `
        <div class="game-modal" id="sudoku-modal">
            <div class="sudoku-game-window">
                <div class="game-header">
                    <h2 class="game-title">🔢 数独</h2>
                    <button class="game-close" id="sudoku-close">×</button>
                </div>

                <div class="sudoku-info">
                    <div class="score-container">
                        <div class="score-label">难度</div>
                        <div class="score-value" id="sudoku-difficulty">简单</div>
                    </div>
                    <div class="score-container">
                        <div class="score-label">时间</div>
                        <div class="score-value" id="sudoku-time">00:00</div>
                    </div>
                    <div class="score-container">
                        <div class="score-label">剩余提示</div>
                        <div class="score-value" id="sudoku-hints">8</div>
                    </div>
                </div>

                <div class="sudoku-game-area">
                    <div class="sudoku-main">
                        <div class="sudoku-grid" id="sudoku-grid"></div>
                        <div class="sudoku-side">
                            <div class="sudoku-controls">
                                <div class="controls-title">操作说明</div>
                                <div class="control-item">点击格子选择</div>
                                <div class="control-item">1-9 输入数字</div>
                                <div class="control-item">Del/Backspace 清除</div>
                                <div class="control-item">ESC 退出游戏</div>
                            </div>
                            <div class="sudoku-numbers">
                                <div class="numbers-title">数字选择</div>
                                <div class="number-buttons">
                                    <button class="number-btn" data-number="1">1</button>
                                    <button class="number-btn" data-number="2">2</button>
                                    <button class="number-btn" data-number="3">3</button>
                                    <button class="number-btn" data-number="4">4</button>
                                    <button class="number-btn" data-number="5">5</button>
                                    <button class="number-btn" data-number="6">6</button>
                                    <button class="number-btn" data-number="7">7</button>
                                    <button class="number-btn" data-number="8">8</button>
                                    <button class="number-btn" data-number="9">9</button>
                                    <button class="number-btn clear-btn" data-number="0">清除</button>
                                </div>
                            </div>
                            <div class="sudoku-actions">
                                <button class="game-btn" id="sudoku-new-game">新游戏</button>
                                <button class="game-btn" id="sudoku-hint">提示</button>
                            </div>
                        </div>
                    </div>
                    <div class="sudoku-game-over" id="sudoku-game-over">
                        <div class="game-over-text" id="sudoku-game-over-text">恭喜完成！</div>
                        <div class="sudoku-final-time" id="sudoku-final-time">用时: 00:00</div>
                        <button class="game-btn" id="sudoku-restart">再来一局</button>
                    </div>
                    <div class="sudoku-start-screen" id="sudoku-start-screen">
                        <div class="start-text">选择难度开始游戏</div>
                        <div class="difficulty-buttons">
                            <button class="difficulty-btn" data-difficulty="easy">简单</button>
                            <button class="difficulty-btn" data-difficulty="medium">中等</button>
                            <button class="difficulty-btn" data-difficulty="hard">困难</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        document.body.insertAdjacentHTML('beforeend', sudokuHTML);
    }

    // 数字华容道游戏HTML
    function injectSlidingPuzzleHTML() {
        var slidingPuzzleHTML = `
        <div class="game-modal" id="sliding-puzzle-modal">
            <div class="sliding-puzzle-game-window">
                <div class="game-header">
                    <h2 class="game-title">🧩 数字华容道</h2>
                    <button class="game-close" id="sliding-puzzle-close">×</button>
                </div>

                <div class="sliding-puzzle-info">
                    <div class="score-container">
                        <div class="score-label">难度</div>
                        <div class="score-value" id="sliding-puzzle-size">3x3</div>
                    </div>
                    <div class="score-container">
                        <div class="score-label">步数</div>
                        <div class="score-value" id="sliding-puzzle-moves">0</div>
                    </div>
                    <div class="score-container">
                        <div class="score-label">时间</div>
                        <div class="score-value" id="sliding-puzzle-time">00:00</div>
                    </div>
                </div>

                <div class="sliding-puzzle-game-area">
                    <div class="sliding-puzzle-main">
                        <div class="sliding-puzzle-grid" id="sliding-puzzle-grid"></div>
                        <div class="sliding-puzzle-side">
                            <div class="sliding-puzzle-controls">
                                <div class="controls-title">操作说明</div>
                                <div class="control-item">点击数字移动</div>
                                <div class="control-item">方向键移动</div>
                                <div class="control-item">按顺序排列数字</div>
                                <div class="control-item">ESC 退出游戏</div>
                            </div>
                            <div class="sliding-puzzle-actions">
                                <button class="game-btn" id="sliding-puzzle-shuffle">打乱</button>
                                <button class="game-btn" id="sliding-puzzle-ai" disabled>AI求解</button>
                                <button class="game-btn" id="sliding-puzzle-ai-pause" disabled style="display:none;">暂停</button>
                                <div class="ai-speed-control" id="sliding-puzzle-speed-control" style="display:none;">
                                    <label for="ai-speed-slider">速度:</label>
                                    <input type="range" id="ai-speed-slider" min="100" max="2000" value="1000" step="100">
                                    <span id="ai-speed-display">1.0s</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sliding-puzzle-game-over" id="sliding-puzzle-game-over">
                        <div class="game-over-text" id="sliding-puzzle-game-over-text">恭喜完成！</div>
                        <div class="sliding-puzzle-final-stats">
                            <div class="final-moves" id="sliding-puzzle-final-moves">步数: 0</div>
                            <div class="final-time" id="sliding-puzzle-final-time">用时: 00:00</div>
                        </div>
                        <button class="game-btn" id="sliding-puzzle-restart">再来一局</button>
                    </div>
                    <div class="sliding-puzzle-start-screen" id="sliding-puzzle-start-screen">
                        <div class="start-text">选择难度开始游戏</div>
                        <div class="size-buttons">
                            <button class="size-btn" data-size="3">3x3 (简单)</button>
                            <button class="size-btn" data-size="4">4x4 (中等)</button>
                            <button class="size-btn" data-size="5">5x5 (困难)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        document.body.insertAdjacentHTML('beforeend', slidingPuzzleHTML);
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
        tetrisKeyHandler = function (e) {
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
            shape: piece.shape.map(function (row) { return row.slice(); }),
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

        switch (e.code) {
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

    // 数字华容道游戏逻辑
    var slidingPuzzleGame = {
        grid: [],
        size: 3,
        emptyPos: { row: 2, col: 2 },
        moves: 0,
        startTime: null,
        gameTime: 0,
        gameState: 'start', // 'start', 'playing', 'completed'
        timer: null,
        isShuffling: false,
        aiMode: false,
        aiPaused: false,
        aiSolution: [],
        aiStepIndex: 0,
        aiTimer: null,
        aiSpeed: 1000 // AI执行速度，毫秒
    };

    function initSlidingPuzzleGame() {
        resetSlidingPuzzleGame();
        createSlidingPuzzleGrid();
        bindSlidingPuzzleEvents();
    }

    function resetSlidingPuzzleGame() {
        slidingPuzzleGame.moves = 0;
        slidingPuzzleGame.startTime = null;
        slidingPuzzleGame.gameTime = 0;
        slidingPuzzleGame.gameState = 'start';
        slidingPuzzleGame.isShuffling = false;
        stopAIMode();
        if (slidingPuzzleGame.timer) {
            clearInterval(slidingPuzzleGame.timer);
            slidingPuzzleGame.timer = null;
        }
        updateSlidingPuzzleDisplay();
    }

    function createSlidingPuzzleGrid() {
        var size = slidingPuzzleGame.size;
        slidingPuzzleGame.grid = [];
        slidingPuzzleGame.emptyPos = { row: size - 1, col: size - 1 };

        // 创建有序网格
        for (var i = 0; i < size; i++) {
            slidingPuzzleGame.grid[i] = [];
            for (var j = 0; j < size; j++) {
                var num = i * size + j + 1;
                slidingPuzzleGame.grid[i][j] = (num === size * size) ? 0 : num;
            }
        }
    }

    function renderSlidingPuzzleGrid() {
        var gridElement = document.getElementById('sliding-puzzle-grid');
        if (!gridElement) return;

        var size = slidingPuzzleGame.size;
        gridElement.innerHTML = '';
        gridElement.setAttribute('data-size', size);
        gridElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridElement.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var cell = document.createElement('div');
                cell.className = 'sliding-puzzle-cell';
                cell.dataset.row = i;
                cell.dataset.col = j;

                var value = slidingPuzzleGame.grid[i][j];
                if (value === 0) {
                    cell.classList.add('empty');
                } else {
                    cell.textContent = value;
                    cell.addEventListener('click', function () {
                        var row = parseInt(this.dataset.row);
                        var col = parseInt(this.dataset.col);
                        moveSlidingPuzzleTile(row, col);
                    });
                }

                gridElement.appendChild(cell);
            }
        }
    }

    function moveSlidingPuzzleTile(row, col, isAIMove) {
        if (slidingPuzzleGame.gameState !== 'playing' || slidingPuzzleGame.isShuffling) return;

        // 在AI模式下且AI正在运行（未暂停）时不允许手动移动（但允许AI移动）
        if (slidingPuzzleGame.aiMode && !slidingPuzzleGame.aiPaused && !isAIMove) return;

        var emptyRow = slidingPuzzleGame.emptyPos.row;
        var emptyCol = slidingPuzzleGame.emptyPos.col;

        // 检查是否可以移动（相邻且在同一行或列）
        var canMove = (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
            (Math.abs(col - emptyCol) === 1 && row === emptyRow);

        if (canMove) {
            // 交换位置
            slidingPuzzleGame.grid[emptyRow][emptyCol] = slidingPuzzleGame.grid[row][col];
            slidingPuzzleGame.grid[row][col] = 0;
            slidingPuzzleGame.emptyPos = { row: row, col: col };

            // 只有非AI移动才增加步数
            if (!isAIMove) {
                slidingPuzzleGame.moves++;
            }
            updateSlidingPuzzleDisplay();
            renderSlidingPuzzleGrid();

            // 检查是否完成
            if (isSlidingPuzzleComplete()) {
                slidingPuzzleGameComplete();
            }
        }
    }

    function isSlidingPuzzleComplete() {
        var size = slidingPuzzleGame.size;
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var expectedValue = (i === size - 1 && j === size - 1) ? 0 : i * size + j + 1;
                if (slidingPuzzleGame.grid[i][j] !== expectedValue) {
                    return false;
                }
            }
        }
        return true;
    }

    function slidingPuzzleGameComplete() {
        slidingPuzzleGame.gameState = 'completed';
        if (slidingPuzzleGame.timer) {
            clearInterval(slidingPuzzleGame.timer);
        }

        var finalTime = formatTime(slidingPuzzleGame.gameTime);
        document.getElementById('sliding-puzzle-final-moves').textContent = '步数: ' + slidingPuzzleGame.moves;
        document.getElementById('sliding-puzzle-final-time').textContent = '用时: ' + finalTime;
        document.getElementById('sliding-puzzle-game-over').style.display = 'flex';
    }

    function startSlidingPuzzleGame(size) {
        slidingPuzzleGame.size = size;
        slidingPuzzleGame.gameState = 'playing';
        slidingPuzzleGame.startTime = Date.now();
        slidingPuzzleGame.moves = 0;
        
        document.getElementById('sliding-puzzle-start-screen').style.display = 'none';
        document.getElementById('sliding-puzzle-game-over').style.display = 'none';
        
        createSlidingPuzzleGrid();
        shuffleSlidingPuzzle();
        renderSlidingPuzzleGrid();
        
        // 只在3x3模式下启用AI按钮，其他模式禁用
        var aiButton = document.getElementById('sliding-puzzle-ai');
        if (aiButton) {
            if (size === 3) {
                aiButton.disabled = false;
                aiButton.style.display = 'inline-block';
                aiButton.title = '';
                aiButton.textContent = 'AI求解';
                aiButton.style.opacity = '1';
            } else {
                aiButton.disabled = true;
                aiButton.style.display = 'inline-block';
                aiButton.title = '仅3x3模式支持AI求解';
                aiButton.textContent = '仅3x3支持AI';
                aiButton.style.opacity = '0.5';
            }
        }
        
        // 开始计时器
        slidingPuzzleGame.timer = setInterval(function() {
            slidingPuzzleGame.gameTime = Math.floor((Date.now() - slidingPuzzleGame.startTime) / 1000);
            updateSlidingPuzzleDisplay();
        }, 1000);
        
        updateSlidingPuzzleDisplay();
    }

    // 检查数字华容道是否可解
    function isSlidingPuzzleSolvable() {
        var size = slidingPuzzleGame.size;
        var flatGrid = [];
        var emptyRow = slidingPuzzleGame.emptyPos.row;

        // 将网格转换为一维数组，跳过空格
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                if (slidingPuzzleGame.grid[i][j] !== 0) {
                    flatGrid.push(slidingPuzzleGame.grid[i][j]);
                }
            }
        }

        // 计算逆序对数量
        var inversions = 0;
        for (var i = 0; i < flatGrid.length - 1; i++) {
            for (var j = i + 1; j < flatGrid.length; j++) {
                if (flatGrid[i] > flatGrid[j]) {
                    inversions++;
                }
            }
        }

        if (size % 2 === 1) {
            // 奇数大小：逆序对数量为偶数时可解
            return inversions % 2 === 0;
        } else {
            // 偶数大小：需要考虑空格位置
            var emptyRowFromBottom = size - emptyRow;
            if (emptyRowFromBottom % 2 === 1) {
                // 空格在奇数行（从底部算起）：逆序对数量为偶数时可解
                return inversions % 2 === 0;
            } else {
                // 空格在偶数行（从底部算起）：逆序对数量为奇数时可解
                return inversions % 2 === 1;
            }
        }
    }

    function shuffleSlidingPuzzle() {
        slidingPuzzleGame.isShuffling = true;
        var size = slidingPuzzleGame.size;
        var maxAttempts = 100; // 最大尝试次数
        var attempt = 0;

        do {
            // 重置到有序状态
            createSlidingPuzzleGrid();

            var shuffleMoves = size * size * 10; // 充分打乱

            for (var i = 0; i < shuffleMoves; i++) {
                var possibleMoves = [];
                var emptyRow = slidingPuzzleGame.emptyPos.row;
                var emptyCol = slidingPuzzleGame.emptyPos.col;

                // 找到所有可能的移动
                if (emptyRow > 0) possibleMoves.push({ row: emptyRow - 1, col: emptyCol });
                if (emptyRow < size - 1) possibleMoves.push({ row: emptyRow + 1, col: emptyCol });
                if (emptyCol > 0) possibleMoves.push({ row: emptyRow, col: emptyCol - 1 });
                if (emptyCol < size - 1) possibleMoves.push({ row: emptyRow, col: emptyCol + 1 });

                // 随机选择一个移动
                var randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

                // 执行移动（不计入步数）
                slidingPuzzleGame.grid[emptyRow][emptyCol] = slidingPuzzleGame.grid[randomMove.row][randomMove.col];
                slidingPuzzleGame.grid[randomMove.row][randomMove.col] = 0;
                slidingPuzzleGame.emptyPos = randomMove;
            }

            attempt++;
        } while (!isSlidingPuzzleSolvable() && attempt < maxAttempts);

        // 如果经过多次尝试仍然无解，则进行一次简单的相邻交换来确保可解
        if (!isSlidingPuzzleSolvable()) {
            // 找到两个相邻的非空格子进行交换
            for (var i = 0; i < size; i++) {
                for (var j = 0; j < size - 1; j++) {
                    if (slidingPuzzleGame.grid[i][j] !== 0 && slidingPuzzleGame.grid[i][j + 1] !== 0) {
                        var temp = slidingPuzzleGame.grid[i][j];
                        slidingPuzzleGame.grid[i][j] = slidingPuzzleGame.grid[i][j + 1];
                        slidingPuzzleGame.grid[i][j + 1] = temp;
                        break;
                    }
                }
                if (isSlidingPuzzleSolvable()) break;
            }
        }

        slidingPuzzleGame.isShuffling = false;
        slidingPuzzleGame.moves = 0; // 重置步数
    }

    function updateSlidingPuzzleDisplay() {
        document.getElementById('sliding-puzzle-size').textContent = slidingPuzzleGame.size + 'x' + slidingPuzzleGame.size;
        document.getElementById('sliding-puzzle-moves').textContent = slidingPuzzleGame.moves;
        document.getElementById('sliding-puzzle-time').textContent = formatTime(slidingPuzzleGame.gameTime);
    }

    function bindSlidingPuzzleEvents() {
        // 难度选择按钮
        var sizeBtns = document.querySelectorAll('.size-btn');
        sizeBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                startSlidingPuzzleGame(parseInt(this.dataset.size));
            });
        });

        // 键盘事件
        document.addEventListener('keydown', function (e) {
            var modal = document.getElementById('sliding-puzzle-modal');
            if (modal && modal.style.display === 'flex' && slidingPuzzleGame.gameState === 'playing' && (!slidingPuzzleGame.aiMode || slidingPuzzleGame.aiPaused)) {
                var emptyRow = slidingPuzzleGame.emptyPos.row;
                var emptyCol = slidingPuzzleGame.emptyPos.col;
                var targetRow = emptyRow;
                var targetCol = emptyCol;

                switch (e.key) {
                    case 'ArrowUp':
                        if (emptyRow < slidingPuzzleGame.size - 1) targetRow = emptyRow + 1;
                        break;
                    case 'ArrowDown':
                        if (emptyRow > 0) targetRow = emptyRow - 1;
                        break;
                    case 'ArrowLeft':
                        if (emptyCol < slidingPuzzleGame.size - 1) targetCol = emptyCol + 1;
                        break;
                    case 'ArrowRight':
                        if (emptyCol > 0) targetCol = emptyCol - 1;
                        break;
                    case 'Escape':
                        closeSlidingPuzzleGame();
                        return;
                }

                if (targetRow !== emptyRow || targetCol !== emptyCol) {
                    e.preventDefault();
                    moveSlidingPuzzleTile(targetRow, targetCol);
                }
            }
        });
    }

    function openSlidingPuzzleGame() {
        var modal = document.getElementById('sliding-puzzle-modal');
        if (modal) {
            modal.style.display = 'flex';
            resetSlidingPuzzleGame();
            document.getElementById('sliding-puzzle-start-screen').style.display = 'flex';
            document.getElementById('sliding-puzzle-game-over').style.display = 'none';
        }
    }

    function closeSlidingPuzzleGame() {
        var modal = document.getElementById('sliding-puzzle-modal');
        if (modal) {
            modal.style.display = 'none';
            stopAIMode();
            if (slidingPuzzleGame.timer) {
                clearInterval(slidingPuzzleGame.timer);
                slidingPuzzleGame.timer = null;
            }
        }
    }

    function restartSlidingPuzzleGame() {
        document.getElementById('sliding-puzzle-game-over').style.display = 'none';
        startSlidingPuzzleGame(slidingPuzzleGame.size);
    }

    function shuffleSlidingPuzzleManual() {
        if (slidingPuzzleGame.gameState === 'playing') {
            shuffleSlidingPuzzle();
            renderSlidingPuzzleGrid();
            slidingPuzzleGame.moves = 0;
            updateSlidingPuzzleDisplay();
        }
    }

    // AI求解相关函数
    function solveSlidingPuzzleWithAI() {
        if (slidingPuzzleGame.gameState !== 'playing') return;
        
        // 检查按钮是否被禁用
        var aiButton = document.getElementById('sliding-puzzle-ai');
        if (aiButton && aiButton.disabled) {
            alert('AI求解仅支持3x3模式！');
            return;
        }
        
        // 检查是否为3x3模式
        if (slidingPuzzleGame.size !== 3) {
            alert('AI求解仅支持3x3模式！');
            return;
        }
        
        // 检查是否已经完成
        if (isSlidingPuzzleComplete()) {
            alert('拼图已经完成了！');
            return;
        }
        
        // 如果AI模式已经开启但暂停，则重新开始
        if (slidingPuzzleGame.aiMode && slidingPuzzleGame.aiPaused) {
            slidingPuzzleGame.aiPaused = false;
            var pauseButton = document.getElementById('sliding-puzzle-ai-pause');
            if (pauseButton) {
                pauseButton.textContent = '暂停';
            }
            
            document.getElementById('sliding-puzzle-ai').textContent = '求解中...';
            document.getElementById('sliding-puzzle-ai').disabled = true;
            
            // 重新计算当前局面的解决方案
            setTimeout(function() {
                var solution = findSlidingPuzzleSolution();
                if (solution && solution.length > 0) {
                    slidingPuzzleGame.aiSolution = solution;
                    slidingPuzzleGame.aiStepIndex = 0;
                    executeAISolution();
                } else {
                    alert('无法找到解决方案！');
                    stopAIMode();
                }
            }, 100);
            return;
        } else {
            slidingPuzzleGame.aiMode = true;
            slidingPuzzleGame.aiPaused = false;
            
            // 显示暂停按钮和速度控件
            document.getElementById('sliding-puzzle-ai-pause').style.display = 'inline-block';
            document.getElementById('sliding-puzzle-ai-pause').disabled = false;
            document.getElementById('sliding-puzzle-ai-pause').textContent = '暂停';
            document.getElementById('sliding-puzzle-speed-control').style.display = 'block';
            
            // 更新速度显示
            updateSpeedDisplay();
        }
        
        document.getElementById('sliding-puzzle-ai').textContent = '求解中...';
        document.getElementById('sliding-puzzle-ai').disabled = true;
        
        // 使用setTimeout让界面有时间更新
        setTimeout(function() {
            var solution = findSlidingPuzzleSolution();
            if (solution && solution.length > 0) {
                slidingPuzzleGame.aiSolution = solution;
                slidingPuzzleGame.aiStepIndex = 0;
                executeAISolution();
            } else {
                alert('无法找到解决方案！');
                stopAIMode();
            }
        }, 100);
    }

    function findSlidingPuzzleSolution() {
        var startState = {
            grid: slidingPuzzleGame.grid.map(row => row.slice()),
            emptyPos: { ...slidingPuzzleGame.emptyPos },
            g: 0,
            h: 0,
            f: 0,
            parent: null,
            move: null
        };

        startState.h = calculateManhattanDistance(startState);
        startState.f = startState.g + startState.h;

        var openList = [startState];
        var closedList = new Set();
        var maxIterations = 10000; // 防止无限循环
        var iterations = 0;

        while (openList.length > 0 && iterations < maxIterations) {
            iterations++;

            // 找到f值最小的状态
            openList.sort((a, b) => a.f - b.f);
            var currentState = openList.shift();

            // 检查是否到达目标状态
            if (isGoalState(currentState)) {
                return reconstructPath(currentState);
            }

            var stateKey = getStateKey(currentState);
            if (closedList.has(stateKey)) continue;
            closedList.add(stateKey);

            // 生成所有可能的下一步状态
            var neighbors = getNeighborStates(currentState);

            for (var i = 0; i < neighbors.length; i++) {
                var neighbor = neighbors[i];
                var neighborKey = getStateKey(neighbor);

                if (closedList.has(neighborKey)) continue;

                neighbor.g = currentState.g + 1;
                neighbor.h = calculateManhattanDistance(neighbor);
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = currentState;

                // 检查是否已在开放列表中
                var existingIndex = openList.findIndex(state => getStateKey(state) === neighborKey);
                if (existingIndex === -1) {
                    openList.push(neighbor);
                } else if (neighbor.g < openList[existingIndex].g) {
                    openList[existingIndex] = neighbor;
                }
            }
        }

        return null; // 无解
    }

    function calculateManhattanDistance(state) {
        var distance = 0;
        var size = slidingPuzzleGame.size;

        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var value = state.grid[i][j];
                if (value !== 0) {
                    var targetRow = Math.floor((value - 1) / size);
                    var targetCol = (value - 1) % size;
                    distance += Math.abs(i - targetRow) + Math.abs(j - targetCol);
                }
            }
        }

        return distance;
    }

    function isGoalState(state) {
        var size = slidingPuzzleGame.size;
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var expectedValue = (i === size - 1 && j === size - 1) ? 0 : i * size + j + 1;
                if (state.grid[i][j] !== expectedValue) {
                    return false;
                }
            }
        }
        return true;
    }

    function getStateKey(state) {
        return state.grid.map(row => row.join(',')).join(';');
    }

    function getNeighborStates(state) {
        var neighbors = [];
        var emptyRow = state.emptyPos.row;
        var emptyCol = state.emptyPos.col;
        var size = slidingPuzzleGame.size;

        var directions = [
            { row: -1, col: 0, name: 'up' },
            { row: 1, col: 0, name: 'down' },
            { row: 0, col: -1, name: 'left' },
            { row: 0, col: 1, name: 'right' }
        ];

        for (var i = 0; i < directions.length; i++) {
            var dir = directions[i];
            var newRow = emptyRow + dir.row;
            var newCol = emptyCol + dir.col;

            if (newRow >= 0 && newRow < size && newCol >= 0 && newCol < size) {
                var newState = {
                    grid: state.grid.map(row => row.slice()),
                    emptyPos: { row: newRow, col: newCol },
                    move: { from: { row: newRow, col: newCol }, to: { row: emptyRow, col: emptyCol } }
                };

                // 交换空格和目标位置
                newState.grid[emptyRow][emptyCol] = newState.grid[newRow][newCol];
                newState.grid[newRow][newCol] = 0;

                neighbors.push(newState);
            }
        }

        return neighbors;
    }

    function reconstructPath(goalState) {
        var path = [];
        var current = goalState;

        while (current.parent) {
            path.unshift(current.move);
            current = current.parent;
        }

        return path;
    }

    function executeAISolution() {
        if (slidingPuzzleGame.aiStepIndex >= slidingPuzzleGame.aiSolution.length) {
            stopAIMode();
            return;
        }

        // 如果暂停了，不执行下一步
        if (slidingPuzzleGame.aiPaused) {
            return;
        }

        var move = slidingPuzzleGame.aiSolution[slidingPuzzleGame.aiStepIndex];
        moveSlidingPuzzleTile(move.from.row, move.from.col, true);

        slidingPuzzleGame.aiStepIndex++;

        // 检查是否完成
        if (isSlidingPuzzleComplete()) {
            stopAIMode();
            return;
        }

        // 设置下一步的定时器，使用当前速度设置
        slidingPuzzleGame.aiTimer = setTimeout(executeAISolution, slidingPuzzleGame.aiSpeed);
    }

    function stopAIMode() {
        slidingPuzzleGame.aiMode = false;
        slidingPuzzleGame.aiPaused = false;
        slidingPuzzleGame.aiSolution = [];
        slidingPuzzleGame.aiStepIndex = 0;

        if (slidingPuzzleGame.aiTimer) {
            clearTimeout(slidingPuzzleGame.aiTimer);
            slidingPuzzleGame.aiTimer = null;
        }

        var aiButton = document.getElementById('sliding-puzzle-ai');
        if (aiButton) {
            aiButton.textContent = 'AI求解';
            aiButton.disabled = slidingPuzzleGame.gameState !== 'playing';
        }

        // 隐藏暂停按钮和速度控件
        document.getElementById('sliding-puzzle-ai-pause').style.display = 'none';
        document.getElementById('sliding-puzzle-speed-control').style.display = 'none';
    }

    function toggleAIPause() {
        if (!slidingPuzzleGame.aiMode) return;
        
        slidingPuzzleGame.aiPaused = !slidingPuzzleGame.aiPaused;
        var pauseButton = document.getElementById('sliding-puzzle-ai-pause');
        var aiButton = document.getElementById('sliding-puzzle-ai');
        
        if (slidingPuzzleGame.aiPaused) {
            pauseButton.textContent = '继续';
            // 清除当前的定时器
            if (slidingPuzzleGame.aiTimer) {
                clearTimeout(slidingPuzzleGame.aiTimer);
                slidingPuzzleGame.aiTimer = null;
            }
            // 暂停时允许重新开始AI求解
            if (aiButton) {
                aiButton.textContent = 'AI求解';
                aiButton.disabled = false;
            }
        } else {
            pauseButton.textContent = '暂停';
            // 继续执行AI时，重新计算当前局面的解决方案
            if (aiButton) {
                aiButton.textContent = '求解中...';
                aiButton.disabled = true;
            }
            
            // 重新计算解决方案
            setTimeout(function() {
                var solution = findSlidingPuzzleSolution();
                if (solution && solution.length > 0) {
                    slidingPuzzleGame.aiSolution = solution;
                    slidingPuzzleGame.aiStepIndex = 0;
                    executeAISolution();
                } else {
                    alert('无法找到解决方案！');
                    stopAIMode();
                }
            }, 100);
        }
    }

    function updateSpeedDisplay() {
        var speedSlider = document.getElementById('ai-speed-slider');
        var speedDisplay = document.getElementById('ai-speed-display');
        if (speedSlider && speedDisplay) {
            var speed = parseInt(speedSlider.value);
            slidingPuzzleGame.aiSpeed = speed;
            speedDisplay.textContent = (speed / 1000).toFixed(1) + 's';
        }
    }



    // 数独游戏逻辑
    var sudokuGame = {
        grid: [],
        solution: [],
        selectedCell: null,
        difficulty: 'easy',
        startTime: null,
        gameTime: 0,
        hintsRemaining: 8,
        gameState: 'start', // 'start', 'playing', 'completed'
        timer: null
    };

    function initSudokuGame() {
        resetSudokuGame();
        createSudokuGrid();
        bindSudokuEvents();
    }

    function resetSudokuGame() {
        sudokuGame.grid = Array(9).fill().map(() => Array(9).fill(0));
        sudokuGame.solution = Array(9).fill().map(() => Array(9).fill(0));
        sudokuGame.selectedCell = null;
        sudokuGame.startTime = null;
        sudokuGame.gameTime = 0;
        // 根据难度设置提示次数
        switch (sudokuGame.difficulty) {
            case 'easy': sudokuGame.hintsRemaining = 8; break;
            case 'medium': sudokuGame.hintsRemaining = 4; break;
            case 'hard': sudokuGame.hintsRemaining = 2; break;
            default: sudokuGame.hintsRemaining = 8;
        }
        sudokuGame.gameState = 'start';
        if (sudokuGame.timer) {
            clearInterval(sudokuGame.timer);
            sudokuGame.timer = null;
        }
        updateSudokuDisplay();
    }

    function createSudokuGrid() {
        var gridElement = document.getElementById('sudoku-grid');
        if (!gridElement) return;

        gridElement.innerHTML = '';

        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var cell = document.createElement('div');
                cell.className = 'sudoku-cell';
                cell.dataset.row = i;
                cell.dataset.col = j;

                // 添加区域边框样式
                if (i % 3 === 0 && i !== 0) cell.classList.add('border-top');
                if (j % 3 === 0 && j !== 0) cell.classList.add('border-left');

                cell.addEventListener('click', function () {
                    selectSudokuCell(parseInt(this.dataset.row), parseInt(this.dataset.col));
                });

                gridElement.appendChild(cell);
            }
        }
    }

    function generateSudoku(difficulty) {
        // 生成完整的数独解决方案
        generateCompleteSudoku();

        // 根据难度移除数字
        var cellsToRemove;
        switch (difficulty) {
            case 'easy': cellsToRemove = 40; break;
            case 'medium': cellsToRemove = 50; break;
            case 'hard': cellsToRemove = 60; break;
            default: cellsToRemove = 40;
        }

        // 复制解决方案到游戏网格
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                sudokuGame.grid[i][j] = sudokuGame.solution[i][j];
            }
        }

        // 随机移除数字
        var removed = 0;
        while (removed < cellsToRemove) {
            var row = Math.floor(Math.random() * 9);
            var col = Math.floor(Math.random() * 9);
            if (sudokuGame.grid[row][col] !== 0) {
                sudokuGame.grid[row][col] = 0;
                removed++;
            }
        }
    }

    function generateCompleteSudoku() {
        // 清空解决方案网格
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                sudokuGame.solution[i][j] = 0;
            }
        }

        // 使用回溯算法生成完整的数独
        solveSudoku(sudokuGame.solution);
    }

    function solveSudoku(grid) {
        for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
                if (grid[row][col] === 0) {
                    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    // 随机打乱数字顺序
                    for (var i = numbers.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var temp = numbers[i];
                        numbers[i] = numbers[j];
                        numbers[j] = temp;
                    }

                    for (var k = 0; k < numbers.length; k++) {
                        var num = numbers[k];
                        if (isValidSudokuMove(grid, row, col, num)) {
                            grid[row][col] = num;
                            if (solveSudoku(grid)) {
                                return true;
                            }
                            grid[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    function isValidSudokuMove(grid, row, col, num) {
        // 检查行
        for (var j = 0; j < 9; j++) {
            if (grid[row][j] === num) return false;
        }

        // 检查列
        for (var i = 0; i < 9; i++) {
            if (grid[i][col] === num) return false;
        }

        // 检查3x3区域
        var boxRow = Math.floor(row / 3) * 3;
        var boxCol = Math.floor(col / 3) * 3;
        for (var i = boxRow; i < boxRow + 3; i++) {
            for (var j = boxCol; j < boxCol + 3; j++) {
                if (grid[i][j] === num) return false;
            }
        }

        return true;
    }

    function selectSudokuCell(row, col) {
        if (sudokuGame.gameState !== 'playing') return;

        // 移除之前选中的样式
        var prevSelected = document.querySelector('.sudoku-cell.selected');
        if (prevSelected) prevSelected.classList.remove('selected');

        // 选中新单元格
        var cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        if (cell) {
            cell.classList.add('selected');
            sudokuGame.selectedCell = { row: row, col: col };
        }
    }

    function inputSudokuNumber(num) {
        if (!sudokuGame.selectedCell || sudokuGame.gameState !== 'playing') return;

        var row = sudokuGame.selectedCell.row;
        var col = sudokuGame.selectedCell.col;
        var cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (!cell || cell.classList.contains('given')) return;

        if (num === 0) {
            // 清除数字
            sudokuGame.grid[row][col] = 0;
            cell.textContent = '';
            cell.classList.remove('error', 'user-input');
        } else {
            // 输入数字
            sudokuGame.grid[row][col] = num;
            cell.textContent = num;
            cell.classList.add('user-input');
            // 移除即时颜色反馈，不再显示红色或绿色
            cell.classList.remove('error');
        }

        // 检查是否所有格子都填满了
        if (isGridFull()) {
            // 检查是否全部正确
            if (isSudokuComplete()) {
                sudokuGameComplete();
            } else {
                // 如果有错误，不显示具体哪个格子错了，只是不触发胜利
                // 玩家需要自己检查和修正错误
            }
        }
    }

    function isGridFull() {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (sudokuGame.grid[i][j] === 0) {
                    return false;
                }
            }
        }
        return true;
    }

    function isSudokuComplete() {
        // 首先检查是否所有格子都填满了
        if (!isGridFull()) {
            return false;
        }

        // 然后检查是否所有数字都正确
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (sudokuGame.grid[i][j] !== sudokuGame.solution[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    function sudokuGameComplete() {
        sudokuGame.gameState = 'completed';
        if (sudokuGame.timer) {
            clearInterval(sudokuGame.timer);
        }

        var finalTime = formatTime(sudokuGame.gameTime);
        document.getElementById('sudoku-final-time').textContent = '用时: ' + finalTime;
        document.getElementById('sudoku-game-over').style.display = 'flex';
    }

    function startSudokuGame(difficulty) {
        sudokuGame.difficulty = difficulty;

        // 根据难度设置提示次数
        switch (difficulty) {
            case 'easy': sudokuGame.hintsRemaining = 8; break;
            case 'medium': sudokuGame.hintsRemaining = 4; break;
            case 'hard': sudokuGame.hintsRemaining = 2; break;
            default: sudokuGame.hintsRemaining = 8;
        }

        sudokuGame.gameState = 'playing';
        sudokuGame.startTime = Date.now();

        document.getElementById('sudoku-start-screen').style.display = 'none';
        document.getElementById('sudoku-game-over').style.display = 'none';

        generateSudoku(difficulty);
        renderSudokuGrid();

        // 开始计时器
        sudokuGame.timer = setInterval(function () {
            sudokuGame.gameTime = Math.floor((Date.now() - sudokuGame.startTime) / 1000);
            updateSudokuDisplay();
        }, 1000);

        updateSudokuDisplay();
    }

    function renderSudokuGrid() {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var cell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                if (cell) {
                    cell.textContent = sudokuGame.grid[i][j] || '';
                    cell.className = 'sudoku-cell';

                    // 添加区域边框样式
                    if (i % 3 === 0 && i !== 0) cell.classList.add('border-top');
                    if (j % 3 === 0 && j !== 0) cell.classList.add('border-left');

                    if (sudokuGame.grid[i][j] !== 0) {
                        cell.classList.add('given');
                    }
                }
            }
        }
    }

    function updateSudokuDisplay() {
        document.getElementById('sudoku-difficulty').textContent =
            sudokuGame.difficulty === 'easy' ? '简单' :
                sudokuGame.difficulty === 'medium' ? '中等' : '困难';
        document.getElementById('sudoku-time').textContent = formatTime(sudokuGame.gameTime);
        document.getElementById('sudoku-hints').textContent = sudokuGame.hintsRemaining;
    }

    function formatTime(seconds) {
        var mins = Math.floor(seconds / 60);
        var secs = seconds % 60;
        return (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
    }

    function bindSudokuEvents() {
        // 难度选择按钮
        var difficultyBtns = document.querySelectorAll('.difficulty-btn');
        difficultyBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                startSudokuGame(this.dataset.difficulty);
            });
        });

        // 数字按钮
        var numberBtns = document.querySelectorAll('.number-btn');
        numberBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                inputSudokuNumber(parseInt(this.dataset.number));
            });
        });

        // 键盘事件
        document.addEventListener('keydown', function (e) {
            var modal = document.getElementById('sudoku-modal');
            if (modal && modal.style.display === 'flex') {
                if (e.key >= '1' && e.key <= '9') {
                    e.preventDefault();
                    inputSudokuNumber(parseInt(e.key));
                } else if (e.key === 'Delete' || e.key === 'Backspace') {
                    e.preventDefault();
                    inputSudokuNumber(0);
                } else if (e.key === 'Escape') {
                    closeSudokuGame();
                }
            }
        });
    }

    function openSudokuGame() {
        var modal = document.getElementById('sudoku-modal');
        if (modal) {
            modal.style.display = 'flex';
            resetSudokuGame();
            document.getElementById('sudoku-start-screen').style.display = 'flex';
            document.getElementById('sudoku-game-over').style.display = 'none';
        }
    }

    function closeSudokuGame() {
        var modal = document.getElementById('sudoku-modal');
        if (modal) {
            modal.style.display = 'none';
            if (sudokuGame.timer) {
                clearInterval(sudokuGame.timer);
                sudokuGame.timer = null;
            }
        }
    }

    function restartSudokuGame() {
        document.getElementById('sudoku-game-over').style.display = 'none';
        startSudokuGame(sudokuGame.difficulty);
    }

    function getSudokuHint() {
        if (!sudokuGame.selectedCell || sudokuGame.gameState !== 'playing') return;

        // 检查是否还有剩余提示次数
        if (sudokuGame.hintsRemaining <= 0) {
            alert('提示次数已用完！');
            return;
        }

        var row = sudokuGame.selectedCell.row;
        var col = sudokuGame.selectedCell.col;
        var cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (!cell || cell.classList.contains('given')) return;

        var correctNumber = sudokuGame.solution[row][col];
        sudokuGame.hintsRemaining--;
        inputSudokuNumber(correctNumber);
        updateSudokuDisplay();
    }

    function checkSudokuSolution() {
        // 只检查是否完成，不显示具体错误位置
        if (isGridFull() && isSudokuComplete()) {
            sudokuGameComplete();
        }
        // 如果没有完成，不给任何提示，让玩家自己找错误
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
        document.addEventListener('keydown', function (e) {
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
            switch (e.code) {
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
            switch (e.code) {
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

        // 穿墙机制：从对面墙壁出现
        if (head.x < 0) {
            head.x = snakeGame.tileCount - 1; // 从右边出现
        } else if (head.x >= snakeGame.tileCount) {
            head.x = 0; // 从左边出现
        }

        if (head.y < 0) {
            head.y = snakeGame.tileCount - 1; // 从下边出现
        } else if (head.y >= snakeGame.tileCount) {
            head.y = 0; // 从上边出现
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
        document.addEventListener('keydown', function (e) {
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
            createEngineParticles();
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

        // 绘制赛博朋克背景
        drawCyberpunkBackground(ctx);

        // 绘制星空
        drawStars(ctx);

        // 绘制赛博朋克建筑物（管道）
        drawCyberpunkBuildings(ctx);

        // 绘制赛博朋克无人机（小鸟）
        drawCyberpunkDrone(ctx);

        // 绘制粒子效果
        drawParticles(ctx);
    }

    function drawCyberpunkBackground(ctx) {
        // 深空背景渐变
        var gradient = ctx.createLinearGradient(0, 0, 0, flappyGame.canvas.height);
        gradient.addColorStop(0, '#0a0a0a');
        gradient.addColorStop(0.5, '#1a0a2e');
        gradient.addColorStop(1, '#16213e');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, flappyGame.canvas.width, flappyGame.canvas.height);

        // 网格线
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        ctx.lineWidth = 1;

        // 水平网格
        for (var y = 0; y < flappyGame.canvas.height; y += 40) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(flappyGame.canvas.width, y);
            ctx.stroke();
        }

        // 垂直网格
        for (var x = 0; x < flappyGame.canvas.width; x += 40) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, flappyGame.canvas.height);
            ctx.stroke();
        }

        // 底部城市光晕
        var cityGlow = ctx.createLinearGradient(0, flappyGame.canvas.height - 100, 0, flappyGame.canvas.height);
        cityGlow.addColorStop(0, 'rgba(0, 255, 255, 0)');
        cityGlow.addColorStop(1, 'rgba(0, 255, 255, 0.2)');
        ctx.fillStyle = cityGlow;
        ctx.fillRect(0, flappyGame.canvas.height - 100, flappyGame.canvas.width, 100);
    }

    function drawStars(ctx) {
        if (!flappyGame.stars) {
            flappyGame.stars = [];
            for (var i = 0; i < 50; i++) {
                flappyGame.stars.push({
                    x: Math.random() * flappyGame.canvas.width,
                    y: Math.random() * flappyGame.canvas.height,
                    size: Math.random() * 2,
                    speed: Math.random() * 0.5 + 0.1,
                    brightness: Math.random()
                });
            }
        }

        for (var i = 0; i < flappyGame.stars.length; i++) {
            var star = flappyGame.stars[i];
            star.x -= star.speed;
            if (star.x < 0) {
                star.x = flappyGame.canvas.width;
                star.y = Math.random() * flappyGame.canvas.height;
            }

            ctx.fillStyle = 'rgba(255, 255, 255, ' + star.brightness + ')';
            ctx.fillRect(star.x, star.y, star.size, star.size);
        }
    }

    function drawCyberpunkBuildings(ctx) {
        for (var i = 0; i < flappyGame.pipes.length; i++) {
            var pipe = flappyGame.pipes[i];

            // 初始化建筑窗户（如果还没有）
            if (!pipe.windows) {
                pipe.windows = generateBuildingWindows(pipe);
            }

            // 建筑结构渐变
            var buildingGradient = ctx.createLinearGradient(pipe.x, 0, pipe.x + flappyGame.pipeWidth, 0);
            buildingGradient.addColorStop(0, '#1a1a2e');
            buildingGradient.addColorStop(0.5, '#16213e');
            buildingGradient.addColorStop(1, '#0f3460');

            // 上建筑
            ctx.fillStyle = buildingGradient;
            ctx.fillRect(pipe.x, 0, flappyGame.pipeWidth, pipe.topHeight);

            // 下建筑
            ctx.fillRect(pipe.x, pipe.bottomY, flappyGame.pipeWidth, flappyGame.canvas.height - pipe.bottomY);

            // 建筑轮廓
            ctx.strokeStyle = '#00ffff';
            ctx.lineWidth = 2;
            ctx.strokeRect(pipe.x, 0, flappyGame.pipeWidth, pipe.topHeight);
            ctx.strokeRect(pipe.x, pipe.bottomY, flappyGame.pipeWidth, flappyGame.canvas.height - pipe.bottomY);

            // 霓虹边缘
            ctx.strokeStyle = '#ff00ff';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(pipe.x, 0);
            ctx.lineTo(pipe.x, pipe.topHeight);
            ctx.moveTo(pipe.x + flappyGame.pipeWidth, 0);
            ctx.lineTo(pipe.x + flappyGame.pipeWidth, pipe.topHeight);
            ctx.moveTo(pipe.x, pipe.bottomY);
            ctx.lineTo(pipe.x, flappyGame.canvas.height);
            ctx.moveTo(pipe.x + flappyGame.pipeWidth, pipe.bottomY);
            ctx.lineTo(pipe.x + flappyGame.pipeWidth, flappyGame.canvas.height);
            ctx.stroke();

            // 建筑窗户
            for (var j = 0; j < pipe.windows.length; j++) {
                var window = pipe.windows[j];
                if (window.lit) {
                    ctx.fillStyle = window.color;
                    ctx.fillRect(pipe.x + window.x, window.y, window.size, window.size);

                    // 窗户光晕
                    var windowGlow = ctx.createRadialGradient(
                        pipe.x + window.x + window.size / 2,
                        window.y + window.size / 2,
                        0,
                        pipe.x + window.x + window.size / 2,
                        window.y + window.size / 2,
                        window.size * 2
                    );
                    windowGlow.addColorStop(0, window.color);
                    windowGlow.addColorStop(1, 'transparent');
                    ctx.fillStyle = windowGlow;
                    ctx.fillRect(
                        pipe.x + window.x - window.size / 2,
                        window.y - window.size / 2,
                        window.size * 2,
                        window.size * 2
                    );
                }
            }

            // 警告灯
            if (Math.random() > 0.95) {
                ctx.fillStyle = '#ff0000';
                ctx.fillRect(pipe.x + flappyGame.pipeWidth / 2 - 2, pipe.topHeight - 5, 4, 4);
                ctx.fillRect(pipe.x + flappyGame.pipeWidth / 2 - 2, pipe.bottomY + 1, 4, 4);
            }
        }
    }

    function generateBuildingWindows(pipe) {
        var windows = [];
        var windowSize = 6;
        var windowSpacing = 12;
        var colors = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00'];

        // 上建筑窗户
        for (var y = 15; y < pipe.topHeight - 15; y += windowSpacing) {
            for (var x = 8; x < flappyGame.pipeWidth - 8; x += windowSpacing) {
                if (Math.random() > 0.3) {
                    windows.push({
                        x: x,
                        y: y,
                        size: windowSize,
                        lit: Math.random() > 0.4,
                        color: colors[Math.floor(Math.random() * colors.length)]
                    });
                }
            }
        }

        // 下建筑窗户
        for (var y = 15; y < flappyGame.canvas.height - pipe.bottomY - 15; y += windowSpacing) {
            for (var x = 8; x < flappyGame.pipeWidth - 8; x += windowSpacing) {
                if (Math.random() > 0.3) {
                    windows.push({
                        x: x,
                        y: pipe.bottomY + y,
                        size: windowSize,
                        lit: Math.random() > 0.4,
                        color: colors[Math.floor(Math.random() * colors.length)]
                    });
                }
            }
        }

        return windows;
    }

    function drawCyberpunkDrone(ctx) {
        var bird = flappyGame.bird;

        // 初始化无人机属性
        if (!bird.engineGlow) bird.engineGlow = 0;
        if (!bird.rotation) bird.rotation = 0;

        // 引擎光晕动画
        bird.engineGlow += 0.1;

        // 根据速度计算旋转
        bird.rotation = Math.min(Math.max(bird.velocity * 0.05, -0.3), 0.3);

        ctx.save();
        ctx.translate(bird.x + bird.size / 2, bird.y + bird.size / 2);
        ctx.rotate(bird.rotation);

        // 无人机主体渐变
        var bodyGradient = ctx.createLinearGradient(-bird.size / 2, 0, bird.size / 2, 0);
        bodyGradient.addColorStop(0, '#00ffff');
        bodyGradient.addColorStop(0.5, '#0080ff');
        bodyGradient.addColorStop(1, '#0040ff');

        ctx.fillStyle = bodyGradient;
        ctx.fillRect(-bird.size / 2, -bird.size / 2, bird.size, bird.size);

        // 无人机轮廓
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 2;
        ctx.strokeRect(-bird.size / 2, -bird.size / 2, bird.size, bird.size);

        // 引擎光晕
        var glowSize = 6 + Math.sin(bird.engineGlow) * 2;
        var glowGradient = ctx.createRadialGradient(-bird.size / 2 - 3, 0, 0, -bird.size / 2 - 3, 0, glowSize);
        glowGradient.addColorStop(0, 'rgba(0, 255, 255, 0.8)');
        glowGradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
        ctx.fillStyle = glowGradient;
        ctx.fillRect(-bird.size / 2 - 3 - glowSize, -glowSize, glowSize * 2, glowSize * 2);

        // 驾驶舱
        ctx.fillStyle = '#ffff00';
        ctx.fillRect(bird.size / 2 - 8, -3, 6, 6);

        // 天线
        ctx.strokeStyle = '#ff00ff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(bird.size / 2, 0);
        ctx.lineTo(bird.size / 2 + 6, -6);
        ctx.stroke();

        // 闪烁灯
        if (Math.random() > 0.8) {
            ctx.fillStyle = '#ff00ff';
            ctx.fillRect(-bird.size / 2 + 2, -bird.size / 2 - 2, 2, 2);
            ctx.fillRect(bird.size / 2 - 4, -bird.size / 2 - 2, 2, 2);
        }

        ctx.restore();
    }

    function drawParticles(ctx) {
        if (!flappyGame.particles) {
            flappyGame.particles = [];
        }

        // 更新和绘制粒子
        for (var i = flappyGame.particles.length - 1; i >= 0; i--) {
            var particle = flappyGame.particles[i];
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life--;

            if (particle.life <= 0) {
                flappyGame.particles.splice(i, 1);
                continue;
            }

            var alpha = particle.life / particle.maxLife;
            ctx.fillStyle = 'rgba(0, 255, 255, ' + (alpha * 0.8) + ')';
            ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
        }
    }

    function createEngineParticles() {
        if (!flappyGame.particles) {
            flappyGame.particles = [];
        }

        for (var i = 0; i < 3; i++) {
            flappyGame.particles.push({
                x: flappyGame.bird.x - 5,
                y: flappyGame.bird.y + flappyGame.bird.size / 2 + (Math.random() - 0.5) * 8,
                vx: -Math.random() * 2 - 1,
                vy: (Math.random() - 0.5) * 1.5,
                size: Math.random() * 3 + 1,
                life: 20,
                maxLife: 20
            });
        }
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
            select2048.addEventListener('click', function () {
                closeGameSelector();
                if (window.Game2048) {
                    window.Game2048.openGame();
                }
            });
        }
        if (selectFlappy) {
            selectFlappy.addEventListener('click', function () {
                closeGameSelector();
                openFlappyBird();
            });
        }

        var selectSnake = document.getElementById('select-snake');
        if (selectSnake) {
            selectSnake.addEventListener('click', function () {
                closeGameSelector();
                openSnakeGame();
            });
        }

        var selectTetris = document.getElementById('select-tetris');
        if (selectTetris) {
            selectTetris.addEventListener('click', function () {
                closeGameSelector();
                openTetrisGame();
            });
        }

        var selectSudoku = document.getElementById('select-sudoku');
        if (selectSudoku) {
            selectSudoku.addEventListener('click', function () {
                closeGameSelector();
                openSudokuGame();
            });
        }

        var selectSlidingPuzzle = document.getElementById('select-sliding-puzzle');
        if (selectSlidingPuzzle) {
            selectSlidingPuzzle.addEventListener('click', function () {
                closeGameSelector();
                openSlidingPuzzleGame();
            });
        }

        // 点击背景关闭选择器
        if (selectorModal) {
            selectorModal.addEventListener('click', function (e) {
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
            flappyModal.addEventListener('click', function (e) {
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
            snakeModal.addEventListener('click', function (e) {
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
            tetrisModal.addEventListener('click', function (e) {
                if (e.target === tetrisModal) {
                    closeTetrisGame();
                }
            });
        }

        // 数独事件
        var sudokuClose = document.getElementById('sudoku-close');
        var sudokuRestart = document.getElementById('sudoku-restart');
        var sudokuNewGame = document.getElementById('sudoku-new-game');
        var sudokuHint = document.getElementById('sudoku-hint');
        var sudokuModal = document.getElementById('sudoku-modal');

        if (sudokuClose) sudokuClose.addEventListener('click', closeSudokuGame);
        if (sudokuRestart) sudokuRestart.addEventListener('click', restartSudokuGame);
        if (sudokuNewGame) sudokuNewGame.addEventListener('click', function () {
            document.getElementById('sudoku-start-screen').style.display = 'flex';
            document.getElementById('sudoku-game-over').style.display = 'none';
            resetSudokuGame();
        });
        if (sudokuHint) sudokuHint.addEventListener('click', getSudokuHint);

        // 点击背景关闭数独
        if (sudokuModal) {
            sudokuModal.addEventListener('click', function (e) {
                if (e.target === sudokuModal) {
                    closeSudokuGame();
                }
            });
        }

        // 数字华容道事件
        var slidingPuzzleClose = document.getElementById('sliding-puzzle-close');
        var slidingPuzzleRestart = document.getElementById('sliding-puzzle-restart');
        var slidingPuzzleNewGame = document.getElementById('sliding-puzzle-new-game');
        var slidingPuzzleShuffle = document.getElementById('sliding-puzzle-shuffle');
        var slidingPuzzleAI = document.getElementById('sliding-puzzle-ai');
        var slidingPuzzleAIPause = document.getElementById('sliding-puzzle-ai-pause');
        var aiSpeedSlider = document.getElementById('ai-speed-slider');
        var slidingPuzzleModal = document.getElementById('sliding-puzzle-modal');

        if (slidingPuzzleClose) slidingPuzzleClose.addEventListener('click', closeSlidingPuzzleGame);
        if (slidingPuzzleRestart) slidingPuzzleRestart.addEventListener('click', restartSlidingPuzzleGame);
        if (slidingPuzzleNewGame) slidingPuzzleNewGame.addEventListener('click', function () {
            document.getElementById('sliding-puzzle-start-screen').style.display = 'flex';
            document.getElementById('sliding-puzzle-game-over').style.display = 'none';
            resetSlidingPuzzleGame();
        });
        if (slidingPuzzleShuffle) slidingPuzzleShuffle.addEventListener('click', shuffleSlidingPuzzleManual);
        if (slidingPuzzleAI) slidingPuzzleAI.addEventListener('click', solveSlidingPuzzleWithAI);
        if (slidingPuzzleAIPause) slidingPuzzleAIPause.addEventListener('click', toggleAIPause);
        if (aiSpeedSlider) aiSpeedSlider.addEventListener('input', updateSpeedDisplay);

        // 点击背景关闭数字华容道
        if (slidingPuzzleModal) {
            slidingPuzzleModal.addEventListener('click', function (e) {
                if (e.target === slidingPuzzleModal) {
                    closeSlidingPuzzleGame();
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
        injectSudokuHTML();
        injectSlidingPuzzleHTML();
        bindEvents();
        initSudokuGame();
        initSlidingPuzzleGame();
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
        closeTetrisGame: closeTetrisGame,
        openSudokuGame: openSudokuGame,
        closeSudokuGame: closeSudokuGame,
        openSlidingPuzzleGame: openSlidingPuzzleGame,
        closeSlidingPuzzleGame: closeSlidingPuzzleGame
    };

    // 自动初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();