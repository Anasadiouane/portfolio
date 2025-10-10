import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

  navigateTo(id: string) {
    try {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // fallback: go to root (in case sections are rendered via routes)
        window.location.href = '/';
      }
    } catch (e) {
      console.error(e);
    }
  }
}
