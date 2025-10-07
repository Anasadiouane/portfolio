import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { GradientAnimatedBgComponent } from './gradient-animated-bg/gradient-animated-bg';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, GradientAnimatedBgComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
