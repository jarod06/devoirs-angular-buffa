import { Component, OnInit } from "@angular/core";
import { DevoirService } from "./../devoirs.service";

@Component({
	selector: "app-devoirslist",
	templateUrl: "./devoirslist.component.html",
	styleUrls: ["./devoirslist.component.css"]
})
export class DevoirslistComponent implements OnInit {
	constructor(private service: DevoirService) {	
		this.status = 0
		this.message = ''
		this.errmsg = ''
	}

	devoirs: any;
	status: number;
	message: string;
	errmsg: string;	

	ngOnInit() {
		this.getDevoirs();
	}

	getDevoirs() {
		this.service.getDevoirs().subscribe(
			data => (this.devoirs = data),
			error => {
				this.status = error.status;
				this.message = error.message;
			}
			);
	}

	deleteDevoir(event: any) {
		if(window.confirm("Voulez-vous vraiment supprimer ce devoir?")) {
			this.service.deleteDevoirById(event.id).subscribe(
				successCode => {
					this.status = successCode;
					this.getDevoirs();
				},
				error => {
					this.status = error.status;
					this.message = error.message;
				}
				);
		}
	}
}