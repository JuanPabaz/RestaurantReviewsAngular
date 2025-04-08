import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserService } from '../../../shared/services/user.service';
import { UserResponse } from '../../../interfaces/user-response';

@Component({
  selector: 'app-personal-information',
  imports: [],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export default class PersonalInformationComponent implements OnInit{
  changeImageModal: boolean = false;
  selectedImage: string = '';
  userResponse: UserResponse = {
    idUser: 0,
    username: '',
    fullName: '',
    role: ''
  }

  constructor(private auth_service: AuthService,
    private user_service: UserService
  ){

  }
  get user(){
    return this.auth_service.user
  }

  ngOnInit(): void {
    const idUser = this.user.userId;
    this.getUserById(idUser);
  }

  getUserById(userId: number){
    this.user_service.getUserById(userId).subscribe({
      next: userData => {
        this.userResponse = userData;
        console.log(this.userResponse);
      },
      error: err => {
        console.log(err.error);
      }
    })
  }

  openImageModal(image: string){
    this.changeImageModal = !this.changeImageModal;
    this.selectedImage = image;

  }

  closeImageModal(){
    this.changeImageModal = false;
  }

}
