package github.beerzer.service;

import github.beerzer.dominio.DTO.FuncionarioDTO;
import github.beerzer.dominio.DTO.ProdutoDTO;
import github.beerzer.dominio.Funcionario;
import github.beerzer.dominio.Pessoa;
import github.beerzer.dominio.Produtos;
import github.beerzer.repository.FuncionarioRepository;
import github.beerzer.repository.PessoaRepository;
import github.beerzer.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FuncionarioService {


    @Autowired
    private FuncionarioRepository funcionarioRepository;

    @Autowired
    private PessoaRepository pessoaRepository;

    public Funcionario salvar(FuncionarioDTO funcionarioDTO) {
        Funcionario funcionario = new Funcionario();
        Pessoa saved = savePessoa(funcionarioDTO);
        funcionario.setPessoa(saved);
        funcionario.setMatricula(funcionario.getMatricula());
        return funcionarioRepository.save(funcionario);
    }

    private Pessoa savePessoa(FuncionarioDTO funcionarioDTO) {
        Pessoa pessoa = new Pessoa();
        pessoa.setNome(funcionarioDTO.getPessoaDTO().getNome());
        pessoa.setEmail(funcionarioDTO.getPessoaDTO().getEmail());
        pessoa.setDataNascimento(funcionarioDTO.getPessoaDTO().getDataNascimento());
        pessoa.setSobrenome(funcionarioDTO.getPessoaDTO().getSobrenome());
        Pessoa saved = pessoaRepository.save(pessoa);
        return saved;
    }
}
