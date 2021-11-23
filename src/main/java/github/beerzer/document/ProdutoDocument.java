package github.beerzer.document;

import github.beerzer.helper.Indices;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;
import org.springframework.data.elasticsearch.annotations.Setting;

import javax.persistence.Id;

@Getter
@Setter
@Document(indexName = Indices.PRODUTO_INDEX)
@Setting(settingPath = "static/es-settings.json")
public class ProdutoDocument {

    @Id
    @Field(type = FieldType.Keyword)
    private String id;

    @Field(type = FieldType.Text)
    private String nome;

    @Field(type = FieldType.Text)
    private String descricao;

    @Field(type = FieldType.Text)
    private String quantidade;

    @Field(type = FieldType.Text)
    private String preco;

    @Field(type = FieldType.Text)
    private String categoria;
}
