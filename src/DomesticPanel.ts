import "../css/subPanels.css"

export class DomesticPanel {
    private agriculture : number;
    private commerce : number;
    private industry : number;
    private mine : number;
    private population: number;
    private security : number;

    private agriCell : HTMLTableCellElement;
    private commCell : HTMLTableCellElement;
    private indtCell : HTMLTableCellElement;
    private mineCell : HTMLTableCellElement;
    private poplCell : HTMLTableCellElement;
    private secrCell : HTMLTableCellElement;

    constructor(master : HTMLDivElement) {
        this.init_random_attributes();
        var table : HTMLTableElement = <HTMLTableElement>document.createElement('table');
        table.className += "Domestic";
        master.append(table);

        var populationRow = table.insertRow();
        var popTag = populationRow.insertCell();
        popTag.innerHTML = 'Population';
        this.poplCell = populationRow.insertCell();
        this.poplCell.innerHTML = this.population + ' ';

        var agriRow = table.insertRow();
        var agriTag = agriRow.insertCell();
        agriTag.innerHTML = 'Agriculture';
        this.agriCell = agriRow.insertCell();
        this.agriCell.innerHTML = this.agriculture + ' ';

        var commRow = table.insertRow();
        var commTag = commRow.insertCell();
        commTag.innerHTML = 'Commerce';
        this.commCell = commRow.insertCell();
        this.commCell.innerHTML = this.commerce + ' ';

        var indRow = table.insertRow();
        var indTag = indRow.insertCell();
        indTag.innerHTML = 'Industry';
        this.indtCell = indRow.insertCell();
        this.indtCell.innerHTML = this.industry + ' ';

        var mineRow = table.insertRow();
        var mineTag = mineRow.insertCell();
        mineTag.innerHTML = 'Mine';
        this.mineCell = mineRow.insertCell();
        this.mineCell.innerHTML = this.mine + ' ';

        var secRow = table.insertRow();
        var secTag = secRow.insertCell();
        secTag.innerHTML = 'Security';
        this.secrCell = secRow.insertCell();
        this.secrCell.innerHTML = this.security + ' ';
    }

    private init_random_attributes() : void {
        this.agriculture = Math.floor(Math.random()*100) + 40;
        this.commerce = Math.floor(Math.random()*100) + 40;
        this.industry = Math.floor(Math.random()*100) + 40;
        this.mine = Math.floor(Math.random()*100) + 40;
        this.population = Math.floor(Math.random()*300) + 400;
        this.security = Math.ceil(Math.random()*21) + 40;
    }

    public increase_agriculture() : void {
        this.agriculture += (20 + Math.floor(Math.random()*11));
        this.agriCell.innerHTML = this.agriculture + ' ';
    }

    public increase_commerce() : void {
        this.commerce += (20 + Math.floor(Math.random()*11));
        this.commCell.innerHTML = this.commerce + ' ';
    }

    public increase_industry() : void {
        this.industry += (20 + Math.floor(Math.random()*11));
        this.indtCell.innerHTML = this.industry + ' ';
    }

    public increase_mine() : void {
        this.mine += (20 + Math.floor(Math.random()*11));
        this.mineCell.innerHTML = this.mine + ' ';
    }

    public tick_population() : void {
        this.population += Math.ceil(this.population/50*this.security/100);
        let economy = this.agriculture + this.commerce + this.industry + this.mine;
        if(economy > this.population) {
            this.population += (economy - this.population)/10*this.security/100
        }
        this.poplCell.innerHTML = this.population + ' ';
    }

    public tick_economy() : void {
        let economy = this.agriculture + this.commerce + this.industry + this.mine;
        if(economy < this.population)
        {
            this.agriculture += Math.floor(Math.random()*1.5);
            this.commerce += Math.floor(Math.random()*1.5);
            this.industry += Math.floor(Math.random()*1.5);
            this.mine += Math.floor(Math.random()*1.5);
            this.agriCell.innerHTML = this.agriculture + ' ';
            this.commCell.innerHTML = this.commerce + ' ';
            this.indtCell.innerHTML = this.industry + ' ';
            this.mineCell.innerHTML = this.mine + ' ';
        }
    }

    public tick_security(foodSurplus : number, materialSurplus : number) : void {
        let lower = foodSurplus < materialSurplus ? foodSurplus : materialSurplus;
        this.security += Math.floor(Math.random()*lower*1.1);
    }

    public tick_income() : number {
        let income = this.population;
        if(this.population*2 >= this.commerce) {
            income += this.commerce;
        }
        else {
            let effectivePopulation = Math.floor(this.population)
            income += effectivePopulation;
            income += (this.commerce - effectivePopulation)/2;
        }
        return income;
    }

    public tick_food() : number {
        return this.agriculture - Math.ceil(this.population/5);
    }

    public tick_material() : number {
        return this.industry - Math.ceil(this.population/5);
    }

    public tick_mine() : number {
        return this.mine;
    }

    public get_agriculture() : number {
        return this.agriculture;
    }

    public get_commerce() : number {
        return this.commerce;
    }

    public get_industry() : number {
        return this.industry;
    }

    public get_mine() : number {
        return this.mine;
    }

    public get_population(): number {
        return this.population;
    }

    public get_securtiy(): number {
        return this.security;
    }
}

