import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EsindusService {
  esindused = [
    {"nimi": "Ülemiste", "aadress": "Suur-Sõjamäe 612", "telefon": "123456"},
    {"nimi": "Rocca al Mare", "aadress": "Paldiski mnt 106", "telefon": "56980376"},
    {"nimi": "Magistrali", "aadress": "Sõpruse pst 201", "telefon": "65822365"},
    {"nimi": "Vesse", "aadress": "Vesse 3", "telefon": "65889954"},
    {"nimi": "Kristiine", "aadress": "Endla 45", "telefon": "6751236"},
    {"nimi": "Järveotsa", "aadress": "Pärnu mnt 569", "telefon": "6512300"},

  ]


  
}

