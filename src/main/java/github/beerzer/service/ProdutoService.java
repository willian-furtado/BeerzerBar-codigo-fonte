package github.beerzer.service;

import github.beerzer.document.ProdutoDocument;
import github.beerzer.dominio.DTO.ProdutoDTO;
import github.beerzer.dominio.Produtos;
import github.beerzer.repository.ProdutoDocumentRepository;
import github.beerzer.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private ProdutoDocumentRepository produtoDocumentRepository;


    public Produtos salvar(ProdutoDTO produtoDTO) {
        Produtos produtos = new Produtos();
        produtos.setNome(produtoDTO.getNome());
        produtos.setDescricao(produtoDTO.getDescricao());
        produtos.setQuantidade(produtoDTO.getQuantidade());
        produtos.setPreco(produtoDTO.getPreco());
        produtos.setCategoria(produtoDTO.getCategoria());

        Produtos produtoSalvo = produtoRepository.save(produtos);
        ProdutoDocument produtoDocument = createProdutoDocument(produtoSalvo);
        produtoDocumentRepository.save(produtoDocument);
        return produtoSalvo;
    }

    private ProdutoDocument createProdutoDocument(Produtos produtos) {
        ProdutoDocument produtoDocument = new ProdutoDocument();
        produtoDocument.setId(produtos.getId().toString());
        produtoDocument.setNome(produtos.getNome());
        produtoDocument.setDescricao(produtos.getDescricao());
        produtoDocument.setQuantidade(produtos.getQuantidade().toString());
        produtoDocument.setPreco(produtos.getPreco().toString());
        produtoDocument.setCategoria(produtos.getCategoria());
        return produtoDocument;
    }

    public Iterable<ProdutoDocument> getAllProdutos(){
        Iterable<ProdutoDocument> produtos = produtoDocumentRepository.findAll();
        return produtos;
    }

    public Optional<ProdutoDocument> getById(Long id){
        String identificador = id.toString();
        return produtoDocumentRepository.findById(identificador);
    }

}
