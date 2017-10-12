import DS from 'ember-data';

export default DS.Model.extend({

  //id: DS.attr('string'), assumed
  name: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
  address: DS.attr(),
  phone: DS.attr('string'),
  website: DS.attr('string'),
  company: DS.attr('string'),
  posts: DS.hasMany('posts')

});
