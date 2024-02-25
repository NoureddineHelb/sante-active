import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  @ViewChild('menuBtn') menuBtn!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.menuBtn.nativeElement.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.menuBtn.nativeElement.classList.toggle('fa-times');
    this.navbar.nativeElement.classList.toggle('active');
  }
}
