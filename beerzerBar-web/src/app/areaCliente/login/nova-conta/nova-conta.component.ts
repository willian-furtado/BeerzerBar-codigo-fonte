import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html',
  styleUrls: ['./nova-conta.component.css']
})
export class NovaContaComponent implements OnInit {


  NewUserForm!: FormGroup;

  constructor( private fb: FormBuilder,
    private reactiveform: ReactiveFormsModule,
    private route: Router,
    private router: ActivatedRoute,
    private auth: AuthService)
    { }

  ngOnInit(): void {

  }

}
