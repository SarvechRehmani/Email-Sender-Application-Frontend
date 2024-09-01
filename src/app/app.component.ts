import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'SS Mail Sender Application.';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.initializeTheme();
  }

  mode = 'Dark Theme  ';
  toggleTheme() {
    const currentTheme = document.documentElement.classList.contains('light')
      ? 'light'
      : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    this.renderer.removeClass(document.documentElement, currentTheme);
    this.renderer.addClass(document.documentElement, newTheme);

    if (newTheme === 'light') {
      this.mode = 'Dark Theme';
    } else {
      this.mode = 'Light Theme';
    }

    localStorage.setItem('theme', newTheme);
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'light') {
      this.mode = 'Dark Theme';
    } else {
      this.mode = 'Light Theme';
    }
    this.renderer.addClass(document.documentElement, savedTheme);
  }
}
