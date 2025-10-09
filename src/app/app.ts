import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { GradientAnimatedBgComponent } from './gradient-animated-bg/gradient-animated-bg';
import { Footer } from "./footer/footer";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, GradientAnimatedBgComponent, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portfolio');
}
