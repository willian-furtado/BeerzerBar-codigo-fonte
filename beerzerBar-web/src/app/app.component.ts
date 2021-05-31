import { AuthService } from './auth.service';
import { DataTablesModule } from 'angular-datatables';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

  mostrarPage:boolean =true;

  constructor(private auth: AuthService)
  {}
  ngOnInit(): void {

   this.auth.mostrarConteudo.subscribe(
      mostraInfo=> this.mostrarPage= mostraInfo
    )

  }
  ngAfterViewInit(){
      (function($) {
        'use strict';
        var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $('#layoutSidenav_nav .sb-sidenav a.nav-link').each(function() {
                if (this.getAttribute('href') === path) {
                    $(this).addClass('active');
                }
            });
        $('#sidebarToggle').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('sb-sidenav-toggled');
        })

      })(jQuery);
    }

}
