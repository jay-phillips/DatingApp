import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})

export class MemberDetailComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private alertify: AlertifyService,
              private route: ActivatedRoute){ }

    ngOnInit(){
      this.route.data.subscribe(data => { 
        this.user = data[`user`];
      });

      this.galleryOptions = [
         {
           width: '500px',
           height: '500px',
           imagePercent: 100,
           thumbnailsColumns: 4,
           imageAnimation: NgxGalleryAnimation.Slide,
           preview: false
         }
       ];
      this.galleryImages = this.getImages();
    // memeber/"id"
   /*adUser() {
      this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
        this.user = user;
      }, error => {
        this.alertify.error(error);
      });
    }
   */
    }
     getImages(){
       const imageUrls = [];
       for (const photo of this.user.photos){
         imageUrls.push({
            small: photo.url,
            medium: photo.url,
            big: photo.url,
            description: photo.description

         });
        }
        return imageUrls;
     } 
  }
