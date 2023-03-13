export class MilitaryPanel {
    private panel: HTMLDivElement;

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

    private bunker: number = 0;
    private machineGun: number = 0;
    private heavyGun: number = 0;
    private antiAir: number = 0;

    private bunkerCell: HTMLTableCellElement;
    private machineGunCell: HTMLTableCellElement;
    private heavyGunCell: HTMLTableCellElement;
    private antiAirCell: HTMLTableCellElement;

    constructor(master: HTMLDivElement) {
        this.panel = document.createElement('div');
        master.append(this.panel);
        var table: HTMLTableElement = <HTMLTableElement>document.createElement('table');
        this.panel.append(table);

        var gunSoldierRow = table.insertRow();
        var rocketSoldierRow = table.insertRow();
        var mortarSoldierRow = table.insertRow();
        var helicopterRow = table.insertRow();
        var apcRow = table.insertRow();
        var tankRow = table.insertRow();
        var heavyTankRow = table.insertRow();
        var bunkerRow = table.insertRow();
        var machineGunRow = table.insertRow();
        var heavyGunRow = table.insertRow();
        var antiAirRow = table.insertRow();

        var gunSoldierTag = gunSoldierRow.insertCell();
        var rocketSoldierTag = rocketSoldierRow.insertCell();
        var mortarSoldierTag = mortarSoldierRow.insertCell();
        var helicopterTag = helicopterRow.insertCell();
        var apcTag = apcRow.insertCell();
        var tankTag = tankRow.insertCell();
        var heavyTankTag = heavyTankRow.insertCell();
        var bunkerTag = bunkerRow.insertCell();
        var machineGunTag = machineGunRow.insertCell();
        var heavyGunTag = heavyGunRow.insertCell();
        var antiAirTag = antiAirRow.insertCell();

        gunSoldierTag.innerHTML = 'Gun Soldier';
        rocketSoldierTag.innerHTML = 'Rocket Soldier';
        mortarSoldierTag.innerHTML = 'Mortar Soldier';
        helicopterTag.innerHTML = 'Helicopter';
        apcTag.innerHTML = 'APC';
        tankTag.innerHTML = 'Tank';
        heavyTankTag.innerHTML = 'Heavy Tank';
        bunkerTag.innerHTML = 'Bunker';
        machineGunTag.innerHTML = 'Machine Gun';
        heavyGunTag.innerHTML = 'Heavy Gun';
        antiAirTag.innerHTML = 'Anti-Air Gun';

        this.gunSoldierCell = gunSoldierRow.insertCell();
        this.rocketSoldierCell = rocketSoldierRow.insertCell();
        this.mortarSoldierCell = mortarSoldierRow.insertCell();
        this.helicopterCell = helicopterRow.insertCell();
        this.apcCell = apcRow.insertCell();
        this.tankCell = tankRow.insertCell();
        this.heavyTankCell = heavyTankRow.insertCell();
        this.bunkerCell = bunkerRow.insertCell();
        this.machineGunCell = machineGunRow.insertCell();
        this.heavyGunCell = heavyGunRow.insertCell();
        this.antiAirCell = antiAirRow.insertCell();

        this.gunSoldierCell.innerHTML = String(this.gunSoldier);
        this.rocketSoldierCell.innerHTML = String(this.rocketSoldier);
        this.mortarSoldierCell.innerHTML = String(this.mortarSoldier);
        this.helicopterCell.innerHTML = String(this.helicopter);
        this.apcCell.innerHTML = String(this.apc);
        this.tankCell.innerHTML = String(this.tank);
        this.heavyTankCell.innerHTML = String(this.heavyTank);
        this.bunkerCell.innerHTML = String(this.bunker);
        this.machineGunCell.innerHTML = String(this.machineGun);
        this.heavyGunCell.innerHTML = String(this.heavyGun);
        this.antiAirCell.innerHTML = String(this.antiAir);
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