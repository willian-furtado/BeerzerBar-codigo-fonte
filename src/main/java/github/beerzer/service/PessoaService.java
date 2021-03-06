package github.beerzer.service;

import github.beerzer.dominio.Pessoa;
import github.beerzer.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public Pessoa salvar (Pessoa pessoa){
        return pessoa;
    }
}
