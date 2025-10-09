import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Experience } from '../experience/experience';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, About, Skills, Experience, Contact],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}
