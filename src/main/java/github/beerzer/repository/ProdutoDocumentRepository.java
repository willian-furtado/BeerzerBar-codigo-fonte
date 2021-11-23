package github.beerzer.repository;

import github.beerzer.document.ProdutoDocument;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface ProdutoDocumentRepository extends ElasticsearchRepository<ProdutoDocument, String> {
}
