import Cat from '../models/cat';
import BaseCtrl from './base';

export class CatCtrl extends BaseCtrl {
  model = Cat;
}

export default CatCtrl;
