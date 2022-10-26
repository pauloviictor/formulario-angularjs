package DAO;

import Model.Contato;
import Util.AliasToBeanNestedResultTransformer;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ContatoDao {

    EntityManagerFactory factory = Persistence.createEntityManagerFactory("PostgreSQL");

    DaoGenerico<Contato> daoGenerico = new DaoGenerico<>();

    public List<HashMap<String, Object>> listaCriteriaContatos(int id) {
        EntityManager em = factory.createEntityManager();
        Session session = em.unwrap(Session.class);
        Criteria criteria = session.createCriteria(Contato.class, "contato");
        criteria.add(Restrictions.eq("contato.pessoa.id", id));

        ProjectionList projectionList = Projections.projectionList();

        //Contato
        projectionList.add(Projections.property("contato.id").as("idContato"));
        projectionList.add(Projections.property("contato.nome").as("nomeContato"));
        projectionList.add(Projections.property("contato.email").as("emailContato"));
        projectionList.add(Projections.property("contato.telefone").as("telefoneContato"));

        criteria.setProjection(projectionList);
        criteria.setResultTransformer(CriteriaSpecification.ALIAS_TO_ENTITY_MAP);

        List<HashMap<String, Object>> listaContatos = criteria.list();
        em.close();

        return listaContatos;
    }

    public List<Contato> listarContatos(int id) {
        List<Contato> contatos = new ArrayList<>();

        for (HashMap<String, Object> map : listaCriteriaContatos(id)) {
            Contato contato = new Contato();
            contato.setId((Integer) map.get("idContato"));
            contato.setNome((String) map.get("nomeContato"));
            contato.setEmail((String) map.get("emailContato"));
            contato.setTelefone((String) map.get("telefoneContato"));
            contatos.add(contato);
        }

        return contatos;
    }

    public void insereContato(Contato contato){
        daoGenerico.create(contato);
    }

    public void deletaContato(int id){
        EntityManager em = factory.createEntityManager();
        em.getTransaction().begin();
        Contato contato = em.find(Contato.class, id);
        em.remove(contato);
        em.getTransaction().commit();
    }

    public Contato buscaContato(int id){
        EntityManager em = factory.createEntityManager();
        Session session = em.unwrap(Session.class);

        Criteria criteria = session.createCriteria(Contato.class, "contato");
        criteria.add(Restrictions.eq("id", id));

        ProjectionList projectionList = Projections.projectionList();

        //Contato
        projectionList.add(Projections.property("contato.id").as("id"));
        projectionList.add(Projections.property("contato.nome").as("nome"));
        projectionList.add(Projections.property("contato.email").as("email"));
        projectionList.add(Projections.property("contato.telefone").as("telefone"));

        criteria.setProjection(projectionList);
        criteria.setResultTransformer(new AliasToBeanNestedResultTransformer(Contato.class));

        Contato contato = (Contato) criteria.uniqueResult();


        return contato;
    }

}
