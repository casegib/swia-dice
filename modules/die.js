const resultImage = (src, label) =>
    `<div class="swia-die-face" style="display:flex;flex-direction:column;align-items:center;gap:2px;"><img class="swia-die-result" src="${src}" style="width:32px;height:32px;object-fit:contain;filter:none !important;mix-blend-mode:normal !important;opacity:1 !important;transform:none !important;background:transparent !important;border:0 !important;box-shadow:none !important;" /><span style="font-size:11px;font-weight:bold;color:#222;text-align:center;line-height:1.2;text-shadow:0 0 3px #fff;">${label}</span></div>`;

export class swiab extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /** @override */
    static DENOMINATION = "b";

    /** @override */
    getResultLabel(result) {
        return {
            "1": resultImage("modules/swia-dice/images/black-1block.png", "1 Block"),
            "2": resultImage("modules/swia-dice/images/black-2blocks.png", "2 Blocks"),
            "3": resultImage("modules/swia-dice/images/black-3blocks.png", "3 Blocks"),
            "4": resultImage("modules/swia-dice/images/black-evade.png", "Evade"),
            "5": resultImage("modules/swia-dice/images/black-1block.png", "1 Block"),
            "6": resultImage("modules/swia-dice/images/black-2blocks.png", "2 Blocks")
        }[result.result];
    }
}

export class swiaw extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /** @override */
    static DENOMINATION = "w";

    getResultLabel(result) {
        return {
            "1": resultImage("modules/swia-dice/images/white-blank.png", "Blank"),
            "2": resultImage("modules/swia-dice/images/white-block.png", "Block"),
            "3": resultImage("modules/swia-dice/images/white-block-evade.png", "Block+Evade"),
            "4": resultImage("modules/swia-dice/images/white-block-evade.png", "Block+Evade"),
            "5": resultImage("modules/swia-dice/images/white-dodge.png", "Dodge"),
            "6": resultImage("modules/swia-dice/images/white-evade.png", "Evade")
        }[result.result];
    }
}

export class swian extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /** @override */
    static DENOMINATION = "n";

    getResultLabel(result) {
        return {
            "1": resultImage("modules/swia-dice/images/blue-1damage-2accuracy.png", "1 Dmg+2 Acc"),
            "2": resultImage("modules/swia-dice/images/blue-1damage-5accuracy.png", "1 Dmg+5 Acc"),
            "3": resultImage("modules/swia-dice/images/blue-1damage-surge-3accuracy.png", "1 Dmg+Surge+3 Acc"),
            "4": resultImage("modules/swia-dice/images/blue-2damage-3accuracy.png", "2 Dmg+3 Acc"),
            "5": resultImage("modules/swia-dice/images/blue-2damage-4accuracy.png", "2 Dmg+4 Acc"),
            "6": resultImage("modules/swia-dice/images/blue-surge-2accuracy.png", "Surge+2 Acc")
        }[result.result];
    }
}

export class swiag extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /** @override */
    static DENOMINATION = "g";

    getResultLabel(result) {
        return {
            "1": resultImage("modules/swia-dice/images/green-2damage-1accuracy.png", "2 Dmg+1 Acc"),
            "2": resultImage("modules/swia-dice/images/green-2damage-2accuracy.png", "2 Dmg+2 Acc"),
            "3": resultImage("modules/swia-dice/images/green-2damage-3accuracy.png", "2 Dmg+3 Acc"),
            "4": resultImage("modules/swia-dice/images/green-surge-1accuracy.png", "Surge+1 Acc"),
            "5": resultImage("modules/swia-dice/images/green-surge-1damage-1accuracy.png", "Surge+1 Dmg+1 Acc"),
            "6": resultImage("modules/swia-dice/images/green-surge-1damage-2accuracy.png", "Surge+1 Dmg+2 Acc")
        }[result.result];
    }
}

export class swiar extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /** @override */
    static DENOMINATION = "r";

    getResultLabel(result) {
        return {
            "1": resultImage("modules/swia-dice/images/red-1damage.png", "1 Dmg"),
            "2": resultImage("modules/swia-dice/images/red-2damage.png", "2 Dmg"),
            "3": resultImage("modules/swia-dice/images/red-2damage.png", "2 Dmg"),
            "4": resultImage("modules/swia-dice/images/red-2damage-surge.png", "2 Dmg+Surge"),
            "5": resultImage("modules/swia-dice/images/red-3damage.png", "3 Dmg"),
            "6": resultImage("modules/swia-dice/images/red-3damage.png", "3 Dmg")
        }[result.result];
    }
}

export class swiay extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /** @override */
    static DENOMINATION = "y";

    getResultLabel(result) {
        return {
            "1": resultImage("modules/swia-dice/images/yellow-1damage-2accuracy.png", "1 Dmg+2 Acc"),
            "2": resultImage("modules/swia-dice/images/yellow-1damage-surge-1accuracy.png", "1 Dmg+Surge+1 Acc"),
            "3": resultImage("modules/swia-dice/images/yellow-2damage-1accuracy.png", "2 Dmg+1 Acc"),
            "4": resultImage("modules/swia-dice/images/yellow-2surge-1damage.png", "2 Surge+1 Dmg"),
            "5": resultImage("modules/swia-dice/images/yellow-surge.png", "Surge"),
            "6": resultImage("modules/swia-dice/images/yellow-surge-2accuracy.png", "Surge+2 Acc")
        }[result.result];
    }
}