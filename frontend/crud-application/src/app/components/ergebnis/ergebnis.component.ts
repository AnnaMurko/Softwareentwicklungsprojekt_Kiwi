
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Child} from "../../service/Child";
import {UserService} from "../../service/user.service";
import {User} from "../../service/User";
import {Router} from "@angular/router";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
    selector: 'app-snake',
    templateUrl: './ergebnis.component.html',
    styleUrls: ['./ergebnis.component.scss']
})
export class ErgebnisComponent implements OnInit {
    REST_API: string = 'http://localhost:8080/api/v1';

    child!: Child;
    antworten!: any[];

        ngOnInit() {
            //erstmal child
            const loggedInUserString = sessionStorage.getItem('editChild');
            // @ts-ignore
            this.child = JSON.parse(loggedInUserString) as Child;
            //bewertung
            // @ts-ignore
            const arrayFromSessionStorage = JSON.parse(sessionStorage.getItem('array'));
            this.antworten = arrayFromSessionStorage;

console.log(arrayFromSessionStorage);

            for (let i = 1; i <= 37; i++) {
                const value = arrayFromSessionStorage[i-1];
                let i1 = i;

                console.log(arrayFromSessionStorage.length);

                // Hier kannst du den Wert des aktuellen Elements im Array verwenden.
              if(value.startsWith("1"))
                {
                    const pathElement = document.getElementById(i1.toString()) as unknown as SVGPathElement;
                    pathElement.style.fill = 'red';

                }
                if(value.startsWith("2"))
                {
                    const pathElement = document.getElementById(i1.toString()) as unknown as SVGPathElement;
                    pathElement.style.fill = 'orange';

                }
                if(value.startsWith("3"))
                {
                    const pathElement = document.getElementById(i1.toString()) as unknown as SVGPathElement;
                    pathElement.style.fill = 'yellow';

                }
                if(value.startsWith("4"))
                {
                    const pathElement = document.getElementById(i1.toString()) as unknown as SVGPathElement;
                    pathElement.style.fill = 'blue';

                }
                if(value.startsWith("5"))
                {
                    const pathElement = document.getElementById(i1.toString()) as unknown as SVGPathElement;
                    pathElement.style.fill = 'green';

                }
            }
        }
    downloadPDF() {
        const data = document.getElementById('anna');
        const options = { scale: 1, backgroundColor: '#FFFFFF', scrollY: 0 };
        // @ts-ignore
        html2canvas(data, options).then(canvas => {
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const contentDataURL = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            let position = 0;
            let heightLeft = imgHeight;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('file.pdf');
        });
    }


    fertig()
    {
    this.downloadPDF();
    }
    }