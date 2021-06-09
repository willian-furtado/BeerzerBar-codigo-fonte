package github.beerzer.dominio.DTO;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.collection.internal.PersistentSortedMap;

import java.time.LocalDate;

@Getter
@Setter
public class FuncionarioDTO {
    private Long id;
    private PessoaDTO pessoaDTO;
    private Long matricula;
}
