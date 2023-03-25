import "../css/subPanels.css"

export class MilitaryPanel {
    private gunSoldier: number=0;
    private rocketSoldier: number=0;
    private mortarSoldier: number=0;
    private helicopter: number=0;
    private apc: number=0;
    private tank: number=0;
    private heavyTank: number=0;

    private gunSoldierCell: HTMLTableCellElement;
    private rocketSoldierCell: HTMLTableCellElement;
    private mortarSoldierCell: HTMLTableCellElement;
    private helicopterCell: HTMLTableCellElement;
    private apcCell: HTMLTableCellElement;
    private tankCell: HTMLTableCellElement;
    private heavyTankCell: HTMLTableCellElement;

    constructor(master: HTMLDivElement) {
        var table: HTMLTableElement = <HTMLTableElement>document.createElement('table');
        table.className += 'Military';
        master.append(table);

        var gunSoldierRow = table.insertRow();
        var rocketSoldierRow = table.insertRow();
        var mortarSoldierRow = table.insertRow();
        var helicopterRow = table.insertRow();
        var apcRow = table.insertRow();
        var tankRow = table.insertRow();
        var heavyTankRow = table.insertRow();

        var gunSoldierTag = gunSoldierRow.insertCell();
        var rocketSoldierTag = rocketSoldierRow.insertCell();
        var mortarSoldierTag = mortarSoldierRow.insertCell();
        var helicopterTag = helicopterRow.insertCell();
        var apcTag = apcRow.insertCell();
        var tankTag = tankRow.insertCell();
        var heavyTankTag = heavyTankRow.insertCell();

        gunSoldierTag.innerHTML = 'Gun Soldier';
        rocketSoldierTag.innerHTML = 'Rocket Soldier';
        mortarSoldierTag.innerHTML = 'Mortar Soldier';
        helicopterTag.innerHTML = 'Helicopter';
        apcTag.innerHTML = 'APC';
        tankTag.innerHTML = 'Tank';
        heavyTankTag.innerHTML = 'Heavy Tank';

        this.gunSoldierCell = gunSoldierRow.insertCell();
        this.rocketSoldierCell = rocketSoldierRow.insertCell();
        this.mortarSoldierCell = mortarSoldierRow.insertCell();
        this.helicopterCell = helicopterRow.insertCell();
        this.apcCell = apcRow.insertCell();
        this.tankCell = tankRow.insertCell();
        this.heavyTankCell = heavyTankRow.insertCell();

        this.gunSoldierCell.innerHTML = String(this.gunSoldier);
        this.rocketSoldierCell.innerHTML = String(this.rocketSoldier);
        this.mortarSoldierCell.innerHTML = String(this.mortarSoldier);
        this.helicopterCell.innerHTML = String(this.helicopter);
        this.apcCell.innerHTML = String(this.apc);
        this.tankCell.innerHTML = String(this.tank);
        this.heavyTankCell.innerHTML = String(this.heavyTank);
    }

    public add_gunSolder(addition: number): void {
        this.gunSoldier += addition;
        this.gunSoldierCell.innerHTML = String(this.gunSoldier);
    }

    public add_rocketSolder(addition: number): void {
        this.rocketSoldier += addition;
        this.rocketSoldierCell.innerHTML = String(this.rocketSoldier);
    }

    public add_mortarSolder(addition: number): void {
        this.mortarSoldier += addition;
        this.mortarSoldierCell.innerHTML = String(this.mortarSoldier);
    }

    public add_helicopter(addition: number): void {
        this.helicopter += addition;
        this.helicopterCell.innerHTML = String(this.helicopter);
    }

    public add_apc(addition: number): void {
        this.apc += addition;
        this.apcCell.innerHTML = String(this.apc);
    }

    public add_tank(addition: number): void {
        this.tank += addition;
        this.tankCell.innerHTML = String(this.tank);
    }

    public add_heavyTank(addition: number): void {
        this.heavyTank += addition;
        this.heavyTankCell.innerHTML = String(this.heavyTank);
    }
}