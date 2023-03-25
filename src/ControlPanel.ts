import { Country } from "./Province";

export class ControlPanel {
    private provinces : Array<Country>;
    private table : HTMLTableElement;
    private provinceCell : HTMLTableCellElement;
    private populationCell : HTMLTableCellElement;
    private industryCell : HTMLTableCellElement;
    private commerceCell : HTMLTableCellElement;
    private mineCell : HTMLTableCellElement;
    private moneyCell : HTMLTableCellElement;
    private foodCell : HTMLTableCellElement;

    constructor(master : HTMLElement) {
        this.table = <HTMLTableElement>document.createElement('table');
        master.append(this.table);

        var provinceRow = this.table.insertRow();
        var provinceTag = provinceRow.insertCell();
        provinceTag.innerHTML = 'Province';
        this.provinceCell = provinceRow.insertCell();

        var populationRow = this.table.insertRow();
        var populationTag = populationRow.insertCell();
        populationTag.innerHTML = 'Total Population';
        this.populationCell = provinceRow.insertCell();

        var industryRow = this.table.insertRow();
        var industryTag = industryRow.insertCell();
        industryTag.innerHTML = 'Industrial Power';
        this.industryCell = industryRow.insertCell();

        var mineRow = this.table.insertRow();
        var mineTag = mineRow.insertCell();
        mineTag.innerHTML = 'Mine Power';
        this.mineCell = mineRow.insertCell();

        var moneyRow = this.table.insertRow();
        var moneyTag = moneyRow.insertCell();
        moneyTag.innerHTML = 'Money';
        this.moneyCell = moneyRow.insertCell();

        var foodRow = this.table.insertRow();
        var foodTag = foodRow.insertCell();
        foodTag.innerHTML = 'Food';
        this.foodCell = foodRow.insertCell();

        var populationRow = this.table.insertRow();
        var populationTag = populationRow.insertCell();
        populationTag.innerHTML = 'Total Population';
        this.populationCell = provinceRow.insertCell();
    }

    public set_position_left(left: string) : void {
        this.table.style.left = left;
    }

    public set_position_right(right: string) : void {
        this.table.style.right = right;
    }

    public set_position_top(top: string) : void {
        this.table.style.top = top;
    }

    public set_position_bottom(bottom: string) : void {
        this.table.style.bottom = bottom;
    }

    public set_control_province(provinces : Array<Country>) : void {
        this.provinces = provinces;
        this.provinceCell.innerHTML = String(provinces.length);
    }

    public set_industrial_power(value: number) : void {
        let total = 0;
        for(let i=0; i<this.provinces.length; ++i) {
            total += this.provinces[i].
        }
    }

    public set_commercial_power(value: number) : void {

    }

    public set_total_mine_power(value: number) : void {

    }

    public set_total_population(value: number) : void {

    }

    public add_to_money(value: number) : void {

    }

    public add_to_food(value: number) : void {

    }

    public add_to_mineral(value: number) : void {

    }

}