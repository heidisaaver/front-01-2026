import { Injectable } from '@angular/core';
import { Auto } from '../models/Auto';
import { Toode } from '../models/Toode';


@Injectable({
  providedIn: 'root',
})
export class OstukorvService {
  ostukorv: Auto[] | Toode[] = [];
  
}
