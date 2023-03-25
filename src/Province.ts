export const provinceWidth: number = 240;
export const provinceHeight: number = 188;

import { DomesticPanel } from "./DomesticPanel"
import { MilitaryPanel } from "./MilitaryPanel";
import { DefensePanel } from "./DefensePanel";
import "../css/button.css"

export class Province {
    private element: HTMLDivElement;
    private domestic: DomesticPanel;
    private subPanels: Array<HTMLDivElement> = [];
    private id: string;

    constructor(id: string) {
        this.id = id;
        this.element = document.createElement('div');
        this.element.style.position = 'absolute';
        this.element.style.width = provinceWidth + 'px';
        this.element.style.height = provinceHeight + 'px';
        this.element.innerHTML = '<B>' + id + '</B>';
        document.body.appendChild(this.element);

        let tempPanel = document.createElement('div');
        this.domestic = new DomesticPanel(tempPanel);
        this.subPanels.push(tempPanel);
        this.element.append(tempPanel);

        tempPanel = document.createElement('div');
        new MilitaryPanel(tempPanel);
        this.subPanels.push(tempPanel);
        this.element.append(tempPanel);

        tempPanel = document.createElement('div');
        new DefensePanel(tempPanel);
        this.subPanels.push(tempPanel);
        this.element.append(tempPanel);

        this.switch_subPanel(this.subPanels);

        let button = this.create_switch_button(this);
        this.element.append(button);
    }

    private create_switch_button(master : Province): HTMLDivElement {
        let button = document.createElement('div');
        button.className += "SwitchButton";
        button.innerHTML = ">";
        button.addEventListener('click', function(ev: MouseEvent){
            master.switch_subPanel(master.subPanels);
            });
        return button;
    }

    private switch_subPanel(subPanels : Array<HTMLDivElement>): void {
        let activeIndex = subPanels.length;
        for (let i=0; i < subPanels.length; ++i) {
            if (subPanels[i].style.display == 'block') {
                activeIndex = i;
            }
            subPanels[i].style.display = 'none';
        }
        if (activeIndex + 1 >= subPanels.length) {
            subPanels[0].style.display = 'block';
        }
        else {
            subPanels[activeIndex + 1].style.display = 'block';
        }
    }

    public set_color(color: string): void {
        this.element.style.backgroundColor = color;
    }

    public set_location(x: number, y: number): void {
        this.element.style.left = x.toString() + 'px';
        this.element.style.top = y.toString() + 'px';
    }

    public get_agriculture(): number {
        return this.domestic.get_agriculture();
    }

    public get_commerce(): number {
        return this.domestic.get_commerce();
    }

    public get_population(): number {
        return this.domestic.get_population();
    }

    public get_mine(): number {
        return this.domestic.get_mine();
    }

    public get_industry(): number {
        return this.domestic.get_industry();
    }

    public get_security(): number {
        return this.domestic.get_securtiy();
    }
    
    public is_id(id: string): boolean {
        if(this.id == id)
        {
            return true;
        }
        return false;
    }
}

