package Controller;

import DAO.ContatoDao;
import DAO.PessoaDao;
import Model.Contato;
import Model.Pessoa;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("contato")
public class ControllerContato {

    ContatoDao dao = new ContatoDao();
    PessoaDao daoPessoa = new PessoaDao();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("novoContato/{idPessoa}")
    public void insereContato(Contato contato, @PathParam("idPessoa") int idPessoa){
        contato.setPessoa(daoPessoa.buscaPessoa(idPessoa));
        dao.insereContato(contato);
    }

    @DELETE
    @Path("deletaContato/{id}")
    public void deletaContato(@PathParam("id") int id){
        dao.deletaContato(id);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}/")
    public Contato buscaContato(@PathParam("id") int id){
        return dao.buscaContato(id);
    }
}
