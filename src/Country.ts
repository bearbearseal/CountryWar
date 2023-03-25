import { Province } from "./Province";

interface Domestic {
    population  : number;
    agriculture : number;
    commerce    : number;
    industry    : number;
    mine        : number;
    security    : number;
}

interface Resource {
    money   : number;
    food    : number;
    material: number;
    metal   : number;
}

export class Country {
    private name: string;
    private color: string;
    private provinces: Map<string, Province>;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
        this.provinces = new Map<string, Province>();
    }

    add_province(id: string, province: Province): void {
        this.provinces.set(id, province);
    }

    remove_province(id: string): void {
        this.provinces.delete(id);
    }

    get_resource() : Map<string, Domestic> {
        let retVal: Map<string, Domestic> = new Map<string, Domestic>();
        this.provinces.forEach((value: Province, key: string) => {
            let item: Domestic;
            item.population = value.get_population();
            item.agriculture = value.get_agriculture();
            item.commerce = value.get_commerce();
            item.industry = value.get_industry();
            item.mine = value.get_mine();
            item.security = value.get_security();
            retVal.set(key, item);
        });
        return retVal;
    }

    calculate_resource(domestic: Domestic): Resource {
        let retVal :Resource;
        return retVal;
    }
}