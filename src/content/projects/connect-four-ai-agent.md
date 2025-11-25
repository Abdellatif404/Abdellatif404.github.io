---
title: "Connect Four AI Agent"
publishedAt: 2024-08-05
description: "An intelligent Connect Four game featuring a competitive AI opponent powered by the minimax algorithm with alpha-beta pruning. Built with Python and Pygame, this project demonstrates advanced game theory concepts and AI decision-making in a classic two-player strategy game."
slug: "connect-four-ai-agent"
image: 
  src: "/post_img/connect-four-play.webp"
  alt: ""
img_logo: 
  src: "/post_img/connect-four.webp"
  alt: ""
github: "#"
website: "#"
technologies:
  - name: "Python"
    route: "/svg/python.svg"
---

## Connect Four AI with Minimax Algorithm

An intelligent Connect Four game featuring a competitive AI opponent powered by the minimax algorithm with alpha-beta pruning. Built with Python and Pygame, this project demonstrates advanced game theory concepts and AI decision-making in a classic two-player strategy game.

## Features

- **Minimax AI with Alpha-Beta Pruning**: Efficient game tree search that evaluates thousands of positions per move
- **Dynamic Search Depth**: Adapts search depth based on game state (5-10+ levels deep)
- **Advanced Heuristic Evaluation**: Custom scoring system that evaluates board positions, threats, and winning patterns
- **Real-time AI Statistics Dashboard**: 
  - Positions evaluated per move
  - Search depth used
  - Average thinking time
  - Positions evaluated per second
- **Smooth Animations**: Piece drop animations with particle effects for wins
- **Interactive UI**: Column highlighting, move previews, and last AI move indicator
- **Professional Game Design**: 3D-styled pieces, gradient effects, and responsive interface

## Technical Implementation

- **Game Logic**: Minimax algorithm with alpha-beta pruning for optimal move selection
- **Heuristic Function**: Multi-pattern recognition system evaluating:
  - Open three-in-a-row sequences (high priority threats)
  - Two-in-a-row patterns with potential
  - Strategic position values (center column preference)
  - Opponent threat detection and blocking
- **Performance Optimization**: 
  - Shallow copy for board states instead of deepcopy
  - Early pruning to reduce search space
  - Efficient win detection through string pattern matching
- **UI/UX**: Pygame-based interface with custom graphics, animations, and sound effects

## AI Performance

- Evaluates 10,000-50,000+ positions per move depending on game state
- Achieves 1,000-5,000 positions/second evaluation speed
- Plays at intermediate-to-advanced level with strategic blocking and winning moves
- Adapts search depth dynamically as game progresses

## Technologies Used

- **Python 3.x**
- **Pygame**: Graphics rendering and game loop
- **Custom Algorithms**: Minimax with alpha-beta pruning, heuristic evaluation
- **Game Theory**: Zero-sum game optimization, adversarial search