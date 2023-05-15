
import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Child} from "../../service/Child";
import {AttendantService} from "../../service/attendant.service";
import {Router} from "@angular/router";
import jsPDF from 'jspdf';
// @ts-ignore
import pdfMake from 'pdfmake/build/pdfmake';
// @ts-ignore
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.vfs = pdfFonts.pdfMake.vfs;
import html2canvas from 'html2canvas';


@Component({
    selector: 'app-valuationResult',
    templateUrl: './valuationResult.component.html',
    styleUrls: ['./valuationResult.component.scss']
})
export class ValuationResultComponent implements OnInit, AfterViewInit {
    REST_API: string = 'http://localhost:8080/api/v1';

    child!: Child;
    results!: any[];

        ngOnInit() {
            const loggedInUserString = sessionStorage.getItem('ChildToBeRated');
            // @ts-ignore
            this.child = JSON.parse(loggedInUserString) as Child;
            // @ts-ignore
            const arrayFromSessionStorage = JSON.parse(sessionStorage.getItem('valuation'));
            this.results = arrayFromSessionStorage;

console.log(arrayFromSessionStorage);

            for (let i = 1; i <= 37; i++) {
                const value = arrayFromSessionStorage[i-1];
                let i1 = i;
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

    printPDF() {
        const printWindow = window.open('', '_blank');
        // @ts-ignore
        const content = document.getElementById('doc').outerHTML;

        const head = document.head.cloneNode(true);

        // @ts-ignore
        printWindow.document.write('<!DOCTYPE html><html>');
        // @ts-ignore
        printWindow.document.write('<head>');
        // @ts-ignore
        printWindow.document.write(head.innerHTML);
        // @ts-ignore
        printWindow.document.write('<style>body { margin: 20mm 10mm 10mm 10mm; }</style>');
        // @ts-ignore
        printWindow.document.write('</head><body>');
        // @ts-ignore
        printWindow.document.write(content);
        // @ts-ignore
        printWindow.document.write('</body></html>');
        // @ts-ignore
        printWindow.document.close();
        // @ts-ignore
        printWindow.print();
    }

    finish()
    {
        const elementToPrint = document.getElementById('doc');
        console.log(elementToPrint);
        // @ts-ignore
        this.printPDF();
    }

    ngAfterViewInit(): void {
        window.scrollTo(0, 0);
    }
    }