/**
 * Created by 1494778 on 2016-04-27.
 */
import {Hero} from './hero';
export var HEROES: Hero[] = [
  {"id": 11, "name": "Mr. Nice"},
  {"id": 12, "name": "Narco"},
  {"id": 13, "name": "Bombasto"},
  {"id": 14, "name": "Celeritas"},
  {"id": 15, "name": "Magneta"},
  {"id": 16, "name": "RubberMan"},
  {"id": 17, "name": "Dynama"},
  {"id": 18, "name": "Dr IQ"},
  {"id": 19, "name": "Magma"},
  {"id": 20, "name": "Tornado"}
];

export class MockHeroes  {
  deletehero(id : number){
    for(var i = 0; i < HEROES.length; i++) {
      if(HEROES[i].id == id) {
        HEROES.splice(i, 1);
        break;
      }
    }

  }
  addHero(){
    var newId=0;
    for(var i = 0; i < HEROES.length; i++) {
      if(HEROES[i].id >= newId) {
       newId=HEROES[i].id;
        break;
      }
    }
    newId +=1;
    var nomHero = 'Héro'+newId;
    var newHero ={"id":newId, "name": nomHero};
  }
}
