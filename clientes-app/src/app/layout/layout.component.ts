import { Component, AfterViewInit } from '@angular/core';

const jQuery = require('jquery')

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {
 
  href: string | undefined;

  ngAfterViewInit(){
    (($) => {
        "use strict";
    
        // Add active state to sidbar nav links
        var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
            $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(() => {
                if (this.href === path) {
                    $(this).addClass("active");
                }
            });
    
        // Toggle the side navigation
        $("#sidebarToggle").on("click", function(e: { preventDefault: () => void; }) {
            e.preventDefault();
            $("body").toggleClass("sb-sidenav-toggled");
        });
    })(jQuery);
  }
}
