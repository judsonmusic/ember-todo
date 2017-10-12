import DS from 'ember-data';

export default DS.Model.extend({
    //id: DS.attr(), //ember data knows what to do here.
    //userId: DS.attr('number'),
    title:  DS.attr('string'),
    body: DS.attr('string'),
    user: DS.belongsTo('user')

});
