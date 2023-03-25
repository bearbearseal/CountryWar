export interface ResourceStruct {
    population  : number;
    money       : number;
    food        : number;
    material    : number;
    metal       : number;
}

export class CountryResource {
    private population  : number;
    private money       : number;
    private food        : number;
    private material    : number;
    private metal       : number;

    private table: HTMLTableElement;
    private populationCell  : HTMLTableCellElement;
    private moneyCell       : HTMLTableCellElement;
    private foodCell        : HTMLTableCellElement;
    private materialCell    : HTMLTableCellElement;
    private metalCell       : HTMLTableCellElement;

    contructor(master : HTMLDivElement, allResources: ResourceStruct) {
        this.population = allResources.population;
        this.money      = allResources.money;
        this.food       = allResources.food;
        this.material   = allResources.material;
        this.metal      = allResources.metal;

        this.table  = document.createElement('table');
        master.append(this.table);

        var populationRow = this.table.insertRow();
        var populationTag = populationRow.insertCell();
        populationTag.innerHTML = 'Total Population';
        this.populationCell = populationRow.insertCell();

        var moneyRow = this.table.insertRow();
        var moneyTag = moneyRow.insertCell();
        moneyTag.innerHTML = 'Money';
        this.moneyCell = moneyRow.insertCell();

        var foodRow = this.table.insertRow();
        var foodTag = foodRow.insertCell();
        foodTag.innerHTML = 'Food';
        this.foodCell = foodRow.insertCell();

        var materialRow = this.table.insertRow();
        var materialTag = materialRow.insertCell();
        materialTag.innerHTML = 'Material';
        this.materialCell = materialRow.insertCell();

        var metalRow = this.table.insertRow();
        var metalTag = metalRow.insertCell();
        metalTag.innerHTML = 'Metal';
        this.metalCell = metalRow.insertCell();
    }

    has_population(value: number): boolean {
        return this.population >= value;
    }
}