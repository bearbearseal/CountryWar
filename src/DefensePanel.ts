import "../css/subPanels.css"

export class DefensePanel {
    private bunker: number = 0;
    private machineGun: number = 0;
    private heavyGun: number = 0;
    private antiAir: number = 0;

    private bunkerCell: HTMLTableCellElement;
    private machineGunCell: HTMLTableCellElement;
    private heavyGunCell: HTMLTableCellElement;
    private antiAirCell: HTMLTableCellElement;

    constructor(master: HTMLDivElement) {
        var table: HTMLTableElement = <HTMLTableElement>document.createElement('table');
        table.className += "Defense";

        master.append(table);

        var bunkerRow = table.insertRow();
        var machineGunRow = table.insertRow();
        var heavyGunRow = table.insertRow();
        var antiAirRow = table.insertRow();

        var bunkerTag = bunkerRow.insertCell();
        var machineGunTag = machineGunRow.insertCell();
        var heavyGunTag = heavyGunRow.insertCell();
        var antiAirTag = antiAirRow.insertCell();

        bunkerTag.innerHTML = 'Bunker';
        machineGunTag.innerHTML = 'Machine Gun';
        heavyGunTag.innerHTML = 'Heavy Gun';
        antiAirTag.innerHTML = 'Anti-Air Gun';

        this.bunkerCell = bunkerRow.insertCell();
        this.machineGunCell = machineGunRow.insertCell();
        this.heavyGunCell = heavyGunRow.insertCell();
        this.antiAirCell = antiAirRow.insertCell();

        this.bunkerCell.innerHTML = String(this.bunker);
        this.machineGunCell.innerHTML = String(this.machineGun);
        this.heavyGunCell.innerHTML = String(this.heavyGun);
        this.antiAirCell.innerHTML = String(this.antiAir);
    }

    public add_bunker(addition: number): void {
        this.bunker += addition;
        this.bunkerCell.innerHTML = String(this.bunker);
    }

    public add_machineGun(addition: number): void {
        this.machineGun += addition;
        this.machineGunCell.innerHTML = String(this.machineGun);
    }

    public add_heavyGun(addition: number): void {
        this.heavyGun += addition;
        this.heavyGunCell.innerHTML = String(this.heavyGun);
    }

    public add_antiAir(addition: number): void {
        this.antiAir += addition;
        this.antiAirCell.innerHTML = String(this.antiAir);
    }

}