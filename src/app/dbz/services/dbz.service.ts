import { Injectable } from "@angular/core";
import { ICharacter } from "../interfaces/dbz.interface";



@Injectable()
export class DbzService {

    private _characters: ICharacter[] = [
        {
          name: 'Goku',
          power: 15000
        },
        {
          name: 'Vegueta',
          power: 10000
        },
      ];

    get characters(): ICharacter[] {
        return [...this._characters];
    }

    addCharacter(character: ICharacter): void {
        this._characters.push(character);
    }

}