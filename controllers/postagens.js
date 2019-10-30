const PostagemModel = require('../models/postagem');

class Postagens { 

  async get () { 
    const postagens = await PostagemModel.find({});
    return postagens;
  }

  async getPorID(id) {
  const postagem = await PostagemModel.find({_id: id});
  return postagem;
 }


  async create (postageDTO){
    await new PostagemModel(postageDTO).save();

  }

  async getPorId(id) {
    const postagem = await PostagemModel.find({_id: id});
    return postagem;
  }

  async update (id, postagemDT0) {
    await PostagemModel.updateOne({_id: id}, postagemDT0);
  }

  async delete (id, postagemDT0) {
    await PostagemModel.deleteOne({_id: id}, postagemDT0);
  }

}

module.exports = new Postagens();