package github.beerzer.dominio;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Data
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "{campo.nome.obrigatorio}")
    @Column(nullable = false, name = "nome", length = 150)
    private String nome;

    @NotNull
    @Column(nullable = false, name = "email", length = 150)
    private String email;

    @Column(nullable = false, name = "senha", length = 8)
    private String senha;

    @CPF(message = "{campo.cpf.invalido}")
    @NotNull(message = "{campo.cpf.obrigatorio}")
    @Column(nullable = false, name = "cpf", length = 11)
    private String cpf;

    @Column(name = "data_Nascimento")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataNascimento;

    @Column(nullable = false, name = "tipo")
    private Long tipo;


}
