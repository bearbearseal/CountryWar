export const countryWidth: number = 240;
export const countryHeight: number = 180;

import { DomesticPanel } from "./DomesticPanel"
import { MilitaryPanel } from "./MilitaryPanel";
import "../css/button.css"

class ChangeButton {
    private element: HTMLDivElement;

    set positionStyle(newValue: string) {
        this.element.style.position = newValue;
    }

    set left(newValue: string) {
        this.element.style.left = newValue;
    }

    set top(newValue: string) {
        this.element.style.top = newValue;
    }


}

export class Country {
    private element: HTMLDivElement;
    private subPanels: Array<HTMLDivElement> = [];
    private switchButton: HTMLDivElement;

    constructor(id: string) {
        this.element = document.createElement('div');
        this.element.style.position = 'absolute';
        this.element.style.width = countryWidth + 'px';
        this.element.style.height = countryHeight + 'px';
        this.element.innerHTML = '<B>' + id + '</B>';
        document.body.appendChild(this.element);

        let tempPanel = document.createElement('div');
        new DomesticPanel(tempPanel);
        this.subPanels.push(tempPanel);
        this.element.append(tempPanel);

        tempPanel = document.createElement('div');
        new MilitaryPanel(tempPanel);
        this.subPanels.push(tempPanel);
        this.element.append(tempPanel);

        this.switch_subPanel(this.subPanels);

        let button = this.create_switch_button(this);
        this.element.append(button);
    }

    private create_switch_button(master : Country): HTMLDivElement {
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

    public update_domestic(): void {

        this.element.innerHTML;
    }

    set innerHTML(content: string) {
        this.element.innerHTML = content;
    }

}

