export class swiab extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /** @override */
    static DENOMINATION = "b";

    // /** @override */
    // get total(){
    //     return this.results.length;
    // }

    /** @override */
    getResultLabel(result) {
        return {
			"1": '<img src="modules/swia-dice/images/black-1block" />',
            "2": '<img src="modules/swia-dice/images/black-2blocks.png" />',
            "3": '<img src="modules/swia-dice/images/black-3blocks.png" />',
            "4": '<img src="modules/swia-dice/images/black-evade.png" />',
			"5": '<img src="modules/swia-dice/images/black-1block.png" />',			
            "6": '<img src="modules/swia-dice/images/black-2blocks.png" />'
        }[result.result];
    }

    
}

export class swiaw extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /** @override */
    static DENOMINATION = "w";

    // /** @override */
    // get total(){
    //     return this.results.length;
    // }

    getResultLabel(result) {
        return {
			"1": '<img src="modules/swia-dice/images/white-blank.png" />',
            "2": '<img src="modules/swia-dice/images/white-block.png" />',
            "3": '<img src="modules/swia-dice/images/white-block-evade.png" />',
            "4": '<img src="modules/swia-dice/images/white-block-evade.png" />',
			"5": '<img src="modules/swia-dice/images/white-dodge.png" />',			
            "6": '<img src="modules/swia-dice/images/white-evade.png" />'
        }[result.result];
    }

    
}

export class swian extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /** @override */
    static DENOMINATION = "n";

    // /** @override */
    // get total(){
    //     return this.results.length;
    // }

    getResultLabel(result) {
        return {
            "1": '<img src="modules/swia-dice/images/blue-1damage-2accuracy.png" />',
            "2": '<img src="modules/swia-dice/images/blue-1damage-5accuracy" />',
            "3": '<img src="modules/swia-dice/images/blue-1damage-surge-3accuracy.png" />',
            "4": '<img src="modules/swia-dice/images/blue-2damage-3accuracy.png" />',
            "5": '<img src="modules/swia-dice/images/blue-2damage-4accuracy.png" />',			
            "6": '<img src="modules/swia-dice/images/blue-surge-2accuracy.png" />'
        }[result.result];
    }
}

export class swiag extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /** @override */
    static DENOMINATION = "g";

    // /** @override */
    // get total(){
    //     return this.results.length;
    // }

    getResultLabel(result) {
        return {
            "1": '<img src="modules/swia-dice/images/green-2damage-1accuracy.png" />',
            "2": '<img src="modules/swia-dice/images/green-2damage-2accuracy.png" />',
            "3": '<img src="modules/swia-dice/images/green-2damage-3accuracy.png" />',
            "4": '<img src="modules/swia-dice/images/green-surge-1accuracy.png" />',
            "5": '<img src="modules/swia-dice/images/green-surge-1damage-1accuracy.png" />',			
            "6": '<img src="modules/swia-dice/images/green-surge-1damage-2accuracy.png" />'
        }[result.result];
    }

    
}

export class swiar extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /** @override */
    static DENOMINATION = "r";

    // /** @override */
    // get total(){
    //     return this.results.length;
    // }

    getResultLabel(result) {
        return {
            "1": '<img src="modules/swia-dice/images/red-1damage.png" />',
            "2": '<img src="modules/swia-dice/images/red-2damage.png" />',
            "3": '<img src="modules/swia-dice/images/red-2damage.png" />',
            "4": '<img src="modules/swia-dice/images/red-2damage-surge.png" />',
            "5": '<img src="modules/swia-dice/images/red-3damage.png" />',			
            "6": '<img src="modules/swia-dice/images/red-3damage.png" />'
        }[result.result];
    }
    
}

export class swiay extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /** @override */
    static DENOMINATION = "y";

    // /** @override */
    // get total(){
    //     return this.results.length;
    // }

    getResultLabel(result) {
        return {
            "1": '<img src="modules/swia-dice/images/yellow-1damage-2accuracy.png" />',
            "2": '<img src="modules/swia-dice/images/yellow-1damage-surge-1accuracy.png" />',
            "3": '<img src="modules/swia-dice/images/yellow-2damage-1accuracy.png" />',
            "4": '<img src="modules/swia-dice/images/yellow-2surge-1damage.png" />',
            "5": '<img src="modules/swia-dice/images/yellow-surge.png" />',			
            "6": '<img src="modules/swia-dice/images/yellow-surge-2accuracy.png" />'
        }[result.result];
    }

    
}