package github.beerzer.resource;

import github.beerzer.document.ProdutoDocument;
import github.beerzer.dominio.DTO.ProdutoDTO;
import github.beerzer.dominio.Produtos;
import github.beerzer.repository.ProdutoRepository;
import github.beerzer.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/produtos")
@CrossOrigin("http://localhost:4200")
public class ProdutoResource {

    @Autowired
    private final ProdutoService  produtoService;

    @Autowired
    private final ProdutoRepository produtoRepository;

    public ProdutoResource(ProdutoService produtoService, ProdutoRepository produtoRepository) {
        this.produtoService = produtoService;
        this.produtoRepository = produtoRepository;
    }

    @PostMapping
    public Produtos salvar(@RequestBody ProdutoDTO produtos){
        return produtoService.salvar(produtos);
    }

    @GetMapping
    public Iterable<ProdutoDocument> getAllProdutos(){
        return produtoService.getAllProdutos();
    }

    @GetMapping("/{id}")
    public Optional<ProdutoDocument> getById(@PathVariable("id") Long id){
        return produtoService.getById(id);
    }
}
