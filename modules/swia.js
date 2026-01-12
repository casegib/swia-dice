import {DiceSystem} from '../../dice-so-nice/api.js';
import {swiab, swiaw, swian, swiag, swiar, swiay } from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["b"] = swiab;
    CONFIG.Dice.terms["w"] = swiaw;
    CONFIG.Dice.terms["n"] = swian;
    CONFIG.Dice.terms["g"] = swiag;
    CONFIG.Dice.terms["r"] = swiar;
    CONFIG.Dice.terms["y"] = swiay;
});

Hooks.on('diceSoNiceRollComplete', (chatMessageID) => {
    let message = game.messages.get(chatMessageID);
//     if(message.isAuthor){
//         let defense = 0;
//         let focus = 0;
//         let success = 0;
//         let szRoll = false;
//         message.rolls.forEach(roll => {
//             roll.dice.forEach(dice => {
//                 if(dice instanceof DieSzimfonia){
//                     szRoll = true;
//                     dice.results.forEach(res => {
//                         switch(res.result){
//                             case 5:
//                                 defense++;
//                                 break;
//                             case 4:
//                                 focus+=2;
//                                 break;
//                             case 1:
//                                 success++;
//                                 break;
//                             case 2:
//                                 success+=2;
//                                 break;
//                             case 3:
//                                 focus++;
//                                 break;
//                             case 6:
//                                 defense++;
//                                 break;
//                         }
//                     });
//                 }
//             });
//         });
        
//         if(szRoll){
//             ChatMessage.create({
//                 // content: `<b>Defense:</b> ${defense}<br><b>Success:</b> ${success}<br><b>Focus:</b> ${focus}`,
//                 content: ``,
//                 author: message.author,
//                 blind: message.blind
//             });
//         }
//     }
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    const system = new DiceSystem("swia", "Star Wars Imperial Assault", "default");
    dice3d.addSystem(system);
    dice3d.addDicePreset({
      type:"db",
      labels:[
        'modules/swia-dice/images/black-1block.png', 
        'modules/swia-dice/images/black-2blocks.png', 
        'modules/swia-dice/images/black-3blocks.png',
		    'modules/swia-dice/images/black-evade.png', 
        'modules/swia-dice/images/black-1block.png', 		
        'modules/swia-dice/images/black-2blocks.png'
      ],    
      system:"swia"
    });
    dice3d.addDicePreset({
      type:"dw",
      labels:[
        'modules/swia-dice/images/white-blank.png', 
        'modules/swia-dice/images/white-block.png', 
        'modules/swia-dice/images/white-block-evade.png',
		    'modules/swia-dice/images/white-block-evade.png', 
        'modules/swia-dice/images/white-dodge.png', 		
        'modules/swia-dice/images/white-evade.png'
      ],    
      system:"swia"
    });
    dice3d.addDicePreset({
      type:"dn",
      labels:[
        'modules/swia-dice/images/blue-1damage-2accuracy.png', 
        'modules/swia-dice/images/blue-1damage-5accuracy.png', 
        'modules/swia-dice/images/blue-1damage-surge-3accuracy.png',
		    'modules/swia-dice/images/blue-2damage-3accuracy.png', 
        'modules/swia-dice/images/blue-2damage-4accuracy.png', 		
        'modules/swia-dice/images/blue-surge-2accuracy.png'
      ],    
      system:"swia"
    });
    dice3d.addDicePreset({
      type:"dg",
      labels:[
        'modules/swia-dice/images/green-2damage-1accuracy.png', 
        'modules/swia-dice/images/green-2damage-2accuracy.png', 
        'modules/swia-dice/images/green-2damage-3accuracy.png',
		    'modules/swia-dice/images/green-surge-1accuracy.png', 
        'modules/swia-dice/images/green-surge-1damage-1accuracy.png', 		
        'modules/swia-dice/images/green-surge-1damage-2accuracy.png'
      ],    
      system:"swia"
    });
    dice3d.addDicePreset({
      type:"dr",
      labels:[
        'modules/swia-dice/images/red-1damage.png', 
        'modules/swia-dice/images/red-2damage.png', 
        'modules/swia-dice/images/red-2damage.png',
		    'modules/swia-dice/images/red-2damage-surge.png', 
        'modules/swia-dice/images/red-3damage.png', 		
        'modules/swia-dice/images/red-3damage.png'
      ],    
      system:"swia"
    });
    dice3d.addDicePreset({
      type:"dy",
      labels:[
        'modules/swia-dice/images/yellow-1damage-2accuracy.png', 
        'modules/swia-dice/images/yellow-1damage-surge-1accuracy.png', 
        'modules/swia-dice/images/yellow-2damage-1accuracy.png',
		    'modules/swia-dice/images/yellow-2surge-1damage.png', 
        'modules/swia-dice/images/yellow-surge.png', 		
        'modules/swia-dice/images/yellow-surge-2accuracy.png'
      ],    
      system:"swia"
    });
});