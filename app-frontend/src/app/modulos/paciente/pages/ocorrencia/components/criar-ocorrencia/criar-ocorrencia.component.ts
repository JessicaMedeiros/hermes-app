import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-ocorrencia',
  templateUrl: './criar-ocorrencia.component.html',
  styleUrls: ['./criar-ocorrencia.component.css']
})
export class CriarOcorrenciaComponent implements OnInit {

  formularioNovaOcorrencia!: FormGroup;

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {

    this.formularioNovaOcorrencia = this.fb.group({
      data: ['', Validators.required],
      hora: ['', Validators.required],
      observacao: ['', Validators.required],
      medicamentos: ['', Validators.required],
    })


  }


  transform(size: number, extension: string = 'MB') {
    return (size / (1024 * 1024)).toFixed(2) + extension;
  }

  fileName!: any;
  hasFile: boolean = false;
  testFile: any;
  size!: number;
  sizeOnScreen: boolean = false;
  corBotao = "primary"
  imagePreview!: string;
  file!: File;
  messagemTipoErrado = '';
  messagemTamanhoErrado = '';
  messagemExcedidaQuantidadeMaxDeArquivos = "";

  listaFiles!: any;
  listaFiles2: any = [];
  files!: FileList | null;
  fileList: File[] = [];
  listOfFiles: any[] = [];

  removerArquivo(index: any) {
    // Delete the item from fileNames list
    this.listOfFiles.splice(index, 1);
    this.listaFiles2 = this.listOfFiles.map(file => {
      return {
        name: file.name,
        type: file.type,
        size: this.transform(file.size, 'MB'),
        lastModifiedDate: file.lastModifiedDate
      };
    })
    // delete file from FileList
    this.fileList.splice(index, 1);
    console.log('filelist-----', this.fileList)
  }

  uploadFile(event: Event) {
    this.corBotao = "primary"
    this.messagemTipoErrado = "";
    this.messagemTamanhoErrado = "";
    this.messagemExcedidaQuantidadeMaxDeArquivos = "";

    this.files = (event.target as HTMLInputElement).files;

    this.listaFiles = this.files;

    console.log('this.listoffile', this.listaFiles2)
    if(this.listaFiles2.length >= 2) {
      this.messagemExcedidaQuantidadeMaxDeArquivos = "Excedida a quantidade máxima de arquivos.Exclua um dos item pra continuar";
      return;
    }

    for (var i = 0; i <= this.listaFiles.length - 1; i++) {

      var selectedFile = this.listaFiles[i];

      if (selectedFile.size > 10 * 1024 * 1024) { // 10MB em bytes
        this.messagemTamanhoErrado = "Tamanho de arquivo superior a 10MB.";
        return;
      }

      var fileExtension = selectedFile.name.split('.').pop().toLowerCase();
      var imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff'];
      if (!imageExtensions.includes(fileExtension)) {
        this.messagemTipoErrado = "Tipo de arquivo inválido. Apenas imagens são permitidas.";
        return; // Saia da função ou trate o erro de alguma forma
      }


      this.fileList.push(selectedFile);
      this.listOfFiles.push(selectedFile)
    }

    this.listaFiles2 = this.listOfFiles.map(file => {
      return {
        name: file.name,
        type: file.type,
        size: this.transform(file.size, 'MB'),
        lastModifiedDate: file.lastModifiedDate
      };
    })


  }
}
