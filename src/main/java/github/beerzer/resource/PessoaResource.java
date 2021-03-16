package github.beerzer.resource;

import github.beerzer.dominio.Pessoa;
import github.beerzer.repository.PessoaRepository;
import github.beerzer.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/pessoa")
public class PessoaResource {

    @Autowired
    private final PessoaService pessoaService;

    @Autowired
    private final PessoaRepository pessoaRepository;


    public PessoaResource(PessoaService pessoaService, PessoaRepository pessoaRepository) {
        this.pessoaService = pessoaService;
        this.pessoaRepository = pessoaRepository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Pessoa salvar(Pessoa pessoa){
        return pessoaRepository.save(pessoa);
    }


}
