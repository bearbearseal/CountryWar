import { Country } from "./Country"
import { countryHeight } from "./Country";
import { countryWidth } from "./Country";

let countryList : Country[]
for(let i = 0; i < 30; ++i)
{
    let aCountry = new Country('Province' + i)
    aCountry.set_color('grey');
    aCountry.set_location(20 + (i%6)*(40+countryWidth), 20 + Math.floor(i/6)*(40+countryHeight));
}
