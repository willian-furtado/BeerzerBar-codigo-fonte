package github.beerzer.resource;

import github.beerzer.dominio.DTO.FuncionarioDTO;
import github.beerzer.dominio.Funcionario;
import github.beerzer.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/funcionario")
public class FuncionarioResource {

    @Autowired
    private final FuncionarioService funcionarioService;

    public FuncionarioResource(FuncionarioService funcionarioService) {
        this.funcionarioService = funcionarioService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Funcionario salvar(FuncionarioDTO funcionarioDTO){
        return funcionarioService.salvar(funcionarioDTO);
    }


}
