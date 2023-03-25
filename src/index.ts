import { Province } from "./Province"
import { provinceHeight } from "./Province";
import { provinceWidth } from "./Province";

let provinceList : Province[]
for(let i = 0; i < 20; ++i)
{
    let aProvince = new Province('Province' + i)
    aProvince.set_color('grey');
    aProvince.set_location(20 + (i%5)*(40+provinceWidth), 20 + Math.floor(i/5)*(40+provinceHeight));
}
