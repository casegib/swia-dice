# Star Wars Imperial Assault Dice Roller

A Foundry Virtual Tabletop module that adds the ability to roll Star Wars Imperial Assault dice using the Dice So Nice! module.

## Features

- Support for all Imperial Assault dice types with custom imagery
- Integration with Dice So Nice! for visual 3D dice rolling
- Custom die denominations for black, white, neutral, green, red, and yellow dice

## Requirements

- Foundry VTT version 11 or higher (verified with version 13.350)
- [Dice So Nice!](https://foundryvtt.com/packages/dice-so-nice/) module installed and enabled

## Installation

1. Install the Dice So Nice! module first
2. Install this module by:
   - Using the module browser in Foundry VTT - manifest link: `https://raw.githubusercontent.com/casegib/swia-dice/main/module.json`
   - Or manually copying this module to your `modules` folder

## Usage

Once installed and enabled, this module registers custom dice denominations that can be used in any dice roll within Foundry:

- **b** - Black dice
- **w** - White dice
- **n** - Blue dice
- **g** - Green dice
- **r** - Red dice
- **y** - Yellow dice

Each die is a d6 (6-sided die) with custom Imperial Assault imagery on the faces.

## Project Structure

```
swia-dice/
├── module.json          # Module configuration
├── css/
│   └── swia.css         # Styling
├── images/              # Custom die face images
└── modules/
    ├── swia.js          # Main module file
    └── die.js           # Die class definitions
```

## Author

Casegib

## Version

0.0.1
