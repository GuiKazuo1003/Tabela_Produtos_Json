import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../Produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{

  produto: Produto[] = [];

  constructor (private produtoService: ProdutoService){}
  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos(){
    this.produtoService.getProdutos().subscribe(
      {
        next: data => this.produto = data,
        error: msg => console.log("Erro ao chamar o endpoint " + msg)
      }
    )
  }
}
