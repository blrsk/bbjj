Router.configure({
    layout: 'layout'
});

Router.map( function() {
    
    this.route('layout', {
        template: 'layout',
        path: '/',
        renderTemplates: {
            'home': {to: 'home'},
            'header': {to: 'header'}
        }
    });

});