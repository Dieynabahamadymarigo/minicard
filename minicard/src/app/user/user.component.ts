import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserServicesService } from '../user-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myUser: any;
  user = "";
  tabUsers: any []=[];
  nom:any = '';
  qualite: any = '';
  cout: any = '';
  description: any = '';
  idParfum: any = '';
  dataparfum:any = '';

  // data: any;

  constructor(private userService: UserServicesService) { }

  ngOnInit(): void {
   this.afficher();
}

// declarer des variable pour l'ajout
newParfum: any = {
  nom: '',
  qualite: '',
  cout: '',
  description: '',
  userId: 1
};
// declarer des variable pour l'ajout
updateParfum: any = {
  nom: this.nom,
  qualite: this.qualite,
  cout: this.cout,
  description: this.description
};



// methode qui permet d'afficher
afficher() {
  this.userService.userParfum().subscribe((data) => {
    this.myUser = data;
    this.tabUsers = this.myUser
    console.log(this.tabUsers);
  });
}

// pour ajout parfum
addNewParfum() {
  this.userService.createParfum(this.newParfum).subscribe(
    (response) => {
      console.log('Article ajouté avec succès :', response);
      // Réinitialiser les données pour ajouter un nouvel article
      this.newParfum = response;
      this.affichermessage('success','Article Ajouté','')
    },
    (error) => {
      console.error('Erreur lors de l\'ajout de l\'article :', error);
    }
  );
}

RecuperationId(id: any) {
  // @ts-ignore
  let parfumFound = this.dataparfum.find(parfumdata => parfumdata.id === id);
  if (parfumFound) {
    this.nom = parfumFound.nom;
    this.qualite = parfumFound.qualite;
    this.cout = parfumFound.cout;
    this.description = parfumFound.description;
  }
  this.idParfum = id;
  return id;
}





affichermessage(icone: any, message: string,user:string) {
  Swal.fire({
      position: 'center',
      icon: icone,
      title: message +"" +user,
      showConfirmButton: true,
      // timer: 1500
  })
}

}

// public get userFilter(): any {
//   return this.user;
// }
