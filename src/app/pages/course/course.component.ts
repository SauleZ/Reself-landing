import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  isDesktop;
  isMobile;
  isTablet;
  showCardIndex = 1;
  showCardIndex2 = 2;
  page = 1;
  page2 = 2;
  marginIndex = 0;
  arrCard = [
    {
      image: './assets/img/java.png',
      title: 'Java Basic',
      description: 'Basic OOP concepts'
    },
    {
      image: './assets/img/spring-boot.png',
      title: 'Spring boot',
      description: 'Spring Boot Microservices with Spring Cloud Beginner to Guru'
    },
    {
      image: './assets/img/sc2.png',
      title: 'Spring cloud',
      description: 'Spring Boot Microservices with Spring Cloud Beginner to Guru'
    },
    {
      image: './assets/img/java.png',
      title: 'Java Core',
      description: 'Basic OOP concepts'
    }
  ];

  constructor(private deviceDetectorService: DeviceDetectorService) {
    this.isDesktop = deviceDetectorService.isDesktop();
    this.isMobile = deviceDetectorService.isMobile();
    this.isTablet = deviceDetectorService.isTablet();
  }

  ngOnInit(): void {
  }

  nextShow() {
    if (this.marginIndex !== this.arrCard.length - 3) {
      this.marginIndex += 1;
      this.page += 1;
      this.page2 += 1;
      this.showCardIndex = this.page;
      this.showCardIndex2 = this.page2;
    }
  }

  prevShow() {
    if (!this.isMobile)
      if (this.marginIndex !== 0) {
        this.marginIndex -= 1;
        this.page -= 1;
        this.page2 -= 1;
        this.showCardIndex = this.page;
        this.showCardIndex2 = this.page2;
      }
    if (this.isMobile) {
      if (this.marginIndex !== -1) {
        this.marginIndex -= 1;
        this.page -= 1;
        this.page2 -= 1;
        this.showCardIndex = this.page;
        this.showCardIndex2 = this.page2;
      }
    }
  }

  clickCard(index: number) {
    this.showCardIndex = index;
    this.showCardIndex2 = index;
  }

}
