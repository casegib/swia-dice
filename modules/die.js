const resultImage = (src) =>
    `<img class="swia-die-result" src="${src}" style="width:32px;height:32px;object-fit:contain;filter:none !important;mix-blend-mode:normal !important;opacity:1 !important;transform:none !important;background:transparent !important;border:0 !important;box-shadow:none !important;" />`;

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
            "1": resultImage("modules/swia-dice/images/black-1block.png"),
            "2": resultImage("modules/swia-dice/images/black-2blocks.png"),
            "3": resultImage("modules/swia-dice/images/black-3blocks.png"),
            "4": resultImage("modules/swia-dice/images/black-evade.png"),
            "5": resultImage("modules/swia-dice/images/black-1block.png"),
            "6": resultImage("modules/swia-dice/images/black-2blocks.png")
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
            "1": resultImage("modules/swia-dice/images/white-blank.png"),
            "2": resultImage("modules/swia-dice/images/white-block.png"),
            "3": resultImage("modules/swia-dice/images/white-block-evade.png"),
            "4": resultImage("modules/swia-dice/images/white-block-evade.png"),
            "5": resultImage("modules/swia-dice/images/white-dodge.png"),
            "6": resultImage("modules/swia-dice/images/white-evade.png")
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
            "1": resultImage("modules/swia-dice/images/blue-1damage-2accuracy.png"),
            "2": resultImage("modules/swia-dice/images/blue-1damage-5accuracy.png"),
            "3": resultImage("modules/swia-dice/images/blue-1damage-surge-3accuracy.png"),
            "4": resultImage("modules/swia-dice/images/blue-2damage-3accuracy.png"),
            "5": resultImage("modules/swia-dice/images/blue-2damage-4accuracy.png"),
            "6": resultImage("modules/swia-dice/images/blue-surge-2accuracy.png")
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
            "1": resultImage("modules/swia-dice/images/green-2damage-1accuracy.png"),
            "2": resultImage("modules/swia-dice/images/green-2damage-2accuracy.png"),
            "3": resultImage("modules/swia-dice/images/green-2damage-3accuracy.png"),
            "4": resultImage("modules/swia-dice/images/green-surge-1accuracy.png"),
            "5": resultImage("modules/swia-dice/images/green-surge-1damage-1accuracy.png"),
            "6": resultImage("modules/swia-dice/images/green-surge-1damage-2accuracy.png")
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
            "1": resultImage("modules/swia-dice/images/red-1damage.png"),
            "2": resultImage("modules/swia-dice/images/red-2damage.png"),
            "3": resultImage("modules/swia-dice/images/red-2damage.png"),
            "4": resultImage("modules/swia-dice/images/red-2damage-surge.png"),
            "5": resultImage("modules/swia-dice/images/red-3damage.png"),
            "6": resultImage("modules/swia-dice/images/red-3damage.png")
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
            "1": resultImage("modules/swia-dice/images/yellow-1damage-2accuracy.png"),
            "2": resultImage("modules/swia-dice/images/yellow-1damage-surge-1accuracy.png"),
            "3": resultImage("modules/swia-dice/images/yellow-2damage-1accuracy.png"),
            "4": resultImage("modules/swia-dice/images/yellow-2surge-1damage.png"),
            "5": resultImage("modules/swia-dice/images/yellow-surge.png"),
            "6": resultImage("modules/swia-dice/images/yellow-surge-2accuracy.png")
        }[result.result];
    }
}