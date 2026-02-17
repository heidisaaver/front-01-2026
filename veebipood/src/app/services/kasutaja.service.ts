import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KasutajaService {
  kasutajad = [
  {"nimi": "Marten Kask", "epost": "marten.kask@etunimi.ee", "parool": "12345678", "vanus": 65},
  {"nimi": "Liis Tamm", "epost": "liis.tamm@etunimi.ee", "parool": "87654321", "vanus": 18},
  {"nimi": "Andres Saar", "epost": "andres.saar@etunimi.ee", "parool": "11223344", "vanus": 50},
  {"nimi": "Katrin Lepp", "epost": "katrin.lepp@etunimi.ee", "parool": "55667788", "vanus": 22},
  {"nimi": "Rasmus Põld", "epost": "rasmus.pold@etunimi.ee", "parool": "99887766", "vanus": 17},
  {"nimi": "Maarja Mägi", "epost": "maarja.magi@etunimi.ee", "parool": "1234567890", "vanus": 55},
  {"nimi": "Kristjan Vaher", "epost": "kristjan.vaher@etunimi.ee", "parool": "22334455", "vanus": 33},
  {"nimi": "Anu Järv", "epost": "anu.jarv@etunimi.ee", "parool": "33445566", "vanus": 42},
  {"nimi": "Taavi Oja", "epost": "taavi.oja@etunimi.ee", "parool": "44556677", "vanus": 27},
  {"nimi": "Helena Kuusk", "epost": "helena.kuusk@etunimi.ee", "parool": "55667788", "vanus": 31}];
  //nimi, epost, parool, vanus - need omadused võiksid kasutajal olla
}
